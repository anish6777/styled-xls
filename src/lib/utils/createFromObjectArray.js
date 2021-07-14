import { createBook } from "./createBook";

export function convertObjectArray(
  sheetName = "sheet1",
  obj,
  tableConfig,
  columnConfig,
  extraHeaders
) {
  const keys = Array.isArray(obj) && obj.length > 0 ? Object.keys(obj[0]) : [];
  let updatedKeys = [];
  keys.forEach((k) => {
    if (columnConfig && Array.isArray(columnConfig)) {
      const keyConfig = columnConfig.find((c) => c.key === k);
      if (keyConfig) {
        updatedKeys.push({
          element: keyConfig.value || k,
          style: keyConfig.headerStyle,
        });
      } else {
        updatedKeys.push(k);
      }
    } else {
      updatedKeys.push(k);
    }
  });

  const book1 = createBook(true);
  const sheet = book1.addSheet(sheetName, [], tableConfig.defaultStyle);
  if (extraHeaders && Array.isArray(extraHeaders)) {
    extraHeaders.forEach((el) => {
      sheet.addRow(el.elements, el.Style);
    });
  }
  sheet.addRow(updatedKeys, tableConfig.headerStyle);
  obj.forEach((el) => {
    if (config && Array.isArray(config)) {
      let updatedValues = [];
      config.forEach((c) => {
        updatedValues.push({
          element: el[c.key],
          style: c.columnStyle,
        });
      });
      sheet.addRow(updatedValues);
    } else {
      const values = Object.values(el);
      sheet.addRow(values);
    }
  });
  return book1;
}
