/*
 * XML Type:  labelsType
 * Namespace: http://www.extension.ui.appsone.appnomic.com
 * Java type: com.appnomic.appsone.ui.extension.LabelsType
 *
 * Automatically generated - do not modify.
 */
package com.appnomic.appsone.ui.extension.impl;
/**
 * An XML labelsType(@http://www.extension.ui.appsone.appnomic.com).
 *
 * This is a complex type.
 */
public class LabelsTypeImpl extends org.apache.xmlbeans.impl.values.XmlComplexContentImpl implements com.appnomic.appsone.ui.extension.LabelsType
{
    private static final long serialVersionUID = 1L;
    
    public LabelsTypeImpl(org.apache.xmlbeans.SchemaType sType)
    {
        super(sType);
    }
    
    private static final javax.xml.namespace.QName LABEL$0 = 
        new javax.xml.namespace.QName("http://www.extension.ui.appsone.appnomic.com", "label");
    
    
    /**
     * Gets the "label" element
     */
    public com.appnomic.appsone.ui.extension.LabelType getLabel()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.LabelType target = null;
            target = (com.appnomic.appsone.ui.extension.LabelType)get_store().find_element_user(LABEL$0, 0);
            if (target == null)
            {
                return null;
            }
            return target;
        }
    }
    
    /**
     * Sets the "label" element
     */
    public void setLabel(com.appnomic.appsone.ui.extension.LabelType label)
    {
        generatedSetterHelperImpl(label, LABEL$0, 0, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_SINGLETON);
    }
    
    /**
     * Appends and returns a new empty "label" element
     */
    public com.appnomic.appsone.ui.extension.LabelType addNewLabel()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.LabelType target = null;
            target = (com.appnomic.appsone.ui.extension.LabelType)get_store().add_element_user(LABEL$0);
            return target;
        }
    }
}
