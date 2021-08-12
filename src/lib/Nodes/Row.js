import Cell from "./Cell";
import RowAttribute from "./RowAttribute";

function Row(values = [], styleName,rowSpan) {
  this.type = "element";
  this.name = "table:table-row";
  this.attributes = new RowAttribute(rowSpan);
  if (Array.isArray(values)) {
    this.elements = values.map((element) => new Cell(element, styleName));
  }
}

export default Row;
