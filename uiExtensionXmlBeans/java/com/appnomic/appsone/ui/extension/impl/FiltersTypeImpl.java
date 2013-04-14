/*
 * XML Type:  filtersType
 * Namespace: http://www.extension.ui.appsone.appnomic.com
 * Java type: com.appnomic.appsone.ui.extension.FiltersType
 *
 * Automatically generated - do not modify.
 */
package com.appnomic.appsone.ui.extension.impl;
/**
 * An XML filtersType(@http://www.extension.ui.appsone.appnomic.com).
 *
 * This is a complex type.
 */
public class FiltersTypeImpl extends org.apache.xmlbeans.impl.values.XmlComplexContentImpl implements com.appnomic.appsone.ui.extension.FiltersType
{
    private static final long serialVersionUID = 1L;
    
    public FiltersTypeImpl(org.apache.xmlbeans.SchemaType sType)
    {
        super(sType);
    }
    
    private static final javax.xml.namespace.QName COLFILTER$0 = 
        new javax.xml.namespace.QName("http://www.extension.ui.appsone.appnomic.com", "col-filter");
    
    
    /**
     * Gets array of all "col-filter" elements
     */
    public com.appnomic.appsone.ui.extension.ColFilterType[] getColFilterArray()
    {
        synchronized (monitor())
        {
            check_orphaned();
            java.util.List targetList = new java.util.ArrayList();
            get_store().find_all_element_users(COLFILTER$0, targetList);
            com.appnomic.appsone.ui.extension.ColFilterType[] result = new com.appnomic.appsone.ui.extension.ColFilterType[targetList.size()];
            targetList.toArray(result);
            return result;
        }
    }
    
    /**
     * Gets ith "col-filter" element
     */
    public com.appnomic.appsone.ui.extension.ColFilterType getColFilterArray(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.ColFilterType target = null;
            target = (com.appnomic.appsone.ui.extension.ColFilterType)get_store().find_element_user(COLFILTER$0, i);
            if (target == null)
            {
                throw new IndexOutOfBoundsException();
            }
            return target;
        }
    }
    
    /**
     * Returns number of "col-filter" element
     */
    public int sizeOfColFilterArray()
    {
        synchronized (monitor())
        {
            check_orphaned();
            return get_store().count_elements(COLFILTER$0);
        }
    }
    
    /**
     * Sets array of all "col-filter" element  WARNING: This method is not atomicaly synchronized.
     */
    public void setColFilterArray(com.appnomic.appsone.ui.extension.ColFilterType[] colFilterArray)
    {
        check_orphaned();
        arraySetterHelper(colFilterArray, COLFILTER$0);
    }
    
    /**
     * Sets ith "col-filter" element
     */
    public void setColFilterArray(int i, com.appnomic.appsone.ui.extension.ColFilterType colFilter)
    {
        generatedSetterHelperImpl(colFilter, COLFILTER$0, i, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_ARRAYITEM);
    }
    
    /**
     * Inserts and returns a new empty value (as xml) as the ith "col-filter" element
     */
    public com.appnomic.appsone.ui.extension.ColFilterType insertNewColFilter(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.ColFilterType target = null;
            target = (com.appnomic.appsone.ui.extension.ColFilterType)get_store().insert_element_user(COLFILTER$0, i);
            return target;
        }
    }
    
    /**
     * Appends and returns a new empty value (as xml) as the last "col-filter" element
     */
    public com.appnomic.appsone.ui.extension.ColFilterType addNewColFilter()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.ColFilterType target = null;
            target = (com.appnomic.appsone.ui.extension.ColFilterType)get_store().add_element_user(COLFILTER$0);
            return target;
        }
    }
    
    /**
     * Removes the ith "col-filter" element
     */
    public void removeColFilter(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            get_store().remove_element(COLFILTER$0, i);
        }
    }
}
