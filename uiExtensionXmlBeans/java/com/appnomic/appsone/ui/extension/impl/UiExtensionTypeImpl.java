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
     * Gets array of all "pane" elements
     */
    public com.appnomic.appsone.ui.extension.PaneType[] getPaneArray()
    {
        synchronized (monitor())
        {
            check_orphaned();
            java.util.List targetList = new java.util.ArrayList();
            get_store().find_all_element_users(PANE$0, targetList);
            com.appnomic.appsone.ui.extension.PaneType[] result = new com.appnomic.appsone.ui.extension.PaneType[targetList.size()];
            targetList.toArray(result);
            return result;
        }
    }
    
    /**
     * Gets ith "pane" element
     */
    public com.appnomic.appsone.ui.extension.PaneType getPaneArray(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.PaneType target = null;
            target = (com.appnomic.appsone.ui.extension.PaneType)get_store().find_element_user(PANE$0, i);
            if (target == null)
            {
                throw new IndexOutOfBoundsException();
            }
            return target;
        }
    }
    
    /**
     * Returns number of "pane" element
     */
    public int sizeOfPaneArray()
    {
        synchronized (monitor())
        {
            check_orphaned();
            return get_store().count_elements(PANE$0);
        }
    }
    
    /**
     * Sets array of all "pane" element  WARNING: This method is not atomicaly synchronized.
     */
    public void setPaneArray(com.appnomic.appsone.ui.extension.PaneType[] paneArray)
    {
        check_orphaned();
        arraySetterHelper(paneArray, PANE$0);
    }
    
    /**
     * Sets ith "pane" element
     */
    public void setPaneArray(int i, com.appnomic.appsone.ui.extension.PaneType pane)
    {
        generatedSetterHelperImpl(pane, PANE$0, i, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_ARRAYITEM);
    }
    
    /**
     * Inserts and returns a new empty value (as xml) as the ith "pane" element
     */
    public com.appnomic.appsone.ui.extension.PaneType insertNewPane(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.PaneType target = null;
            target = (com.appnomic.appsone.ui.extension.PaneType)get_store().insert_element_user(PANE$0, i);
            return target;
        }
    }
    
    /**
     * Appends and returns a new empty value (as xml) as the last "pane" element
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
     * Removes the ith "pane" element
     */
    public void removePane(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            get_store().remove_element(PANE$0, i);
        }
    }
    
    /**
     * Gets array of all "menu" elements
     */
    public com.appnomic.appsone.ui.extension.MenuType[] getMenuArray()
    {
        synchronized (monitor())
        {
            check_orphaned();
            java.util.List targetList = new java.util.ArrayList();
            get_store().find_all_element_users(MENU$2, targetList);
            com.appnomic.appsone.ui.extension.MenuType[] result = new com.appnomic.appsone.ui.extension.MenuType[targetList.size()];
            targetList.toArray(result);
            return result;
        }
    }
    
    /**
     * Gets ith "menu" element
     */
    public com.appnomic.appsone.ui.extension.MenuType getMenuArray(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.MenuType target = null;
            target = (com.appnomic.appsone.ui.extension.MenuType)get_store().find_element_user(MENU$2, i);
            if (target == null)
            {
                throw new IndexOutOfBoundsException();
            }
            return target;
        }
    }
    
    /**
     * Returns number of "menu" element
     */
    public int sizeOfMenuArray()
    {
        synchronized (monitor())
        {
            check_orphaned();
            return get_store().count_elements(MENU$2);
        }
    }
    
    /**
     * Sets array of all "menu" element  WARNING: This method is not atomicaly synchronized.
     */
    public void setMenuArray(com.appnomic.appsone.ui.extension.MenuType[] menuArray)
    {
        check_orphaned();
        arraySetterHelper(menuArray, MENU$2);
    }
    
    /**
     * Sets ith "menu" element
     */
    public void setMenuArray(int i, com.appnomic.appsone.ui.extension.MenuType menu)
    {
        generatedSetterHelperImpl(menu, MENU$2, i, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_ARRAYITEM);
    }
    
    /**
     * Inserts and returns a new empty value (as xml) as the ith "menu" element
     */
    public com.appnomic.appsone.ui.extension.MenuType insertNewMenu(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.MenuType target = null;
            target = (com.appnomic.appsone.ui.extension.MenuType)get_store().insert_element_user(MENU$2, i);
            return target;
        }
    }
    
    /**
     * Appends and returns a new empty value (as xml) as the last "menu" element
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
     * Removes the ith "menu" element
     */
    public void removeMenu(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            get_store().remove_element(MENU$2, i);
        }
    }
    
    /**
     * Gets array of all "attributes" elements
     */
    public com.appnomic.appsone.ui.extension.AttributesType[] getAttributesArray()
    {
        synchronized (monitor())
        {
            check_orphaned();
            java.util.List targetList = new java.util.ArrayList();
            get_store().find_all_element_users(ATTRIBUTES$4, targetList);
            com.appnomic.appsone.ui.extension.AttributesType[] result = new com.appnomic.appsone.ui.extension.AttributesType[targetList.size()];
            targetList.toArray(result);
            return result;
        }
    }
    
    /**
     * Gets ith "attributes" element
     */
    public com.appnomic.appsone.ui.extension.AttributesType getAttributesArray(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.AttributesType target = null;
            target = (com.appnomic.appsone.ui.extension.AttributesType)get_store().find_element_user(ATTRIBUTES$4, i);
            if (target == null)
            {
                throw new IndexOutOfBoundsException();
            }
            return target;
        }
    }
    
    /**
     * Returns number of "attributes" element
     */
    public int sizeOfAttributesArray()
    {
        synchronized (monitor())
        {
            check_orphaned();
            return get_store().count_elements(ATTRIBUTES$4);
        }
    }
    
    /**
     * Sets array of all "attributes" element  WARNING: This method is not atomicaly synchronized.
     */
    public void setAttributesArray(com.appnomic.appsone.ui.extension.AttributesType[] attributesArray)
    {
        check_orphaned();
        arraySetterHelper(attributesArray, ATTRIBUTES$4);
    }
    
    /**
     * Sets ith "attributes" element
     */
    public void setAttributesArray(int i, com.appnomic.appsone.ui.extension.AttributesType attributes)
    {
        generatedSetterHelperImpl(attributes, ATTRIBUTES$4, i, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_ARRAYITEM);
    }
    
    /**
     * Inserts and returns a new empty value (as xml) as the ith "attributes" element
     */
    public com.appnomic.appsone.ui.extension.AttributesType insertNewAttributes(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.AttributesType target = null;
            target = (com.appnomic.appsone.ui.extension.AttributesType)get_store().insert_element_user(ATTRIBUTES$4, i);
            return target;
        }
    }
    
    /**
     * Appends and returns a new empty value (as xml) as the last "attributes" element
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
     * Removes the ith "attributes" element
     */
    public void removeAttributes(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            get_store().remove_element(ATTRIBUTES$4, i);
        }
    }
    
    /**
     * Gets array of all "toolbar" elements
     */
    public com.appnomic.appsone.ui.extension.ToolbarType[] getToolbarArray()
    {
        synchronized (monitor())
        {
            check_orphaned();
            java.util.List targetList = new java.util.ArrayList();
            get_store().find_all_element_users(TOOLBAR$6, targetList);
            com.appnomic.appsone.ui.extension.ToolbarType[] result = new com.appnomic.appsone.ui.extension.ToolbarType[targetList.size()];
            targetList.toArray(result);
            return result;
        }
    }
    
    /**
     * Gets ith "toolbar" element
     */
    public com.appnomic.appsone.ui.extension.ToolbarType getToolbarArray(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.ToolbarType target = null;
            target = (com.appnomic.appsone.ui.extension.ToolbarType)get_store().find_element_user(TOOLBAR$6, i);
            if (target == null)
            {
                throw new IndexOutOfBoundsException();
            }
            return target;
        }
    }
    
    /**
     * Returns number of "toolbar" element
     */
    public int sizeOfToolbarArray()
    {
        synchronized (monitor())
        {
            check_orphaned();
            return get_store().count_elements(TOOLBAR$6);
        }
    }
    
    /**
     * Sets array of all "toolbar" element  WARNING: This method is not atomicaly synchronized.
     */
    public void setToolbarArray(com.appnomic.appsone.ui.extension.ToolbarType[] toolbarArray)
    {
        check_orphaned();
        arraySetterHelper(toolbarArray, TOOLBAR$6);
    }
    
    /**
     * Sets ith "toolbar" element
     */
    public void setToolbarArray(int i, com.appnomic.appsone.ui.extension.ToolbarType toolbar)
    {
        generatedSetterHelperImpl(toolbar, TOOLBAR$6, i, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_ARRAYITEM);
    }
    
    /**
     * Inserts and returns a new empty value (as xml) as the ith "toolbar" element
     */
    public com.appnomic.appsone.ui.extension.ToolbarType insertNewToolbar(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.ToolbarType target = null;
            target = (com.appnomic.appsone.ui.extension.ToolbarType)get_store().insert_element_user(TOOLBAR$6, i);
            return target;
        }
    }
    
    /**
     * Appends and returns a new empty value (as xml) as the last "toolbar" element
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
     * Removes the ith "toolbar" element
     */
    public void removeToolbar(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            get_store().remove_element(TOOLBAR$6, i);
        }
    }
    
    /**
     * Gets array of all "forms" elements
     */
    public com.appnomic.appsone.ui.extension.FormsType[] getFormsArray()
    {
        synchronized (monitor())
        {
            check_orphaned();
            java.util.List targetList = new java.util.ArrayList();
            get_store().find_all_element_users(FORMS$8, targetList);
            com.appnomic.appsone.ui.extension.FormsType[] result = new com.appnomic.appsone.ui.extension.FormsType[targetList.size()];
            targetList.toArray(result);
            return result;
        }
    }
    
    /**
     * Gets ith "forms" element
     */
    public com.appnomic.appsone.ui.extension.FormsType getFormsArray(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.FormsType target = null;
            target = (com.appnomic.appsone.ui.extension.FormsType)get_store().find_element_user(FORMS$8, i);
            if (target == null)
            {
                throw new IndexOutOfBoundsException();
            }
            return target;
        }
    }
    
    /**
     * Returns number of "forms" element
     */
    public int sizeOfFormsArray()
    {
        synchronized (monitor())
        {
            check_orphaned();
            return get_store().count_elements(FORMS$8);
        }
    }
    
    /**
     * Sets array of all "forms" element  WARNING: This method is not atomicaly synchronized.
     */
    public void setFormsArray(com.appnomic.appsone.ui.extension.FormsType[] formsArray)
    {
        check_orphaned();
        arraySetterHelper(formsArray, FORMS$8);
    }
    
    /**
     * Sets ith "forms" element
     */
    public void setFormsArray(int i, com.appnomic.appsone.ui.extension.FormsType forms)
    {
        generatedSetterHelperImpl(forms, FORMS$8, i, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_ARRAYITEM);
    }
    
    /**
     * Inserts and returns a new empty value (as xml) as the ith "forms" element
     */
    public com.appnomic.appsone.ui.extension.FormsType insertNewForms(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.FormsType target = null;
            target = (com.appnomic.appsone.ui.extension.FormsType)get_store().insert_element_user(FORMS$8, i);
            return target;
        }
    }
    
    /**
     * Appends and returns a new empty value (as xml) as the last "forms" element
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
     * Removes the ith "forms" element
     */
    public void removeForms(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            get_store().remove_element(FORMS$8, i);
        }
    }
    
    /**
     * Gets array of all "analysis-panes" elements
     */
    public com.appnomic.appsone.ui.extension.AnalysisPanesType[] getAnalysisPanesArray()
    {
        synchronized (monitor())
        {
            check_orphaned();
            java.util.List targetList = new java.util.ArrayList();
            get_store().find_all_element_users(ANALYSISPANES$10, targetList);
            com.appnomic.appsone.ui.extension.AnalysisPanesType[] result = new com.appnomic.appsone.ui.extension.AnalysisPanesType[targetList.size()];
            targetList.toArray(result);
            return result;
        }
    }
    
    /**
     * Gets ith "analysis-panes" element
     */
    public com.appnomic.appsone.ui.extension.AnalysisPanesType getAnalysisPanesArray(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.AnalysisPanesType target = null;
            target = (com.appnomic.appsone.ui.extension.AnalysisPanesType)get_store().find_element_user(ANALYSISPANES$10, i);
            if (target == null)
            {
                throw new IndexOutOfBoundsException();
            }
            return target;
        }
    }
    
    /**
     * Returns number of "analysis-panes" element
     */
    public int sizeOfAnalysisPanesArray()
    {
        synchronized (monitor())
        {
            check_orphaned();
            return get_store().count_elements(ANALYSISPANES$10);
        }
    }
    
    /**
     * Sets array of all "analysis-panes" element  WARNING: This method is not atomicaly synchronized.
     */
    public void setAnalysisPanesArray(com.appnomic.appsone.ui.extension.AnalysisPanesType[] analysisPanesArray)
    {
        check_orphaned();
        arraySetterHelper(analysisPanesArray, ANALYSISPANES$10);
    }
    
    /**
     * Sets ith "analysis-panes" element
     */
    public void setAnalysisPanesArray(int i, com.appnomic.appsone.ui.extension.AnalysisPanesType analysisPanes)
    {
        generatedSetterHelperImpl(analysisPanes, ANALYSISPANES$10, i, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_ARRAYITEM);
    }
    
    /**
     * Inserts and returns a new empty value (as xml) as the ith "analysis-panes" element
     */
    public com.appnomic.appsone.ui.extension.AnalysisPanesType insertNewAnalysisPanes(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.AnalysisPanesType target = null;
            target = (com.appnomic.appsone.ui.extension.AnalysisPanesType)get_store().insert_element_user(ANALYSISPANES$10, i);
            return target;
        }
    }
    
    /**
     * Appends and returns a new empty value (as xml) as the last "analysis-panes" element
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
     * Removes the ith "analysis-panes" element
     */
    public void removeAnalysisPanes(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            get_store().remove_element(ANALYSISPANES$10, i);
        }
    }
    
    /**
     * Gets array of all "labels" elements
     */
    public com.appnomic.appsone.ui.extension.LabelsType[] getLabelsArray()
    {
        synchronized (monitor())
        {
            check_orphaned();
            java.util.List targetList = new java.util.ArrayList();
            get_store().find_all_element_users(LABELS$12, targetList);
            com.appnomic.appsone.ui.extension.LabelsType[] result = new com.appnomic.appsone.ui.extension.LabelsType[targetList.size()];
            targetList.toArray(result);
            return result;
        }
    }
    
    /**
     * Gets ith "labels" element
     */
    public com.appnomic.appsone.ui.extension.LabelsType getLabelsArray(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.LabelsType target = null;
            target = (com.appnomic.appsone.ui.extension.LabelsType)get_store().find_element_user(LABELS$12, i);
            if (target == null)
            {
                throw new IndexOutOfBoundsException();
            }
            return target;
        }
    }
    
    /**
     * Returns number of "labels" element
     */
    public int sizeOfLabelsArray()
    {
        synchronized (monitor())
        {
            check_orphaned();
            return get_store().count_elements(LABELS$12);
        }
    }
    
    /**
     * Sets array of all "labels" element  WARNING: This method is not atomicaly synchronized.
     */
    public void setLabelsArray(com.appnomic.appsone.ui.extension.LabelsType[] labelsArray)
    {
        check_orphaned();
        arraySetterHelper(labelsArray, LABELS$12);
    }
    
    /**
     * Sets ith "labels" element
     */
    public void setLabelsArray(int i, com.appnomic.appsone.ui.extension.LabelsType labels)
    {
        generatedSetterHelperImpl(labels, LABELS$12, i, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_ARRAYITEM);
    }
    
    /**
     * Inserts and returns a new empty value (as xml) as the ith "labels" element
     */
    public com.appnomic.appsone.ui.extension.LabelsType insertNewLabels(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.LabelsType target = null;
            target = (com.appnomic.appsone.ui.extension.LabelsType)get_store().insert_element_user(LABELS$12, i);
            return target;
        }
    }
    
    /**
     * Appends and returns a new empty value (as xml) as the last "labels" element
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
     * Removes the ith "labels" element
     */
    public void removeLabels(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            get_store().remove_element(LABELS$12, i);
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
