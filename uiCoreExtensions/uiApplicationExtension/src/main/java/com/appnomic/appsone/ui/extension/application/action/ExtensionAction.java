package com.appnomic.appsone.ui.extension.application.action;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Result;

/**
 * User: bharadwaj
 * Date: 09/04/13
 * Time: 11:03 PM
 */
public class ExtensionAction extends AbstractAction {

    @Action(value="/ApplicationAlertsForm.action", results = {
            @Result(name="success", type="json", params = {
                    "excludeProperties",
                    "session,SUCCESS,ERROR",
                    "enableGZIP", "true",
                    "encoding", "UTF-8",
                    "noCache","true",
                    "excludeNullProperties","true"
            })})
    public String applicationAlertAction() {

        /*
            read the XML from the resources location and emit it back for now
            ToDo: Use the ApplicationExtension class object to expose the XML and not hard-coded schema
        */
        return SUCCESS;
    }
}
