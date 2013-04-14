/*
 * XML Type:  ui-extensionType
 * Namespace: 
 * Java type: UiExtensionType
 *
 * Automatically generated - do not modify.
 */
package com.appnomic.appsone.ui.extension.application.xmlbeans;


/**
 * An XML ui-extensionType(@).
 *
 * This is a complex type.
 */
public interface UiExtensionType extends org.apache.xmlbeans.XmlObject
{
    public static final org.apache.xmlbeans.SchemaType type = (org.apache.xmlbeans.SchemaType)
        org.apache.xmlbeans.XmlBeans.typeSystemForClassLoader(UiExtensionType.class.getClassLoader(), "schemaorg_apache_xmlbeans.system.sB2F64E0EA1A7DFF7DD3EABED1BF06CEA").resolveHandle("uiextensiontype6d09type");
    
    /**
     * Gets the "pane" element
     */
    PaneType getPane();
    
    /**
     * Sets the "pane" element
     */
    void setPane(PaneType pane);
    
    /**
     * Appends and returns a new empty "pane" element
     */
    PaneType addNewPane();
    
    /**
     * Gets the "menu" element
     */
    MenuType getMenu();
    
    /**
     * Sets the "menu" element
     */
    void setMenu(MenuType menu);
    
    /**
     * Appends and returns a new empty "menu" element
     */
    MenuType addNewMenu();
    
    /**
     * Gets the "attributes" element
     */
    AttributesType getAttributes();
    
    /**
     * Sets the "attributes" element
     */
    void setAttributes(AttributesType attributes);
    
    /**
     * Appends and returns a new empty "attributes" element
     */
    AttributesType addNewAttributes();
    
    /**
     * Gets the "toolbar" element
     */
    ToolbarType getToolbar();
    
    /**
     * Sets the "toolbar" element
     */
    void setToolbar(ToolbarType toolbar);
    
    /**
     * Appends and returns a new empty "toolbar" element
     */
    ToolbarType addNewToolbar();
    
    /**
     * Gets the "forms" element
     */
    FormsType getForms();
    
    /**
     * Sets the "forms" element
     */
    void setForms(FormsType forms);
    
    /**
     * Appends and returns a new empty "forms" element
     */
    FormsType addNewForms();
    
    /**
     * Gets the "analysis-panes" element
     */
    AnalysisPanesType getAnalysisPanes();
    
    /**
     * Sets the "analysis-panes" element
     */
    void setAnalysisPanes(AnalysisPanesType analysisPanes);
    
    /**
     * Appends and returns a new empty "analysis-panes" element
     */
    AnalysisPanesType addNewAnalysisPanes();
    
    /**
     * Gets the "labels" element
     */
    LabelsType getLabels();
    
    /**
     * Sets the "labels" element
     */
    void setLabels(LabelsType labels);
    
    /**
     * Appends and returns a new empty "labels" element
     */
    LabelsType addNewLabels();
    
    /**
     * Gets the "label" attribute
     */
    java.lang.String getLabel();
    
    /**
     * Gets (as xml) the "label" attribute
     */
    org.apache.xmlbeans.XmlString xgetLabel();
    
    /**
     * True if has "label" attribute
     */
    boolean isSetLabel();
    
    /**
     * Sets the "label" attribute
     */
    void setLabel(java.lang.String label);
    
    /**
     * Sets (as xml) the "label" attribute
     */
    void xsetLabel(org.apache.xmlbeans.XmlString label);
    
    /**
     * Unsets the "label" attribute
     */
    void unsetLabel();
    
    /**
     * A factory class with static methods for creating instances
     * of this type.
     */
    
    public static final class Factory
    {
        public static UiExtensionType newInstance() {
          return (UiExtensionType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().newInstance( type, null ); }
        
        public static UiExtensionType newInstance(org.apache.xmlbeans.XmlOptions options) {
          return (UiExtensionType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().newInstance( type, options ); }
        
        /** @param xmlAsString the string value to parse */
        public static UiExtensionType parse(java.lang.String xmlAsString) throws org.apache.xmlbeans.XmlException {
          return (UiExtensionType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( xmlAsString, type, null ); }
        
        public static UiExtensionType parse(java.lang.String xmlAsString, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException {
          return (UiExtensionType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( xmlAsString, type, options ); }
        
        /** @param file the file from which to load an xml document */
        public static UiExtensionType parse(java.io.File file) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (UiExtensionType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( file, type, null ); }
        
        public static UiExtensionType parse(java.io.File file, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (UiExtensionType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( file, type, options ); }
        
        public static UiExtensionType parse(java.net.URL u) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (UiExtensionType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( u, type, null ); }
        
        public static UiExtensionType parse(java.net.URL u, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (UiExtensionType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( u, type, options ); }
        
        public static UiExtensionType parse(java.io.InputStream is) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (UiExtensionType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( is, type, null ); }
        
        public static UiExtensionType parse(java.io.InputStream is, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (UiExtensionType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( is, type, options ); }
        
        public static UiExtensionType parse(java.io.Reader r) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (UiExtensionType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( r, type, null ); }
        
        public static UiExtensionType parse(java.io.Reader r, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (UiExtensionType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( r, type, options ); }
        
        public static UiExtensionType parse(javax.xml.stream.XMLStreamReader sr) throws org.apache.xmlbeans.XmlException {
          return (UiExtensionType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( sr, type, null ); }
        
        public static UiExtensionType parse(javax.xml.stream.XMLStreamReader sr, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException {
          return (UiExtensionType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( sr, type, options ); }
        
        public static UiExtensionType parse(org.w3c.dom.Node node) throws org.apache.xmlbeans.XmlException {
          return (UiExtensionType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( node, type, null ); }
        
        public static UiExtensionType parse(org.w3c.dom.Node node, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException {
          return (UiExtensionType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( node, type, options ); }
        
        /** @deprecated {@link org.apache.xmlbeans.xml.stream.XMLInputStream} */
        public static UiExtensionType parse(org.apache.xmlbeans.xml.stream.XMLInputStream xis) throws org.apache.xmlbeans.XmlException, org.apache.xmlbeans.xml.stream.XMLStreamException {
          return (UiExtensionType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( xis, type, null ); }
        
        /** @deprecated {@link org.apache.xmlbeans.xml.stream.XMLInputStream} */
        public static UiExtensionType parse(org.apache.xmlbeans.xml.stream.XMLInputStream xis, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, org.apache.xmlbeans.xml.stream.XMLStreamException {
          return (UiExtensionType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( xis, type, options ); }
        
        /** @deprecated {@link org.apache.xmlbeans.xml.stream.XMLInputStream} */
        public static org.apache.xmlbeans.xml.stream.XMLInputStream newValidatingXMLInputStream(org.apache.xmlbeans.xml.stream.XMLInputStream xis) throws org.apache.xmlbeans.XmlException, org.apache.xmlbeans.xml.stream.XMLStreamException {
          return org.apache.xmlbeans.XmlBeans.getContextTypeLoader().newValidatingXMLInputStream( xis, type, null ); }
        
        /** @deprecated {@link org.apache.xmlbeans.xml.stream.XMLInputStream} */
        public static org.apache.xmlbeans.xml.stream.XMLInputStream newValidatingXMLInputStream(org.apache.xmlbeans.xml.stream.XMLInputStream xis, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, org.apache.xmlbeans.xml.stream.XMLStreamException {
          return org.apache.xmlbeans.XmlBeans.getContextTypeLoader().newValidatingXMLInputStream( xis, type, options ); }
        
        private Factory() { } // No instance of this class allowed
    }
}
