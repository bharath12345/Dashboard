/*
 * An XML document type.
 * Localname: ui-extension
 * Namespace: http://www.extension.ui.appsone.appnomic.com
 * Java type: com.appnomic.appsone.ui.extension.UiExtensionDocument
 *
 * Automatically generated - do not modify.
 */
package com.appnomic.appsone.ui.extension.impl;
/**
 * A document containing one ui-extension(@http://www.extension.ui.appsone.appnomic.com) element.
 *
 * This is a complex type.
 */
public class UiExtensionDocumentImpl extends org.apache.xmlbeans.impl.values.XmlComplexContentImpl implements com.appnomic.appsone.ui.extension.UiExtensionDocument
{
    private static final long serialVersionUID = 1L;
    
    public UiExtensionDocumentImpl(org.apache.xmlbeans.SchemaType sType)
    {
        super(sType);
    }
    
    private static final javax.xml.namespace.QName UIEXTENSION$0 = 
        new javax.xml.namespace.QName("http://www.extension.ui.appsone.appnomic.com", "ui-extension");
    
    
    /**
     * Gets the "ui-extension" element
     */
    public com.appnomic.appsone.ui.extension.UiExtensionType getUiExtension()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.UiExtensionType target = null;
            target = (com.appnomic.appsone.ui.extension.UiExtensionType)get_store().find_element_user(UIEXTENSION$0, 0);
            if (target == null)
            {
                return null;
            }
            return target;
        }
    }
    
    /**
     * Sets the "ui-extension" element
     */
    public void setUiExtension(com.appnomic.appsone.ui.extension.UiExtensionType uiExtension)
    {
        generatedSetterHelperImpl(uiExtension, UIEXTENSION$0, 0, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_SINGLETON);
    }
    
    /**
     * Appends and returns a new empty "ui-extension" element
     */
    public com.appnomic.appsone.ui.extension.UiExtensionType addNewUiExtension()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.UiExtensionType target = null;
            target = (com.appnomic.appsone.ui.extension.UiExtensionType)get_store().add_element_user(UIEXTENSION$0);
            return target;
        }
    }
}
