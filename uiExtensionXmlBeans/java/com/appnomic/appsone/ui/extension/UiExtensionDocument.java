/*
 * An XML document type.
 * Localname: ui-extension
 * Namespace: http://www.extension.ui.appsone.appnomic.com
 * Java type: com.appnomic.appsone.ui.extension.UiExtensionDocument
 *
 * Automatically generated - do not modify.
 */
package com.appnomic.appsone.ui.extension;


/**
 * A document containing one ui-extension(@http://www.extension.ui.appsone.appnomic.com) element.
 *
 * This is a complex type.
 */
public interface UiExtensionDocument extends org.apache.xmlbeans.XmlObject
{
    public static final org.apache.xmlbeans.SchemaType type = (org.apache.xmlbeans.SchemaType)
        org.apache.xmlbeans.XmlBeans.typeSystemForClassLoader(UiExtensionDocument.class.getClassLoader(), "schemaorg_apache_xmlbeans.system.s8A2893182E2AC857591676D6F1461A5E").resolveHandle("uiextension18d5doctype");
    
    /**
     * Gets the "ui-extension" element
     */
    com.appnomic.appsone.ui.extension.UiExtensionType getUiExtension();
    
    /**
     * Sets the "ui-extension" element
     */
    void setUiExtension(com.appnomic.appsone.ui.extension.UiExtensionType uiExtension);
    
    /**
     * Appends and returns a new empty "ui-extension" element
     */
    com.appnomic.appsone.ui.extension.UiExtensionType addNewUiExtension();
    
    /**
     * A factory class with static methods for creating instances
     * of this type.
     */
    
    public static final class Factory
    {
        public static com.appnomic.appsone.ui.extension.UiExtensionDocument newInstance() {
          return (com.appnomic.appsone.ui.extension.UiExtensionDocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().newInstance( type, null ); }
        
        public static com.appnomic.appsone.ui.extension.UiExtensionDocument newInstance(org.apache.xmlbeans.XmlOptions options) {
          return (com.appnomic.appsone.ui.extension.UiExtensionDocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().newInstance( type, options ); }
        
        /** @param xmlAsString the string value to parse */
        public static com.appnomic.appsone.ui.extension.UiExtensionDocument parse(java.lang.String xmlAsString) throws org.apache.xmlbeans.XmlException {
          return (com.appnomic.appsone.ui.extension.UiExtensionDocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( xmlAsString, type, null ); }
        
        public static com.appnomic.appsone.ui.extension.UiExtensionDocument parse(java.lang.String xmlAsString, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException {
          return (com.appnomic.appsone.ui.extension.UiExtensionDocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( xmlAsString, type, options ); }
        
        /** @param file the file from which to load an xml document */
        public static com.appnomic.appsone.ui.extension.UiExtensionDocument parse(java.io.File file) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.UiExtensionDocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( file, type, null ); }
        
        public static com.appnomic.appsone.ui.extension.UiExtensionDocument parse(java.io.File file, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.UiExtensionDocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( file, type, options ); }
        
        public static com.appnomic.appsone.ui.extension.UiExtensionDocument parse(java.net.URL u) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.UiExtensionDocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( u, type, null ); }
        
        public static com.appnomic.appsone.ui.extension.UiExtensionDocument parse(java.net.URL u, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.UiExtensionDocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( u, type, options ); }
        
        public static com.appnomic.appsone.ui.extension.UiExtensionDocument parse(java.io.InputStream is) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.UiExtensionDocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( is, type, null ); }
        
        public static com.appnomic.appsone.ui.extension.UiExtensionDocument parse(java.io.InputStream is, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.UiExtensionDocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( is, type, options ); }
        
        public static com.appnomic.appsone.ui.extension.UiExtensionDocument parse(java.io.Reader r) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.UiExtensionDocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( r, type, null ); }
        
        public static com.appnomic.appsone.ui.extension.UiExtensionDocument parse(java.io.Reader r, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.UiExtensionDocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( r, type, options ); }
        
        public static com.appnomic.appsone.ui.extension.UiExtensionDocument parse(javax.xml.stream.XMLStreamReader sr) throws org.apache.xmlbeans.XmlException {
          return (com.appnomic.appsone.ui.extension.UiExtensionDocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( sr, type, null ); }
        
        public static com.appnomic.appsone.ui.extension.UiExtensionDocument parse(javax.xml.stream.XMLStreamReader sr, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException {
          return (com.appnomic.appsone.ui.extension.UiExtensionDocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( sr, type, options ); }
        
        public static com.appnomic.appsone.ui.extension.UiExtensionDocument parse(org.w3c.dom.Node node) throws org.apache.xmlbeans.XmlException {
          return (com.appnomic.appsone.ui.extension.UiExtensionDocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( node, type, null ); }
        
        public static com.appnomic.appsone.ui.extension.UiExtensionDocument parse(org.w3c.dom.Node node, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException {
          return (com.appnomic.appsone.ui.extension.UiExtensionDocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( node, type, options ); }
        
        /** @deprecated {@link org.apache.xmlbeans.xml.stream.XMLInputStream} */
        public static com.appnomic.appsone.ui.extension.UiExtensionDocument parse(org.apache.xmlbeans.xml.stream.XMLInputStream xis) throws org.apache.xmlbeans.XmlException, org.apache.xmlbeans.xml.stream.XMLStreamException {
          return (com.appnomic.appsone.ui.extension.UiExtensionDocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( xis, type, null ); }
        
        /** @deprecated {@link org.apache.xmlbeans.xml.stream.XMLInputStream} */
        public static com.appnomic.appsone.ui.extension.UiExtensionDocument parse(org.apache.xmlbeans.xml.stream.XMLInputStream xis, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, org.apache.xmlbeans.xml.stream.XMLStreamException {
          return (com.appnomic.appsone.ui.extension.UiExtensionDocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( xis, type, options ); }
        
        /** @deprecated {@link org.apache.xmlbeans.xml.stream.XMLInputStream} */
        public static org.apache.xmlbeans.xml.stream.XMLInputStream newValidatingXMLInputStream(org.apache.xmlbeans.xml.stream.XMLInputStream xis) throws org.apache.xmlbeans.XmlException, org.apache.xmlbeans.xml.stream.XMLStreamException {
          return org.apache.xmlbeans.XmlBeans.getContextTypeLoader().newValidatingXMLInputStream( xis, type, null ); }
        
        /** @deprecated {@link org.apache.xmlbeans.xml.stream.XMLInputStream} */
        public static org.apache.xmlbeans.xml.stream.XMLInputStream newValidatingXMLInputStream(org.apache.xmlbeans.xml.stream.XMLInputStream xis, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, org.apache.xmlbeans.xml.stream.XMLStreamException {
          return org.apache.xmlbeans.XmlBeans.getContextTypeLoader().newValidatingXMLInputStream( xis, type, options ); }
        
        private Factory() { } // No instance of this class allowed
    }
}
