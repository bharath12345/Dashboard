/*
 * XML Type:  formsType
 * Namespace: http://www.extension.ui.appsone.appnomic.com
 * Java type: com.appnomic.appsone.ui.extension.FormsType
 *
 * Automatically generated - do not modify.
 */
package com.appnomic.appsone.ui.extension.impl;
/**
 * An XML formsType(@http://www.extension.ui.appsone.appnomic.com).
 *
 * This is a complex type.
 */
public class FormsTypeImpl extends org.apache.xmlbeans.impl.values.XmlComplexContentImpl implements com.appnomic.appsone.ui.extension.FormsType
{
    private static final long serialVersionUID = 1L;
    
    public FormsTypeImpl(org.apache.xmlbeans.SchemaType sType)
    {
        super(sType);
    }
    
    private static final javax.xml.namespace.QName GRIDFORM$0 = 
        new javax.xml.namespace.QName("http://www.extension.ui.appsone.appnomic.com", "grid-form");
    private static final javax.xml.namespace.QName SUMMARYFORM$2 = 
        new javax.xml.namespace.QName("http://www.extension.ui.appsone.appnomic.com", "summary-form");
    private static final javax.xml.namespace.QName TITLEGRIDFORM$4 = 
        new javax.xml.namespace.QName("http://www.extension.ui.appsone.appnomic.com", "titlegrid-form");
    
    
    /**
     * Gets array of all "grid-form" elements
     */
    public com.appnomic.appsone.ui.extension.GridFormType[] getGridFormArray()
    {
        synchronized (monitor())
        {
            check_orphaned();
            java.util.List targetList = new java.util.ArrayList();
            get_store().find_all_element_users(GRIDFORM$0, targetList);
            com.appnomic.appsone.ui.extension.GridFormType[] result = new com.appnomic.appsone.ui.extension.GridFormType[targetList.size()];
            targetList.toArray(result);
            return result;
        }
    }
    
