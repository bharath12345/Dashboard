/*
 * XML Type:  ui-extensionType
 * Namespace: http://www.extension.ui.appsone.appnomic.com
 * Java type: com.appnomic.appsone.ui.extension.UiExtensionType
 *
 * Automatically generated - do not modify.
 */
package com.appnomic.appsone.ui.extension.impl;
/**
 * An XML ui-extensionType(@http://www.extension.ui.appsone.appnomic.com).
 *
 * This is a complex type.
 */
public class UiExtensionTypeImpl extends org.apache.xmlbeans.impl.values.XmlComplexContentImpl implements com.appnomic.appsone.ui.extension.UiExtensionType
{
    private static final long serialVersionUID = 1L;
    
    public UiExtensionTypeImpl(org.apache.xmlbeans.SchemaType sType)
    {
        super(sType);
    }
    
    private static final javax.xml.namespace.QName PANE$0 = 
        new javax.xml.namespace.QName("http://www.extension.ui.appsone.appnomic.com", "pane");
    private static final javax.xml.namespace.QName MENU$2 = 
        new javax.xml.namespace.QName("http://www.extension.ui.appsone.appnomic.com", "menu");
    private static final javax.xml.namespace.QName ATTRIBUTES$4 = 
        new javax.xml.namespace.QName("http://www.extension.ui.appsone.appnomic.com", "attributes");
    private static final javax.xml.namespace.QName TOOLBAR$6 = 
        new javax.xml.namespace.QName("http://www.extension.ui.appsone.appnomic.com", "toolbar");
    private static final javax.xml.namespace.QName FORMS$8 = 
        new javax.xml.namespace.QName("http://www.extension.ui.appsone.appnomic.com", "forms");
    private static final javax.xml.namespace.QName ANALYSISPANES$10 = 
        new javax.xml.namespace.QName("http://www.extension.ui.appsone.appnomic.com", "analysis-panes");
    private static final javax.xml.namespace.QName LABELS$12 = 
        new javax.xml.namespace.QName("http://www.extension.ui.appsone.appnomic.com", "labels");
    private static final javax.xml.namespace.QName LABEL$14 = 
        new javax.xml.namespace.QName("", "label");
    
    
    /**
     * Gets the "pane" element
     */
    public com.appnomic.appsone.ui.extension.PaneType getPane()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.PaneType target = null;
            target = (com.appnomic.appsone.ui.extension.PaneType)get_store().find_element_user(PANE$0, 0);
            if (target == null)
            {
                return null;
            }
            return target;
        }
    }
    
    /**
     * Sets the "pane" element
     */
    public void setPane(com.appnomic.appsone.ui.extension.PaneType pane)
    {
        generatedSetterHelperImpl(pane, PANE$0, 0, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_SINGLETON);
    }
    
    /**
     * Appends and returns a new empty "pane" element
     */
    public com.appnomic.appsone.ui.extension.PaneType addNewPane()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.PaneType target = null;
            target = (com.appnomic.appsone.ui.extension.PaneType)get_store().add_element_user(PANE$0);
            return target;
        }
    }
    
    /**
     * Gets the "menu" element
     */
    public com.appnomic.appsone.ui.extension.MenuType getMenu()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.MenuType target = null;
            target = (com.appnomic.appsone.ui.extension.MenuType)get_store().find_element_user(MENU$2, 0);
            if (target == null)
            {
                return null;
            }
            return target;
        }
    }
    
    /**
     * Sets the "menu" element
     */
    public void setMenu(com.appnomic.appsone.ui.extension.MenuType menu)
    {
        generatedSetterHelperImpl(menu, MENU$2, 0, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_SINGLETON);
    }
    
    /**
     * Appends and returns a new empty "menu" element
     */
    public com.appnomic.appsone.ui.extension.MenuType addNewMenu()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.MenuType target = null;
            target = (com.appnomic.appsone.ui.extension.MenuType)get_store().add_element_user(MENU$2);
            return target;
        }
    }
    
    /**
     * Gets the "attributes" element
     */
    public com.appnomic.appsone.ui.extension.AttributesType getAttributes()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.AttributesType target = null;
            target = (com.appnomic.appsone.ui.extension.AttributesType)get_store().find_element_user(ATTRIBUTES$4, 0);
            if (target == null)
            {
                return null;
            }
            return target;
        }
    }
    
    /**
     * Sets the "attributes" element
     */
    public void setAttributes(com.appnomic.appsone.ui.extension.AttributesType attributes)
    {
        generatedSetterHelperImpl(attributes, ATTRIBUTES$4, 0, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_SINGLETON);
    }
    
    /**
     * Appends and returns a new empty "attributes" element
     */
    public com.appnomic.appsone.ui.extension.AttributesType addNewAttributes()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.AttributesType target = null;
            target = (com.appnomic.appsone.ui.extension.AttributesType)get_store().add_element_user(ATTRIBUTES$4);
            return target;
        }
    }
    
    /**
     * Gets the "toolbar" element
     */
    public com.appnomic.appsone.ui.extension.ToolbarType getToolbar()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.ToolbarType target = null;
            target = (com.appnomic.appsone.ui.extension.ToolbarType)get_store().find_element_user(TOOLBAR$6, 0);
            if (target == null)
            {
                return null;
            }
            return target;
        }
    }
    
    /**
     * Sets the "toolbar" element
     */
    public void setToolbar(com.appnomic.appsone.ui.extension.ToolbarType toolbar)
    {
        generatedSetterHelperImpl(toolbar, TOOLBAR$6, 0, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_SINGLETON);
    }
    
    /**
     * Appends and returns a new empty "toolbar" element
     */
    public com.appnomic.appsone.ui.extension.ToolbarType addNewToolbar()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.ToolbarType target = null;
            target = (com.appnomic.appsone.ui.extension.ToolbarType)get_store().add_element_user(TOOLBAR$6);
            return target;
        }
    }
    
    /**
     * Gets the "forms" element
     */
    public com.appnomic.appsone.ui.extension.FormsType getForms()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.FormsType target = null;
            target = (com.appnomic.appsone.ui.extension.FormsType)get_store().find_element_user(FORMS$8, 0);
            if (target == null)
            {
                return null;
            }
            return target;
        }
    }
    
    /**
     * Sets the "forms" element
     */
    public void setForms(com.appnomic.appsone.ui.extension.FormsType forms)
    {
        generatedSetterHelperImpl(forms, FORMS$8, 0, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_SINGLETON);
    }
    
    /**
     * Appends and returns a new empty "forms" element
     */
    public com.appnomic.appsone.ui.extension.FormsType addNewForms()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.FormsType target = null;
            target = (com.appnomic.appsone.ui.extension.FormsType)get_store().add_element_user(FORMS$8);
            return target;
        }
    }
    
    /**
     * Gets the "analysis-panes" element
     */
    public com.appnomic.appsone.ui.extension.AnalysisPanesType getAnalysisPanes()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.AnalysisPanesType target = null;
            target = (com.appnomic.appsone.ui.extension.AnalysisPanesType)get_store().find_element_user(ANALYSISPANES$10, 0);
            if (target == null)
            {
                return null;
            }
            return target;
        }
    }
    
    /**
     * Sets the "analysis-panes" element
     */
    public void setAnalysisPanes(com.appnomic.appsone.ui.extension.AnalysisPanesType analysisPanes)
    {
        generatedSetterHelperImpl(analysisPanes, ANALYSISPANES$10, 0, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_SINGLETON);
    }
    
    /**
     * Appends and returns a new empty "analysis-panes" element
     */
    public com.appnomic.appsone.ui.extension.AnalysisPanesType addNewAnalysisPanes()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.AnalysisPanesType target = null;
            target = (com.appnomic.appsone.ui.extension.AnalysisPanesType)get_store().add_element_user(ANALYSISPANES$10);
            return target;
        }
    }
    
    /**
     * Gets the "labels" element
     */
    public com.appnomic.appsone.ui.extension.LabelsType getLabels()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.LabelsType target = null;
            target = (com.appnomic.appsone.ui.extension.LabelsType)get_store().find_element_user(LABELS$12, 0);
            if (target == null)
            {
                return null;
            }
            return target;
        }
    }
    
    /**
     * Sets the "labels" element
     */
    public void setLabels(com.appnomic.appsone.ui.extension.LabelsType labels)
    {
        generatedSetterHelperImpl(labels, LABELS$12, 0, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_SINGLETON);
    }
    
    /**
     * Appends and returns a new empty "labels" element
     */
    public com.appnomic.appsone.ui.extension.LabelsType addNewLabels()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.LabelsType target = null;
            target = (com.appnomic.appsone.ui.extension.LabelsType)get_store().add_element_user(LABELS$12);
            return target;
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
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(LABEL$14);
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
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(LABEL$14);
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
            return get_store().find_attribute_user(LABEL$14) != null;
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
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_attribute_user(LABEL$14);
            if (target == null)
            {
                target = (org.apache.xmlbeans.SimpleValue)get_store().add_attribute_user(LABEL$14);
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
            target = (org.apache.xmlbeans.XmlString)get_store().find_attribute_user(LABEL$14);
            if (target == null)
            {
                target = (org.apache.xmlbeans.XmlString)get_store().add_attribute_user(LABEL$14);
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
            get_store().remove_attribute(LABEL$14);
        }
    }
}
