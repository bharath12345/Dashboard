/*
 * XML Type:  grid-colType
 * Namespace: http://www.extension.ui.appsone.appnomic.com
 * Java type: com.appnomic.appsone.ui.extension.GridColType
 *
 * Automatically generated - do not modify.
 */
package com.appnomic.appsone.ui.extension;


/**
 * An XML grid-colType(@http://www.extension.ui.appsone.appnomic.com).
 *
 * This is an atomic type that is a restriction of com.appnomic.appsone.ui.extension.GridColType.
 */
public interface GridColType extends org.apache.xmlbeans.XmlString
{
    public static final org.apache.xmlbeans.SchemaType type = (org.apache.xmlbeans.SchemaType)
        org.apache.xmlbeans.XmlBeans.typeSystemForClassLoader(GridColType.class.getClassLoader(), "schemaorg_apache_xmlbeans.system.s8A2893182E2AC857591676D6F1461A5E").resolveHandle("gridcoltype0cf8type");
    
    /**
     * Gets the "attribute" attribute
     */
    java.lang.String getAttribute();
    
    /**
     * Gets (as xml) the "attribute" attribute
     */
    org.apache.xmlbeans.XmlString xgetAttribute();
    
    /**
     * True if has "attribute" attribute
     */
    boolean isSetAttribute();
    
    /**
     * Sets the "attribute" attribute
     */
    void setAttribute(java.lang.String attribute);
    
    /**
     * Sets (as xml) the "attribute" attribute
     */
    void xsetAttribute(org.apache.xmlbeans.XmlString attribute);
    
    /**
     * Unsets the "attribute" attribute
     */
    void unsetAttribute();
    
    /**
     * Gets the "data-type" attribute
     */
    java.lang.String getDataType();
    
    /**
     * Gets (as xml) the "data-type" attribute
     */
    org.apache.xmlbeans.XmlString xgetDataType();
    
    /**
     * True if has "data-type" attribute
     */
    boolean isSetDataType();
    
    /**
     * Sets the "data-type" attribute
     */
    void setDataType(java.lang.String dataType);
    
    /**
     * Sets (as xml) the "data-type" attribute
     */
    void xsetDataType(org.apache.xmlbeans.XmlString dataType);
    
    /**
     * Unsets the "data-type" attribute
     */
    void unsetDataType();
    
    /**
     * A factory class with static methods for creating instances
     * of this type.
     */
    
    public static final class Factory
    {
        public static com.appnomic.appsone.ui.extension.GridColType newInstance() {
          return (com.appnomic.appsone.ui.extension.GridColType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().newInstance( type, null ); }
        
        public static com.appnomic.appsone.ui.extension.GridColType newInstance(org.apache.xmlbeans.XmlOptions options) {
          return (com.appnomic.appsone.ui.extension.GridColType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().newInstance( type, options ); }
        
        /** @param xmlAsString the string value to parse */
        public static com.appnomic.appsone.ui.extension.GridColType parse(java.lang.String xmlAsString) throws org.apache.xmlbeans.XmlException {
          return (com.appnomic.appsone.ui.extension.GridColType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( xmlAsString, type, null ); }
        
        public static com.appnomic.appsone.ui.extension.GridColType parse(java.lang.String xmlAsString, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException {
          return (com.appnomic.appsone.ui.extension.GridColType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( xmlAsString, type, options ); }
        
        /** @param file the file from which to load an xml document */
        public static com.appnomic.appsone.ui.extension.GridColType parse(java.io.File file) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.GridColType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( file, type, null ); }
        
        public static com.appnomic.appsone.ui.extension.GridColType parse(java.io.File file, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.GridColType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( file, type, options ); }
        
        public static com.appnomic.appsone.ui.extension.GridColType parse(java.net.URL u) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.GridColType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( u, type, null ); }
        
        public static com.appnomic.appsone.ui.extension.GridColType parse(java.net.URL u, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.GridColType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( u, type, options ); }
        
        public static com.appnomic.appsone.ui.extension.GridColType parse(java.io.InputStream is) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.GridColType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( is, type, null ); }
        
        public static com.appnomic.appsone.ui.extension.GridColType parse(java.io.InputStream is, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.GridColType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( is, type, options ); }
        
        public static com.appnomic.appsone.ui.extension.GridColType parse(java.io.Reader r) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.GridColType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( r, type, null ); }
        
        public static com.appnomic.appsone.ui.extension.GridColType parse(java.io.Reader r, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.GridColType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( r, type, options ); }
        
        public static com.appnomic.appsone.ui.extension.GridColType parse(javax.xml.stream.XMLStreamReader sr) throws org.apache.xmlbeans.XmlException {
          return (com.appnomic.appsone.ui.extension.GridColType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( sr, type, null ); }
        
        public static com.appnomic.appsone.ui.extension.GridColType parse(javax.xml.stream.XMLStreamReader sr, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException {
          return (com.appnomic.appsone.ui.extension.GridColType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( sr, type, options ); }
        
        public static com.appnomic.appsone.ui.extension.GridColType parse(org.w3c.dom.Node node) throws org.apache.xmlbeans.XmlException {
          return (com.appnomic.appsone.ui.extension.GridColType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( node, type, null ); }
        
        public static com.appnomic.appsone.ui.extension.GridColType parse(org.w3c.dom.Node node, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException {
          return (com.appnomic.appsone.ui.extension.GridColType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( node, type, options ); }
        
        /** @deprecated {@link org.apache.xmlbeans.xml.stream.XMLInputStream} */
        public static com.appnomic.appsone.ui.extension.GridColType parse(org.apache.xmlbeans.xml.stream.XMLInputStream xis) throws org.apache.xmlbeans.XmlException, org.apache.xmlbeans.xml.stream.XMLStreamException {
          return (com.appnomic.appsone.ui.extension.GridColType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( xis, type, null ); }
        
        /** @deprecated {@link org.apache.xmlbeans.xml.stream.XMLInputStream} */
        public static com.appnomic.appsone.ui.extension.GridColType parse(org.apache.xmlbeans.xml.stream.XMLInputStream xis, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, org.apache.xmlbeans.xml.stream.XMLStreamException {
          return (com.appnomic.appsone.ui.extension.GridColType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( xis, type, options ); }
        
        /** @deprecated {@link org.apache.xmlbeans.xml.stream.XMLInputStream} */
        public static org.apache.xmlbeans.xml.stream.XMLInputStream newValidatingXMLInputStream(org.apache.xmlbeans.xml.stream.XMLInputStream xis) throws org.apache.xmlbeans.XmlException, org.apache.xmlbeans.xml.stream.XMLStreamException {
          return org.apache.xmlbeans.XmlBeans.getContextTypeLoader().newValidatingXMLInputStream( xis, type, null ); }
        
        /** @deprecated {@link org.apache.xmlbeans.xml.stream.XMLInputStream} */
        public static org.apache.xmlbeans.xml.stream.XMLInputStream newValidatingXMLInputStream(org.apache.xmlbeans.xml.stream.XMLInputStream xis, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, org.apache.xmlbeans.xml.stream.XMLStreamException {
          return org.apache.xmlbeans.XmlBeans.getContextTypeLoader().newValidatingXMLInputStream( xis, type, options ); }
        
        private Factory() { } // No instance of this class allowed
    }
}
