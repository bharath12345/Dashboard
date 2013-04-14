/*
 * XML Type:  labelType
 * Namespace: http://www.extension.ui.appsone.appnomic.com
 * Java type: com.appnomic.appsone.ui.extension.LabelType
 *
 * Automatically generated - do not modify.
 */
package com.appnomic.appsone.ui.extension.impl;
/**
 * An XML labelType(@http://www.extension.ui.appsone.appnomic.com).
 *
 * This is a complex type.
 */
public class LabelTypeImpl extends org.apache.xmlbeans.impl.values.XmlComplexContentImpl implements com.appnomic.appsone.ui.extension.LabelType
{
    private static final long serialVersionUID = 1L;
    
    public LabelTypeImpl(org.apache.xmlbeans.SchemaType sType)
    {
        super(sType);
    }
    
    private static final javax.xml.namespace.QName LABELVALUE$0 = 
        new javax.xml.namespace.QName("http://www.extension.ui.appsone.appnomic.com", "label-value");
    private static final javax.xml.namespace.QName ID$2 = 
        new javax.xml.namespace.QName("", "id");
    
    
    /**
     * Gets array of all "label-value" elements
     */
    public com.appnomic.appsone.ui.extension.LabelValueType[] getLabelValueArray()
    {
        synchronized (monitor())
        {
            check_orphaned();
            java.util.List targetList = new java.util.ArrayList();
            get_store().find_all_element_users(LABELVALUE$0, targetList);
            com.appnomic.appsone.ui.extension.LabelValueType[] result = new com.appnomic.appsone.ui.extension.LabelValueType[targetList.size()];
            targetList.toArray(result);
            return result;
        }
    }
    
    /**
     * Gets ith "label-value" element
     */
    public com.appnomic.appsone.ui.extension.LabelValueType getLabelValueArray(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.LabelValueType target = null;
            target = (com.appnomic.appsone.ui.extension.LabelValueType)get_store().find_element_user(LABELVALUE$0, i);
            if (target == null)
            {
                throw new IndexOutOfBoundsException();
            }
            return target;
        }
    }
    
    /**
     * Returns number of "label-value" element
     */
    public int sizeOfLabelValueArray()
    {
        synchronized (monitor())
        {
            check_orphaned();
            return get_store().count_elements(LABELVALUE$0);
        }
    }
    
    /**
     * Sets array of all "label-value" element  WARNING: This method is not atomicaly synchronized.
     */
    public void setLabelValueArray(com.appnomic.appsone.ui.extension.LabelValueType[] labelValueArray)
    {
        check_orphaned();
        arraySetterHelper(labelValueArray, LABELVALUE$0);
    }
    
    /**
     * Sets ith "label-value" element
     */
    public void setLabelValueArray(int i, com.appnomic.appsone.ui.extension.LabelValueType labelValue)
    {
        generatedSetterHelperImpl(labelValue, LABELVALUE$0, i, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_ARRAYITEM);
    }
    
    /**
     * Inserts and returns a new empty value (as xml) as the ith "label-value" element
     */
    public com.appnomic.appsone.ui.extension.LabelValueType insertNewLabelValue(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.LabelValueType target = null;
            target = (com.appnomic.appsone.ui.extension.LabelValueType)get_store().insert_element_user(LABELVALUE$0, i);
            return target;
        }
    }
    
    /**
     * Appends and returns a new empty value (as xml) as the last "label-value" element
     */
    public com.appnomic.appsone.ui.extension.LabelValueType addNewLabelValue()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.LabelValueType target = null;
            target = (com.appnomic.appsone.ui.extension.LabelValueType)get_store().add_element_user(LABELVALUE$0);
            return target;
        }
    }
    
    /**
     * Removes the ith "label-value" element
     */
    public void removeLabelValue(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            get_store().remove_element(LABELVALUE$0, i);
        }
    }
    
    /**
     * Gets the "id" attribute
     */
    public java.lang.String getId()
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.SimpleValue target = null;
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(ID$2);
            if (target == null)
            {
                return null;
            }
            return target.getStringValue();
        }
    }
    
    /**
     * Gets (as xml) the "id" attribute
     */
    public org.apache.xmlbeans.XmlString xgetId()
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.XmlString target = null;
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(ID$2);
            return target;
        }
    }
    
    /**
     * True if has "id" attribute
     */
    public boolean isSetId()
    {
        synchronized (monitor())
        {
            check_orphaned();
            return get_store().find_attribute_user(ID$2) != null;
        }
    }
    
    /**
     * Sets the "id" attribute
     */
    public void setId(java.lang.String id)
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.SimpleValue target = null;
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(ID$2);
            if (target == null)
            {
                target = (org.apache.xmlbeans.SimpleValue)get_store().add_attribute_user(ID$2);
            }
            target.setStringValue(id);
        }
    }
    
    /**
     * Sets (as xml) the "id" attribute
     */
    public void xsetId(org.apache.xmlbeans.XmlString id)
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.XmlString target = null;
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(ID$2);
            if (target == null)
            {
                target = (org.apache.xmlbeans.XmlString)get_store().add_attribute_user(ID$2);
            }
            target.set(id);
        }
    }
    
    /**
     * Unsets the "id" attribute
     */
    public void unsetId()
    {
        synchronized (monitor())
        {
            check_orphaned();
            get_store().remove_attribute(ID$2);
        }
    }
}
