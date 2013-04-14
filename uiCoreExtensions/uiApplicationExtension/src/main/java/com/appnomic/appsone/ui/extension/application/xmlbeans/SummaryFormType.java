/*
 * XML Type:  summary-formType
 * Namespace: 
 * Java type: SummaryFormType
 *
 * Automatically generated - do not modify.
 */
package com.appnomic.appsone.ui.extension.application.xmlbeans;


/**
 * An XML summary-formType(@).
 *
 * This is a complex type.
 */
public interface SummaryFormType extends org.apache.xmlbeans.XmlObject
{
    public static final org.apache.xmlbeans.SchemaType type = (org.apache.xmlbeans.SchemaType)
        org.apache.xmlbeans.XmlBeans.typeSystemForClassLoader(SummaryFormType.class.getClassLoader(), "schemaorg_apache_xmlbeans.system.sB2F64E0EA1A7DFF7DD3EABED1BF06CEA").resolveHandle("summaryformtype3ccetype");
    
    /**
     * Gets the "form-toolbars" element
     */
    FormToolbarsType getFormToolbars();
    
    /**
     * Sets the "form-toolbars" element
     */
    void setFormToolbars(FormToolbarsType formToolbars);
    
    /**
     * Appends and returns a new empty "form-toolbars" element
     */
    FormToolbarsType addNewFormToolbars();
    
    /**
     * Gets the "field-group" element
     */
    FieldGroupType getFieldGroup();
    
    /**
     * Sets the "field-group" element
     */
    void setFieldGroup(FieldGroupType fieldGroup);
    
    /**
     * Appends and returns a new empty "field-group" element
     */
    FieldGroupType addNewFieldGroup();
    
    /**
     * Gets the "filters" element
     */
    FiltersType getFilters();
    
    /**
     * Sets the "filters" element
     */
    void setFilters(FiltersType filters);
    
    /**
     * Appends and returns a new empty "filters" element
     */
    FiltersType addNewFilters();
    
    /**
     * Gets the "id" attribute
     */
    java.lang.String getId();
    
    /**
     * Gets (as xml) the "id" attribute
     */
    org.apache.xmlbeans.XmlString xgetId();
    
    /**
     * True if has "id" attribute
     */
    boolean isSetId();
    
    /**
     * Sets the "id" attribute
     */
    void setId(java.lang.String id);
    
    /**
     * Sets (as xml) the "id" attribute
     */
    void xsetId(org.apache.xmlbeans.XmlString id);
    
    /**
     * Unsets the "id" attribute
     */
    void unsetId();
    
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
     * Gets the "object-url" attribute
     */
    java.lang.String getObjectUrl();
    
    /**
     * Gets (as xml) the "object-url" attribute
     */
    org.apache.xmlbeans.XmlString xgetObjectUrl();
    
    /**
     * True if has "object-url" attribute
     */
    boolean isSetObjectUrl();
    
    /**
     * Sets the "object-url" attribute
     */
    void setObjectUrl(java.lang.String objectUrl);
    
    /**
     * Sets (as xml) the "object-url" attribute
     */
    void xsetObjectUrl(org.apache.xmlbeans.XmlString objectUrl);
    
    /**
     * Unsets the "object-url" attribute
     */
    void unsetObjectUrl();
    
    /**
     * Gets the "help-url" attribute
     */
    java.lang.String getHelpUrl();
    
    /**
     * Gets (as xml) the "help-url" attribute
     */
    org.apache.xmlbeans.XmlString xgetHelpUrl();
    
    /**
     * True if has "help-url" attribute
     */
    boolean isSetHelpUrl();
    
    /**
     * Sets the "help-url" attribute
     */
    void setHelpUrl(java.lang.String helpUrl);
    
    /**
     * Sets (as xml) the "help-url" attribute
     */
    void xsetHelpUrl(org.apache.xmlbeans.XmlString helpUrl);
    
    /**
     * Unsets the "help-url" attribute
     */
    void unsetHelpUrl();
    
