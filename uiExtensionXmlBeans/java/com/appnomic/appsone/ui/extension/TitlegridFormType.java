/*
 * XML Type:  titlegrid-formType
 * Namespace: http://www.extension.ui.appsone.appnomic.com
 * Java type: com.appnomic.appsone.ui.extension.TitlegridFormType
 *
 * Automatically generated - do not modify.
 */
package com.appnomic.appsone.ui.extension;


/**
 * An XML titlegrid-formType(@http://www.extension.ui.appsone.appnomic.com).
 *
 * This is a complex type.
 */
public interface TitlegridFormType extends org.apache.xmlbeans.XmlObject
{
    public static final org.apache.xmlbeans.SchemaType type = (org.apache.xmlbeans.SchemaType)
        org.apache.xmlbeans.XmlBeans.typeSystemForClassLoader(TitlegridFormType.class.getClassLoader(), "schemaorg_apache_xmlbeans.system.s8A2893182E2AC857591676D6F1461A5E").resolveHandle("titlegridformtype55detype");
    
    /**
     * Gets the "form-toolbar" element
     */
    com.appnomic.appsone.ui.extension.FormToolbarType getFormToolbar();
    
    /**
     * Sets the "form-toolbar" element
     */
    void setFormToolbar(com.appnomic.appsone.ui.extension.FormToolbarType formToolbar);
    
    /**
     * Appends and returns a new empty "form-toolbar" element
     */
    com.appnomic.appsone.ui.extension.FormToolbarType addNewFormToolbar();
    
    /**
     * Gets the "titlegrid-unit" element
     */
    com.appnomic.appsone.ui.extension.TitlegridUnitType getTitlegridUnit();
    
    /**
     * Sets the "titlegrid-unit" element
     */
    void setTitlegridUnit(com.appnomic.appsone.ui.extension.TitlegridUnitType titlegridUnit);
    
    /**
     * Appends and returns a new empty "titlegrid-unit" element
     */
    com.appnomic.appsone.ui.extension.TitlegridUnitType addNewTitlegridUnit();
    
    /**
     * Gets the "filters" element
     */
    com.appnomic.appsone.ui.extension.FiltersType getFilters();
    
    /**
     * Sets the "filters" element
     */
    void setFilters(com.appnomic.appsone.ui.extension.FiltersType filters);
    
    /**
     * Appends and returns a new empty "filters" element
     */
    com.appnomic.appsone.ui.extension.FiltersType addNewFilters();
    
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
     * Gets the "refresh-rate" attribute
     */
    short getRefreshRate();
    
    /**
     * Gets (as xml) the "refresh-rate" attribute
     */
    org.apache.xmlbeans.XmlShort xgetRefreshRate();
    
    /**
     * True if has "refresh-rate" attribute
     */
    boolean isSetRefreshRate();
    
    /**
     * Sets the "refresh-rate" attribute
     */
    void setRefreshRate(short refreshRate);
    
    /**
     * Sets (as xml) the "refresh-rate" attribute
     */
    void xsetRefreshRate(org.apache.xmlbeans.XmlShort refreshRate);
    
