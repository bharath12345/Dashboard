/*
 * XML Type:  form-toolbarsType
 * Namespace: 
 * Java type: com.appnomic.appsone.ui.extension.application.xmlbeans.FormToolbarsType
 *
 * Automatically generated - do not modify.
 */
package com.appnomic.appsone.ui.extension.application.xmlbeans.impl;
/**
 * An XML form-toolbarsType(@).
 *
 * This is a complex type.
 */
public class FormToolbarsTypeImpl extends org.apache.xmlbeans.impl.values.XmlComplexContentImpl implements com.appnomic.appsone.ui.extension.application.xmlbeans.FormToolbarsType
{
    private static final long serialVersionUID = 1L;
    
    public FormToolbarsTypeImpl(org.apache.xmlbeans.SchemaType sType)
    {
        super(sType);
    }
    
    private static final javax.xml.namespace.QName FORMTOOLBAR$0 = 
        new javax.xml.namespace.QName("", "form-toolbar");
    
    
    /**
     * Gets array of all "form-toolbar" elements
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.FormToolbarType[] getFormToolbarArray()
    {
        synchronized (monitor())
        {
            check_orphaned();
            java.util.List targetList = new java.util.ArrayList();
            get_store().find_all_element_users(FORMTOOLBAR$0, targetList);
            com.appnomic.appsone.ui.extension.application.xmlbeans.FormToolbarType[] result = new com.appnomic.appsone.ui.extension.application.xmlbeans.FormToolbarType[targetList.size()];
            targetList.toArray(result);
            return result;
        }
    }
    
    /**
     * Gets ith "form-toolbar" element
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.FormToolbarType getFormToolbarArray(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.application.xmlbeans.FormToolbarType target = null;
            target = (com.appnomic.appsone.ui.extension.application.xmlbeans.FormToolbarType)get_store().find_element_user(FORMTOOLBAR$0, i);
            if (target == null)
            {
                throw new IndexOutOfBoundsException();
            }
            return target;
        }
    }
    
    /**
     * Returns number of "form-toolbar" element
     */
    public int sizeOfFormToolbarArray()
    {
        synchronized (monitor())
        {
            check_orphaned();
            return get_store().count_elements(FORMTOOLBAR$0);
        }
    }
    
    /**
     * Sets array of all "form-toolbar" element  WARNING: This method is not atomicaly synchronized.
     */
    public void setFormToolbarArray(com.appnomic.appsone.ui.extension.application.xmlbeans.FormToolbarType[] formToolbarArray)
    {
        check_orphaned();
        arraySetterHelper(formToolbarArray, FORMTOOLBAR$0);
    }
    
    /**
     * Sets ith "form-toolbar" element
     */
    public void setFormToolbarArray(int i, com.appnomic.appsone.ui.extension.application.xmlbeans.FormToolbarType formToolbar)
    {
        generatedSetterHelperImpl(formToolbar, FORMTOOLBAR$0, i, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_ARRAYITEM);
    }
    
    /**
     * Inserts and returns a new empty value (as xml) as the ith "form-toolbar" element
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.FormToolbarType insertNewFormToolbar(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.application.xmlbeans.FormToolbarType target = null;
            target = (com.appnomic.appsone.ui.extension.application.xmlbeans.FormToolbarType)get_store().insert_element_user(FORMTOOLBAR$0, i);
            return target;
        }
    }
    
    /**
     * Appends and returns a new empty value (as xml) as the last "form-toolbar" element
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.FormToolbarType addNewFormToolbar()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.application.xmlbeans.FormToolbarType target = null;
            target = (com.appnomic.appsone.ui.extension.application.xmlbeans.FormToolbarType)get_store().add_element_user(FORMTOOLBAR$0);
            return target;
        }
    }
    
    /**
     * Removes the ith "form-toolbar" element
     */
    public void removeFormToolbar(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            get_store().remove_element(FORMTOOLBAR$0, i);
        }
    }
}
