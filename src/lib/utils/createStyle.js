import OfficeAutomaticStyle from "./../Nodes/OfficeAutomaticStyle";
import CellStyle from "./../Nodes/CellStyle";

export function createStyle() {
  const style = new OfficeAutomaticStyle();
  const addRawStyle = (name, cstyle) => {
    style.elements.push(new CellStyle(name, cstyle));
  };
  const addStyles = (rowStyles = []) => {
    style.elements.push(...rowStyles);
  };
  return { style, addRawStyle, addStyles };
}
