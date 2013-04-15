/*
 * XML Type:  analysis-panesType
 * Namespace: http://www.extension.ui.appsone.appnomic.com
 * Java type: com.appnomic.appsone.ui.extension.AnalysisPanesType
 *
 * Automatically generated - do not modify.
 */
package com.appnomic.appsone.ui.extension.impl;
/**
 * An XML analysis-panesType(@http://www.extension.ui.appsone.appnomic.com).
 *
 * This is a complex type.
 */
public class AnalysisPanesTypeImpl extends org.apache.xmlbeans.impl.values.XmlComplexContentImpl implements com.appnomic.appsone.ui.extension.AnalysisPanesType
{
    private static final long serialVersionUID = 1L;
    
    public AnalysisPanesTypeImpl(org.apache.xmlbeans.SchemaType sType)
    {
        super(sType);
    }
    
    private static final javax.xml.namespace.QName ANALYSISPANE$0 = 
        new javax.xml.namespace.QName("http://www.extension.ui.appsone.appnomic.com", "analysis-pane");
    
    
    /**
     * Gets the "analysis-pane" element
     */
    public com.appnomic.appsone.ui.extension.AnalysisPaneType getAnalysisPane()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.AnalysisPaneType target = null;
            target = (com.appnomic.appsone.ui.extension.AnalysisPaneType)get_store().find_element_user(ANALYSISPANE$0, 0);
            if (target == null)
            {
                return null;
            }
            return target;
        }
    }
    
    /**
     * True if has "analysis-pane" element
     */
    public boolean isSetAnalysisPane()
    {
        synchronized (monitor())
        {
            check_orphaned();
            return get_store().count_elements(ANALYSISPANE$0) != 0;
        }
    }
    
    /**
     * Sets the "analysis-pane" element
     */
    public void setAnalysisPane(com.appnomic.appsone.ui.extension.AnalysisPaneType analysisPane)
    {
        generatedSetterHelperImpl(analysisPane, ANALYSISPANE$0, 0, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_SINGLETON);
    }
    
    /**
     * Appends and returns a new empty "analysis-pane" element
     */
    public com.appnomic.appsone.ui.extension.AnalysisPaneType addNewAnalysisPane()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.AnalysisPaneType target = null;
            target = (com.appnomic.appsone.ui.extension.AnalysisPaneType)get_store().add_element_user(ANALYSISPANE$0);
            return target;
        }
    }
    
    /**
     * Unsets the "analysis-pane" element
     */
    public void unsetAnalysisPane()
    {
        synchronized (monitor())
        {
            check_orphaned();
            get_store().remove_element(ANALYSISPANE$0, 0);
        }
    }
}
