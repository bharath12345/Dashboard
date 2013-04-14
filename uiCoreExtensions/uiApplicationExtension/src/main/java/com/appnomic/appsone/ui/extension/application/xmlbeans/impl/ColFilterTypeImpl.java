/*
 * XML Type:  col-filterType
 * Namespace: 
 * Java type: com.appnomic.appsone.ui.extension.application.xmlbeans.ColFilterType
 *
 * Automatically generated - do not modify.
 */
package com.appnomic.appsone.ui.extension.application.xmlbeans.impl;
/**
 * An XML col-filterType(@).
 *
 * This is an atomic type that is a restriction of xmlbeans.ColFilterType.
 */
public class ColFilterTypeImpl extends org.apache.xmlbeans.impl.values.JavaStringHolderEx implements com.appnomic.appsone.ui.extension.application.xmlbeans.ColFilterType
{
    private static final long serialVersionUID = 1L;
    
    public ColFilterTypeImpl(org.apache.xmlbeans.SchemaType sType)
    {
        super(sType, true);
    }
    
    protected ColFilterTypeImpl(org.apache.xmlbeans.SchemaType sType, boolean b)
    {
        super(sType, b);
    }
    
    private static final javax.xml.namespace.QName REF$0 = 
        new javax.xml.namespace.QName("", "ref");
    private static final javax.xml.namespace.QName CUSTOMNAME$2 = 
        new javax.xml.namespace.QName("", "custom-name");
    
    
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
     * Gets the "custom-name" attribute
     */
    public java.lang.String getCustomName()
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.SimpleValue target = null;
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(CUSTOMNAME$2);
            if (target == null)
            {
                return null;
            }
            return target.getStringValue();
        }
    }
    
    /**
     * Gets (as xml) the "custom-name" attribute
     */
    public org.apache.xmlbeans.XmlString xgetCustomName()
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.XmlString target = null;
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(CUSTOMNAME$2);
            return target;
        }
    }
    
    /**
     * True if has "custom-name" attribute
     */
    public boolean isSetCustomName()
    {
        synchronized (monitor())
        {
            check_orphaned();
            return get_store().find_attribute_user(CUSTOMNAME$2) != null;
        }
    }
    
    /**
     * Sets the "custom-name" attribute
     */
    public void setCustomName(java.lang.String customName)
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.SimpleValue target = null;
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(CUSTOMNAME$2);
            if (target == null)
            {
                target = (org.apache.xmlbeans.SimpleValue)get_store().add_attribute_user(CUSTOMNAME$2);
            }
            target.setStringValue(customName);
        }
    }
    
    /**
     * Sets (as xml) the "custom-name" attribute
     */
    public void xsetCustomName(org.apache.xmlbeans.XmlString customName)
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.XmlString target = null;
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(CUSTOMNAME$2);
            if (target == null)
            {
                target = (org.apache.xmlbeans.XmlString)get_store().add_attribute_user(CUSTOMNAME$2);
            }
            target.set(customName);
        }
    }
    
    /**
     * Unsets the "custom-name" attribute
     */
    public void unsetCustomName()
    {
        synchronized (monitor())
        {
            check_orphaned();
            get_store().remove_attribute(CUSTOMNAME$2);
        }
    }
}
