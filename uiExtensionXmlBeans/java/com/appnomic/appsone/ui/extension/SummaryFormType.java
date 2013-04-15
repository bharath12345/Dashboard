/*
 * XML Type:  summary-formType
 * Namespace: http://www.extension.ui.appsone.appnomic.com
 * Java type: com.appnomic.appsone.ui.extension.SummaryFormType
 *
 * Automatically generated - do not modify.
 */
package com.appnomic.appsone.ui.extension;


/**
 * An XML summary-formType(@http://www.extension.ui.appsone.appnomic.com).
 *
 * This is a complex type.
 */
public interface SummaryFormType extends org.apache.xmlbeans.XmlObject
{
    public static final org.apache.xmlbeans.SchemaType type = (org.apache.xmlbeans.SchemaType)
        org.apache.xmlbeans.XmlBeans.typeSystemForClassLoader(SummaryFormType.class.getClassLoader(), "schemaorg_apache_xmlbeans.system.s8A2893182E2AC857591676D6F1461A5E").resolveHandle("summaryformtype17a6type");
    
    /**
     * Gets the "form-toolbars" element
     */
    com.appnomic.appsone.ui.extension.FormToolbarsType getFormToolbars();
    
    /**
     * True if has "form-toolbars" element
     */
    boolean isSetFormToolbars();
    
    /**
     * Sets the "form-toolbars" element
     */
    void setFormToolbars(com.appnomic.appsone.ui.extension.FormToolbarsType formToolbars);
    
    /**
     * Appends and returns a new empty "form-toolbars" element
     */
    com.appnomic.appsone.ui.extension.FormToolbarsType addNewFormToolbars();
    
    /**
     * Unsets the "form-toolbars" element
     */
    void unsetFormToolbars();
    
    /**
     * Gets array of all "field-group" elements
     */
    com.appnomic.appsone.ui.extension.FieldGroupType[] getFieldGroupArray();
    
    /**
     * Gets ith "field-group" element
     */
    com.appnomic.appsone.ui.extension.FieldGroupType getFieldGroupArray(int i);
    
    /**
     * Returns number of "field-group" element
     */
    int sizeOfFieldGroupArray();
    
    /**
     * Sets array of all "field-group" element
     */
    void setFieldGroupArray(com.appnomic.appsone.ui.extension.FieldGroupType[] fieldGroupArray);
    
    /**
     * Sets ith "field-group" element
     */
    void setFieldGroupArray(int i, com.appnomic.appsone.ui.extension.FieldGroupType fieldGroup);
    
    /**
     * Inserts and returns a new empty value (as xml) as the ith "field-group" element
     */
    com.appnomic.appsone.ui.extension.FieldGroupType insertNewFieldGroup(int i);
    
    /**
     * Appends and returns a new empty value (as xml) as the last "field-group" element
     */
    com.appnomic.appsone.ui.extension.FieldGroupType addNewFieldGroup();
    
    /**
     * Removes the ith "field-group" element
     */
    void removeFieldGroup(int i);
    
    /**
     * Gets the "form-toolbar" element
     */
    com.appnomic.appsone.ui.extension.FormToolbarType getFormToolbar();
    
    /**
     * True if has "form-toolbar" element
     */
    boolean isSetFormToolbar();
    
    /**
     * Sets the "form-toolbar" element
     */
    void setFormToolbar(com.appnomic.appsone.ui.extension.FormToolbarType formToolbar);
    
    /**
     * Appends and returns a new empty "form-toolbar" element
     */
    com.appnomic.appsone.ui.extension.FormToolbarType addNewFormToolbar();
    
    /**
     * Unsets the "form-toolbar" element
     */
    void unsetFormToolbar();
    
    /**
     * Gets the "columns" element
     */
    com.appnomic.appsone.ui.extension.ColumnsType getColumns();
    
    /**
     * True if has "columns" element
     */
    boolean isSetColumns();
    
    /**
     * Sets the "columns" element
     */
    void setColumns(com.appnomic.appsone.ui.extension.ColumnsType columns);
    
    /**
     * Appends and returns a new empty "columns" element
     */
    com.appnomic.appsone.ui.extension.ColumnsType addNewColumns();
    
    /**
     * Unsets the "columns" element
     */
    void unsetColumns();
    
    /**
     * Gets the "filters" element
     */
    com.appnomic.appsone.ui.extension.FiltersType getFilters();
    
    /**
     * True if has "filters" element
     */
    boolean isSetFilters();
    
    /**
     * Sets the "filters" element
     */
    void setFilters(com.appnomic.appsone.ui.extension.FiltersType filters);
    
    /**
     * Appends and returns a new empty "filters" element
     */
    com.appnomic.appsone.ui.extension.FiltersType addNewFilters();
    
    /**
     * Unsets the "filters" element
     */
    void unsetFilters();
    
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
     * Gets the "ref" attribute
     */
    java.lang.String getRef();
    
    /**
     * Gets (as xml) the "ref" attribute
     */
    org.apache.xmlbeans.XmlString xgetRef();
    
    /**
     * True if has "ref" attribute
     */
    boolean isSetRef();
    
    /**
     * Sets the "ref" attribute
     */
    void setRef(java.lang.String ref);
    
    /**
     * Sets (as xml) the "ref" attribute
     */
    void xsetRef(org.apache.xmlbeans.XmlString ref);
    
    /**
     * Unsets the "ref" attribute
     */
    void unsetRef();
    
    /**
     * Gets the "query-by" attribute
     */
    java.lang.String getQueryBy();
    
    /**
     * Gets (as xml) the "query-by" attribute
     */
    org.apache.xmlbeans.XmlString xgetQueryBy();
    
