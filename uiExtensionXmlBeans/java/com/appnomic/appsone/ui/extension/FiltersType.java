/*
 * XML Type:  filtersType
 * Namespace: http://www.extension.ui.appsone.appnomic.com
 * Java type: com.appnomic.appsone.ui.extension.FiltersType
 *
 * Automatically generated - do not modify.
 */
package com.appnomic.appsone.ui.extension;


/**
 * An XML filtersType(@http://www.extension.ui.appsone.appnomic.com).
 *
 * This is a complex type.
 */
public interface FiltersType extends org.apache.xmlbeans.XmlObject
{
    public static final org.apache.xmlbeans.SchemaType type = (org.apache.xmlbeans.SchemaType)
        org.apache.xmlbeans.XmlBeans.typeSystemForClassLoader(FiltersType.class.getClassLoader(), "schemaorg_apache_xmlbeans.system.s8A2893182E2AC857591676D6F1461A5E").resolveHandle("filterstypedd68type");
    
    /**
     * Gets array of all "col-filter" elements
     */
    com.appnomic.appsone.ui.extension.ColFilterType[] getColFilterArray();
    
    /**
     * Gets ith "col-filter" element
     */
    com.appnomic.appsone.ui.extension.ColFilterType getColFilterArray(int i);
    
    /**
     * Returns number of "col-filter" element
     */
    int sizeOfColFilterArray();
    
    /**
     * Sets array of all "col-filter" element
     */
    void setColFilterArray(com.appnomic.appsone.ui.extension.ColFilterType[] colFilterArray);
    
    /**
     * Sets ith "col-filter" element
     */
    void setColFilterArray(int i, com.appnomic.appsone.ui.extension.ColFilterType colFilter);
    
    /**
     * Inserts and returns a new empty value (as xml) as the ith "col-filter" element
     */
    com.appnomic.appsone.ui.extension.ColFilterType insertNewColFilter(int i);
    
    /**
     * Appends and returns a new empty value (as xml) as the last "col-filter" element
     */
    com.appnomic.appsone.ui.extension.ColFilterType addNewColFilter();
    
    /**
     * Removes the ith "col-filter" element
     */
    void removeColFilter(int i);
    
    /**
     * A factory class with static methods for creating instances
     * of this type.
     */
    
    public static final class Factory
    {
        public static com.appnomic.appsone.ui.extension.FiltersType newInstance() {
          return (com.appnomic.appsone.ui.extension.FiltersType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().newInstance( type, null ); }
        
        public static com.appnomic.appsone.ui.extension.FiltersType newInstance(org.apache.xmlbeans.XmlOptions options) {
          return (com.appnomic.appsone.ui.extension.FiltersType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().newInstance( type, options ); }
        
        /** @param xmlAsString the string value to parse */
        public static com.appnomic.appsone.ui.extension.FiltersType parse(java.lang.String xmlAsString) throws org.apache.xmlbeans.XmlException {
          return (com.appnomic.appsone.ui.extension.FiltersType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( xmlAsString, type, null ); }
        
        public static com.appnomic.appsone.ui.extension.FiltersType parse(java.lang.String xmlAsString, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException {
          return (com.appnomic.appsone.ui.extension.FiltersType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( xmlAsString, type, options ); }
        
        /** @param file the file from which to load an xml document */
        public static com.appnomic.appsone.ui.extension.FiltersType parse(java.io.File file) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.FiltersType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( file, type, null ); }
        
        public static com.appnomic.appsone.ui.extension.FiltersType parse(java.io.File file, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.FiltersType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( file, type, options ); }
        
        public static com.appnomic.appsone.ui.extension.FiltersType parse(java.net.URL u) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.FiltersType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( u, type, null ); }
        
        public static com.appnomic.appsone.ui.extension.FiltersType parse(java.net.URL u, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.FiltersType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( u, type, options ); }
        
        public static com.appnomic.appsone.ui.extension.FiltersType parse(java.io.InputStream is) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.FiltersType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( is, type, null ); }
        
        public static com.appnomic.appsone.ui.extension.FiltersType parse(java.io.InputStream is, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.FiltersType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( is, type, options ); }
        
        public static com.appnomic.appsone.ui.extension.FiltersType parse(java.io.Reader r) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.FiltersType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( r, type, null ); }
        
        public static com.appnomic.appsone.ui.extension.FiltersType parse(java.io.Reader r, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.FiltersType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( r, type, options ); }
        
        public static com.appnomic.appsone.ui.extension.FiltersType parse(javax.xml.stream.XMLStreamReader sr) throws org.apache.xmlbeans.XmlException {
          return (com.appnomic.appsone.ui.extension.FiltersType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( sr, type, null ); }
        
        public static com.appnomic.appsone.ui.extension.FiltersType parse(javax.xml.stream.XMLStreamReader sr, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException {
          return (com.appnomic.appsone.ui.extension.FiltersType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( sr, type, options ); }
        
        public static com.appnomic.appsone.ui.extension.FiltersType parse(org.w3c.dom.Node node) throws org.apache.xmlbeans.XmlException {
          return (com.appnomic.appsone.ui.extension.FiltersType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( node, type, null ); }
        
        public static com.appnomic.appsone.ui.extension.FiltersType parse(org.w3c.dom.Node node, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException {
          return (com.appnomic.appsone.ui.extension.FiltersType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( node, type, options ); }
        
        /** @deprecated {@link org.apache.xmlbeans.xml.stream.XMLInputStream} */
        public static com.appnomic.appsone.ui.extension.FiltersType parse(org.apache.xmlbeans.xml.stream.XMLInputStream xis) throws org.apache.xmlbeans.XmlException, org.apache.xmlbeans.xml.stream.XMLStreamException {
          return (com.appnomic.appsone.ui.extension.FiltersType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( xis, type, null ); }
        
        /** @deprecated {@link org.apache.xmlbeans.xml.stream.XMLInputStream} */
        public static com.appnomic.appsone.ui.extension.FiltersType parse(org.apache.xmlbeans.xml.stream.XMLInputStream xis, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, org.apache.xmlbeans.xml.stream.XMLStreamException {
          return (com.appnomic.appsone.ui.extension.FiltersType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( xis, type, options ); }
        
        /** @deprecated {@link org.apache.xmlbeans.xml.stream.XMLInputStream} */
        public static org.apache.xmlbeans.xml.stream.XMLInputStream newValidatingXMLInputStream(org.apache.xmlbeans.xml.stream.XMLInputStream xis) throws org.apache.xmlbeans.XmlException, org.apache.xmlbeans.xml.stream.XMLStreamException {
          return org.apache.xmlbeans.XmlBeans.getContextTypeLoader().newValidatingXMLInputStream( xis, type, null ); }
        
        /** @deprecated {@link org.apache.xmlbeans.xml.stream.XMLInputStream} */
        public static org.apache.xmlbeans.xml.stream.XMLInputStream newValidatingXMLInputStream(org.apache.xmlbeans.xml.stream.XMLInputStream xis, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, org.apache.xmlbeans.xml.stream.XMLStreamException {
          return org.apache.xmlbeans.XmlBeans.getContextTypeLoader().newValidatingXMLInputStream( xis, type, options ); }
        
        private Factory() { } // No instance of this class allowed
    }
}
