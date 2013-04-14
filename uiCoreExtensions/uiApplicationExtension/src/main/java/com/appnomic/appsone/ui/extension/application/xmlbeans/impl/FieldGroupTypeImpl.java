/*
 * XML Type:  field-groupType
 * Namespace: 
 * Java type: com.appnomic.appsone.ui.extension.application.xmlbeans.FieldGroupType
 *
 * Automatically generated - do not modify.
 */
package com.appnomic.appsone.ui.extension.application.xmlbeans.impl;
/**
 * An XML field-groupType(@).
 *
 * This is a complex type.
 */
public class FieldGroupTypeImpl extends org.apache.xmlbeans.impl.values.XmlComplexContentImpl implements com.appnomic.appsone.ui.extension.application.xmlbeans.FieldGroupType
{
    private static final long serialVersionUID = 1L;
    
    public FieldGroupTypeImpl(org.apache.xmlbeans.SchemaType sType)
    {
        super(sType);
    }
    
    private static final javax.xml.namespace.QName FIELD$0 = 
        new javax.xml.namespace.QName("", "field");
    private static final javax.xml.namespace.QName LABEL$2 = 
        new javax.xml.namespace.QName("", "label");
    
    
    /**
     * Gets array of all "field" elements
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.FieldType[] getFieldArray()
    {
        synchronized (monitor())
        {
            check_orphaned();
            java.util.List targetList = new java.util.ArrayList();
            get_store().find_all_element_users(FIELD$0, targetList);
            com.appnomic.appsone.ui.extension.application.xmlbeans.FieldType[] result = new com.appnomic.appsone.ui.extension.application.xmlbeans.FieldType[targetList.size()];
            targetList.toArray(result);
            return result;
        }
    }
    
    /**
     * Gets ith "field" element
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.FieldType getFieldArray(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.application.xmlbeans.FieldType target = null;
            target = (com.appnomic.appsone.ui.extension.application.xmlbeans.FieldType)get_store().find_element_user(FIELD$0, i);
            if (target == null)
            {
                throw new IndexOutOfBoundsException();
            }
            return target;
        }
    }
    
    /**
     * Returns number of "field" element
     */
    public int sizeOfFieldArray()
    {
        synchronized (monitor())
        {
            check_orphaned();
            return get_store().count_elements(FIELD$0);
        }
    }
    
    /**
     * Sets array of all "field" element  WARNING: This method is not atomicaly synchronized.
     */
    public void setFieldArray(com.appnomic.appsone.ui.extension.application.xmlbeans.FieldType[] fieldArray)
    {
        check_orphaned();
        arraySetterHelper(fieldArray, FIELD$0);
    }
    
    /**
     * Sets ith "field" element
     */
    public void setFieldArray(int i, com.appnomic.appsone.ui.extension.application.xmlbeans.FieldType field)
    {
        generatedSetterHelperImpl(field, FIELD$0, i, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_ARRAYITEM);
    }
    
    /**
     * Inserts and returns a new empty value (as xml) as the ith "field" element
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.FieldType insertNewField(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.application.xmlbeans.FieldType target = null;
            target = (com.appnomic.appsone.ui.extension.application.xmlbeans.FieldType)get_store().insert_element_user(FIELD$0, i);
            return target;
        }
    }
    
    /**
     * Appends and returns a new empty value (as xml) as the last "field" element
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.FieldType addNewField()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.application.xmlbeans.FieldType target = null;
            target = (com.appnomic.appsone.ui.extension.application.xmlbeans.FieldType)get_store().add_element_user(FIELD$0);
            return target;
        }
    }
    
    /**
     * Removes the ith "field" element
     */
    public void removeField(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            get_store().remove_element(FIELD$0, i);
        }
    }
    
    /**
     * Gets the "label" attribute
     */
    public java.lang.String getLabel()
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.SimpleValue target = null;
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(LABEL$2);
            if (target == null)
            {
                return null;
            }
            return target.getStringValue();
        }
    }
    
    /**
     * Gets (as xml) the "label" attribute
     */
    public org.apache.xmlbeans.XmlString xgetLabel()
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.XmlString target = null;
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(LABEL$2);
            return target;
        }
    }
    
    /**
     * True if has "label" attribute
     */
    public boolean isSetLabel()
    {
        synchronized (monitor())
        {
            check_orphaned();
            return get_store().find_attribute_user(LABEL$2) != null;
        }
    }
    
    /**
     * Sets the "label" attribute
     */
    public void setLabel(java.lang.String label)
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.SimpleValue target = null;
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(LABEL$2);
            if (target == null)
            {
                target = (org.apache.xmlbeans.SimpleValue)get_store().add_attribute_user(LABEL$2);
            }
            target.setStringValue(label);
        }
    }
    
    /**
     * Sets (as xml) the "label" attribute
     */
    public void xsetLabel(org.apache.xmlbeans.XmlString label)
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.XmlString target = null;
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(LABEL$2);
            if (target == null)
            {
                target = (org.apache.xmlbeans.XmlString)get_store().add_attribute_user(LABEL$2);
            }
            target.set(label);
        }
    }
    
    /**
     * Unsets the "label" attribute
     */
    public void unsetLabel()
    {
        synchronized (monitor())
        {
            check_orphaned();
            get_store().remove_attribute(LABEL$2);
        }
    }
}
