
function createRowFromObject(currentRow,headers,styleName){
  let rowXml = '<Row>'
  if(headers){
    for (let j = 0; j < headers.length; j++) {
      const currentColumn = headers[j];
            const currentValue = currentRow[currentColumn.key];
            if (currentColumn.type) {
               if(currentColumn.type == 'formula'){
                rowXml += '<Cell ss:StyleID="' + (currentColumn.columnStyle? ((currentColumn.key||"")+"ColumnCell"):styleName) + currentColumn.outputType + '" ss:Formula="'+(currentValue||currentColumn.formula||"")+'"><Data ss:Type="' + "Formula" + '">';
                }
                else if(currentColumn.type == 'float') {
                  rowXml += '<Cell ss:StyleID="' + (currentColumn.columnStyle? ((currentColumn.key||"")+"ColumnCell"):styleName)  + "float" + '"><Data ss:Type="' +"Number" + '">';
                  rowXml += currentValue;
                }
                else if(currentColumn.type == 'number') {
                  rowXml += '<Cell ss:StyleID="' + (currentColumn.columnStyle? ((currentColumn.key||"")+"ColumnCell"):styleName)  + "int" + '"><Data ss:Type="' +"Number" + '">';
                  rowXml += currentValue;
                }
                else if(currentColumn.type == 'int') {
                  rowXml += '<Cell ss:StyleID="' + (currentColumn.columnStyle? ((currentColumn.key||"")+"ColumnCell"):styleName)  + "int" + '"><Data ss:Type="' +"Number" + '">';
                  rowXml += currentValue;
                }
                else {
                  rowXml += '<Cell ss:StyleID="' + (currentColumn.columnStyle? ((currentColumn.key||"")+"ColumnCell"):styleName)   + '"><Data ss:Type="' +"String" + '">';
                  rowXml += currentValue;
                }
                rowXml += '</Data></Cell>';
            }
    }
  }else{
    const allKeys = Object.keys(currentRow);
    for (let j = 0; j < allKeys.length; j++) {
      const currentColumn = allKeys[j];
            const currentValue = currentRow[currentColumn];
            if(typeof currentValue === "number"){
              rowXml += '<Cell ss:StyleID="' +styleName   +(currentValue % 1 === 0 ? "int":"float") +'"><Data ss:Type="' +"Number" + '">';
              rowXml += currentValue;
            rowXml += '</Data></Cell>';

            }else{
              rowXml += '<Cell ss:StyleID="' +styleName   + '"><Data ss:Type="' +"String" + '">';
              rowXml += currentValue;
            rowXml += '</Data></Cell>';

            }
    }

  }
  rowXml += '</Row>'
  return rowXml;
}
export default createRowFromObject;
