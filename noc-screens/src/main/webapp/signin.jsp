<%@page pageEncoding="UTF-8"%>
<%@page contentType="text/html;charset=UTF-8"%>
<%@ taglib uri='http://java.sun.com/jstl/fmt' prefix='fmt'%>

<html>
<head>
    <meta name="description" content="Appnomic NOC Screens Sign-In Page"/>
    <meta http-equiv="Pragma" content="no-cache"/>
    <title>Appnomic Appsone NOC Screens</title>

	<script type="text/javascript">
        var relativePath = "./";

        document.write('<link rel="stylesheet" type="text/css" href="'+relativePath+'/css/traffic.merged.compressed.css">');

        function expandCollapse() {
            var elem = document.getElementById(expandCollapse.arguments[0]);
            elem.style.visibility = (expandCollapse.arguments[1] == 'on') ? 'globalvisible' : 'globalhidden';
        }

        function setFocusToUserName() {
            var elem = document.getElementById("j_username");
            elem.focus();
        }

        function signInOnLoad() {
			loadImages();

			var Constants_browser = navigator.appName;
			var lang;
			if (Constants_browser == "Netscape") {
				lang = navigator.language;
			} else {
				lang = navigator.browserLanguage;
			}

			var usernameSpan = document.getElementById("usernameSpan");
			var passwordSpan = document.getElementById("passwordSpan");

			var signInSpan = document.getElementById("signInSpan");
			var clearSpan = document.getElementById("clearSpan");
			var signingInSpan = document.getElementById("signingInSpan");

			var langOnly = lang.split("-");
				usernameSpan.innerHTML = "User Name";
				passwordSpan.innerHTML = "Password";
				signInSpan.innerHTML = "Sign In";
				clearSpan.innerHTML = "Clear";
				signingInSpan.innerHTML = "Signing In ...";

        	    setFocusToUserName();
        }

		function loadImages() {
			var login_logo = document.createElement("globalimg");
			login_logo.src=relativePath+"images/login_logo.gif";
			login_logo.setAttribute("alt","login");
			login_logo.setAttribute("border","0");
			document.getElementById("login_logo").appendChild(login_logo);

			var login_appname = document.createElement("globalimg");
			login_appname.src=relativePath+"images/login_traffic.png";
			login_appname.setAttribute("alt","NNM iSPI Performance for Traffic");
			login_appname.setAttribute("border","0");
			document.getElementById("login_appname").appendChild(login_appname);

			var login_top_right = document.createElement("globalimg");
			login_top_right.src=relativePath+"images/dot_trans.gif";
			login_top_right.setAttribute("border","0");
			login_top_right.setAttribute("height","20");
			login_top_right.setAttribute("width","20");
			document.getElementById("login_top_right").appendChild(login_top_right);

			var sending = document.createElement("globalimg");
			sending.src=relativePath+"images/progress_bar_small.gif";
			sending.setAttribute("alt","Progress Bar");
			document.getElementById("sending").appendChild(sending);

			var login_bot_left = document.createElement("globalimg");
			login_bot_left.src=relativePath+"images/JavaLogo.gif";
			login_bot_left.setAttribute("alt","Image of Java Logo");
			document.getElementById("login_bot_left").appendChild(login_bot_left);
		}
	</script>
</head>
<body class="login_body" onload="signInOnLoad();">
<table class="full_HV" border="0" cellspacing="0" cellpadding="0">
    <tbody>
    <!DOCTYPE html    PUBLIC "-//W3C//DTD	HTML 4.01 Transitional//EN"    "http://www.w3.org/TR/html4/loose.dtd">
    <meta http-equiv="Content-Type" content="text/html;	charset=UTF-8">
    <tr>
        <td class="login_top_left" colspan="2">
            <table class="full_HV" border="0" cellspacing="0" cellpadding="0">
                <tr>
                    <td class="login_logo" id="login_logo">
                    </td>
                    <td>
                    </td>
                </tr>
                <tr>
                    <td>
                    </td>
                    <td class="login_appname" id="login_appname">
                    </td>
                </tr>
            </table>
        </td>
        <td class="login_top_right" id="login_top_right">
        </td>
    </tr>
    <tr>
        <td class="login_mid_left">
        </td>
        <td class="login_mid_center">
            <table class="full_H" border="0" cellspacing="0" cellpadding="0">
                <tr>
                    <td class="login_fields_label">
                        <span id="usernameSpan" class="textlarge"></span>
                    </td>
                </tr>
                <tr>
                    <td class="login_fields_label">
                        <span id="passwordSpan" class="textlarge"><span class="textbig"></span></span>
                    </td>
                </tr>
            </table>
        </td>
        <td class="login_mid_right">
            <form action="j_security_check" method="post" id="contactform"
                  onsubmit="expandCollapse('sending','on');return true;">
                <table class="full_H" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                        <td class="login_fields">
                            <input id="j_username" class="login_name" type="text" name="j_username" size="15"/>
                        </td>
                    </tr>
                    <tr>
                        <td class="login_fields">
                            <input id="j_password" class="login_password" type="password" name="j_password" size="15"/>
                        </td>
                    </tr>
                    <tr>
                        <td align="left">
                        </td>
                    </tr>
                    <tr>
                        <td class="login_button_field">
                            <button name="btnSignIn:btnCommandButton" id="btnSignIn_btnCommandButton" type="submit" class="login_button">
                                <span id="signInSpan"></span>
                            </button>
                            <button name="btnClear:btnCommandButton" id="btnClear_btnCommandButton" type="reset" class="login_button">
                                <span id="clearSpan"></span>
                            </button>
                            <div id="sending" style="visibility:hidden;">
                                <br/>
                                <br/>
                                <span id="signingInSpan"></span>
                                <br/>
                            </div>
                        </td>
                    </tr>
                </table>
            </form>
        </td>
    </tr>
    <tr>
        <td class="login_bot_left" id="login_bot_left">
        </td>
        <td>
        </td>
        <td class="login_bot_right">
            &copy; Copyright Appnomic Systems.
        </td>
    </tr>
    </tbody>
</table>
</body>
</html>
