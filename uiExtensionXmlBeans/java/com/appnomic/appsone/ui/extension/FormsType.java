/*
 * XML Type:  formsType
 * Namespace: http://www.extension.ui.appsone.appnomic.com
 * Java type: com.appnomic.appsone.ui.extension.FormsType
 *
 * Automatically generated - do not modify.
 */
package com.appnomic.appsone.ui.extension;


/**
 * An XML formsType(@http://www.extension.ui.appsone.appnomic.com).
 *
 * This is a complex type.
 */
public interface FormsType extends org.apache.xmlbeans.XmlObject
{
    public static final org.apache.xmlbeans.SchemaType type = (org.apache.xmlbeans.SchemaType)
        org.apache.xmlbeans.XmlBeans.typeSystemForClassLoader(FormsType.class.getClassLoader(), "schemaorg_apache_xmlbeans.system.s8A2893182E2AC857591676D6F1461A5E").resolveHandle("formstype79f4type");
    
    /**
     * Gets array of all "grid-form" elements
     */
    com.appnomic.appsone.ui.extension.GridFormType[] getGridFormArray();
    
    /**
     * Gets ith "grid-form" element
     */
    com.appnomic.appsone.ui.extension.GridFormType getGridFormArray(int i);
    
    /**
     * Returns number of "grid-form" element
     */
    int sizeOfGridFormArray();
    
    /**
     * Sets array of all "grid-form" element
     */
    void setGridFormArray(com.appnomic.appsone.ui.extension.GridFormType[] gridFormArray);
    
    /**
     * Sets ith "grid-form" element
     */
    void setGridFormArray(int i, com.appnomic.appsone.ui.extension.GridFormType gridForm);
    
    /**
     * Inserts and returns a new empty value (as xml) as the ith "grid-form" element
     */
    com.appnomic.appsone.ui.extension.GridFormType insertNewGridForm(int i);
    
    /**
     * Appends and returns a new empty value (as xml) as the last "grid-form" element
     */
    com.appnomic.appsone.ui.extension.GridFormType addNewGridForm();
    
    /**
     * Removes the ith "grid-form" element
     */
    void removeGridForm(int i);
    
    /**
     * Gets array of all "summary-form" elements
     */
    com.appnomic.appsone.ui.extension.SummaryFormType[] getSummaryFormArray();
    
    /**
     * Gets ith "summary-form" element
     */
    com.appnomic.appsone.ui.extension.SummaryFormType getSummaryFormArray(int i);
    
    /**
     * Returns number of "summary-form" element
     */
    int sizeOfSummaryFormArray();
    
    /**
     * Sets array of all "summary-form" element
     */
    void setSummaryFormArray(com.appnomic.appsone.ui.extension.SummaryFormType[] summaryFormArray);
    
    /**
     * Sets ith "summary-form" element
     */
    void setSummaryFormArray(int i, com.appnomic.appsone.ui.extension.SummaryFormType summaryForm);
    
    /**
     * Inserts and returns a new empty value (as xml) as the ith "summary-form" element
     */
    com.appnomic.appsone.ui.extension.SummaryFormType insertNewSummaryForm(int i);
    
    /**
     * Appends and returns a new empty value (as xml) as the last "summary-form" element
     */
    com.appnomic.appsone.ui.extension.SummaryFormType addNewSummaryForm();
    
    /**
     * Removes the ith "summary-form" element
     */
    void removeSummaryForm(int i);
    
    /**
     * Gets array of all "titlegrid-form" elements
     */
    com.appnomic.appsone.ui.extension.TitlegridFormType[] getTitlegridFormArray();
    
    /**
     * Gets ith "titlegrid-form" element
     */
    com.appnomic.appsone.ui.extension.TitlegridFormType getTitlegridFormArray(int i);
    
    /**
     * Returns number of "titlegrid-form" element
     */
    int sizeOfTitlegridFormArray();
    
    /**
     * Sets array of all "titlegrid-form" element
     */
    void setTitlegridFormArray(com.appnomic.appsone.ui.extension.TitlegridFormType[] titlegridFormArray);
    
    /**
     * Sets ith "titlegrid-form" element
     */
    void setTitlegridFormArray(int i, com.appnomic.appsone.ui.extension.TitlegridFormType titlegridForm);
    
    /**
     * Inserts and returns a new empty value (as xml) as the ith "titlegrid-form" element
     */
    com.appnomic.appsone.ui.extension.TitlegridFormType insertNewTitlegridForm(int i);
    
    /**
     * Appends and returns a new empty value (as xml) as the last "titlegrid-form" element
     */
    com.appnomic.appsone.ui.extension.TitlegridFormType addNewTitlegridForm();
    
    /**
     * Removes the ith "titlegrid-form" element
     */
    void removeTitlegridForm(int i);
    
    /**
     * A factory class with static methods for creating instances
     * of this type.
     */
    
