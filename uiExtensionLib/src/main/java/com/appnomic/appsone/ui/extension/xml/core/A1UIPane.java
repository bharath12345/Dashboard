package com.appnomic.appsone.ui.extension.xml.core;

import java.util.List;

/**
 * User: bharadwaj
 * Date: 09/04/13
 * Time: 12:30 PM
 */

public class A1UIPane {

    private List<A1UIViewContainer> a1UIViewContainer;
    private List<A1UIViewLink> a1UIViewLink;

    public List<A1UIViewContainer> getA1UIViewContainer() {
        return a1UIViewContainer;
    }

    public void setA1UIViewContainer(List<A1UIViewContainer> a1UIViewContainer) {
        this.a1UIViewContainer = a1UIViewContainer;
    }

    public List<A1UIViewLink> getA1UIViewLink() {
        return a1UIViewLink;
    }

    public void setA1UIViewLink(List<A1UIViewLink> a1UIViewLink) {
        this.a1UIViewLink = a1UIViewLink;
    }
}
