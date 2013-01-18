/*
 * Copyright (c) 2006 Hewlett-Packard Development Company, L.P.
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Hewlett-Packard. ("Confidential Information").  You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Hewlett-Packard.
 *
 * Hewlett-Packard makes no representations or warranties about the
 * suitability of the software, either express or implied, including
 * but not limited to the implied warranties of merchantability,
 * fitness for a particular purpose, or non-infringement. Hewlett-Packard
 * shall not be liable for any damages suffered by licensee as a result
 * of using, modifying or distributing this software or its derivatives.
 */
package com.appnomic.noc.filter;

import java.io.IOException;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

/**
 * This class is referenced by web.xml as a filter, so it must be implemented
 * but no Java code references it
 */
public final class HttpContextFilter implements Filter {

private static final Logger LOG = Logger.getLogger(HttpContextFilter.class.getSimpleName());

    private ServletContext servletContext;
    private long startTime;

    /**
     * Required to implement the Filter interface
     */
    public void init(final FilterConfig config) {
        startTime = System.currentTimeMillis();
        servletContext = config.getServletContext();

        // This is a good overall startup message, so let's always display it
        LOG.info("Context filter initialized with:" +
                "\n  Start Time (msecs): " + startTime +
                "\n  Running on:"  + servletContext.getServerInfo() +
                "\n  Root context mapped to: " + servletContext.getRealPath("/"));
    }

    /**
     * Required to implement the Filter interface
     * Good reference:
     * http://www.onjava.com/pub/a/onjava/2004/03/03/filters.html
     * or the HTTP/1.1 rfc2616:
     * http://www.w3.org/Protocols/rfc2616/rfc2616.html
     */
    public void doFilter(final ServletRequest req, final ServletResponse res,
            final FilterChain chain) throws IOException, ServletException {
        try {
            if (req instanceof HttpServletRequest) {
                final HttpServletRequest httpServletRequest = (HttpServletRequest)req;
                checkForXssAttack(httpServletRequest);
            }            
            chain.doFilter(req, res);
        } finally {
        }
    }

    /**
     * Required to implement the Filter interface
     */
    public void destroy() {
        LOG.fine("HttpContextFilter.destroy()");
        servletContext = null;
    }


    /**
     * Thwart cross-site scripting (XSS) by detecting/preventing script injection
     * Fixes issue found via WebInspect (from 8.1x hotfix for Patch 7).
     * We don't do a redirect so that there is no possibility of us having an endless loop.
     * Instead we just throw an Exception and stop the request.
     *
     * A simple test for the issue is to submit the following URL:
     *
     *   http://<hostname>/nnm/launch?cmd=%3CScRiPt%3Ealert(%27SECURITY%20ISSUE%20DETECTED%27)%3C/sCrIpT%3E
     * such as:
     *   http://192.168.177.150/nnm/launch?cmd=<script>alert%28%27SECURITY%20ISSUE%20DETECTED%27%29</ScRiPt>
     * or
     *   http://192.168.177.150/nnm/launch?cmd=<script>alert('SECURITY ISSUE DETECTED')</ScRiPt>
     * and
     *   http://192.168.177.150/nnm/launch?cmd=<script >alert('SECURITY ISSUE DETECTED')</ScRiPt>
     *
     * You should NOT see a javaScript popup alert dialog, instead you should get an exception
     *
     * The pattern matching was found at
     *   http://www.rgagnon.com/javadetails/java-0627.html
     *
     * Other solutions which attempt to let the data pass through:
     *   http://greatwebguy.com/programming/java/simple-cross-site-scripting-xss-servlet-filter/
     */
    private static void checkForXssAttack(final HttpServletRequest httpServletRequest) throws ServletException {
        assertNoXss("RequestURI", httpServletRequest.getRequestURI(), httpServletRequest.getLocale());
        assertNoXss("QueryString", httpServletRequest.getQueryString(), httpServletRequest.getLocale());
        Map<String, String[]> paramMap= httpServletRequest.getParameterMap();
        Set<String> allKeys = paramMap.keySet();
        for(String key : allKeys) {
        	String [] paramVals = paramMap.get(key);
        	for(String paramVal : paramVals) {
        		assertNoXss("Parameter", paramVal , httpServletRequest.getLocale());
        	}
        }
    }
    
    /**
     * @return true if any XSS patterns are detected
     * The pattern matching was found at
     *   http://www.rgagnon.com/javadetails/java-0627.html
     * JRC Note:
     *    I found his patterns incorrect with extra '?' in them. I also decided not to check
     *    for closing tags, which could be added if we incorrectly hit this code
     *
     * Regular expression patterns:
     *    (?i) make it case insensitive
     *    case 1 : <script> strings are detected
     *    case 2 : JavaScript: strings are detected
     *    case 3 : on* attributes like onLoad or onClick are detected
     *
     * JRC: I can't seem to find how a '<' or '>' character would make it here, seems the browsers
     * all change to %3c and %3e, but lets test for both just in aces
     */
    private static void assertNoXss(final String flavor, final String s, final Locale locale) throws ServletException {
        if (s == null || s.isEmpty()) {
            return; // Doesn't match
        }
        if (LOG.isLoggable(Level.FINEST)) {
            LOG.finest("checking " + flavor + " for XSS:" + s);
        }
        
        //System.out.println("String being verified = " + s);
        
        final String lc = s.toLowerCase();
        if (lc.matches(".*<script.*>.*") ||                     // case 1
                lc.matches(".*%3cscript.*%3e.*") ||
                lc.matches(".*<javascript:.*>.*") ||            // case 2
                lc.matches(".*%3c.*javascript:.*%3e.*") ||
                lc.matches(".*<.*\\s+on.*>.*") ||               // case 3
                lc.matches(".*%3c.*\\s+on.*%3e.*")) {
            // @cookbook message when XSS attack is detected
            // {0}: type of request ("RequestURI" or "QueryString"), {1}: offending pattern
            final String msg = "Detected JavaScript tag in {0}: \"{1}\"";
            LOG.warning(msg);
            throw new ServletException(msg);
        }
        
        final String lcl = lc.toLowerCase();
        if((lcl.indexOf("alert")!=-1)||
        		(lcl.indexOf("script")!=-1) ||
        		(lcl.indexOf("window.location")!=-1) ||
        		(lcl.indexOf("onerror")!=-1)){
            final String msg = "Detected JavaScript tag in {0}: \"{1}\"";
                LOG.warning(msg);
                throw new ServletException(msg);        	
        }

    }


}
