package com.appnomic.appsone.ui.extension.processor;

/**
 * User: bharadwaj
 * Date: 09/04/13
 * Time: 2:27 PM
 */
public class ExtensionLoader {

    /*
        1) Look at the appsoneExtensions.xml from both locations (look into that XML for more info)

        2) The URL of the various extensions are available in appsoneExtensions.xml

        3) Use a HTTP client to query the uiExtension.xml and cache it locally

        4) Parse the XML to build various cache's for -
            4.1) Accordion Panes - These are visible at all times
            4.2) Links
            4.3) Forms, Attributes, Menu, Toolbar, Label, Analysis-Pane
            Note: No hot-deployment in first release planned. If a extension.xml changes on the fly,
                then the user has to restart the AppsOne Dashboard UI to see the changes

        5) When the user clicks on an particular link, connect to the data-source and
            send the data after validation. The steps -
            5.1) HTTP client receives json data
            5.2) parse the data to make sure that the format is per the definition
            5.3) Send the data to the UI
            5.4) Depending on the refresh-time, send the data to UI regularly
     */




}
