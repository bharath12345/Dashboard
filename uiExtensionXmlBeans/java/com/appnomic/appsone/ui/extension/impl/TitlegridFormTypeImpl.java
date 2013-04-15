/*
 * XML Type:  titlegrid-formType
 * Namespace: http://www.extension.ui.appsone.appnomic.com
 * Java type: com.appnomic.appsone.ui.extension.TitlegridFormType
 *
 * Automatically generated - do not modify.
 */
package com.appnomic.appsone.ui.extension.impl;
/**
 * An XML titlegrid-formType(@http://www.extension.ui.appsone.appnomic.com).
 *
 * This is a complex type.
 */
public class TitlegridFormTypeImpl extends org.apache.xmlbeans.impl.values.XmlComplexContentImpl implements com.appnomic.appsone.ui.extension.TitlegridFormType
{
    private static final long serialVersionUID = 1L;
    
    public TitlegridFormTypeImpl(org.apache.xmlbeans.SchemaType sType)
    {
        super(sType);
    }
    
    private static final javax.xml.namespace.QName FORMTOOLBAR$0 = 
        new javax.xml.namespace.QName("http://www.extension.ui.appsone.appnomic.com", "form-toolbar");
    private static final javax.xml.namespace.QName TITLEGRIDUNIT$2 = 
        new javax.xml.namespace.QName("http://www.extension.ui.appsone.appnomic.com", "titlegrid-unit");
    private static final javax.xml.namespace.QName FILTERS$4 = 
        new javax.xml.namespace.QName("http://www.extension.ui.appsone.appnomic.com", "filters");
    private static final javax.xml.namespace.QName ID$6 = 
        new javax.xml.namespace.QName("", "id");
    private static final javax.xml.namespace.QName OBJECTURL$8 = 
        new javax.xml.namespace.QName("", "object-url");
    private static final javax.xml.namespace.QName REFRESHRATE$10 = 
        new javax.xml.namespace.QName("", "refresh-rate");
    private static final javax.xml.namespace.QName HELPURL$12 = 
        new javax.xml.namespace.QName("", "help-url");
    
    
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
     * Gets the "titlegrid-unit" element
     */
    public com.appnomic.appsone.ui.extension.TitlegridUnitType getTitlegridUnit()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.TitlegridUnitType target = null;
            target = (com.appnomic.appsone.ui.extension.TitlegridUnitType)get_store().find_element_user(TITLEGRIDUNIT$2, 0);
            if (target == null)
            {
                return null;
            }
            return target;
        }
    }
    
    /**
     * Sets the "titlegrid-unit" element
     */
    public void setTitlegridUnit(com.appnomic.appsone.ui.extension.TitlegridUnitType titlegridUnit)
    {
        generatedSetterHelperImpl(titlegridUnit, TITLEGRIDUNIT$2, 0, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_SINGLETON);
    }
    
    /**
     * Appends and returns a new empty "titlegrid-unit" element
     */
    public com.appnomic.appsone.ui.extension.TitlegridUnitType addNewTitlegridUnit()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.TitlegridUnitType target = null;
            target = (com.appnomic.appsone.ui.extension.TitlegridUnitType)get_store().add_element_user(TITLEGRIDUNIT$2);
            return target;
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
     * Gets the "object-url" attribute
     */
    public java.lang.String getObjectUrl()
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.SimpleValue target = null;
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(OBJECTURL$8);
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
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(OBJECTURL$8);
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
            return get_store().find_attribute_user(OBJECTURL$8) != null;
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
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(OBJECTURL$8);
            if (target == null)
            {
                target = (org.apache.xmlbeans.SimpleValue)get_store().add_attribute_user(OBJECTURL$8);
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
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(OBJECTURL$8);
            if (target == null)
            {
                target = (org.apache.xmlbeans.XmlString)get_store().add_attribute_user(OBJECTURL$8);
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
            get_store().remove_attribute(OBJECTURL$8);
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
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(REFRESHRATE$10);
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
            target = (org.apache.xmlbeans.XmlShort)get_store().find_attribute_user(REFRESHRATE$10);
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
            return get_store().find_attribute_user(REFRESHRATE$10) != null;
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
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(REFRESHRATE$10);
            if (target == null)
            {
                target = (org.apache.xmlbeans.SimpleValue)get_store().add_attribute_user(REFRESHRATE$10);
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
            target = (org.apache.xmlbeans.XmlShort)get_store().find_attribute_user(REFRESHRATE$10);
            if (target == null)
            {
                target = (org.apache.xmlbeans.XmlShort)get_store().add_attribute_user(REFRESHRATE$10);
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
            get_store().remove_attribute(REFRESHRATE$10);
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
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(HELPURL$12);
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
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(HELPURL$12);
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
            return get_store().find_attribute_user(HELPURL$12) != null;
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
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(HELPURL$12);
            if (target == null)
            {
                target = (org.apache.xmlbeans.SimpleValue)get_store().add_attribute_user(HELPURL$12);
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
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(HELPURL$12);
            if (target == null)
            {
                target = (org.apache.xmlbeans.XmlString)get_store().add_attribute_user(HELPURL$12);
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
            get_store().remove_attribute(HELPURL$12);
        }
    }
}
