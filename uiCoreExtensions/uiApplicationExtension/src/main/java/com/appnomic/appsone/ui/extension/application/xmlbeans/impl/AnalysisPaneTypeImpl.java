/*
 * XML Type:  analysis-paneType
 * Namespace: 
 * Java type: com.appnomic.appsone.ui.extension.application.xmlbeans.AnalysisPaneType
 *
 * Automatically generated - do not modify.
 */
package com.appnomic.appsone.ui.extension.application.xmlbeans.impl;
/**
 * An XML analysis-paneType(@).
 *
 * This is a complex type.
 */
public class AnalysisPaneTypeImpl extends org.apache.xmlbeans.impl.values.XmlComplexContentImpl implements com.appnomic.appsone.ui.extension.application.xmlbeans.AnalysisPaneType
{
    private static final long serialVersionUID = 1L;
    
    public AnalysisPaneTypeImpl(org.apache.xmlbeans.SchemaType sType)
    {
        super(sType);
    }
    
    private static final javax.xml.namespace.QName FORMS$0 = 
        new javax.xml.namespace.QName("", "forms");
    private static final javax.xml.namespace.QName REF$2 = 
        new javax.xml.namespace.QName("", "ref");
    
    
    /**
     * Gets the "forms" element
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.FormsType getForms()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.application.xmlbeans.FormsType target = null;
            target = (com.appnomic.appsone.ui.extension.application.xmlbeans.FormsType)get_store().find_element_user(FORMS$0, 0);
            if (target == null)
            {
                return null;
            }
            return target;
        }
    }
    
    /**
     * Sets the "forms" element
     */
    public void setForms(com.appnomic.appsone.ui.extension.application.xmlbeans.FormsType forms)
    {
        generatedSetterHelperImpl(forms, FORMS$0, 0, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_SINGLETON);
    }
    
    /**
     * Appends and returns a new empty "forms" element
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.FormsType addNewForms()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.application.xmlbeans.FormsType target = null;
            target = (com.appnomic.appsone.ui.extension.application.xmlbeans.FormsType)get_store().add_element_user(FORMS$0);
            return target;
        }
    }
    
    /**
     * Gets the "ref" attribute
     */
    public java.lang.String getRef()
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.SimpleValue target = null;
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(REF$2);
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
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(REF$2);
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
            return get_store().find_attribute_user(REF$2) != null;
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
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(REF$2);
            if (target == null)
            {
                target = (org.apache.xmlbeans.SimpleValue)get_store().add_attribute_user(REF$2);
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
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(REF$2);
            if (target == null)
            {
                target = (org.apache.xmlbeans.XmlString)get_store().add_attribute_user(REF$2);
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
            get_store().remove_attribute(REF$2);
        }
    }
}
