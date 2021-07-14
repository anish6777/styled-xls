import Row from "./Row";
import SheetAttribute from "./SheetAttribute";

function Sheet(name, values) {
  this.type = "element";
  this.name = "table:table";
  this.attributes = new SheetAttribute(name);
  if (Array.isArray(values)) {
    this.elements = values.map((element) => new Row(element, name));
  }
}

export default Sheet;
