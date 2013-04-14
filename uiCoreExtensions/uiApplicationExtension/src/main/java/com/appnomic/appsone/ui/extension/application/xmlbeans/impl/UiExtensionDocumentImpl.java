/*
 * An XML document type.
 * Localname: ui-extension
 * Namespace: 
 * Java type: com.appnomic.appsone.ui.extension.application.xmlbeans.UiExtensionDocument
 *
 * Automatically generated - do not modify.
 */
package com.appnomic.appsone.ui.extension.application.xmlbeans.impl;
/**
 * A document containing one ui-extension(@) element.
 *
 * This is a complex type.
 */
public class UiExtensionDocumentImpl extends org.apache.xmlbeans.impl.values.XmlComplexContentImpl implements com.appnomic.appsone.ui.extension.application.xmlbeans.UiExtensionDocument
{
    private static final long serialVersionUID = 1L;
    
    public UiExtensionDocumentImpl(org.apache.xmlbeans.SchemaType sType)
    {
        super(sType);
    }
    
    private static final javax.xml.namespace.QName UIEXTENSION$0 = 
        new javax.xml.namespace.QName("", "ui-extension");
    
    
    /**
     * Gets the "ui-extension" element
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.UiExtensionType getUiExtension()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.application.xmlbeans.UiExtensionType target = null;
            target = (com.appnomic.appsone.ui.extension.application.xmlbeans.UiExtensionType)get_store().find_element_user(UIEXTENSION$0, 0);
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
    public void setUiExtension(com.appnomic.appsone.ui.extension.application.xmlbeans.UiExtensionType uiExtension)
    {
        generatedSetterHelperImpl(uiExtension, UIEXTENSION$0, 0, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_SINGLETON);
    }
    
    /**
     * Appends and returns a new empty "ui-extension" element
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.UiExtensionType addNewUiExtension()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.application.xmlbeans.UiExtensionType target = null;
            target = (com.appnomic.appsone.ui.extension.application.xmlbeans.UiExtensionType)get_store().add_element_user(UIEXTENSION$0);
            return target;
        }
    }
}
