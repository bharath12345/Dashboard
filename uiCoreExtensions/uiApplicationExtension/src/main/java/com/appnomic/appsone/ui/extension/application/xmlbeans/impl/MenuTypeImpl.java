/*
 * XML Type:  menuType
 * Namespace: 
 * Java type: com.appnomic.appsone.ui.extension.application.xmlbeans.MenuType
 *
 * Automatically generated - do not modify.
 */
package com.appnomic.appsone.ui.extension.application.xmlbeans.impl;
/**
 * An XML menuType(@).
 *
 * This is a complex type.
 */
public class MenuTypeImpl extends org.apache.xmlbeans.impl.values.XmlComplexContentImpl implements com.appnomic.appsone.ui.extension.application.xmlbeans.MenuType
{
    private static final long serialVersionUID = 1L;
    
    public MenuTypeImpl(org.apache.xmlbeans.SchemaType sType)
    {
        super(sType);
    }
    
    private static final javax.xml.namespace.QName MENUITEM$0 = 
        new javax.xml.namespace.QName("", "menu-item");
    private static final javax.xml.namespace.QName MENUCONTAINER$2 = 
        new javax.xml.namespace.QName("", "menu-container");
    
    
    /**
     * Gets the "menu-item" element
     */
    public java.lang.String getMenuItem()
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.SimpleValue target = null;
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_element_user(MENUITEM$0, 0);
            if (target == null)
            {
                return null;
            }
            return target.getStringValue();
        }
    }
    
    /**
     * Gets (as xml) the "menu-item" element
     */
    public org.apache.xmlbeans.XmlString xgetMenuItem()
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.XmlString target = null;
            target = (org.apache.xmlbeans.XmlString)get_store().find_element_user(MENUITEM$0, 0);
            return target;
        }
    }
    
    /**
     * Sets the "menu-item" element
     */
    public void setMenuItem(java.lang.String menuItem)
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.SimpleValue target = null;
            target = (org.apache.xmlbeans.SimpleValue)get_store().find_element_user(MENUITEM$0, 0);
            if (target == null)
            {
                target = (org.apache.xmlbeans.SimpleValue)get_store().add_element_user(MENUITEM$0);
            }
            target.setStringValue(menuItem);
        }
    }
    
    /**
     * Sets (as xml) the "menu-item" element
     */
    public void xsetMenuItem(org.apache.xmlbeans.XmlString menuItem)
    {
        synchronized (monitor())
        {
            check_orphaned();
            org.apache.xmlbeans.XmlString target = null;
            target = (org.apache.xmlbeans.XmlString)get_store().find_element_user(MENUITEM$0, 0);
            if (target == null)
            {
                target = (org.apache.xmlbeans.XmlString)get_store().add_element_user(MENUITEM$0);
            }
            target.set(menuItem);
        }
    }
    
    /**
     * Gets the "menu-container" element
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.MenuContainerType getMenuContainer()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.application.xmlbeans.MenuContainerType target = null;
            target = (com.appnomic.appsone.ui.extension.application.xmlbeans.MenuContainerType)get_store().find_element_user(MENUCONTAINER$2, 0);
            if (target == null)
            {
                return null;
            }
            return target;
        }
    }
    
    /**
     * Sets the "menu-container" element
     */
    public void setMenuContainer(com.appnomic.appsone.ui.extension.application.xmlbeans.MenuContainerType menuContainer)
    {
        generatedSetterHelperImpl(menuContainer, MENUCONTAINER$2, 0, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_SINGLETON);
    }
    
    /**
     * Appends and returns a new empty "menu-container" element
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.MenuContainerType addNewMenuContainer()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.application.xmlbeans.MenuContainerType target = null;
            target = (com.appnomic.appsone.ui.extension.application.xmlbeans.MenuContainerType)get_store().add_element_user(MENUCONTAINER$2);
            return target;
        }
    }
}
