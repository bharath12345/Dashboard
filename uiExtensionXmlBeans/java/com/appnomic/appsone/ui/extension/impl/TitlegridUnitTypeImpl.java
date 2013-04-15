/*
 * XML Type:  titlegrid-unitType
 * Namespace: http://www.extension.ui.appsone.appnomic.com
 * Java type: com.appnomic.appsone.ui.extension.TitlegridUnitType
 *
 * Automatically generated - do not modify.
 */
package com.appnomic.appsone.ui.extension.impl;
/**
 * An XML titlegrid-unitType(@http://www.extension.ui.appsone.appnomic.com).
 *
 * This is a complex type.
 */
public class TitlegridUnitTypeImpl extends org.apache.xmlbeans.impl.values.XmlComplexContentImpl implements com.appnomic.appsone.ui.extension.TitlegridUnitType
{
    private static final long serialVersionUID = 1L;
    
    public TitlegridUnitTypeImpl(org.apache.xmlbeans.SchemaType sType)
    {
        super(sType);
    }
    
    private static final javax.xml.namespace.QName GRIDCOL$0 = 
        new javax.xml.namespace.QName("http://www.extension.ui.appsone.appnomic.com", "grid-col");
    
    
    /**
     * Gets array of all "grid-col" elements
     */
    public com.appnomic.appsone.ui.extension.GridColType[] getGridColArray()
    {
        synchronized (monitor())
        {
            check_orphaned();
            java.util.List targetList = new java.util.ArrayList();
            get_store().find_all_element_users(GRIDCOL$0, targetList);
            com.appnomic.appsone.ui.extension.GridColType[] result = new com.appnomic.appsone.ui.extension.GridColType[targetList.size()];
            targetList.toArray(result);
            return result;
        }
    }
    
    /**
     * Gets ith "grid-col" element
     */
    public com.appnomic.appsone.ui.extension.GridColType getGridColArray(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.GridColType target = null;
            target = (com.appnomic.appsone.ui.extension.GridColType)get_store().find_element_user(GRIDCOL$0, i);
            if (target == null)
            {
                throw new IndexOutOfBoundsException();
            }
            return target;
        }
    }
    
    /**
     * Returns number of "grid-col" element
     */
    public int sizeOfGridColArray()
    {
        synchronized (monitor())
        {
            check_orphaned();
            return get_store().count_elements(GRIDCOL$0);
        }
    }
    
    /**
     * Sets array of all "grid-col" element  WARNING: This method is not atomicaly synchronized.
     */
    public void setGridColArray(com.appnomic.appsone.ui.extension.GridColType[] gridColArray)
    {
        check_orphaned();
        arraySetterHelper(gridColArray, GRIDCOL$0);
    }
    
    /**
     * Sets ith "grid-col" element
     */
    public void setGridColArray(int i, com.appnomic.appsone.ui.extension.GridColType gridCol)
    {
        generatedSetterHelperImpl(gridCol, GRIDCOL$0, i, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_ARRAYITEM);
    }
    
    /**
     * Inserts and returns a new empty value (as xml) as the ith "grid-col" element
     */
    public com.appnomic.appsone.ui.extension.GridColType insertNewGridCol(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.GridColType target = null;
            target = (com.appnomic.appsone.ui.extension.GridColType)get_store().insert_element_user(GRIDCOL$0, i);
            return target;
        }
    }
    
    /**
     * Appends and returns a new empty value (as xml) as the last "grid-col" element
     */
    public com.appnomic.appsone.ui.extension.GridColType addNewGridCol()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.GridColType target = null;
            target = (com.appnomic.appsone.ui.extension.GridColType)get_store().add_element_user(GRIDCOL$0);
            return target;
        }
    }
    
    /**
     * Removes the ith "grid-col" element
     */
    public void removeGridCol(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            get_store().remove_element(GRIDCOL$0, i);
        }
    }
}
