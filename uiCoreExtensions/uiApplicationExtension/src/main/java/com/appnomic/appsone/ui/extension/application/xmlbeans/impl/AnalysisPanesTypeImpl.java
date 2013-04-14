/*
 * XML Type:  analysis-panesType
 * Namespace: 
 * Java type: com.appnomic.appsone.ui.extension.application.xmlbeans.AnalysisPanesType
 *
 * Automatically generated - do not modify.
 */
package com.appnomic.appsone.ui.extension.application.xmlbeans.impl;
/**
 * An XML analysis-panesType(@).
 *
 * This is a complex type.
 */
public class AnalysisPanesTypeImpl extends org.apache.xmlbeans.impl.values.XmlComplexContentImpl implements com.appnomic.appsone.ui.extension.application.xmlbeans.AnalysisPanesType
{
    private static final long serialVersionUID = 1L;
    
    public AnalysisPanesTypeImpl(org.apache.xmlbeans.SchemaType sType)
    {
        super(sType);
    }
    
    private static final javax.xml.namespace.QName ANALYSISPANE$0 = 
        new javax.xml.namespace.QName("", "analysis-pane");
    
    
    /**
     * Gets the "analysis-pane" element
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.AnalysisPaneType getAnalysisPane()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.application.xmlbeans.AnalysisPaneType target = null;
            target = (com.appnomic.appsone.ui.extension.application.xmlbeans.AnalysisPaneType)get_store().find_element_user(ANALYSISPANE$0, 0);
            if (target == null)
            {
                return null;
            }
            return target;
        }
    }
    
    /**
     * Sets the "analysis-pane" element
     */
    public void setAnalysisPane(com.appnomic.appsone.ui.extension.application.xmlbeans.AnalysisPaneType analysisPane)
    {
        generatedSetterHelperImpl(analysisPane, ANALYSISPANE$0, 0, org.apache.xmlbeans.impl.values.XmlObjectBase.KIND_SETTERHELPER_SINGLETON);
    }
    
    /**
     * Appends and returns a new empty "analysis-pane" element
     */
    public com.appnomic.appsone.ui.extension.application.xmlbeans.AnalysisPaneType addNewAnalysisPane()
    {
        synchronized (monitor())
        {
            check_orphaned();
            com.appnomic.appsone.ui.extension.application.xmlbeans.AnalysisPaneType target = null;
            target = (com.appnomic.appsone.ui.extension.application.xmlbeans.AnalysisPaneType)get_store().add_element_user(ANALYSISPANE$0);
            return target;
        }
    }
}
