function CellAttribute( styleName, colSpan = 2) {
    this["table:style-name"] = styleName;
    this["table:number-columns-repeated"] = parseInt(colSpan)-1;
}

export default CellAttribute;
