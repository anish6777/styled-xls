import Row from "./../Nodes/Row";
import Cell from "./../Nodes/Cell";
import CellStyle from "./../Nodes/CellStyle";

export function createRow(name, cells = [], rowNum) {
  const output = new Row([], name);
  const styles = [];
  const addCell = (cell, style, cellStyleName, columnSpan) => {
    let styleName;
    let cellStyles = [];
    if (style) {
      styleName = `${name}R${rowNum}C${output.elements.length}`;
      const cellStyle = new CellStyle(styleName, style);
      cellStyles.push(cellStyle);
    }
    output.elements.push(
      new Cell(cell, styleName || cellStyleName || name, columnSpan)
    );
    return { styles: cellStyles };
  };
  if (Array.isArray(cells)) {
    cells.forEach((c, i) => {
      if (c && c.element) {
        let cellStyleName;
        if (c.style) {
          cellStyleName = `${name}R${rowNum}C${i}`;
          const cellStyle = new CellStyle(cellStyleName, c.style);
          styles.push(cellStyle);
        }
        addCell(c.element, null, cellStyleName, c.columnSpan);
      } else {
        addCell(c);
      }
    });
  }
  return { output, addCell, styles };
}
