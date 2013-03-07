define(["dojo/_base/declare", "dojo/i18n", "dojo/on", "dojo/_base/lang", "noc/Logger"],

    function (declare, i18n, on, lang, Logger) {

        var AbstractAccordion = declare("dashboard.abstract.AbstractAccordion", null, {

            "-chains-": {
                renderAccordion: "before"
            },

            renderAccordion: function(args) {
                console.log("in abstract render accordion. data = " + dojo.toJson(this.data));
                console.log("in abstract render accordion. param = " + dojo.toJson(this.param));

                for(var i=0;i<this.data.length; i++) {
                    try {
                        var a = this.getNewA(this.data[i].id);
                        AbstractAccordion.LINKARRAY.push(a);
                        on(a, "click", lang.hitch(this, "renderPageAttrib"));

                        if(this.data[i].type.toUpperCase() == "GRID") {
                            a.innerHTML = AbstractAccordion.IMAGE + this.data[i].name;
                        } else {
                            a.innerHTML = this.data[i].name;
                        }

                        this.appendToAccDiv(a, dojo.byId(this.param.name[0]));
                    } catch(e) {
                        console.log("exception = " + e);
                    }
                }
            },

            renderPageAttrib: function(event) {
                //console.log("event in renderPageAttrib = " + event.target+ " type = " + typeof(event.target));
                dashboard.STANDBY.show();
                var pageId = this.getIdFromUrl(event.target);
                this.setMarker(pageId);
                this.showPageConfig(pageId); // this is a upwards call to inherting class
            },

            getIdFromUrl: function(ss) {
                var splitArray = String(ss).split("/");
                return parseInt(splitArray[splitArray.length-1]);
            },

            setMarker: function(pageId) {
                for(var i=0;i<AbstractAccordion.LINKARRAY.length;i++) {
                    var hrefVal = this.getIdFromUrl(AbstractAccordion.LINKARRAY[i].href);
                    //console.log("href = " + hrefVal + " compare = " + pageId);
                    if(hrefVal == pageId) {
                        AbstractAccordion.LINKARRAY[i].style.color = "rgb(0, 51, 102)";
                    } else {
                        AbstractAccordion.LINKARRAY[i].style.color = "rgb(0, 136, 204)";
                    }
                }
            },

            getNewA:function (name) {
                var a = dojo.create("a");
                a.className = "document";
                a.href = name;
                a.onclick = function () {return false;};
                return a;
            },

            appendToAccDiv:function (a, aPane) {
                var linkDiv = dojo.create("div");
                linkDiv.className = "linkDiv";
                aPane.appendChild(linkDiv);
                linkDiv.appendChild(a);
            }
        });

        AbstractAccordion.LOG = Logger.addTimer(new Logger("dashboard.abstract.AbstractAccordion"));
        AbstractAccordion.IMAGE = "<img src=\".\/images\/Icon_ArrowRight_SW_16.gif\" border=\"0\" align=\"top\">";
        AbstractAccordion.LINKARRAY = [];

        return AbstractAccordion;
    });