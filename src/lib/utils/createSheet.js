import Sheet from "./../Nodes/Sheet";
import CellStyle from "./../Nodes/CellStyle";
import { createRow } from "./createRow";

export function createSheet(name, content = []) {
  const output = new Sheet(name, []);
  const styles = [];
  const addRow = (row, style, rowStyleName) => {
    let styleName;
    const newRowStyles = [];
    if (style) {
      styleName = rowStyleName || `${name}R${output.elements.length}`;
      const rowStyle = new CellStyle(styleName, style);
      newRowStyles.push(rowStyle);
    }
    const newRow = createRow(
      styleName || rowStyleName || name,
      row,
      output.elements.length
    );
    output.elements.push(newRow.output);
    newRowStyles.push(...newRow.styles);
    styles.push(...newRowStyles);
    return { styles: newRowStyles, addCell: newRow.addCell };
  };
  if (Array.isArray(content)) {
    content.forEach((c, i) => {
      if (Array.isArray(c)) {
        addRow(c);
      } else if (c && c.elements) {
        let rowStyleName;
        if (c.style) {
          rowStyleName = `${name}R${i}`;
          const rowStyle = new CellStyle(rowStyleName, c.style);
          styles.push(rowStyle);
        }
        addRow(c.elements, null, rowStyleName);
      }
    });
  }
  return { output, addRow, styles };
}
