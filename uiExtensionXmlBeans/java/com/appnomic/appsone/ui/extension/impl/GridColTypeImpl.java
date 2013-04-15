/*
 * XML Type:  grid-colType
 * Namespace: http://www.extension.ui.appsone.appnomic.com
 * Java type: com.appnomic.appsone.ui.extension.GridColType
 *
 * Automatically generated - do not modify.
 */
package com.appnomic.appsone.ui.extension.impl;
/**
 * An XML grid-colType(@http://www.extension.ui.appsone.appnomic.com).
 *
 * This is an atomic type that is a restriction of com.appnomic.appsone.ui.extension.GridColType.
 */
public class GridColTypeImpl extends org.apache.xmlbeans.impl.values.JavaStringHolderEx implements com.appnomic.appsone.ui.extension.GridColType
{
    private static final long serialVersionUID = 1L;
    
    public GridColTypeImpl(org.apache.xmlbeans.SchemaType sType)
    {
        super(sType, true);
    }
    
    protected GridColTypeImpl(org.apache.xmlbeans.SchemaType sType, boolean b)
    {
        super(sType, b);
    }
    
    private static final javax.xml.namespace.QName ATTRIBUTE$0 = 
        new javax.xml.namespace.QName("", "attribute");
    private static final javax.xml.namespace.QName DATATYPE$2 = 
        new javax.xml.namespace.QName("", "data-type");
    
    
    /**
     * Gets the "attribute" attribute
     */
    public java.lang.String getAttribute()
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.SimpleValue target = null;
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(ATTRIBUTE$0);
            if (target == null)
            {
                return null;
            }
            return target.getStringValue();
        }
    }
    
    /**
     * Gets (as xml) the "attribute" attribute
     */
    public org.apache.xmlbeans.XmlString xgetAttribute()
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.XmlString target = null;
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(ATTRIBUTE$0);
            return target;
        }
    }
    
    /**
     * True if has "attribute" attribute
     */
    public boolean isSetAttribute()
    {
        synchronized (monitor())
        {
            check_orphaned();
            return get_store().find_attribute_user(ATTRIBUTE$0) != null;
        }
    }
    
    /**
     * Sets the "attribute" attribute
     */
    public void setAttribute(java.lang.String attribute)
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.SimpleValue target = null;
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(ATTRIBUTE$0);
            if (target == null)
            {
                target = (org.apache.xmlbeans.SimpleValue)get_store().add_attribute_user(ATTRIBUTE$0);
            }
            target.setStringValue(attribute);
        }
    }
    
    /**
     * Sets (as xml) the "attribute" attribute
     */
    public void xsetAttribute(org.apache.xmlbeans.XmlString attribute)
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.XmlString target = null;
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(ATTRIBUTE$0);
            if (target == null)
            {
                target = (org.apache.xmlbeans.XmlString)get_store().add_attribute_user(ATTRIBUTE$0);
            }
            target.set(attribute);
        }
    }
    
    /**
     * Unsets the "attribute" attribute
     */
    public void unsetAttribute()
    {
        synchronized (monitor())
        {
            check_orphaned();
            get_store().remove_attribute(ATTRIBUTE$0);
        }
    }
    
    /**
     * Gets the "data-type" attribute
     */
    public java.lang.String getDataType()
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.SimpleValue target = null;
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(DATATYPE$2);
            if (target == null)
            {
                return null;
            }
            return target.getStringValue();
        }
    }
    
    /**
     * Gets (as xml) the "data-type" attribute
     */
    public org.apache.xmlbeans.XmlString xgetDataType()
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.XmlString target = null;
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(DATATYPE$2);
            return target;
        }
    }
    
    /**
     * True if has "data-type" attribute
     */
    public boolean isSetDataType()
    {
        synchronized (monitor())
        {
            check_orphaned();
            return get_store().find_attribute_user(DATATYPE$2) != null;
        }
    }
    
    /**
     * Sets the "data-type" attribute
     */
    public void setDataType(java.lang.String dataType)
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.SimpleValue target = null;
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(DATATYPE$2);
            if (target == null)
            {
                target = (org.apache.xmlbeans.SimpleValue)get_store().add_attribute_user(DATATYPE$2);
            }
            target.setStringValue(dataType);
        }
    }
    
    /**
     * Sets (as xml) the "data-type" attribute
     */
    public void xsetDataType(org.apache.xmlbeans.XmlString dataType)
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.XmlString target = null;
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(DATATYPE$2);
            if (target == null)
            {
                target = (org.apache.xmlbeans.XmlString)get_store().add_attribute_user(DATATYPE$2);
            }
            target.set(dataType);
        }
    }
    
    /**
     * Unsets the "data-type" attribute
     */
    public void unsetDataType()
    {
        synchronized (monitor())
        {
            check_orphaned();
            get_store().remove_attribute(DATATYPE$2);
        }
    }
}
