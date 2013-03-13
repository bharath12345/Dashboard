define(["dojo/_base/declare", "dojo/i18n", "dojo/on", "dojo/_base/lang", "dashboard/logger/Logger", "dashboard/helper/Scheduler"],

    function (declare, i18n, on, lang, Logger, Scheduler) {

        var AbstractAccordion = declare("dashboard.abstract.AbstractAccordion", null, {

            "-chains-": {
                renderAccordion: "before"
            },

            renderAccordion: function(args) {
                if(this.data == null || this.data == undefined || this.param == null || this.param == undefined) {
                    console.log("blank accordion");
                    return;
                }

                console.log("in abstract render accordion. data = " + dojo.toJson(this.data));
                console.log("in abstract render accordion. param = " + dojo.toJson(this.param));

                for(var i=0;i<this.data.length; i++) {
                    try {
                        var a = this.getNewA(this.data[i].id, this.data[i].name, this.data[i].type);

                        var linkMap = this.getLinkMap(); // this is a call to the superclass
                        linkMap[this.data[i].id] = a;
                        on(a, "click", lang.hitch(this, "renderView"));

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

            renderView: function(event) {
                this.createView(event.target.id, event.target.name, event.target.type, false);
            },

            createView: function(id, name, type, newWindow) {
                // show the loading spinner
                dashboard.STANDBY.show();

                // cancel all timers on previous page
                Scheduler.cancelAllTimers();

                // destroy everything in the inner most central pane
                dashboard.CpCenterInner.destroyDescendants(false);

                // set a dark marker on the accordion
                this.setMarker(id);

                // now, show the page - NOTE: this is a upwards call to inherting class
                this.showView(id, name, type, newWindow);
            },

            setMarker: function(pageId) {
                var linkMap = this.getLinkMap(); // this is a call to the superclass
                for(var key in linkMap) {
                    linkMap[key].style.color = "rgb(0, 136, 204)";
                }
                linkMap[pageId].style.color = "rgb(0, 51, 102)";
            },

            getNewA:function (id, name, type) {
                var a = dojo.create("a");
                a.className = "document";
                a.href = name;
                a.id = id;
                a.name = name;
                a.type = type;
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

        return AbstractAccordion;
    });