    /**
     * True if has "query-by" attribute
     */
    boolean isSetQueryBy();
    
    /**
     * Sets the "query-by" attribute
     */
    void setQueryBy(java.lang.String queryBy);
    
    /**
     * Sets (as xml) the "query-by" attribute
     */
    void xsetQueryBy(org.apache.xmlbeans.XmlString queryBy);
    
    /**
     * Unsets the "query-by" attribute
     */
    void unsetQueryBy();
    
    /**
     * A factory class with static methods for creating instances
     * of this type.
     */
    
    public static final class Factory
    {
        public static com.appnomic.appsone.ui.extension.SummaryFormType newInstance() {
          return (com.appnomic.appsone.ui.extension.SummaryFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().newInstance( type, null ); }
        
        public static com.appnomic.appsone.ui.extension.SummaryFormType newInstance(org.apache.xmlbeans.XmlOptions options) {
          return (com.appnomic.appsone.ui.extension.SummaryFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().newInstance( type, options ); }
        
        /** @param xmlAsString the string value to parse */
        public static com.appnomic.appsone.ui.extension.SummaryFormType parse(java.lang.String xmlAsString) throws org.apache.xmlbeans.XmlException {
          return (com.appnomic.appsone.ui.extension.SummaryFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( xmlAsString, type, null ); }
        
        public static com.appnomic.appsone.ui.extension.SummaryFormType parse(java.lang.String xmlAsString, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException {
          return (com.appnomic.appsone.ui.extension.SummaryFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( xmlAsString, type, options ); }
        
        /** @param file the file from which to load an xml document */
        public static com.appnomic.appsone.ui.extension.SummaryFormType parse(java.io.File file) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.SummaryFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( file, type, null ); }
        
        public static com.appnomic.appsone.ui.extension.SummaryFormType parse(java.io.File file, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.SummaryFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( file, type, options ); }
        
        public static com.appnomic.appsone.ui.extension.SummaryFormType parse(java.net.URL u) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.SummaryFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( u, type, null ); }
        
        public static com.appnomic.appsone.ui.extension.SummaryFormType parse(java.net.URL u, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.SummaryFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( u, type, options ); }
        
        public static com.appnomic.appsone.ui.extension.SummaryFormType parse(java.io.InputStream is) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.SummaryFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( is, type, null ); }
        
        public static com.appnomic.appsone.ui.extension.SummaryFormType parse(java.io.InputStream is, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.SummaryFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( is, type, options ); }
        
        public static com.appnomic.appsone.ui.extension.SummaryFormType parse(java.io.Reader r) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.SummaryFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( r, type, null ); }
        
        public static com.appnomic.appsone.ui.extension.SummaryFormType parse(java.io.Reader r, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (com.appnomic.appsone.ui.extension.SummaryFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( r, type, options ); }
        
        public static com.appnomic.appsone.ui.extension.SummaryFormType parse(javax.xml.stream.XMLStreamReader sr) throws org.apache.xmlbeans.XmlException {
          return (com.appnomic.appsone.ui.extension.SummaryFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( sr, type, null ); }
        
        public static com.appnomic.appsone.ui.extension.SummaryFormType parse(javax.xml.stream.XMLStreamReader sr, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException {
          return (com.appnomic.appsone.ui.extension.SummaryFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( sr, type, options ); }
        
        public static com.appnomic.appsone.ui.extension.SummaryFormType parse(org.w3c.dom.Node node) throws org.apache.xmlbeans.XmlException {
          return (com.appnomic.appsone.ui.extension.SummaryFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( node, type, null ); }
        
        public static com.appnomic.appsone.ui.extension.SummaryFormType parse(org.w3c.dom.Node node, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException {
          return (com.appnomic.appsone.ui.extension.SummaryFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( node, type, options ); }
        
        /** @deprecated {@link org.apache.xmlbeans.xml.stream.XMLInputStream} */
        public static com.appnomic.appsone.ui.extension.SummaryFormType parse(org.apache.xmlbeans.xml.stream.XMLInputStream xis) throws org.apache.xmlbeans.XmlException, org.apache.xmlbeans.xml.stream.XMLStreamException {
          return (com.appnomic.appsone.ui.extension.SummaryFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( xis, type, null ); }
        
        /** @deprecated {@link org.apache.xmlbeans.xml.stream.XMLInputStream} */
        public static com.appnomic.appsone.ui.extension.SummaryFormType parse(org.apache.xmlbeans.xml.stream.XMLInputStream xis, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, org.apache.xmlbeans.xml.stream.XMLStreamException {
          return (com.appnomic.appsone.ui.extension.SummaryFormType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( xis, type, options ); }
        
        /** @deprecated {@link org.apache.xmlbeans.xml.stream.XMLInputStream} */
        public static org.apache.xmlbeans.xml.stream.XMLInputStream newValidatingXMLInputStream(org.apache.xmlbeans.xml.stream.XMLInputStream xis) throws org.apache.xmlbeans.XmlException, org.apache.xmlbeans.xml.stream.XMLStreamException {
          return org.apache.xmlbeans.XmlBeans.getContextTypeLoader().newValidatingXMLInputStream( xis, type, null ); }
        
        /** @deprecated {@link org.apache.xmlbeans.xml.stream.XMLInputStream} */
        public static org.apache.xmlbeans.xml.stream.XMLInputStream newValidatingXMLInputStream(org.apache.xmlbeans.xml.stream.XMLInputStream xis, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, org.apache.xmlbeans.xml.stream.XMLStreamException {
          return org.apache.xmlbeans.XmlBeans.getContextTypeLoader().newValidatingXMLInputStream( xis, type, options ); }
        
        private Factory() { } // No instance of this class allowed
    }
}
