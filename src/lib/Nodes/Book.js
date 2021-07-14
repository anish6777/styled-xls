function Book(meta, elements) {
  this.declaration = {
    attributes: {
      version: "1.0",
      encoding: "UTF-8",
    },
  };
  this.elements = [
    {
      type: "element",
      name: "office:document",
      attributes: {
        "xmlns:presentation":
          "urn:oasis:names:tc:opendocument:xmlns:presentation:1.0",
        "xmlns:grddl": "http://www.w3.org/2003/g/data-view#",
        "xmlns:xhtml": "http://www.w3.org/1999/xhtml",
        "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
        "xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
        "xmlns:xforms": "http://www.w3.org/2002/xforms",
        "xmlns:dom": "http://www.w3.org/2001/xml-events",
        "xmlns:script": "urn:oasis:names:tc:opendocument:xmlns:script:1.0",
        "xmlns:form": "urn:oasis:names:tc:opendocument:xmlns:form:1.0",
        "xmlns:math": "http://www.w3.org/1998/Math/MathML",
        "xmlns:loext":
          "urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0",
        "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
        "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
        "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
        "xmlns:formx":
          "urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0",
        "xmlns:dc": "http://purl.org/dc/elements/1.1/",
        "xmlns:meta": "urn:oasis:names:tc:opendocument:xmlns:meta:1.0",
        "xmlns:config": "urn:oasis:names:tc:opendocument:xmlns:config:1.0",
        "xmlns:calcext":
          "urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0",
        "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
        "xmlns:ooo": "http://openoffice.org/2004/office",
        "xmlns:fo":
          "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
        "xmlns:field":
          "urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        "xmlns:dr3d": "urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0",
        "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
        "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
        "xmlns:chart": "urn:oasis:names:tc:opendocument:xmlns:chart:1.0",
        "xmlns:rpt": "http://openoffice.org/2005/report",
        "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
        "xmlns:css3t": "http://www.w3.org/TR/css3-text/",
        "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
        "xmlns:ooow": "http://openoffice.org/2004/writer",
        "xmlns:oooc": "http://openoffice.org/2004/calc",
        "xmlns:tableooo": "http://openoffice.org/2009/table",
        "xmlns:drawooo": "http://openoffice.org/2010/draw",
        "office:version": "1.2",
        "office:mimetype": "application/vnd.oasis.opendocument.spreadsheet",
      },
      elements: [meta, ...elements],
    },
  ];
}

export default Book;
