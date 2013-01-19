define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!noc/nls/noc", "noc/Utility", "noc/Constants"],

    function (declare, i18n, i18nString, Utility, CONSTANTS) {

        var Login = declare("Login", null, {});

        Login.expandCollapse = function() {
            var elem = document.getElementById(Login.expandCollapse.arguments[0]);
            elem.style.visibility = (Login.expandCollapse.arguments[1] == 'on') ? 'globalvisible' : 'globalhidden';
        };

        Login.setFocusToUserName = function() {
            var elem = document.getElementById("username");
            elem.focus();
        };

        Login.signInOnLoad = function() {
            Login.loadImages();

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

            Login.setFocusToUserName();
        };

        Login.loadImages = function() {
            var login_logo = document.createElement("globalimg");
            login_logo.src="images/login_logo.gif";
            login_logo.setAttribute("alt","login");
            login_logo.setAttribute("border","0");
            document.getElementById("login_logo").appendChild(login_logo);

            var login_appname = document.createElement("globalimg");
            login_appname.src="images/login_traffic.png";
            login_appname.setAttribute("alt","Appnomic AppsOne");
            login_appname.setAttribute("border","0");
            document.getElementById("login_appname").appendChild(login_appname);

            var login_top_right = document.createElement("globalimg");
            login_top_right.src="images/dot_trans.gif";
            login_top_right.setAttribute("border","0");
            login_top_right.setAttribute("height","20");
            login_top_right.setAttribute("width","20");
            document.getElementById("login_top_right").appendChild(login_top_right);

            var sending = document.createElement("globalimg");
            sending.src="images/progress_bar_small.gif";
            sending.setAttribute("alt","Progress Bar");
            document.getElementById("sending").appendChild(sending);

            var login_bot_left = document.createElement("globalimg");
            login_bot_left.src="images/JavaLogo.gif";
            login_bot_left.setAttribute("alt","Image of Java Logo");
            document.getElementById("login_bot_left").appendChild(login_bot_left);
        };

        Login.clear = function() {
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
        };

        Login.login = function() {
            Login.expandCollapse('sending','on');
            var uname = document.getElementById("username").value;
            var pword = document.getElementById("password").value;
            var userData = {
                "username":uname,
                "password":pword
            };
            Utility.xhrPostCentral(CONSTANTS.ACTION.LOGIN, dojo.toJson(userData));
        };

        return Login;
    });