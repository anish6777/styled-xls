import CellAttribute from "./CellAttribute";

function Cell(value, styleName, colSpan, type) {
  this.type = "element";
  this.name = "table:table-cell";
  this.attributes = new CellAttribute(value, styleName, colSpan, type);
  this.elements = [
    {
      type: "element",
      name: "text:p",
      elements: [
        {
          type: "text",
          text: value,
        },
      ],
    },
  ];
}

export default Cell;