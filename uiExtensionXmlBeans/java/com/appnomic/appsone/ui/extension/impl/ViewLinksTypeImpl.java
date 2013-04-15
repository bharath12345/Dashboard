/*
 * XML Type:  view-linksType
 * Namespace: http://www.extension.ui.appsone.appnomic.com
 * Java type: com.appnomic.appsone.ui.extension.ViewLinksType
 *
 * Automatically generated - do not modify.
 */
package com.appnomic.appsone.ui.extension.impl;
/**
 * An XML view-linksType(@http://www.extension.ui.appsone.appnomic.com).
 *
 * This is an atomic type that is a restriction of com.appnomic.appsone.ui.extension.ViewLinksType.
 */
public class ViewLinksTypeImpl extends org.apache.xmlbeans.impl.values.JavaStringHolderEx implements com.appnomic.appsone.ui.extension.ViewLinksType
{
    private static final long serialVersionUID = 1L;
    
    public ViewLinksTypeImpl(org.apache.xmlbeans.SchemaType sType)
    {
        super(sType, true);
    }
    
    protected ViewLinksTypeImpl(org.apache.xmlbeans.SchemaType sType, boolean b)
    {
        super(sType, b);
    }
    
    private static final javax.xml.namespace.QName REF$0 = 
        new javax.xml.namespace.QName("", "ref");
    private static final javax.xml.namespace.QName ATTRIBUTEREF$2 = 
        new javax.xml.namespace.QName("", "attribute-ref");
    
    
    /**
     * Gets the "ref" attribute
     */
    public java.lang.String getRef()
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.SimpleValue target = null;
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(REF$0);
            if (target == null)
            {
                return null;
            }
            return target.getStringValue();
        }
    }
    
    /**
     * Gets (as xml) the "ref" attribute
     */
    public org.apache.xmlbeans.XmlString xgetRef()
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.XmlString target = null;
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(REF$0);
            return target;
        }
    }
    
    /**
     * True if has "ref" attribute
     */
    public boolean isSetRef()
    {
        synchronized (monitor())
        {
            check_orphaned();
            return get_store().find_attribute_user(REF$0) != null;
        }
    }
    
    /**
     * Sets the "ref" attribute
     */
    public void setRef(java.lang.String ref)
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.SimpleValue target = null;
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(REF$0);
            if (target == null)
            {
                target = (org.apache.xmlbeans.SimpleValue)get_store().add_attribute_user(REF$0);
            }
            target.setStringValue(ref);
        }
    }
    
    /**
     * Sets (as xml) the "ref" attribute
     */
    public void xsetRef(org.apache.xmlbeans.XmlString ref)
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.XmlString target = null;
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(REF$0);
            if (target == null)
            {
                target = (org.apache.xmlbeans.XmlString)get_store().add_attribute_user(REF$0);
            }
            target.set(ref);
        }
    }
    
    /**
     * Unsets the "ref" attribute
     */
    public void unsetRef()
    {
        synchronized (monitor())
        {
            check_orphaned();
            get_store().remove_attribute(REF$0);
        }
    }
    
    /**
     * Gets the "attribute-ref" attribute
     */
    public java.lang.String getAttributeRef()
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.SimpleValue target = null;
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(ATTRIBUTEREF$2);
            if (target == null)
            {
                return null;
            }
            return target.getStringValue();
        }
    }
    
    /**
     * Gets (as xml) the "attribute-ref" attribute
     */
    public org.apache.xmlbeans.XmlString xgetAttributeRef()
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.XmlString target = null;
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(ATTRIBUTEREF$2);
            return target;
        }
    }
    
    /**
     * True if has "attribute-ref" attribute
     */
    public boolean isSetAttributeRef()
    {
        synchronized (monitor())
        {
            check_orphaned();
            return get_store().find_attribute_user(ATTRIBUTEREF$2) != null;
        }
    }
    
    /**
     * Sets the "attribute-ref" attribute
     */
    public void setAttributeRef(java.lang.String attributeRef)
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.SimpleValue target = null;
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(ATTRIBUTEREF$2);
            if (target == null)
            {
                target = (org.apache.xmlbeans.SimpleValue)get_store().add_attribute_user(ATTRIBUTEREF$2);
            }
            target.setStringValue(attributeRef);
        }
    }
    
    /**
     * Sets (as xml) the "attribute-ref" attribute
     */
    public void xsetAttributeRef(org.apache.xmlbeans.XmlString attributeRef)
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.XmlString target = null;
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(ATTRIBUTEREF$2);
            if (target == null)
            {
                target = (org.apache.xmlbeans.XmlString)get_store().add_attribute_user(ATTRIBUTEREF$2);
            }
            target.set(attributeRef);
        }
    }
    
    /**
     * Unsets the "attribute-ref" attribute
     */
    public void unsetAttributeRef()
    {
        synchronized (monitor())
        {
            check_orphaned();
            get_store().remove_attribute(ATTRIBUTEREF$2);
        }
    }
}
