package com.appnomic.appsone.ui.extension.analytics.action;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.core.io.Resource;

import java.io.File;
import java.io.InputStream;
import java.net.URISyntaxException;
import java.net.URL;

import net.sf.json.xml.*;
import net.sf.json.*;

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

            ApplicationContext ctx = new ClassPathXmlApplicationContext();
            Resource uiExtnResource = ctx.getResource("classpath:uiApplicationExtension.xml");
            InputStream xmlStream = uiExtnResource.getInputStream();
            uiExtension = IOUtils.toString(xmlStream, "UTF-8");
            xmlStream.close();

            uiExtension = uiExtension.replaceAll("\t", "");
            uiExtension = uiExtension.replaceAll("\n", "");

            XMLSerializer xmlSerializer = new XMLSerializer();
            JSON json = xmlSerializer.read(uiExtension);



            uiExtension = json.toString(1);

        } catch (Exception e) {
            e.printStackTrace();
        }

        return SUCCESS;
    }
}
