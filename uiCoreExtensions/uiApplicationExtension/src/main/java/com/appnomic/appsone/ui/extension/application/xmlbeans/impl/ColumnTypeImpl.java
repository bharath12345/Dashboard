/*
 * XML Type:  columnType
 * Namespace: 
 * Java type: com.appnomic.appsone.ui.extension.application.xmlbeans.ColumnType
 *
 * Automatically generated - do not modify.
 */
package com.appnomic.appsone.ui.extension.application.xmlbeans.impl;
/**
 * An XML columnType(@).
 *
 * This is a complex type.
 */
public class ColumnTypeImpl extends org.apache.xmlbeans.impl.values.XmlComplexContentImpl implements com.appnomic.appsone.ui.extension.application.xmlbeans.ColumnType
{
    private static final long serialVersionUID = 1L;
    
    public ColumnTypeImpl(org.apache.xmlbeans.SchemaType sType)
    {
        super(sType);
    }
    
    private static final javax.xml.namespace.QName SUBCOLUMN$0 = 
        new javax.xml.namespace.QName("", "subcolumn");
    private static final javax.xml.namespace.QName ATTRIBUTE$2 = 
        new javax.xml.namespace.QName("", "attribute");
    private static final javax.xml.namespace.QName DISPLAY$4 = 
        new javax.xml.namespace.QName("", "display");
    private static final javax.xml.namespace.QName DATATYPE$6 = 
        new javax.xml.namespace.QName("", "data-type");
    private static final javax.xml.namespace.QName LABEL$8 = 
        new javax.xml.namespace.QName("", "label");
    private static final javax.xml.namespace.QName WIDTH$10 = 
        new javax.xml.namespace.QName("", "width");
    private static final javax.xml.namespace.QName SORTABLE$12 = 
        new javax.xml.namespace.QName("", "sortable");
    private static final javax.xml.namespace.QName FILTERABLE$14 = 
        new javax.xml.namespace.QName("", "filterable");
    
    
    /**
     * Gets array of all "subcolumn" elements
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.SubcolumnType[] getSubcolumnArray()
    {
        synchronized (monitor())
        {
            check_orphaned();
            java.util.List targetList = new java.util.ArrayList();
            get_store().find_all_element_users(SUBCOLUMN$0, targetList);
            com.appnomic.appsone.ui.extension.application.xmlbeans.SubcolumnType[] result = new com.appnomic.appsone.ui.extension.application.xmlbeans.SubcolumnType[targetList.size()];
            targetList.toArray(result);
            return result;
        }
    }
    
    /**
     * Gets ith "subcolumn" element
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.SubcolumnType getSubcolumnArray(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.application.xmlbeans.SubcolumnType target = null;
            target = (com.appnomic.appsone.ui.extension.application.xmlbeans.SubcolumnType)get_store().find_element_user(SUBCOLUMN$0, i);
            if (target == null)
            {
                throw new IndexOutOfBoundsException();
            }
            return target;
        }
    }
    
    /**
     * Returns number of "subcolumn" element
     */
    public int sizeOfSubcolumnArray()
    {
        synchronized (monitor())
        {
            check_orphaned();
            return get_store().count_elements(SUBCOLUMN$0);
        }
    }
    
    /**
     * Sets array of all "subcolumn" element  WARNING: This method is not atomicaly synchronized.
     */
    public void setSubcolumnArray(com.appnomic.appsone.ui.extension.application.xmlbeans.SubcolumnType[] subcolumnArray)
    {
        check_orphaned();
        arraySetterHelper(subcolumnArray, SUBCOLUMN$0);
    }
    
    /**
     * Sets ith "subcolumn" element
     */
    public void setSubcolumnArray(int i, com.appnomic.appsone.ui.extension.application.xmlbeans.SubcolumnType subcolumn)
    {
        generatedSetterHelperImpl(subcolumn, SUBCOLUMN$0, i, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_ARRAYITEM);
    }
    
