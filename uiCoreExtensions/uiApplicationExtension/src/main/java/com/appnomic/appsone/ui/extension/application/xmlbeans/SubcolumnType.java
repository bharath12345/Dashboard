/*
 * XML Type:  subcolumnType
 * Namespace: 
 * Java type: SubcolumnType
 *
 * Automatically generated - do not modify.
 */
package com.appnomic.appsone.ui.extension.application.xmlbeans;


/**
 * An XML subcolumnType(@).
 *
 * This is an atomic type that is a restriction of xmlbeans.SubcolumnType.
 */
public interface SubcolumnType extends org.apache.xmlbeans.XmlString
{
    public static final org.apache.xmlbeans.SchemaType type = (org.apache.xmlbeans.SchemaType)
        org.apache.xmlbeans.XmlBeans.typeSystemForClassLoader(SubcolumnType.class.getClassLoader(), "schemaorg_apache_xmlbeans.system.sB2F64E0EA1A7DFF7DD3EABED1BF06CEA").resolveHandle("subcolumntype1227type");
    
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
     * Gets the "width" attribute
     */
    byte getWidth();
    
    /**
     * Gets (as xml) the "width" attribute
     */
    org.apache.xmlbeans.XmlByte xgetWidth();
    
    /**
     * True if has "width" attribute
     */
    boolean isSetWidth();
    
    /**
     * Sets the "width" attribute
     */
    void setWidth(byte width);
    
    /**
     * Sets (as xml) the "width" attribute
     */
    void xsetWidth(org.apache.xmlbeans.XmlByte width);
    
    /**
     * Unsets the "width" attribute
     */
    void unsetWidth();
    
    /**
     * Gets the "display" attribute
     */
    java.lang.String getDisplay();
    
    /**
     * Gets (as xml) the "display" attribute
     */
    org.apache.xmlbeans.XmlString xgetDisplay();
    
    /**
     * True if has "display" attribute
     */
    boolean isSetDisplay();
    
    /**
     * Sets the "display" attribute
     */
    void setDisplay(java.lang.String display);
    
    /**
     * Sets (as xml) the "display" attribute
     */
    void xsetDisplay(org.apache.xmlbeans.XmlString display);
    
    /**
     * Unsets the "display" attribute
     */
    void unsetDisplay();
    
    /**
     * Gets the "sortable" attribute
     */
    java.lang.String getSortable();
    
    /**
     * Gets (as xml) the "sortable" attribute
     */
    org.apache.xmlbeans.XmlString xgetSortable();
    
    /**
     * True if has "sortable" attribute
     */
    boolean isSetSortable();
    
    /**
     * Sets the "sortable" attribute
     */
    void setSortable(java.lang.String sortable);
    
    /**
     * Sets (as xml) the "sortable" attribute
     */
    void xsetSortable(org.apache.xmlbeans.XmlString sortable);
    
    /**
     * Unsets the "sortable" attribute
     */
    void unsetSortable();
    
    /**
     * Gets the "filterable" attribute
     */
    java.lang.String getFilterable();
    
    /**
     * Gets (as xml) the "filterable" attribute
     */
    org.apache.xmlbeans.XmlString xgetFilterable();
    
    /**
     * True if has "filterable" attribute
     */
    boolean isSetFilterable();
    
    /**
     * Sets the "filterable" attribute
     */
    void setFilterable(java.lang.String filterable);
    
    /**
     * Sets (as xml) the "filterable" attribute
     */
    void xsetFilterable(org.apache.xmlbeans.XmlString filterable);
    
    /**
     * Unsets the "filterable" attribute
     */
    void unsetFilterable();
    
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
        public static SubcolumnType newInstance() {
          return (SubcolumnType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().newInstance( type, null ); }
        
        public static SubcolumnType newInstance(org.apache.xmlbeans.XmlOptions options) {
          return (SubcolumnType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().newInstance( type, options ); }
        
        /** @param xmlAsString the string value to parse */
        public static SubcolumnType parse(java.lang.String xmlAsString) throws org.apache.xmlbeans.XmlException {
          return (SubcolumnType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( xmlAsString, type, null ); }
        
        public static SubcolumnType parse(java.lang.String xmlAsString, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException {
          return (SubcolumnType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( xmlAsString, type, options ); }
        
        /** @param file the file from which to load an xml document */
        public static SubcolumnType parse(java.io.File file) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (SubcolumnType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( file, type, null ); }
        
        public static SubcolumnType parse(java.io.File file, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (SubcolumnType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( file, type, options ); }
        
        public static SubcolumnType parse(java.net.URL u) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (SubcolumnType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( u, type, null ); }
        
        public static SubcolumnType parse(java.net.URL u, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (SubcolumnType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( u, type, options ); }
        
        public static SubcolumnType parse(java.io.InputStream is) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (SubcolumnType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( is, type, null ); }
        
        public static SubcolumnType parse(java.io.InputStream is, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (SubcolumnType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( is, type, options ); }
        
        public static SubcolumnType parse(java.io.Reader r) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (SubcolumnType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( r, type, null ); }
        
        public static SubcolumnType parse(java.io.Reader r, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (SubcolumnType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( r, type, options ); }
        
        public static SubcolumnType parse(javax.xml.stream.XMLStreamReader sr) throws org.apache.xmlbeans.XmlException {
          return (SubcolumnType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( sr, type, null ); }
        
        public static SubcolumnType parse(javax.xml.stream.XMLStreamReader sr, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException {
          return (SubcolumnType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( sr, type, options ); }
        
        public static SubcolumnType parse(org.w3c.dom.Node node) throws org.apache.xmlbeans.XmlException {
          return (SubcolumnType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( node, type, null ); }
        
        public static SubcolumnType parse(org.w3c.dom.Node node, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException {
          return (SubcolumnType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( node, type, options ); }
        
        /** @deprecated {@link org.apache.xmlbeans.xml.stream.XMLInputStream} */
        public static SubcolumnType parse(org.apache.xmlbeans.xml.stream.XMLInputStream xis) throws org.apache.xmlbeans.XmlException, org.apache.xmlbeans.xml.stream.XMLStreamException {
          return (SubcolumnType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( xis, type, null ); }
        
        /** @deprecated {@link org.apache.xmlbeans.xml.stream.XMLInputStream} */
        public static SubcolumnType parse(org.apache.xmlbeans.xml.stream.XMLInputStream xis, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, org.apache.xmlbeans.xml.stream.XMLStreamException {
          return (SubcolumnType) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( xis, type, options ); }
        
        /** @deprecated {@link org.apache.xmlbeans.xml.stream.XMLInputStream} */
        public static org.apache.xmlbeans.xml.stream.XMLInputStream newValidatingXMLInputStream(org.apache.xmlbeans.xml.stream.XMLInputStream xis) throws org.apache.xmlbeans.XmlException, org.apache.xmlbeans.xml.stream.XMLStreamException {
          return org.apache.xmlbeans.XmlBeans.getContextTypeLoader().newValidatingXMLInputStream( xis, type, null ); }
        
        /** @deprecated {@link org.apache.xmlbeans.xml.stream.XMLInputStream} */
        public static org.apache.xmlbeans.xml.stream.XMLInputStream newValidatingXMLInputStream(org.apache.xmlbeans.xml.stream.XMLInputStream xis, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, org.apache.xmlbeans.xml.stream.XMLStreamException {
          return org.apache.xmlbeans.XmlBeans.getContextTypeLoader().newValidatingXMLInputStream( xis, type, options ); }
        
        private Factory() { } // No instance of this class allowed
    }
}
