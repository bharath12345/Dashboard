/*
 * XML Type:  summary-formType
 * Namespace: 
 * Java type: com.appnomic.appsone.ui.extension.application.xmlbeans.SummaryFormType
 *
 * Automatically generated - do not modify.
 */
package com.appnomic.appsone.ui.extension.application.xmlbeans.impl;
/**
 * An XML summary-formType(@).
 *
 * This is a complex type.
 */
public class SummaryFormTypeImpl extends org.apache.xmlbeans.impl.values.XmlComplexContentImpl implements com.appnomic.appsone.ui.extension.application.xmlbeans.SummaryFormType
{
    private static final long serialVersionUID = 1L;
    
    public SummaryFormTypeImpl(org.apache.xmlbeans.SchemaType sType)
    {
        super(sType);
    }
    
    private static final javax.xml.namespace.QName FORMTOOLBARS$0 = 
        new javax.xml.namespace.QName("", "form-toolbars");
    private static final javax.xml.namespace.QName FIELDGROUP$2 = 
        new javax.xml.namespace.QName("", "field-group");
    private static final javax.xml.namespace.QName FILTERS$4 = 
        new javax.xml.namespace.QName("", "filters");
    private static final javax.xml.namespace.QName ID$6 = 
        new javax.xml.namespace.QName("", "id");
    private static final javax.xml.namespace.QName LABEL$8 = 
        new javax.xml.namespace.QName("", "label");
    private static final javax.xml.namespace.QName OBJECTURL$10 = 
        new javax.xml.namespace.QName("", "object-url");
    private static final javax.xml.namespace.QName HELPURL$12 = 
        new javax.xml.namespace.QName("", "help-url");
    
    
    /**
     * Gets the "form-toolbars" element
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.FormToolbarsType getFormToolbars()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.application.xmlbeans.FormToolbarsType target = null;
            target = (com.appnomic.appsone.ui.extension.application.xmlbeans.FormToolbarsType)get_store().find_element_user(FORMTOOLBARS$0, 0);
            if (target == null)
            {
                return null;
            }
            return target;
        }
    }
    
    /**
     * Sets the "form-toolbars" element
     */
    public void setFormToolbars(com.appnomic.appsone.ui.extension.application.xmlbeans.FormToolbarsType formToolbars)
    {
        generatedSetterHelperImpl(formToolbars, FORMTOOLBARS$0, 0, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_SINGLETON);
    }
    
    /**
     * Appends and returns a new empty "form-toolbars" element
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.FormToolbarsType addNewFormToolbars()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.application.xmlbeans.FormToolbarsType target = null;
            target = (com.appnomic.appsone.ui.extension.application.xmlbeans.FormToolbarsType)get_store().add_element_user(FORMTOOLBARS$0);
            return target;
        }
    }
    
    /**
     * Gets the "field-group" element
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.FieldGroupType getFieldGroup()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.application.xmlbeans.FieldGroupType target = null;
            target = (com.appnomic.appsone.ui.extension.application.xmlbeans.FieldGroupType)get_store().find_element_user(FIELDGROUP$2, 0);
            if (target == null)
            {
                return null;
            }
            return target;
        }
    }
    
    /**
     * Sets the "field-group" element
     */
    public void setFieldGroup(com.appnomic.appsone.ui.extension.application.xmlbeans.FieldGroupType fieldGroup)
    {
        generatedSetterHelperImpl(fieldGroup, FIELDGROUP$2, 0, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_SINGLETON);
    }
    
    /**
     * Appends and returns a new empty "field-group" element
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.FieldGroupType addNewFieldGroup()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.application.xmlbeans.FieldGroupType target = null;
            target = (com.appnomic.appsone.ui.extension.application.xmlbeans.FieldGroupType)get_store().add_element_user(FIELDGROUP$2);
            return target;
        }
    }
    
    /**
     * Gets the "filters" element
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.FiltersType getFilters()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.application.xmlbeans.FiltersType target = null;
            target = (com.appnomic.appsone.ui.extension.application.xmlbeans.FiltersType)get_store().find_element_user(FILTERS$4, 0);
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
    public void setFilters(com.appnomic.appsone.ui.extension.application.xmlbeans.FiltersType filters)
    {
        generatedSetterHelperImpl(filters, FILTERS$4, 0, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_SINGLETON);
    }
    
    /**
     * Appends and returns a new empty "filters" element
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.FiltersType addNewFilters()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.application.xmlbeans.FiltersType target = null;
            target = (com.appnomic.appsone.ui.extension.application.xmlbeans.FiltersType)get_store().add_element_user(FILTERS$4);
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
