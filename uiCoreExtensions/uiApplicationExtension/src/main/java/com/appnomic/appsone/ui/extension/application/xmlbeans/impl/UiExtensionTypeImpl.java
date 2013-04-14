/*
 * XML Type:  ui-extensionType
 * Namespace: 
 * Java type: com.appnomic.appsone.ui.extension.application.xmlbeans.UiExtensionType
 *
 * Automatically generated - do not modify.
 */
package com.appnomic.appsone.ui.extension.application.xmlbeans.impl;
/**
 * An XML ui-extensionType(@).
 *
 * This is a complex type.
 */
public class UiExtensionTypeImpl extends org.apache.xmlbeans.impl.values.XmlComplexContentImpl implements com.appnomic.appsone.ui.extension.application.xmlbeans.UiExtensionType
{
    private static final long serialVersionUID = 1L;
    
    public UiExtensionTypeImpl(org.apache.xmlbeans.SchemaType sType)
    {
        super(sType);
    }
    
    private static final javax.xml.namespace.QName PANE$0 = 
        new javax.xml.namespace.QName("", "pane");
    private static final javax.xml.namespace.QName MENU$2 = 
        new javax.xml.namespace.QName("", "menu");
    private static final javax.xml.namespace.QName ATTRIBUTES$4 = 
        new javax.xml.namespace.QName("", "attributes");
    private static final javax.xml.namespace.QName TOOLBAR$6 = 
        new javax.xml.namespace.QName("", "toolbar");
    private static final javax.xml.namespace.QName FORMS$8 = 
        new javax.xml.namespace.QName("", "forms");
    private static final javax.xml.namespace.QName ANALYSISPANES$10 = 
        new javax.xml.namespace.QName("", "analysis-panes");
    private static final javax.xml.namespace.QName LABELS$12 = 
        new javax.xml.namespace.QName("", "labels");
    private static final javax.xml.namespace.QName LABEL$14 = 
        new javax.xml.namespace.QName("", "label");
    
    
    /**
     * Gets the "pane" element
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.PaneType getPane()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.application.xmlbeans.PaneType target = null;
            target = (com.appnomic.appsone.ui.extension.application.xmlbeans.PaneType)get_store().find_element_user(PANE$0, 0);
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
    public void setPane(com.appnomic.appsone.ui.extension.application.xmlbeans.PaneType pane)
    {
        generatedSetterHelperImpl(pane, PANE$0, 0, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_SINGLETON);
    }
    
    /**
     * Appends and returns a new empty "pane" element
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.PaneType addNewPane()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.application.xmlbeans.PaneType target = null;
            target = (com.appnomic.appsone.ui.extension.application.xmlbeans.PaneType)get_store().add_element_user(PANE$0);
            return target;
        }
    }
    
    /**
     * Gets the "menu" element
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.MenuType getMenu()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.application.xmlbeans.MenuType target = null;
            target = (com.appnomic.appsone.ui.extension.application.xmlbeans.MenuType)get_store().find_element_user(MENU$2, 0);
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
    public void setMenu(com.appnomic.appsone.ui.extension.application.xmlbeans.MenuType menu)
    {
        generatedSetterHelperImpl(menu, MENU$2, 0, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_SINGLETON);
    }
    
    /**
     * Appends and returns a new empty "menu" element
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.MenuType addNewMenu()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.application.xmlbeans.MenuType target = null;
            target = (com.appnomic.appsone.ui.extension.application.xmlbeans.MenuType)get_store().add_element_user(MENU$2);
            return target;
        }
    }
    
    /**
     * Gets the "attributes" element
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.AttributesType getAttributes()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.application.xmlbeans.AttributesType target = null;
            target = (com.appnomic.appsone.ui.extension.application.xmlbeans.AttributesType)get_store().find_element_user(ATTRIBUTES$4, 0);
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
    public void setAttributes(com.appnomic.appsone.ui.extension.application.xmlbeans.AttributesType attributes)
    {
        generatedSetterHelperImpl(attributes, ATTRIBUTES$4, 0, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_SINGLETON);
    }
    
    /**
     * Appends and returns a new empty "attributes" element
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.AttributesType addNewAttributes()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.application.xmlbeans.AttributesType target = null;
            target = (com.appnomic.appsone.ui.extension.application.xmlbeans.AttributesType)get_store().add_element_user(ATTRIBUTES$4);
            return target;
        }
    }
    
    /**
     * Gets the "toolbar" element
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.ToolbarType getToolbar()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.application.xmlbeans.ToolbarType target = null;
            target = (com.appnomic.appsone.ui.extension.application.xmlbeans.ToolbarType)get_store().find_element_user(TOOLBAR$6, 0);
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
    public void setToolbar(com.appnomic.appsone.ui.extension.application.xmlbeans.ToolbarType toolbar)
    {
        generatedSetterHelperImpl(toolbar, TOOLBAR$6, 0, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_SINGLETON);
    }
    
    /**
     * Appends and returns a new empty "toolbar" element
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.ToolbarType addNewToolbar()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.application.xmlbeans.ToolbarType target = null;
            target = (com.appnomic.appsone.ui.extension.application.xmlbeans.ToolbarType)get_store().add_element_user(TOOLBAR$6);
            return target;
        }
    }
    
    /**
     * Gets the "forms" element
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.FormsType getForms()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.application.xmlbeans.FormsType target = null;
            target = (com.appnomic.appsone.ui.extension.application.xmlbeans.FormsType)get_store().find_element_user(FORMS$8, 0);
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
    public void setForms(com.appnomic.appsone.ui.extension.application.xmlbeans.FormsType forms)
    {
        generatedSetterHelperImpl(forms, FORMS$8, 0, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_SINGLETON);
    }
    
    /**
     * Appends and returns a new empty "forms" element
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.FormsType addNewForms()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.application.xmlbeans.FormsType target = null;
            target = (com.appnomic.appsone.ui.extension.application.xmlbeans.FormsType)get_store().add_element_user(FORMS$8);
            return target;
        }
    }
    
    /**
     * Gets the "analysis-panes" element
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.AnalysisPanesType getAnalysisPanes()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.application.xmlbeans.AnalysisPanesType target = null;
            target = (com.appnomic.appsone.ui.extension.application.xmlbeans.AnalysisPanesType)get_store().find_element_user(ANALYSISPANES$10, 0);
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
    public void setAnalysisPanes(com.appnomic.appsone.ui.extension.application.xmlbeans.AnalysisPanesType analysisPanes)
    {
        generatedSetterHelperImpl(analysisPanes, ANALYSISPANES$10, 0, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_SINGLETON);
    }
    
    /**
     * Appends and returns a new empty "analysis-panes" element
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.AnalysisPanesType addNewAnalysisPanes()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.application.xmlbeans.AnalysisPanesType target = null;
            target = (com.appnomic.appsone.ui.extension.application.xmlbeans.AnalysisPanesType)get_store().add_element_user(ANALYSISPANES$10);
            return target;
        }
    }
    
    /**
     * Gets the "labels" element
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.LabelsType getLabels()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.application.xmlbeans.LabelsType target = null;
            target = (com.appnomic.appsone.ui.extension.application.xmlbeans.LabelsType)get_store().find_element_user(LABELS$12, 0);
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
    public void setLabels(com.appnomic.appsone.ui.extension.application.xmlbeans.LabelsType labels)
    {
        generatedSetterHelperImpl(labels, LABELS$12, 0, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_SINGLETON);
    }
    
    /**
     * Appends and returns a new empty "labels" element
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.LabelsType addNewLabels()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.application.xmlbeans.LabelsType target = null;
            target = (com.appnomic.appsone.ui.extension.application.xmlbeans.LabelsType)get_store().add_element_user(LABELS$12);
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
