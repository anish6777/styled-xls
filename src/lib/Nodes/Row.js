import Cell from "./Cell";
import RowAttribute from "./RowAttribute";

function Row(values = [], styleName) {
  this.type = "element";
  this.name = "table:table-row";
  this.attributes = new RowAttribute();
  if (Array.isArray(values)) {
    this.elements = values.map((element) => new Cell(element, styleName));
  }
}

export default Row;
