/*
 * XML Type:  toolbarType
 * Namespace: 
 * Java type: com.appnomic.appsone.ui.extension.application.xmlbeans.ToolbarType
 *
 * Automatically generated - do not modify.
 */
package com.appnomic.appsone.ui.extension.application.xmlbeans.impl;
/**
 * An XML toolbarType(@).
 *
 * This is a complex type.
 */
public class ToolbarTypeImpl extends org.apache.xmlbeans.impl.values.XmlComplexContentImpl implements com.appnomic.appsone.ui.extension.application.xmlbeans.ToolbarType
{
    private static final long serialVersionUID = 1L;
    
    public ToolbarTypeImpl(org.apache.xmlbeans.SchemaType sType)
    {
        super(sType);
    }
    
    private static final javax.xml.namespace.QName TOOL$0 = 
        new javax.xml.namespace.QName("", "tool");
    
    
    /**
     * Gets array of all "tool" elements
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.ToolType[] getToolArray()
    {
        synchronized (monitor())
        {
            check_orphaned();
            java.util.List targetList = new java.util.ArrayList();
            get_store().find_all_element_users(TOOL$0, targetList);
            com.appnomic.appsone.ui.extension.application.xmlbeans.ToolType[] result = new com.appnomic.appsone.ui.extension.application.xmlbeans.ToolType[targetList.size()];
            targetList.toArray(result);
            return result;
        }
    }
    
    /**
     * Gets ith "tool" element
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.ToolType getToolArray(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.application.xmlbeans.ToolType target = null;
            target = (com.appnomic.appsone.ui.extension.application.xmlbeans.ToolType)get_store().find_element_user(TOOL$0, i);
            if (target == null)
            {
                throw new IndexOutOfBoundsException();
            }
            return target;
        }
    }
    
    /**
     * Returns number of "tool" element
     */
    public int sizeOfToolArray()
    {
        synchronized (monitor())
        {
            check_orphaned();
            return get_store().count_elements(TOOL$0);
        }
    }
    
    /**
     * Sets array of all "tool" element  WARNING: This method is not atomicaly synchronized.
     */
    public void setToolArray(com.appnomic.appsone.ui.extension.application.xmlbeans.ToolType[] toolArray)
    {
        check_orphaned();
        arraySetterHelper(toolArray, TOOL$0);
    }
    
    /**
     * Sets ith "tool" element
     */
    public void setToolArray(int i, com.appnomic.appsone.ui.extension.application.xmlbeans.ToolType tool)
    {
        generatedSetterHelperImpl(tool, TOOL$0, i, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_ARRAYITEM);
    }
    
    /**
     * Inserts and returns a new empty value (as xml) as the ith "tool" element
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.ToolType insertNewTool(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.application.xmlbeans.ToolType target = null;
            target = (com.appnomic.appsone.ui.extension.application.xmlbeans.ToolType)get_store().insert_element_user(TOOL$0, i);
            return target;
        }
    }
    
    /**
     * Appends and returns a new empty value (as xml) as the last "tool" element
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.ToolType addNewTool()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.application.xmlbeans.ToolType target = null;
            target = (com.appnomic.appsone.ui.extension.application.xmlbeans.ToolType)get_store().add_element_user(TOOL$0);
            return target;
        }
    }
    
    /**
     * Removes the ith "tool" element
     */
    public void removeTool(int i)
    {
        synchronized (monitor())
        {
            check_orphaned();
            get_store().remove_element(TOOL$0, i);
        }
    }
}