    /**
     * Inserts and returns a new empty value (as xml) as the ith "subcolumn" element
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.SubcolumnType insertNewSubcolumn(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.application.xmlbeans.SubcolumnType target = null;
            target = (com.appnomic.appsone.ui.extension.application.xmlbeans.SubcolumnType)get_store().insert_element_user(SUBCOLUMN$0, i);
            return target;
        }
    }
    
    /**
     * Appends and returns a new empty value (as xml) as the last "subcolumn" element
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.SubcolumnType addNewSubcolumn()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.application.xmlbeans.SubcolumnType target = null;
            target = (com.appnomic.appsone.ui.extension.application.xmlbeans.SubcolumnType)get_store().add_element_user(SUBCOLUMN$0);
            return target;
        }
    }
    
    /**
     * Removes the ith "subcolumn" element
     */
    public void removeSubcolumn(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            get_store().remove_element(SUBCOLUMN$0, i);
        }
    }
    
    /**
     * Gets the "attribute" attribute
     */
    public java.lang.String getAttribute()
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.SimpleValue target = null;
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(ATTRIBUTE$2);
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
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(ATTRIBUTE$2);
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
            return get_store().find_attribute_user(ATTRIBUTE$2) != null;
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
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(ATTRIBUTE$2);
            if (target == null)
            {
                target = (org.apache.xmlbeans.SimpleValue)get_store().add_attribute_user(ATTRIBUTE$2);
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
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(ATTRIBUTE$2);
            if (target == null)
            {
                target = (org.apache.xmlbeans.XmlString)get_store().add_attribute_user(ATTRIBUTE$2);
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
            get_store().remove_attribute(ATTRIBUTE$2);
        }
    }
    
    /**
     * Gets the "display" attribute
     */
    public java.lang.String getDisplay()
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.SimpleValue target = null;
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(DISPLAY$4);
            if (target == null)
            {
                return null;
            }
            return target.getStringValue();
        }
    }
    
    /**
     * Gets (as xml) the "display" attribute
     */
    public org.apache.xmlbeans.XmlString xgetDisplay()
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.XmlString target = null;
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(DISPLAY$4);
            return target;
        }
    }
    
    /**
     * True if has "display" attribute
     */
    public boolean isSetDisplay()
    {
        synchronized (monitor())
        {
            check_orphaned();
            return get_store().find_attribute_user(DISPLAY$4) != null;
        }
    }
    
    /**
     * Sets the "display" attribute
     */
    public void setDisplay(java.lang.String display)
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.SimpleValue target = null;
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(DISPLAY$4);
            if (target == null)
            {
                target = (org.apache.xmlbeans.SimpleValue)get_store().add_attribute_user(DISPLAY$4);
            }
            target.setStringValue(display);
        }
    }
    
    /**
     * Sets (as xml) the "display" attribute
     */
    public void xsetDisplay(org.apache.xmlbeans.XmlString display)
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.XmlString target = null;
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(DISPLAY$4);
            if (target == null)
            {
                target = (org.apache.xmlbeans.XmlString)get_store().add_attribute_user(DISPLAY$4);
            }
            target.set(display);
        }
    }
    
    /**
     * Unsets the "display" attribute
     */
    public void unsetDisplay()
    {
        synchronized (monitor())
        {
            check_orphaned();
            get_store().remove_attribute(DISPLAY$4);
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
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(DATATYPE$6);
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
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(DATATYPE$6);
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
            return get_store().find_attribute_user(DATATYPE$6) != null;
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
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(DATATYPE$6);
            if (target == null)
            {
                target = (org.apache.xmlbeans.SimpleValue)get_store().add_attribute_user(DATATYPE$6);
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
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(DATATYPE$6);
            if (target == null)
            {
                target = (org.apache.xmlbeans.XmlString)get_store().add_attribute_user(DATATYPE$6);
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
            get_store().remove_attribute(DATATYPE$6);
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
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(LABEL$8);
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
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(LABEL$8);
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
            return get_store().find_attribute_user(LABEL$8) != null;
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
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(LABEL$8);
            if (target == null)
            {
                target = (org.apache.xmlbeans.SimpleValue)get_store().add_attribute_user(LABEL$8);
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
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(LABEL$8);
            if (target == null)
            {
                target = (org.apache.xmlbeans.XmlString)get_store().add_attribute_user(LABEL$8);
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
            get_store().remove_attribute(LABEL$8);
        }
    }
    
    /**
     * Gets the "width" attribute
     */
    public byte getWidth()
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.SimpleValue target = null;
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(WIDTH$10);
            if (target == null)
            {
                return 0;
            }
            return target.getByteValue();
        }
    }
    
    /**
     * Gets (as xml) the "width" attribute
     */
    public org.apache.xmlbeans.XmlByte xgetWidth()
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.XmlByte target = null;
            target = (org.apache.xmlbeans.XmlByte)get_store().find_attribute_user(WIDTH$10);
            return target;
        }
    }
    
    /**
     * True if has "width" attribute
     */
    public boolean isSetWidth()
    {
        synchronized (monitor())
        {
            check_orphaned();
            return get_store().find_attribute_user(WIDTH$10) != null;
        }
    }
    
    /**
     * Sets the "width" attribute
     */
    public void setWidth(byte width)
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.SimpleValue target = null;
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(WIDTH$10);
            if (target == null)
            {
                target = (org.apache.xmlbeans.SimpleValue)get_store().add_attribute_user(WIDTH$10);
            }
            target.setByteValue(width);
        }
    }
    
    /**
     * Sets (as xml) the "width" attribute
     */
    public void xsetWidth(org.apache.xmlbeans.XmlByte width)
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.XmlByte target = null;
            target = (org.apache.xmlbeans.XmlByte)get_store().find_attribute_user(WIDTH$10);
            if (target == null)
            {
                target = (org.apache.xmlbeans.XmlByte)get_store().add_attribute_user(WIDTH$10);
            }
            target.set(width);
        }
    }
    
    /**
     * Unsets the "width" attribute
     */
    public void unsetWidth()
    {
        synchronized (monitor())
        {
            check_orphaned();
            get_store().remove_attribute(WIDTH$10);
        }
    }
    
    /**
     * Gets the "sortable" attribute
     */
    public java.lang.String getSortable()
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.SimpleValue target = null;
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(SORTABLE$12);
            if (target == null)
            {
                return null;
            }
            return target.getStringValue();
        }
    }
    
    /**
     * Gets (as xml) the "sortable" attribute
     */
    public org.apache.xmlbeans.XmlString xgetSortable()
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.XmlString target = null;
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(SORTABLE$12);
            return target;
        }
    }
    
    /**
     * True if has "sortable" attribute
     */
    public boolean isSetSortable()
    {
        synchronized (monitor())
        {
            check_orphaned();
            return get_store().find_attribute_user(SORTABLE$12) != null;
        }
    }
    
    /**
     * Sets the "sortable" attribute
     */
    public void setSortable(java.lang.String sortable)
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.SimpleValue target = null;
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(SORTABLE$12);
            if (target == null)
            {
                target = (org.apache.xmlbeans.SimpleValue)get_store().add_attribute_user(SORTABLE$12);
            }
            target.setStringValue(sortable);
        }
    }
    
    /**
     * Sets (as xml) the "sortable" attribute
     */
    public void xsetSortable(org.apache.xmlbeans.XmlString sortable)
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.XmlString target = null;
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(SORTABLE$12);
            if (target == null)
            {
                target = (org.apache.xmlbeans.XmlString)get_store().add_attribute_user(SORTABLE$12);
            }
            target.set(sortable);
        }
    }
    
    /**
     * Unsets the "sortable" attribute
     */
    public void unsetSortable()
    {
        synchronized (monitor())
        {
            check_orphaned();
            get_store().remove_attribute(SORTABLE$12);
        }
    }
    
    /**
     * Gets the "filterable" attribute
     */
    public java.lang.String getFilterable()
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.SimpleValue target = null;
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(FILTERABLE$14);
            if (target == null)
            {
                return null;
            }
            return target.getStringValue();
        }
    }
    
    /**
     * Gets (as xml) the "filterable" attribute
     */
    public org.apache.xmlbeans.XmlString xgetFilterable()
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.XmlString target = null;
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(FILTERABLE$14);
            return target;
        }
    }
    
    /**
     * True if has "filterable" attribute
     */
    public boolean isSetFilterable()
    {
        synchronized (monitor())
        {
            check_orphaned();
            return get_store().find_attribute_user(FILTERABLE$14) != null;
        }
    }
    
    /**
     * Sets the "filterable" attribute
     */
    public void setFilterable(java.lang.String filterable)
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.SimpleValue target = null;
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(FILTERABLE$14);
            if (target == null)
            {
                target = (org.apache.xmlbeans.SimpleValue)get_store().add_attribute_user(FILTERABLE$14);
            }
            target.setStringValue(filterable);
        }
    }
    
    /**
     * Sets (as xml) the "filterable" attribute
     */
    public void xsetFilterable(org.apache.xmlbeans.XmlString filterable)
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.XmlString target = null;
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(FILTERABLE$14);
            if (target == null)
            {
                target = (org.apache.xmlbeans.XmlString)get_store().add_attribute_user(FILTERABLE$14);
            }
            target.set(filterable);
        }
    }
    
    /**
     * Unsets the "filterable" attribute
     */
    public void unsetFilterable()
    {
        synchronized (monitor())
        {
            check_orphaned();
            get_store().remove_attribute(FILTERABLE$14);
        }
    }
}