    /**
     * A factory class with static methods for creating instances
     * of this type.
     */
    
    public static final class Factory
    {
        public static SummaryFormType newInstance() {
          return (SummaryFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().newInstance( type, null ); }
        
        public static SummaryFormType newInstance(org.apache.xmlbeans.XmlOptions options) {
          return (SummaryFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().newInstance( type, options ); }
        
        /** @param xmlAsString the string value to parse */
        public static SummaryFormType parse(java.lang.String xmlAsString) throws org.apache.xmlbeans.XmlException {
          return (SummaryFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( xmlAsString, type, null ); }
        
        public static SummaryFormType parse(java.lang.String xmlAsString, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException {
          return (SummaryFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( xmlAsString, type, options ); }
        
        /** @param file the file from which to load an xml document */
        public static SummaryFormType parse(java.io.File file) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (SummaryFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( file, type, null ); }
        
        public static SummaryFormType parse(java.io.File file, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (SummaryFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( file, type, options ); }
        
        public static SummaryFormType parse(java.net.URL u) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (SummaryFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( u, type, null ); }
        
        public static SummaryFormType parse(java.net.URL u, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (SummaryFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( u, type, options ); }
        
        public static SummaryFormType parse(java.io.InputStream is) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (SummaryFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( is, type, null ); }
        
        public static SummaryFormType parse(java.io.InputStream is, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (SummaryFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( is, type, options ); }
        
        public static SummaryFormType parse(java.io.Reader r) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (SummaryFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( r, type, null ); }
        
        public static SummaryFormType parse(java.io.Reader r, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (SummaryFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( r, type, options ); }
        
        public static SummaryFormType parse(javax.xml.stream.XMLStreamReader sr) throws org.apache.xmlbeans.XmlException {
          return (SummaryFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( sr, type, null ); }
        
        public static SummaryFormType parse(javax.xml.stream.XMLStreamReader sr, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException {
          return (SummaryFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( sr, type, options ); }
        
        public static SummaryFormType parse(org.w3c.dom.Node node) throws org.apache.xmlbeans.XmlException {
          return (SummaryFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( node, type, null ); }
        
        public static SummaryFormType parse(org.w3c.dom.Node node, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException {
          return (SummaryFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( node, type, options ); }
        
        /** @deprecated {@link org.apache.xmlbeans.xml.stream.XMLInputStream} */
        public static SummaryFormType parse(org.apache.xmlbeans.xml.stream.XMLInputStream xis) throws org.apache.xmlbeans.XmlException, org.apache.xmlbeans.xml.stream.XMLStreamException {
          return (SummaryFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( xis, type, null ); }
        
        /** @deprecated {@link org.apache.xmlbeans.xml.stream.XMLInputStream} */
        public static SummaryFormType parse(org.apache.xmlbeans.xml.stream.XMLInputStream xis, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, org.apache.xmlbeans.xml.stream.XMLStreamException {
          return (SummaryFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( xis, type, options ); }
        
        /** @deprecated {@link org.apache.xmlbeans.xml.stream.XMLInputStream} */
        public static org.apache.xmlbeans.xml.stream.XMLInputStream newValidatingXMLInputStream(org.apache.xmlbeans.xml.stream.XMLInputStream xis) throws org.apache.xmlbeans.XmlException, org.apache.xmlbeans.xml.stream.XMLStreamException {
          return org.apache.xmlbeans.XmlBeans.getContextTypeLoader().newValidatingXMLInputStream( xis, type, null ); }
        
        /** @deprecated {@link org.apache.xmlbeans.xml.stream.XMLInputStream} */
        public static org.apache.xmlbeans.xml.stream.XMLInputStream newValidatingXMLInputStream(org.apache.xmlbeans.xml.stream.XMLInputStream xis, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, org.apache.xmlbeans.xml.stream.XMLStreamException {
          return org.apache.xmlbeans.XmlBeans.getContextTypeLoader().newValidatingXMLInputStream( xis, type, options ); }
        
        private Factory() { } // No instance of this class allowed
    }
}
