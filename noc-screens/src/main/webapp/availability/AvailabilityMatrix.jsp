<%@page pageEncoding="UTF-8" %>
<%@page contentType="text/html;charset=UTF-8" %>
<%@page import="java.util.*" %>
<%@page import="java.util.logging.*" %>
<%@page import="com.appnomic.noc.*"%>

<%
	String id = new String(request.getParameter(NocScreenConstants.ID));
	int type = new Integer(request.getParameter(NocScreenConstants.TYPE));

	int width = new Integer(request.getParameter(NocScreenConstants.WIDTH));
	int height = new Integer(request.getParameter(NocScreenConstants.HEIGHT));

	int xpos = new Integer(request.getParameter(NocScreenConstants.XPOS));
	int ypos = new Integer(request.getParameter(NocScreenConstants.YPOS));

	int objectSize = new Integer(request.getParameter(NocScreenConstants.OBJECTSIZE));
	int gridType = new Integer(request.getParameter(NocScreenConstants.GRIDTYPE));
%>
{
    id:'<%=id%>',
    type:'<%=type%>',
    width:'<%=width%>',
    height:'<%=height%>',
    xpos:'<%=xpos%>',
    ypos:'<%=ypos%>',
    objectSize: '<%=objectSize%>',
    gridType: '<%=gridType%>'
}
