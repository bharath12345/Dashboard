/*
 * XML Type:  formsType
 * Namespace: 
 * Java type: com.appnomic.appsone.ui.extension.application.xmlbeans.FormsType
 *
 * Automatically generated - do not modify.
 */
package com.appnomic.appsone.ui.extension.application.xmlbeans.impl;
/**
 * An XML formsType(@).
 *
 * This is a complex type.
 */
public class FormsTypeImpl extends org.apache.xmlbeans.impl.values.XmlComplexContentImpl implements com.appnomic.appsone.ui.extension.application.xmlbeans.FormsType
{
    private static final long serialVersionUID = 1L;
    
    public FormsTypeImpl(org.apache.xmlbeans.SchemaType sType)
    {
        super(sType);
    }
    
    private static final javax.xml.namespace.QName GRIDFORM$0 = 
        new javax.xml.namespace.QName("", "grid-form");
    private static final javax.xml.namespace.QName SUMMARYFORM$2 = 
        new javax.xml.namespace.QName("", "summary-form");
    
    
    /**
     * Gets the "grid-form" element
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.GridFormType getGridForm()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.application.xmlbeans.GridFormType target = null;
            target = (com.appnomic.appsone.ui.extension.application.xmlbeans.GridFormType)get_store().find_element_user(GRIDFORM$0, 0);
            if (target == null)
            {
                return null;
            }
            return target;
        }
    }
    
    /**
     * Sets the "grid-form" element
     */
    public void setGridForm(com.appnomic.appsone.ui.extension.application.xmlbeans.GridFormType gridForm)
    {
        generatedSetterHelperImpl(gridForm, GRIDFORM$0, 0, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_SINGLETON);
    }
    
    /**
     * Appends and returns a new empty "grid-form" element
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.GridFormType addNewGridForm()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.application.xmlbeans.GridFormType target = null;
            target = (com.appnomic.appsone.ui.extension.application.xmlbeans.GridFormType)get_store().add_element_user(GRIDFORM$0);
            return target;
        }
    }
    
    /**
     * Gets the "summary-form" element
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.SummaryFormType getSummaryForm()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.application.xmlbeans.SummaryFormType target = null;
            target = (com.appnomic.appsone.ui.extension.application.xmlbeans.SummaryFormType)get_store().find_element_user(SUMMARYFORM$2, 0);
            if (target == null)
            {
                return null;
            }
            return target;
        }
    }
    
    /**
     * True if has "summary-form" element
     */
    public boolean isSetSummaryForm()
    {
        synchronized (monitor())
        {
            check_orphaned();
            return get_store().count_elements(SUMMARYFORM$2) != 0;
        }
    }
    
    /**
     * Sets the "summary-form" element
     */
    public void setSummaryForm(com.appnomic.appsone.ui.extension.application.xmlbeans.SummaryFormType summaryForm)
    {
        generatedSetterHelperImpl(summaryForm, SUMMARYFORM$2, 0, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_SINGLETON);
    }
    
    /**
     * Appends and returns a new empty "summary-form" element
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.SummaryFormType addNewSummaryForm()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.application.xmlbeans.SummaryFormType target = null;
            target = (com.appnomic.appsone.ui.extension.application.xmlbeans.SummaryFormType)get_store().add_element_user(SUMMARYFORM$2);
            return target;
        }
    }
    
    /**
     * Unsets the "summary-form" element
     */
    public void unsetSummaryForm()
    {
        synchronized (monitor())
        {
            check_orphaned();
            get_store().remove_element(SUMMARYFORM$2, 0);
        }
    }
}
