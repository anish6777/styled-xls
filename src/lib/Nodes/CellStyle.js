function CellStyleAttribute(value) {
  this["style:name"] = value;
  this["style:family"] = "table-cell";
  this["style:parent-style-name"] = "Default";
}

function CellProperties(props) {
  this.type = "element";
  this.name = "style:table-cell-properties";
  this.attributes = new CellPropertiesAttributes(props);
}

function CellPropertiesAttributes(props = {}) {
  (this["style:glyph-orientation-vertical"] =
    props.glyphOrientationVertical || "0"),
    (this["fo:background-color"] = props.backgroundColor || "#000000"),
    (this["style:diagonal-bl-tr"] = props.diagonalBlTr || "none"),
    (this["style:diagonal-tl-br"] = props.diagonalTlBr || "none"),
    (this["style:text-align-source"] = props.textAlignSource || "fix"),
    (this["style:repeat-content"] = props.repeatContent || "false"),
    (this["fo:wrap-option"] = props.wrapOption || "no-wrap"),
    (this["fo:border"] =
      props.border || `0.06pt solid ${props.borderColor||"#000000"}`),
    (this["style:direction"] = props.direction || "ltr"),
    (this["fo:padding"] = props.padding || "0.028in"),
    (this["style:rotation-angle"] = props.rotationAngle || "0"),
    (this["style:rotation-align"] = props.rotationAlign || "none"),
    (this["style:shrink-to-fit"] = props.shrinkToFit || "false"),
    (this["style:vertical-align"] = props.verticalAlign || "middle"),
    (this["loext:vertical-justify"] = props.verticalJustify || "auto");
}

function ParagraphProperties(props = {}) {
  this.type = "element";
  this.name = "style:paragraph-properties";
  this.attributes = new ParagraphAttributes(props);
}

function ParagraphAttributes(props = {}) {
  (this["fo:text-align"] = props.textAlign || "center"),
    (this["css3t:text-justify"] = props.textJustify || "auto"),
    (this["fo:margin-left"] = props.marginLeft || "0in"),
    (this["style:writing-mode"] = props.writingMode || "page");
}

function TextProperties(props = {}) {
  this.type = "element";
  this.name = "style:text-properties";
  this.attributes = new TextAttributes(props);
}

function TextAttributes(props = {}) {
  (this["fo:color"] = props.color || "#ffffff"),
    (this["style:text-outline"] = props.textOutline || "false"),
    (this["style:text-line-through-style"] =
      props.textLineThroughStyle || "none"),
    (this["style:text-line-through-type"] =
      props.textLineThroughType || "none"),
    (this["style:font-name"] = props.fontName || "Arial"),
    (this["fo:font-size"] = `${props.fontSize || "10"}pt`),
    (this["fo:font-style"] = props.fontStyle || "normal"),
    (this["fo:text-shadow"] = props.fontShadow || "none"),
    (this["style:text-underline-style"] = props.textUnderlineStyle || "none"),
    (this["fo:font-weight"] = props.fontWeight || "normal"),
    (this["style:font-size-asian"] = `${props.fontSize || "10"}pt`),
    (this["style:font-style-asian"] = props.fontStyleAsian || "normal"),
    (this["style:font-weight-asian"] = props.fontWeightAsian || "normal"),
    (this["style:font-name-complex"] = props.fontNameComplex || "Arial"),
    (this["style:font-size-complex"] = `${props.fontSize || "10"}pt`),
    (this["style:font-style-complex"] = props.fontStyleComplex || "normal"),
    (this["style:font-weight-complex"] = props.fontWeightComplex || "normal");
}

function CellStyle(name, props) {
  this.type = "element";
  this.name = "style:style";
  this.attributes = new CellStyleAttribute(name);
  this.elements = [
    new CellProperties(props),
    new ParagraphProperties(props),
    new TextProperties(props),
  ];
}

export default CellStyle;
