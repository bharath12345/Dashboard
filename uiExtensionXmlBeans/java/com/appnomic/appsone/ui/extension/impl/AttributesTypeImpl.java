/*
 * XML Type:  attributesType
 * Namespace: http://www.extension.ui.appsone.appnomic.com
 * Java type: com.appnomic.appsone.ui.extension.AttributesType
 *
 * Automatically generated - do not modify.
 */
package com.appnomic.appsone.ui.extension.impl;
/**
 * An XML attributesType(@http://www.extension.ui.appsone.appnomic.com).
 *
 * This is a complex type.
 */
public class AttributesTypeImpl extends org.apache.xmlbeans.impl.values.XmlComplexContentImpl implements com.appnomic.appsone.ui.extension.AttributesType
{
    private static final long serialVersionUID = 1L;
    
    public AttributesTypeImpl(org.apache.xmlbeans.SchemaType sType)
    {
        super(sType);
    }
    
    private static final javax.xml.namespace.QName ATTRIBUTE$0 = 
        new javax.xml.namespace.QName("http://www.extension.ui.appsone.appnomic.com", "attribute");
    
    
    /**
     * Gets the "attribute" element
     */
    public com.appnomic.appsone.ui.extension.AttributeType getAttribute()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.AttributeType target = null;
            target = (com.appnomic.appsone.ui.extension.AttributeType)get_store().find_element_user(ATTRIBUTE$0, 0);
            if (target == null)
            {
                return null;
            }
            return target;
        }
    }
    
    /**
     * Sets the "attribute" element
     */
    public void setAttribute(com.appnomic.appsone.ui.extension.AttributeType attribute)
    {
        generatedSetterHelperImpl(attribute, ATTRIBUTE$0, 0, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_SINGLETON);
    }
    
    /**
     * Appends and returns a new empty "attribute" element
     */
    public com.appnomic.appsone.ui.extension.AttributeType addNewAttribute()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.AttributeType target = null;
            target = (com.appnomic.appsone.ui.extension.AttributeType)get_store().add_element_user(ATTRIBUTE$0);
            return target;
        }
    }
}