    public static final class Factory
    {
        public static com.appnomic.appsone.ui.extension.FormsType newInstance() {
          return (com.appnomic.appsone.ui.extension.FormsType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().newInstance( type, null ); }
        
        public static com.appnomic.appsone.ui.extension.FormsType newInstance(org.apache.xmlbeans.XmlOptions options) {
          return (com.appnomic.appsone.ui.extension.FormsType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().newInstance( type, options ); }
        
        /** @param xmlAsString the string value to parse */
        public static com.appnomic.appsone.ui.extension.FormsType parse(java.lang.String xmlAsString) throws org.apache.xmlbeans.XmlException {
          return (com.appnomic.appsone.ui.extension.FormsType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( xmlAsString, type, null ); }
        
        public static com.appnomic.appsone.ui.extension.FormsType parse(java.lang.String xmlAsString, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException {
          return (com.appnomic.appsone.ui.extension.FormsType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( xmlAsString, type, options ); }
        
        /** @param file the file from which to load an xml document */
        public static com.appnomic.appsone.ui.extension.FormsType parse(java.io.File file) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.FormsType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( file, type, null ); }
        
        public static com.appnomic.appsone.ui.extension.FormsType parse(java.io.File file, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.FormsType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( file, type, options ); }
        
        public static com.appnomic.appsone.ui.extension.FormsType parse(java.net.URL u) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.FormsType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( u, type, null ); }
        
        public static com.appnomic.appsone.ui.extension.FormsType parse(java.net.URL u, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.FormsType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( u, type, options ); }
        
        public static com.appnomic.appsone.ui.extension.FormsType parse(java.io.InputStream is) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.FormsType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( is, type, null ); }
        
        public static com.appnomic.appsone.ui.extension.FormsType parse(java.io.InputStream is, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.FormsType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( is, type, options ); }
        
        public static com.appnomic.appsone.ui.extension.FormsType parse(java.io.Reader r) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.FormsType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( r, type, null ); }
        
        public static com.appnomic.appsone.ui.extension.FormsType parse(java.io.Reader r, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.FormsType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( r, type, options ); }
        
        public static com.appnomic.appsone.ui.extension.FormsType parse(javax.xml.stream.XMLStreamReader sr) throws org.apache.xmlbeans.XmlException {
          return (com.appnomic.appsone.ui.extension.FormsType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( sr, type, null ); }
        
        public static com.appnomic.appsone.ui.extension.FormsType parse(javax.xml.stream.XMLStreamReader sr, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException {
          return (com.appnomic.appsone.ui.extension.FormsType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( sr, type, options ); }
        
        public static com.appnomic.appsone.ui.extension.FormsType parse(org.w3c.dom.Node node) throws org.apache.xmlbeans.XmlException {
          return (com.appnomic.appsone.ui.extension.FormsType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( node, type, null ); }
        
        public static com.appnomic.appsone.ui.extension.FormsType parse(org.w3c.dom.Node node, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException {
          return (com.appnomic.appsone.ui.extension.FormsType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( node, type, options ); }
        
        /** @deprecated {@link org.apache.xmlbeans.xml.stream.XMLInputStream} */
        public static com.appnomic.appsone.ui.extension.FormsType parse(org.apache.xmlbeans.xml.stream.XMLInputStream xis) throws org.apache.xmlbeans.XmlException, org.apache.xmlbeans.xml.stream.XMLStreamException {
          return (com.appnomic.appsone.ui.extension.FormsType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( xis, type, null ); }
        
        /** @deprecated {@link org.apache.xmlbeans.xml.stream.XMLInputStream} */
        public static com.appnomic.appsone.ui.extension.FormsType parse(org.apache.xmlbeans.xml.stream.XMLInputStream xis, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, org.apache.xmlbeans.xml.stream.XMLStreamException {
          return (com.appnomic.appsone.ui.extension.FormsType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( xis, type, options ); }
        
        /** @deprecated {@link org.apache.xmlbeans.xml.stream.XMLInputStream} */
        public static org.apache.xmlbeans.xml.stream.XMLInputStream newValidatingXMLInputStream(org.apache.xmlbeans.xml.stream.XMLInputStream xis) throws org.apache.xmlbeans.XmlException, org.apache.xmlbeans.xml.stream.XMLStreamException {
          return org.apache.xmlbeans.XmlBeans.getContextTypeLoader().newValidatingXMLInputStream( xis, type, null ); }
        
        /** @deprecated {@link org.apache.xmlbeans.xml.stream.XMLInputStream} */
        public static org.apache.xmlbeans.xml.stream.XMLInputStream newValidatingXMLInputStream(org.apache.xmlbeans.xml.stream.XMLInputStream xis, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, org.apache.xmlbeans.xml.stream.XMLStreamException {
          return org.apache.xmlbeans.XmlBeans.getContextTypeLoader().newValidatingXMLInputStream( xis, type, options ); }
        
        private Factory() { } // No instance of this class allowed
    }
}
