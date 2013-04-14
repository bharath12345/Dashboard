/*
 * XML Type:  columnsType
 * Namespace: http://www.extension.ui.appsone.appnomic.com
 * Java type: com.appnomic.appsone.ui.extension.ColumnsType
 *
 * Automatically generated - do not modify.
 */
package com.appnomic.appsone.ui.extension.impl;
/**
 * An XML columnsType(@http://www.extension.ui.appsone.appnomic.com).
 *
 * This is a complex type.
 */
public class ColumnsTypeImpl extends org.apache.xmlbeans.impl.values.XmlComplexContentImpl implements com.appnomic.appsone.ui.extension.ColumnsType
{
    private static final long serialVersionUID = 1L;
    
    public ColumnsTypeImpl(org.apache.xmlbeans.SchemaType sType)
    {
        super(sType);
    }
    
    private static final javax.xml.namespace.QName COLUMN$0 = 
        new javax.xml.namespace.QName("http://www.extension.ui.appsone.appnomic.com", "column");
    
    
    /**
     * Gets array of all "column" elements
     */
    public com.appnomic.appsone.ui.extension.ColumnType[] getColumnArray()
    {
        synchronized (monitor())
        {
            check_orphaned();
            java.util.List targetList = new java.util.ArrayList();
            get_store().find_all_element_users(COLUMN$0, targetList);
            com.appnomic.appsone.ui.extension.ColumnType[] result = new com.appnomic.appsone.ui.extension.ColumnType[targetList.size()];
            targetList.toArray(result);
            return result;
        }
    }
    
    /**
     * Gets ith "column" element
     */
    public com.appnomic.appsone.ui.extension.ColumnType getColumnArray(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.ColumnType target = null;
            target = (com.appnomic.appsone.ui.extension.ColumnType)get_store().find_element_user(COLUMN$0, i);
            if (target == null)
            {
                throw new IndexOutOfBoundsException();
            }
            return target;
        }
    }
    
    /**
     * Returns number of "column" element
     */
    public int sizeOfColumnArray()
    {
        synchronized (monitor())
        {
            check_orphaned();
            return get_store().count_elements(COLUMN$0);
        }
    }
    
    /**
     * Sets array of all "column" element  WARNING: This method is not atomicaly synchronized.
     */
    public void setColumnArray(com.appnomic.appsone.ui.extension.ColumnType[] columnArray)
    {
        check_orphaned();
        arraySetterHelper(columnArray, COLUMN$0);
    }
    
    /**
     * Sets ith "column" element
     */
    public void setColumnArray(int i, com.appnomic.appsone.ui.extension.ColumnType column)
    {
        generatedSetterHelperImpl(column, COLUMN$0, i, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_ARRAYITEM);
    }
    
    /**
     * Inserts and returns a new empty value (as xml) as the ith "column" element
     */
    public com.appnomic.appsone.ui.extension.ColumnType insertNewColumn(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.ColumnType target = null;
            target = (com.appnomic.appsone.ui.extension.ColumnType)get_store().insert_element_user(COLUMN$0, i);
            return target;
        }
    }
    
    /**
     * Appends and returns a new empty value (as xml) as the last "column" element
     */
    public com.appnomic.appsone.ui.extension.ColumnType addNewColumn()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.ColumnType target = null;
            target = (com.appnomic.appsone.ui.extension.ColumnType)get_store().add_element_user(COLUMN$0);
            return target;
        }
    }
    
    /**
     * Removes the ith "column" element
     */
    public void removeColumn(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            get_store().remove_element(COLUMN$0, i);
        }
    }
}
