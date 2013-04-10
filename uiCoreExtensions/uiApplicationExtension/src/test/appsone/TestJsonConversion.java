package appsone;

import java.io.File;

import net.sf.json.xml.XMLSerializer;
import net.sf.json.JSON;

/**
 * User: bharadwaj
 * Date: 10/04/13
 * Time: 11:09 PM
 */
public class TestJsonConversion {

    public static void main(String[] args) {
        try {
            File uiExtensionXML = new File("../../main/resources/uiApplicationExtension.xml");
            XMLSerializer xmlSerializer = new XMLSerializer();
            JSON json = xmlSerializer.readFromFile(uiExtensionXML);
            System.out.println(json.toString());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
