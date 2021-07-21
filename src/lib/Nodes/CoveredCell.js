import CellAttribute from "./CoveredCellAttribute";

function CoveredCell(styleName, colSpan) {
  this.type = "element";
  this.name = "table:covered-table-cell";
  this.attributes = new CellAttribute(styleName, colSpan);
}

export default CoveredCell;
