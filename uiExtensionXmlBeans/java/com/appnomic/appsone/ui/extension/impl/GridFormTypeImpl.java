/*
 * XML Type:  grid-formType
 * Namespace: http://www.extension.ui.appsone.appnomic.com
 * Java type: com.appnomic.appsone.ui.extension.GridFormType
 *
 * Automatically generated - do not modify.
 */
package com.appnomic.appsone.ui.extension.impl;
/**
 * An XML grid-formType(@http://www.extension.ui.appsone.appnomic.com).
 *
 * This is a complex type.
 */
public class GridFormTypeImpl extends org.apache.xmlbeans.impl.values.XmlComplexContentImpl implements com.appnomic.appsone.ui.extension.GridFormType
{
    private static final long serialVersionUID = 1L;
    
    public GridFormTypeImpl(org.apache.xmlbeans.SchemaType sType)
    {
        super(sType);
    }
    
    private static final javax.xml.namespace.QName FORMTOOLBAR$0 = 
        new javax.xml.namespace.QName("http://www.extension.ui.appsone.appnomic.com", "form-toolbar");
    private static final javax.xml.namespace.QName COLUMNS$2 = 
        new javax.xml.namespace.QName("http://www.extension.ui.appsone.appnomic.com", "columns");
    private static final javax.xml.namespace.QName FILTERS$4 = 
        new javax.xml.namespace.QName("http://www.extension.ui.appsone.appnomic.com", "filters");
    private static final javax.xml.namespace.QName ID$6 = 
        new javax.xml.namespace.QName("", "id");
    private static final javax.xml.namespace.QName LABEL$8 = 
        new javax.xml.namespace.QName("", "label");
    private static final javax.xml.namespace.QName OBJECTURL$10 = 
        new javax.xml.namespace.QName("", "object-url");
    private static final javax.xml.namespace.QName REFRESHRATE$12 = 
        new javax.xml.namespace.QName("", "refresh-rate");
    private static final javax.xml.namespace.QName HELPURL$14 = 
        new javax.xml.namespace.QName("", "help-url");
    private static final javax.xml.namespace.QName REF$16 = 
        new javax.xml.namespace.QName("", "ref");
    private static final javax.xml.namespace.QName QUERYBY$18 = 
        new javax.xml.namespace.QName("", "query-by");
    
    
    /**
     * Gets the "form-toolbar" element
     */
    public com.appnomic.appsone.ui.extension.FormToolbarType getFormToolbar()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.FormToolbarType target = null;
            target = (com.appnomic.appsone.ui.extension.FormToolbarType)get_store().find_element_user(FORMTOOLBAR$0, 0);
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
            return get_store().count_elements(FORMTOOLBAR$0) != 0;
        }
    }
    
    /**
     * Sets the "form-toolbar" element
     */
    public void setFormToolbar(com.appnomic.appsone.ui.extension.FormToolbarType formToolbar)
    {
        generatedSetterHelperImpl(formToolbar, FORMTOOLBAR$0, 0, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_SINGLETON);
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
            target = (com.appnomic.appsone.ui.extension.FormToolbarType)get_store().add_element_user(FORMTOOLBAR$0);
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
            get_store().remove_element(FORMTOOLBAR$0, 0);
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
            target = (com.appnomic.appsone.ui.extension.ColumnsType)get_store().find_element_user(COLUMNS$2, 0);
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
            return get_store().count_elements(COLUMNS$2) != 0;
        }
    }
    
    /**
     * Sets the "columns" element
     */
    public void setColumns(com.appnomic.appsone.ui.extension.ColumnsType columns)
    {
        generatedSetterHelperImpl(columns, COLUMNS$2, 0, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_SINGLETON);
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
            target = (com.appnomic.appsone.ui.extension.ColumnsType)get_store().add_element_user(COLUMNS$2);
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
            get_store().remove_element(COLUMNS$2, 0);
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
            target = (com.appnomic.appsone.ui.extension.FiltersType)get_store().find_element_user(FILTERS$4, 0);
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
            return get_store().count_elements(FILTERS$4) != 0;
        }
    }
    
    /**
     * Sets the "filters" element
     */
    public void setFilters(com.appnomic.appsone.ui.extension.FiltersType filters)
    {
        generatedSetterHelperImpl(filters, FILTERS$4, 0, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_SINGLETON);
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
            target = (com.appnomic.appsone.ui.extension.FiltersType)get_store().add_element_user(FILTERS$4);
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
            get_store().remove_element(FILTERS$4, 0);
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
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(ID$6);
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
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(ID$6);
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
            return get_store().find_attribute_user(ID$6) != null;
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
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(ID$6);
            if (target == null)
            {
                target = (org.apache.xmlbeans.SimpleValue)get_store().add_attribute_user(ID$6);
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
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(ID$6);
            if (target == null)
            {
                target = (org.apache.xmlbeans.XmlString)get_store().add_attribute_user(ID$6);
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
            get_store().remove_attribute(ID$6);
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
     * Gets the "object-url" attribute
     */
    public java.lang.String getObjectUrl()
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.SimpleValue target = null;
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(OBJECTURL$10);
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
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(OBJECTURL$10);
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
            return get_store().find_attribute_user(OBJECTURL$10) != null;
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
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(OBJECTURL$10);
            if (target == null)
            {
                target = (org.apache.xmlbeans.SimpleValue)get_store().add_attribute_user(OBJECTURL$10);
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
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(OBJECTURL$10);
            if (target == null)
            {
                target = (org.apache.xmlbeans.XmlString)get_store().add_attribute_user(OBJECTURL$10);
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
            get_store().remove_attribute(OBJECTURL$10);
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
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(REFRESHRATE$12);
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
            target = (org.apache.xmlbeans.XmlShort)get_store().find_attribute_user(REFRESHRATE$12);
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
            return get_store().find_attribute_user(REFRESHRATE$12) != null;
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
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(REFRESHRATE$12);
            if (target == null)
            {
                target = (org.apache.xmlbeans.SimpleValue)get_store().add_attribute_user(REFRESHRATE$12);
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
            target = (org.apache.xmlbeans.XmlShort)get_store().find_attribute_user(REFRESHRATE$12);
            if (target == null)
            {
                target = (org.apache.xmlbeans.XmlShort)get_store().add_attribute_user(REFRESHRATE$12);
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
            get_store().remove_attribute(REFRESHRATE$12);
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
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(HELPURL$14);
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
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(HELPURL$14);
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
            return get_store().find_attribute_user(HELPURL$14) != null;
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
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(HELPURL$14);
            if (target == null)
            {
                target = (org.apache.xmlbeans.SimpleValue)get_store().add_attribute_user(HELPURL$14);
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
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(HELPURL$14);
            if (target == null)
            {
                target = (org.apache.xmlbeans.XmlString)get_store().add_attribute_user(HELPURL$14);
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
            get_store().remove_attribute(HELPURL$14);
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
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(REF$16);
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
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(REF$16);
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
            return get_store().find_attribute_user(REF$16) != null;
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
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(REF$16);
            if (target == null)
            {
                target = (org.apache.xmlbeans.SimpleValue)get_store().add_attribute_user(REF$16);
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
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(REF$16);
            if (target == null)
            {
                target = (org.apache.xmlbeans.XmlString)get_store().add_attribute_user(REF$16);
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
            get_store().remove_attribute(REF$16);
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
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(QUERYBY$18);
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
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(QUERYBY$18);
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
            return get_store().find_attribute_user(QUERYBY$18) != null;
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
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(QUERYBY$18);
            if (target == null)
            {
                target = (org.apache.xmlbeans.SimpleValue)get_store().add_attribute_user(QUERYBY$18);
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
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(QUERYBY$18);
            if (target == null)
            {
                target = (org.apache.xmlbeans.XmlString)get_store().add_attribute_user(QUERYBY$18);
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
            get_store().remove_attribute(QUERYBY$18);
        }
    }
}