    /**
     * Unsets the "refresh-rate" attribute
     */
    void unsetRefreshRate();
    
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
        public static com.appnomic.appsone.ui.extension.TitlegridFormType newInstance() {
          return (com.appnomic.appsone.ui.extension.TitlegridFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().newInstance( type, null ); }
        
        public static com.appnomic.appsone.ui.extension.TitlegridFormType newInstance(org.apache.xmlbeans.XmlOptions options) {
          return (com.appnomic.appsone.ui.extension.TitlegridFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().newInstance( type, options ); }
        
        /** @param xmlAsString the string value to parse */
        public static com.appnomic.appsone.ui.extension.TitlegridFormType parse(java.lang.String xmlAsString) throws org.apache.xmlbeans.XmlException {
          return (com.appnomic.appsone.ui.extension.TitlegridFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( xmlAsString, type, null ); }
        
        public static com.appnomic.appsone.ui.extension.TitlegridFormType parse(java.lang.String xmlAsString, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException {
          return (com.appnomic.appsone.ui.extension.TitlegridFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( xmlAsString, type, options ); }
        
        /** @param file the file from which to load an xml document */
        public static com.appnomic.appsone.ui.extension.TitlegridFormType parse(java.io.File file) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.TitlegridFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( file, type, null ); }
        
        public static com.appnomic.appsone.ui.extension.TitlegridFormType parse(java.io.File file, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.TitlegridFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( file, type, options ); }
        
        public static com.appnomic.appsone.ui.extension.TitlegridFormType parse(java.net.URL u) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.TitlegridFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( u, type, null ); }
        
        public static com.appnomic.appsone.ui.extension.TitlegridFormType parse(java.net.URL u, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.TitlegridFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( u, type, options ); }
        
        public static com.appnomic.appsone.ui.extension.TitlegridFormType parse(java.io.InputStream is) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.TitlegridFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( is, type, null ); }
        
        public static com.appnomic.appsone.ui.extension.TitlegridFormType parse(java.io.InputStream is, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.TitlegridFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( is, type, options ); }
        
        public static com.appnomic.appsone.ui.extension.TitlegridFormType parse(java.io.Reader r) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.TitlegridFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( r, type, null ); }
        
        public static com.appnomic.appsone.ui.extension.TitlegridFormType parse(java.io.Reader r, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.TitlegridFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( r, type, options ); }
        
        public static com.appnomic.appsone.ui.extension.TitlegridFormType parse(javax.xml.stream.XMLStreamReader sr) throws org.apache.xmlbeans.XmlException {
          return (com.appnomic.appsone.ui.extension.TitlegridFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( sr, type, null ); }
        
        public static com.appnomic.appsone.ui.extension.TitlegridFormType parse(javax.xml.stream.XMLStreamReader sr, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException {
          return (com.appnomic.appsone.ui.extension.TitlegridFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( sr, type, options ); }
        
        public static com.appnomic.appsone.ui.extension.TitlegridFormType parse(org.w3c.dom.Node node) throws org.apache.xmlbeans.XmlException {
          return (com.appnomic.appsone.ui.extension.TitlegridFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( node, type, null ); }
        
        public static com.appnomic.appsone.ui.extension.TitlegridFormType parse(org.w3c.dom.Node node, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException {
          return (com.appnomic.appsone.ui.extension.TitlegridFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( node, type, options ); }
        
        /** @deprecated {@link org.apache.xmlbeans.xml.stream.XMLInputStream} */
        public static com.appnomic.appsone.ui.extension.TitlegridFormType parse(org.apache.xmlbeans.xml.stream.XMLInputStream xis) throws org.apache.xmlbeans.XmlException, org.apache.xmlbeans.xml.stream.XMLStreamException {
          return (com.appnomic.appsone.ui.extension.TitlegridFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( xis, type, null ); }
        
        /** @deprecated {@link org.apache.xmlbeans.xml.stream.XMLInputStream} */
        public static com.appnomic.appsone.ui.extension.TitlegridFormType parse(org.apache.xmlbeans.xml.stream.XMLInputStream xis, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, org.apache.xmlbeans.xml.stream.XMLStreamException {
          return (com.appnomic.appsone.ui.extension.TitlegridFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( xis, type, options ); }
        
        /** @deprecated {@link org.apache.xmlbeans.xml.stream.XMLInputStream} */
        public static org.apache.xmlbeans.xml.stream.XMLInputStream newValidatingXMLInputStream(org.apache.xmlbeans.xml.stream.XMLInputStream xis) throws org.apache.xmlbeans.XmlException, org.apache.xmlbeans.xml.stream.XMLStreamException {
          return org.apache.xmlbeans.XmlBeans.getContextTypeLoader().newValidatingXMLInputStream( xis, type, null ); }
        
        /** @deprecated {@link org.apache.xmlbeans.xml.stream.XMLInputStream} */
        public static org.apache.xmlbeans.xml.stream.XMLInputStream newValidatingXMLInputStream(org.apache.xmlbeans.xml.stream.XMLInputStream xis, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, org.apache.xmlbeans.xml.stream.XMLStreamException {
          return org.apache.xmlbeans.XmlBeans.getContextTypeLoader().newValidatingXMLInputStream( xis, type, options ); }
        
        private Factory() { } // No instance of this class allowed
    }
}
