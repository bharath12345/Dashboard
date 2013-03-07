<%@page pageEncoding="UTF-8"%>
<%@page contentType="text/html;charset=UTF-8"%>

<html>
<head>
    <meta name="description" content="Appnomic NOC Screens Sign-In Page"/>
    <meta http-equiv="Pragma" content="no-cache"/>
    <title>Appnomic Appsone NOC Screens</title>

	<link rel="stylesheet" type="text/css" href="./css/login.compressed.css"/>
    <script type="text/javascript" data-dojo-config="async: 1, tlmSiblingOfDojo: 0, isDebug: 1" src="./js/dojo/dojo.js"></script>
</head>
<body class="login_body">
    <script src="./js/login/runLogin.js"></script>

    <table class="full_HV" border="0" cellspacing="0" cellpadding="0">
    <tbody>
    <!DOCTYPE html    PUBLIC "-//W3C//DTD	HTML 4.01 Transitional//EN"    "http://www.w3.org/TR/html4/loose.dtd">
    <meta http-equiv="Content-Type" content="text/html;	charset=UTF-8">
    <tr>
        <td class="login_top_left" colspan="2">
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
                  onsubmit="Login.expandCollapse('sending','on');return true;">
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
