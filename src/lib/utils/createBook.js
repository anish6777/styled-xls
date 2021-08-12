import { json2xml } from "xml-js";

import initialObj from "./../config/initElements.json";
import Meta from "./../Nodes/Meta";
import Book from "./../Nodes/Book";
import { createBody } from "./createBody";
import { createStyle } from "./createStyle";
import { createSheet } from "./createSheet";

export function createBook() {
  const meta = new Meta();
  const output = new Book(meta, initialObj.elements);
  let body = {};
  let autStyle = {};
  body = createBody();
  output.elements[0].elements.push(body.output);
  autStyle = createStyle();
  output.elements[0].elements.splice(5, 0, autStyle.style);
  const addSheet = (name, content, style) => {
    const sheet = createSheet(name, content);
    if (style) {
      autStyle.addRawStyle(name, style);
    }
    if (body && body.addSheet) {
      body.addSheet(sheet.output);
    }
    if (autStyle && autStyle.addStyles) {
      autStyle.addStyles(sheet.styles);
    }
    const addRow = (inp, style,rowSpan) => {
      const addedRow = sheet.addRow(inp, style,rowSpan);
      autStyle.addStyles(addedRow.styles);
      const addCell = (cellInp, cellStyle) => {
        const addedCell = addedRow.addCell(cellInp, cellStyle);
        autStyle.addStyles(addedCell.styles);
      };
      return { ...addedRow, addCell };
    };
    return { ...sheet, addRow };
  };
  const addBody = (inpBody) => {
    body = inpBody;
    output.elements[0].elements.push(inpBody.output);
  };
  const addStyle = (style) => {
    output.elements[0].elements.splice(5, 0, style);
  };
  const extract = () => {
    const options = { compact: false, ignoreComment: true, spaces: 4 };
    const result = json2xml(output, options);
    return result;
  };
  return { addBody, addStyle, addSheet, extract };
}
