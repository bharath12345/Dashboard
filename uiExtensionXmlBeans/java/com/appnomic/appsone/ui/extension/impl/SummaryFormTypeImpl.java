/*
 * XML Type:  summary-formType
 * Namespace: http://www.extension.ui.appsone.appnomic.com
 * Java type: com.appnomic.appsone.ui.extension.SummaryFormType
 *
 * Automatically generated - do not modify.
 */
package com.appnomic.appsone.ui.extension.impl;
/**
 * An XML summary-formType(@http://www.extension.ui.appsone.appnomic.com).
 *
 * This is a complex type.
 */
public class SummaryFormTypeImpl extends org.apache.xmlbeans.impl.values.XmlComplexContentImpl implements com.appnomic.appsone.ui.extension.SummaryFormType
{
    private static final long serialVersionUID = 1L;
    
    public SummaryFormTypeImpl(org.apache.xmlbeans.SchemaType sType)
    {
        super(sType);
    }
    
    private static final javax.xml.namespace.QName FORMTOOLBARS$0 = 
        new javax.xml.namespace.QName("http://www.extension.ui.appsone.appnomic.com", "form-toolbars");
    private static final javax.xml.namespace.QName FIELDGROUP$2 = 
        new javax.xml.namespace.QName("http://www.extension.ui.appsone.appnomic.com", "field-group");
    private static final javax.xml.namespace.QName FORMTOOLBAR$4 = 
        new javax.xml.namespace.QName("http://www.extension.ui.appsone.appnomic.com", "form-toolbar");
    private static final javax.xml.namespace.QName COLUMNS$6 = 
        new javax.xml.namespace.QName("http://www.extension.ui.appsone.appnomic.com", "columns");
    private static final javax.xml.namespace.QName FILTERS$8 = 
        new javax.xml.namespace.QName("http://www.extension.ui.appsone.appnomic.com", "filters");
    private static final javax.xml.namespace.QName ID$10 = 
        new javax.xml.namespace.QName("", "id");
    private static final javax.xml.namespace.QName LABEL$12 = 
        new javax.xml.namespace.QName("", "label");
    private static final javax.xml.namespace.QName OBJECTURL$14 = 
        new javax.xml.namespace.QName("", "object-url");
    private static final javax.xml.namespace.QName HELPURL$16 = 
        new javax.xml.namespace.QName("", "help-url");
    private static final javax.xml.namespace.QName REFRESHRATE$18 = 
        new javax.xml.namespace.QName("", "refresh-rate");
    private static final javax.xml.namespace.QName REF$20 = 
        new javax.xml.namespace.QName("", "ref");
    private static final javax.xml.namespace.QName QUERYBY$22 = 
        new javax.xml.namespace.QName("", "query-by");
    
    
    /**
     * Gets the "form-toolbars" element
     */
    public com.appnomic.appsone.ui.extension.FormToolbarsType getFormToolbars()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.FormToolbarsType target = null;
            target = (com.appnomic.appsone.ui.extension.FormToolbarsType)get_store().find_element_user(FORMTOOLBARS$0, 0);
            if (target == null)
            {
                return null;
            }
            return target;
        }
    }
    
    /**
     * True if has "form-toolbars" element
     */
    public boolean isSetFormToolbars()
    {
        synchronized (monitor())
        {
            check_orphaned();
            return get_store().count_elements(FORMTOOLBARS$0) != 0;
        }
    }
    
    /**
     * Sets the "form-toolbars" element
     */
    public void setFormToolbars(com.appnomic.appsone.ui.extension.FormToolbarsType formToolbars)
    {
        generatedSetterHelperImpl(formToolbars, FORMTOOLBARS$0, 0, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_SINGLETON);
    }
    
    /**
     * Appends and returns a new empty "form-toolbars" element
     */
    public com.appnomic.appsone.ui.extension.FormToolbarsType addNewFormToolbars()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.FormToolbarsType target = null;
            target = (com.appnomic.appsone.ui.extension.FormToolbarsType)get_store().add_element_user(FORMTOOLBARS$0);
            return target;
        }
    }
    
    /**
     * Unsets the "form-toolbars" element
     */
    public void unsetFormToolbars()
    {
        synchronized (monitor())
        {
            check_orphaned();
            get_store().remove_element(FORMTOOLBARS$0, 0);
        }
    }
    
    /**
     * Gets array of all "field-group" elements
     */
    public com.appnomic.appsone.ui.extension.FieldGroupType[] getFieldGroupArray()
    {
        synchronized (monitor())
        {
            check_orphaned();
            java.util.List targetList = new java.util.ArrayList();
            get_store().find_all_element_users(FIELDGROUP$2, targetList);
            com.appnomic.appsone.ui.extension.FieldGroupType[] result = new com.appnomic.appsone.ui.extension.FieldGroupType[targetList.size()];
            targetList.toArray(result);
            return result;
        }
    }
    
    /**
     * Gets ith "field-group" element
     */
    public com.appnomic.appsone.ui.extension.FieldGroupType getFieldGroupArray(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.FieldGroupType target = null;
            target = (com.appnomic.appsone.ui.extension.FieldGroupType)get_store().find_element_user(FIELDGROUP$2, i);
            if (target == null)
            {
                throw new IndexOutOfBoundsException();
            }
            return target;
        }
    }
    
    /**
     * Returns number of "field-group" element
     */
    public int sizeOfFieldGroupArray()
    {
        synchronized (monitor())
        {
            check_orphaned();
            return get_store().count_elements(FIELDGROUP$2);
        }
    }
    
    /**
     * Sets array of all "field-group" element  WARNING: This method is not atomicaly synchronized.
     */
    public void setFieldGroupArray(com.appnomic.appsone.ui.extension.FieldGroupType[] fieldGroupArray)
    {
        check_orphaned();
        arraySetterHelper(fieldGroupArray, FIELDGROUP$2);
    }
    
    /**
     * Sets ith "field-group" element
     */
    public void setFieldGroupArray(int i, com.appnomic.appsone.ui.extension.FieldGroupType fieldGroup)
    {
        generatedSetterHelperImpl(fieldGroup, FIELDGROUP$2, i, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_ARRAYITEM);
    }
    
    /**
     * Inserts and returns a new empty value (as xml) as the ith "field-group" element
     */
    public com.appnomic.appsone.ui.extension.FieldGroupType insertNewFieldGroup(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.FieldGroupType target = null;
            target = (com.appnomic.appsone.ui.extension.FieldGroupType)get_store().insert_element_user(FIELDGROUP$2, i);
            return target;
        }
    }
    
    /**
     * Appends and returns a new empty value (as xml) as the last "field-group" element
     */
    public com.appnomic.appsone.ui.extension.FieldGroupType addNewFieldGroup()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.FieldGroupType target = null;
            target = (com.appnomic.appsone.ui.extension.FieldGroupType)get_store().add_element_user(FIELDGROUP$2);
            return target;
        }
    }
    
    /**
     * Removes the ith "field-group" element
     */
    public void removeFieldGroup(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            get_store().remove_element(FIELDGROUP$2, i);
        }
    }
    
    /**
     * Gets the "form-toolbar" element
     */
    public com.appnomic.appsone.ui.extension.FormToolbarType getFormToolbar()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.FormToolbarType target = null;
            target = (com.appnomic.appsone.ui.extension.FormToolbarType)get_store().find_element_user(FORMTOOLBAR$4, 0);
            if (target == null)
            {
                return null;
            }
            return target;
        }
    }
    
    /**
     * True if has "form-toolbar" element
     */
    public boolean isSetFormToolbar()
    {
        synchronized (monitor())
        {
            check_orphaned();
            return get_store().count_elements(FORMTOOLBAR$4) != 0;
        }
    }
    
    /**
     * Sets the "form-toolbar" element
     */
    public void setFormToolbar(com.appnomic.appsone.ui.extension.FormToolbarType formToolbar)
    {
        generatedSetterHelperImpl(formToolbar, FORMTOOLBAR$4, 0, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_SINGLETON);
    }
    
    /**
     * Appends and returns a new empty "form-toolbar" element
     */
    public com.appnomic.appsone.ui.extension.FormToolbarType addNewFormToolbar()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.FormToolbarType target = null;
            target = (com.appnomic.appsone.ui.extension.FormToolbarType)get_store().add_element_user(FORMTOOLBAR$4);
            return target;
        }
    }
    
    /**
     * Unsets the "form-toolbar" element
     */
    public void unsetFormToolbar()
    {
        synchronized (monitor())
        {
            check_orphaned();
            get_store().remove_element(FORMTOOLBAR$4, 0);
        }
    }
    
    /**
     * Gets the "columns" element
     */
    public com.appnomic.appsone.ui.extension.ColumnsType getColumns()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.ColumnsType target = null;
            target = (com.appnomic.appsone.ui.extension.ColumnsType)get_store().find_element_user(COLUMNS$6, 0);
            if (target == null)
            {
                return null;
            }
            return target;
        }
    }
    
    /**
     * True if has "columns" element
     */
    public boolean isSetColumns()
    {
        synchronized (monitor())
        {
            check_orphaned();
            return get_store().count_elements(COLUMNS$6) != 0;
        }
    }
    
    /**
     * Sets the "columns" element
     */
    public void setColumns(com.appnomic.appsone.ui.extension.ColumnsType columns)
    {
        generatedSetterHelperImpl(columns, COLUMNS$6, 0, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_SINGLETON);
    }
    
    /**
     * Appends and returns a new empty "columns" element
     */
    public com.appnomic.appsone.ui.extension.ColumnsType addNewColumns()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.ColumnsType target = null;
            target = (com.appnomic.appsone.ui.extension.ColumnsType)get_store().add_element_user(COLUMNS$6);
            return target;
        }
    }
    
    /**
     * Unsets the "columns" element
     */
    public void unsetColumns()
    {
        synchronized (monitor())
        {
            check_orphaned();
            get_store().remove_element(COLUMNS$6, 0);
        }
    }
    
    /**
     * Gets the "filters" element
     */
    public com.appnomic.appsone.ui.extension.FiltersType getFilters()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.FiltersType target = null;
            target = (com.appnomic.appsone.ui.extension.FiltersType)get_store().find_element_user(FILTERS$8, 0);
            if (target == null)
            {
                return null;
            }
            return target;
        }
    }
    
    /**
     * True if has "filters" element
     */
    public boolean isSetFilters()
    {
        synchronized (monitor())
        {
            check_orphaned();
            return get_store().count_elements(FILTERS$8) != 0;
        }
    }
    
    /**
     * Sets the "filters" element
     */
    public void setFilters(com.appnomic.appsone.ui.extension.FiltersType filters)
    {
        generatedSetterHelperImpl(filters, FILTERS$8, 0, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_SINGLETON);
    }
    
    /**
     * Appends and returns a new empty "filters" element
     */
    public com.appnomic.appsone.ui.extension.FiltersType addNewFilters()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.FiltersType target = null;
            target = (com.appnomic.appsone.ui.extension.FiltersType)get_store().add_element_user(FILTERS$8);
            return target;
        }
    }
    
    /**
     * Unsets the "filters" element
     */
    public void unsetFilters()
    {
        synchronized (monitor())
        {
            check_orphaned();
            get_store().remove_element(FILTERS$8, 0);
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
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(ID$10);
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
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(ID$10);
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
            return get_store().find_attribute_user(ID$10) != null;
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
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(ID$10);
            if (target == null)
            {
                target = (org.apache.xmlbeans.SimpleValue)get_store().add_attribute_user(ID$10);
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
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(ID$10);
            if (target == null)
            {
                target = (org.apache.xmlbeans.XmlString)get_store().add_attribute_user(ID$10);
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
            get_store().remove_attribute(ID$10);
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
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(LABEL$12);
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
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(LABEL$12);
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
            return get_store().find_attribute_user(LABEL$12) != null;
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
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(LABEL$12);
            if (target == null)
            {
                target = (org.apache.xmlbeans.SimpleValue)get_store().add_attribute_user(LABEL$12);
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
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(LABEL$12);
            if (target == null)
            {
                target = (org.apache.xmlbeans.XmlString)get_store().add_attribute_user(LABEL$12);
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
            get_store().remove_attribute(LABEL$12);
        }
    }
    
    /**
     * Gets the "object-url" attribute
     */
    public java.lang.String getObjectUrl()
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.SimpleValue target = null;
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(OBJECTURL$14);
            if (target == null)
            {
                return null;
            }
            return target.getStringValue();
        }
    }
    
    /**
     * Gets (as xml) the "object-url" attribute
     */
    public org.apache.xmlbeans.XmlString xgetObjectUrl()
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.XmlString target = null;
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(OBJECTURL$14);
            return target;
        }
    }
    
    /**
     * True if has "object-url" attribute
     */
    public boolean isSetObjectUrl()
    {
        synchronized (monitor())
        {
            check_orphaned();
            return get_store().find_attribute_user(OBJECTURL$14) != null;
        }
    }
    
    /**
     * Sets the "object-url" attribute
     */
    public void setObjectUrl(java.lang.String objectUrl)
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.SimpleValue target = null;
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(OBJECTURL$14);
            if (target == null)
            {
                target = (org.apache.xmlbeans.SimpleValue)get_store().add_attribute_user(OBJECTURL$14);
            }
            target.setStringValue(objectUrl);
        }
    }
    
    /**
     * Sets (as xml) the "object-url" attribute
     */
    public void xsetObjectUrl(org.apache.xmlbeans.XmlString objectUrl)
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.XmlString target = null;
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(OBJECTURL$14);
            if (target == null)
            {
                target = (org.apache.xmlbeans.XmlString)get_store().add_attribute_user(OBJECTURL$14);
            }
            target.set(objectUrl);
        }
    }
    
    /**
     * Unsets the "object-url" attribute
     */
    public void unsetObjectUrl()
    {
        synchronized (monitor())
        {
            check_orphaned();
            get_store().remove_attribute(OBJECTURL$14);
        }
    }
    
    /**
     * Gets the "help-url" attribute
     */
    public java.lang.String getHelpUrl()
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.SimpleValue target = null;
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(HELPURL$16);
            if (target == null)
            {
                return null;
            }
            return target.getStringValue();
        }
    }
    
    /**
     * Gets (as xml) the "help-url" attribute
     */
    public org.apache.xmlbeans.XmlString xgetHelpUrl()
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.XmlString target = null;
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(HELPURL$16);
            return target;
        }
    }
    
    /**
     * True if has "help-url" attribute
     */
    public boolean isSetHelpUrl()
    {
        synchronized (monitor())
        {
            check_orphaned();
            return get_store().find_attribute_user(HELPURL$16) != null;
        }
    }
    
    /**
     * Sets the "help-url" attribute
     */
    public void setHelpUrl(java.lang.String helpUrl)
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.SimpleValue target = null;
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(HELPURL$16);
            if (target == null)
            {
                target = (org.apache.xmlbeans.SimpleValue)get_store().add_attribute_user(HELPURL$16);
            }
            target.setStringValue(helpUrl);
        }
    }
    
    /**
     * Sets (as xml) the "help-url" attribute
     */
    public void xsetHelpUrl(org.apache.xmlbeans.XmlString helpUrl)
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.XmlString target = null;
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(HELPURL$16);
            if (target == null)
            {
                target = (org.apache.xmlbeans.XmlString)get_store().add_attribute_user(HELPURL$16);
            }
            target.set(helpUrl);
        }
    }
    
    /**
     * Unsets the "help-url" attribute
     */
    public void unsetHelpUrl()
    {
        synchronized (monitor())
        {
            check_orphaned();
            get_store().remove_attribute(HELPURL$16);
        }
    }
    
    /**
     * Gets the "refresh-rate" attribute
     */
    public short getRefreshRate()
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.SimpleValue target = null;
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(REFRESHRATE$18);
            if (target == null)
            {
                return 0;
            }
            return target.getShortValue();
        }
    }
    
    /**
     * Gets (as xml) the "refresh-rate" attribute
     */
    public org.apache.xmlbeans.XmlShort xgetRefreshRate()
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.XmlShort target = null;
            target = (org.apache.xmlbeans.XmlShort)get_store().find_attribute_user(REFRESHRATE$18);
            return target;
        }
    }
    
    /**
     * True if has "refresh-rate" attribute
     */
    public boolean isSetRefreshRate()
    {
        synchronized (monitor())
        {
            check_orphaned();
            return get_store().find_attribute_user(REFRESHRATE$18) != null;
        }
    }
    
    /**
     * Sets the "refresh-rate" attribute
     */
    public void setRefreshRate(short refreshRate)
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.SimpleValue target = null;
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(REFRESHRATE$18);
            if (target == null)
            {
                target = (org.apache.xmlbeans.SimpleValue)get_store().add_attribute_user(REFRESHRATE$18);
            }
            target.setShortValue(refreshRate);
        }
    }
    
    /**
     * Sets (as xml) the "refresh-rate" attribute
     */
    public void xsetRefreshRate(org.apache.xmlbeans.XmlShort refreshRate)
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.XmlShort target = null;
            target = (org.apache.xmlbeans.XmlShort)get_store().find_attribute_user(REFRESHRATE$18);
            if (target == null)
            {
                target = (org.apache.xmlbeans.XmlShort)get_store().add_attribute_user(REFRESHRATE$18);
            }
            target.set(refreshRate);
        }
    }
    
    /**
     * Unsets the "refresh-rate" attribute
     */
    public void unsetRefreshRate()
    {
        synchronized (monitor())
        {
            check_orphaned();
            get_store().remove_attribute(REFRESHRATE$18);
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
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(REF$20);
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
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(REF$20);
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
            return get_store().find_attribute_user(REF$20) != null;
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
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(REF$20);
            if (target == null)
            {
                target = (org.apache.xmlbeans.SimpleValue)get_store().add_attribute_user(REF$20);
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
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(REF$20);
            if (target == null)
            {
                target = (org.apache.xmlbeans.XmlString)get_store().add_attribute_user(REF$20);
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
            get_store().remove_attribute(REF$20);
        }
    }
    
    /**
     * Gets the "query-by" attribute
     */
    public java.lang.String getQueryBy()
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.SimpleValue target = null;
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(QUERYBY$22);
            if (target == null)
            {
                return null;
            }
            return target.getStringValue();
        }
    }
    
    /**
     * Gets (as xml) the "query-by" attribute
     */
    public org.apache.xmlbeans.XmlString xgetQueryBy()
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.XmlString target = null;
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(QUERYBY$22);
            return target;
        }
    }
    
    /**
     * True if has "query-by" attribute
     */
    public boolean isSetQueryBy()
    {
        synchronized (monitor())
        {
            check_orphaned();
            return get_store().find_attribute_user(QUERYBY$22) != null;
        }
    }
    
    /**
     * Sets the "query-by" attribute
     */
    public void setQueryBy(java.lang.String queryBy)
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.SimpleValue target = null;
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(QUERYBY$22);
            if (target == null)
            {
                target = (org.apache.xmlbeans.SimpleValue)get_store().add_attribute_user(QUERYBY$22);
            }
            target.setStringValue(queryBy);
        }
    }
    
    /**
     * Sets (as xml) the "query-by" attribute
     */
    public void xsetQueryBy(org.apache.xmlbeans.XmlString queryBy)
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.XmlString target = null;
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(QUERYBY$22);
            if (target == null)
            {
                target = (org.apache.xmlbeans.XmlString)get_store().add_attribute_user(QUERYBY$22);
            }
            target.set(queryBy);
        }
    }
    
    /**
     * Unsets the "query-by" attribute
     */
    public void unsetQueryBy()
    {
        synchronized (monitor())
        {
            check_orphaned();
            get_store().remove_attribute(QUERYBY$22);
        }
    }
}
