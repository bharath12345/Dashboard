<%@page pageEncoding="UTF-8"%>
<%@page contentType="text/html;charset=UTF-8"%>
<html>
    <head>
        <title>Error</title>
    </head>
    <body bgcolor="white">
        Invalid username and/or password, please try <a href='<%= response.encodeURL("index.jsp") %>'>again</a>.
        <%session.invalidate();%>
    </body>
</html>