    /**
     * Gets ith "grid-form" element
     */
    public com.appnomic.appsone.ui.extension.GridFormType getGridFormArray(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.GridFormType target = null;
            target = (com.appnomic.appsone.ui.extension.GridFormType)get_store().find_element_user(GRIDFORM$0, i);
            if (target == null)
            {
                throw new IndexOutOfBoundsException();
            }
            return target;
        }
    }
    
    /**
     * Returns number of "grid-form" element
     */
    public int sizeOfGridFormArray()
    {
        synchronized (monitor())
        {
            check_orphaned();
            return get_store().count_elements(GRIDFORM$0);
        }
    }
    
    /**
     * Sets array of all "grid-form" element  WARNING: This method is not atomicaly synchronized.
     */
    public void setGridFormArray(com.appnomic.appsone.ui.extension.GridFormType[] gridFormArray)
    {
        check_orphaned();
        arraySetterHelper(gridFormArray, GRIDFORM$0);
    }
    
    /**
     * Sets ith "grid-form" element
     */
    public void setGridFormArray(int i, com.appnomic.appsone.ui.extension.GridFormType gridForm)
    {
        generatedSetterHelperImpl(gridForm, GRIDFORM$0, i, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_ARRAYITEM);
    }
    
    /**
     * Inserts and returns a new empty value (as xml) as the ith "grid-form" element
     */
    public com.appnomic.appsone.ui.extension.GridFormType insertNewGridForm(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.GridFormType target = null;
            target = (com.appnomic.appsone.ui.extension.GridFormType)get_store().insert_element_user(GRIDFORM$0, i);
            return target;
        }
    }
    
    /**
     * Appends and returns a new empty value (as xml) as the last "grid-form" element
     */
    public com.appnomic.appsone.ui.extension.GridFormType addNewGridForm()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.GridFormType target = null;
            target = (com.appnomic.appsone.ui.extension.GridFormType)get_store().add_element_user(GRIDFORM$0);
            return target;
        }
    }
    
    /**
     * Removes the ith "grid-form" element
     */
    public void removeGridForm(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            get_store().remove_element(GRIDFORM$0, i);
        }
    }
    
    /**
     * Gets array of all "summary-form" elements
     */
    public com.appnomic.appsone.ui.extension.SummaryFormType[] getSummaryFormArray()
    {
        synchronized (monitor())
        {
            check_orphaned();
            java.util.List targetList = new java.util.ArrayList();
            get_store().find_all_element_users(SUMMARYFORM$2, targetList);
            com.appnomic.appsone.ui.extension.SummaryFormType[] result = new com.appnomic.appsone.ui.extension.SummaryFormType[targetList.size()];
            targetList.toArray(result);
            return result;
        }
    }
    
    /**
     * Gets ith "summary-form" element
     */
    public com.appnomic.appsone.ui.extension.SummaryFormType getSummaryFormArray(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.SummaryFormType target = null;
            target = (com.appnomic.appsone.ui.extension.SummaryFormType)get_store().find_element_user(SUMMARYFORM$2, i);
            if (target == null)
            {
                throw new IndexOutOfBoundsException();
            }
            return target;
        }
    }
    
    /**
     * Returns number of "summary-form" element
     */
    public int sizeOfSummaryFormArray()
    {
        synchronized (monitor())
        {
            check_orphaned();
            return get_store().count_elements(SUMMARYFORM$2);
        }
    }
    
    /**
     * Sets array of all "summary-form" element  WARNING: This method is not atomicaly synchronized.
     */
    public void setSummaryFormArray(com.appnomic.appsone.ui.extension.SummaryFormType[] summaryFormArray)
    {
        check_orphaned();
        arraySetterHelper(summaryFormArray, SUMMARYFORM$2);
    }
    
    /**
     * Sets ith "summary-form" element
     */
    public void setSummaryFormArray(int i, com.appnomic.appsone.ui.extension.SummaryFormType summaryForm)
    {
        generatedSetterHelperImpl(summaryForm, SUMMARYFORM$2, i, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_ARRAYITEM);
    }
    
    /**
     * Inserts and returns a new empty value (as xml) as the ith "summary-form" element
     */
    public com.appnomic.appsone.ui.extension.SummaryFormType insertNewSummaryForm(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.SummaryFormType target = null;
            target = (com.appnomic.appsone.ui.extension.SummaryFormType)get_store().insert_element_user(SUMMARYFORM$2, i);
            return target;
        }
    }
    
    /**
     * Appends and returns a new empty value (as xml) as the last "summary-form" element
     */
    public com.appnomic.appsone.ui.extension.SummaryFormType addNewSummaryForm()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.SummaryFormType target = null;
            target = (com.appnomic.appsone.ui.extension.SummaryFormType)get_store().add_element_user(SUMMARYFORM$2);
            return target;
        }
    }
    
    /**
     * Removes the ith "summary-form" element
     */
    public void removeSummaryForm(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            get_store().remove_element(SUMMARYFORM$2, i);
        }
    }
    
    /**
     * Gets array of all "titlegrid-form" elements
     */
    public com.appnomic.appsone.ui.extension.TitlegridFormType[] getTitlegridFormArray()
    {
        synchronized (monitor())
        {
            check_orphaned();
            java.util.List targetList = new java.util.ArrayList();
            get_store().find_all_element_users(TITLEGRIDFORM$4, targetList);
            com.appnomic.appsone.ui.extension.TitlegridFormType[] result = new com.appnomic.appsone.ui.extension.TitlegridFormType[targetList.size()];
            targetList.toArray(result);
            return result;
        }
    }
    
    /**
     * Gets ith "titlegrid-form" element
     */
    public com.appnomic.appsone.ui.extension.TitlegridFormType getTitlegridFormArray(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.TitlegridFormType target = null;
            target = (com.appnomic.appsone.ui.extension.TitlegridFormType)get_store().find_element_user(TITLEGRIDFORM$4, i);
            if (target == null)
            {
                throw new IndexOutOfBoundsException();
            }
            return target;
        }
    }
    
    /**
     * Returns number of "titlegrid-form" element
     */
    public int sizeOfTitlegridFormArray()
    {
        synchronized (monitor())
        {
            check_orphaned();
            return get_store().count_elements(TITLEGRIDFORM$4);
        }
    }
    
    /**
     * Sets array of all "titlegrid-form" element  WARNING: This method is not atomicaly synchronized.
     */
    public void setTitlegridFormArray(com.appnomic.appsone.ui.extension.TitlegridFormType[] titlegridFormArray)
    {
        check_orphaned();
        arraySetterHelper(titlegridFormArray, TITLEGRIDFORM$4);
    }
    
    /**
     * Sets ith "titlegrid-form" element
     */
    public void setTitlegridFormArray(int i, com.appnomic.appsone.ui.extension.TitlegridFormType titlegridForm)
    {
        generatedSetterHelperImpl(titlegridForm, TITLEGRIDFORM$4, i, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_ARRAYITEM);
    }
    
    /**
     * Inserts and returns a new empty value (as xml) as the ith "titlegrid-form" element
     */
    public com.appnomic.appsone.ui.extension.TitlegridFormType insertNewTitlegridForm(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.TitlegridFormType target = null;
            target = (com.appnomic.appsone.ui.extension.TitlegridFormType)get_store().insert_element_user(TITLEGRIDFORM$4, i);
            return target;
        }
    }
    
    /**
     * Appends and returns a new empty value (as xml) as the last "titlegrid-form" element
     */
    public com.appnomic.appsone.ui.extension.TitlegridFormType addNewTitlegridForm()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.TitlegridFormType target = null;
            target = (com.appnomic.appsone.ui.extension.TitlegridFormType)get_store().add_element_user(TITLEGRIDFORM$4);
            return target;
        }
    }
    
    /**
     * Removes the ith "titlegrid-form" element
     */
    public void removeTitlegridForm(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            get_store().remove_element(TITLEGRIDFORM$4, i);
        }
    }
}
