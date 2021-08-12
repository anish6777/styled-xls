function CellAttribute(value, styleName, colSpan = 1,rowSpan=1, type) {
  if (
    type === "number" ||
    (!type &&
      (typeof value === "number" ||
        (typeof value === "string" && value.trim() && !isNaN(value))))
  ) {
    this["table:style-name"] = styleName;
    this["office:value-type"] = "float";
    this["office:value"] = value;
    this["calcext:value-type"] = "float";
    this["table:number-columns-spanned"] = colSpan;
    this["table:number-rows-spanned"] = rowSpan;
  } else {
    this["table:style-name"] = styleName;
    this["office:value-type"] = "string";
    this["calcext:value-type"] = "string";
    this["table:number-columns-spanned"] = colSpan;
    this["table:number-rows-spanned"] = rowSpan;
  }
}

export default CellAttribute;
