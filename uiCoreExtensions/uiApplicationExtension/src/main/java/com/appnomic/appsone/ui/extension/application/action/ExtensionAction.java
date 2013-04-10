package com.appnomic.appsone.ui.extension.application.action;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;

import java.io.File;
import java.io.InputStream;
import java.net.URISyntaxException;
import java.net.URL;

/**
 * User: bharadwaj
 * Date: 09/04/13
 * Time: 11:03 PM
 */

@ParentPackage("json-default")
public class ExtensionAction extends AbstractAction {

    String uiExtension;

    public String getUiExtension() {
        return uiExtension;
    }

    public void setUiExtension(String uiExtension) {
        this.uiExtension = uiExtension;
    }

    @Action(value="/uiExtension", results = {
            @Result(name="success", type="json", params = {
                    "excludeProperties",
                    "session,SUCCESS,ERROR",
                    "enableGZIP", "true",
                    "encoding", "UTF-8",
                    "noCache","true",
                    "excludeNullProperties","true"
            })})
    public String uiExtension() {

        /*
            read the XML from the resources location and emit it back for now
            ToDo: Is it a good idea to use the ApplicationExtension class object to expose
            ToDo:        the XML and not hard-coded schema
        */
        try {

            /*URL resourceUrl = Thread.currentThread().getContextClassLoader().getResource("/WEB-INF/classes/uiApplicationExtension.xml");
            File appsoneExtensions = new File(resourceUrl.toURI());
            uiExtension = FileUtils.readFileToString(appsoneExtensions);*/

            InputStream xmlStream = Thread.currentThread().getContextClassLoader().getResourceAsStream("/WEB-INF/classes/uiApplicationExtension.xml");
            uiExtension = IOUtils.toString(xmlStream, "UTF-8");

        } catch (Exception e) {
            e.printStackTrace();
        }

        return SUCCESS;
    }
}
