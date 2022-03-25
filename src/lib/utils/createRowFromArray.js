function createRowFromArray(currentRow,styleName,addStyle,rowSpan=0){
  console.log("currentRow",currentRow,"rowSpan",rowSpan)
  let rowXml = '<Row>'
  for (let j = 0; j < currentRow.length; j++) {
    const currentColumn = currentRow[j];
    const columnStyleName = new Date().getTime();
    console.log("currentColumn",currentColumn)
    if(currentColumn.style){
      addStyle(columnStyleName,currentColumn.style);

    }
    if(typeof currentColumn === 'object' &&
    !Array.isArray(currentColumn) &&
    currentColumn !== null){
      const currentValue = currentColumn.element;
          if (currentColumn.type) {
            console.log("currentColumn",currentColumn,"currentColumn.rowSpan",currentColumn.rowSpan,"rowSpan",rowSpan)
             if(currentColumn.type == 'formula'){
              rowXml += '<Cell ss:MergeDown="'+(currentColumn.rowSpan||rowSpan||"0")+'" ss:MergeAcross="'+(currentColumn.columnSpan||"0")+'" ss:StyleID="' +  (currentColumn.style? columnStyleName:styleName) +currentColumn.outputType + '" ss:Formula="'+(currentValue||currentColumn.formula||"")+'"><Data ss:Type="' + "Formula" + '">';
              }
              else if(currentColumn.type == 'float') {
                rowXml += '<Cell ss:MergeDown="'+(currentColumn.rowSpan||rowSpan||"0")+'" ss:MergeAcross="'+(currentColumn.columnSpan||"0")+'" ss:StyleID="' +  (currentColumn.style? columnStyleName:styleName)  + "float" + '"><Data ss:Type="' +"Number" + '">';
                rowXml += currentValue;
              }
              else if(currentColumn.type == 'number') {
                rowXml += '<Cell ss:MergeDown="'+(currentColumn.rowSpan||rowSpan||"0")+'" ss:MergeAcross="'+(currentColumn.columnSpan||"0")+'" ss:StyleID="' +  (currentColumn.style? columnStyleName:styleName)  + "int" + '"><Data ss:Type="' +"Number" + '">';
                rowXml += currentValue;
              }
              else if(currentColumn.type == 'int') {
                rowXml += '<Cell ss:MergeDown="'+(currentColumn.rowSpan||rowSpan||"0")+'" ss:MergeAcross="'+(currentColumn.columnSpan||"0")+'" ss:StyleID="' +  (currentColumn.style? columnStyleName:styleName)  + "int" + '"><Data ss:Type="' +"Number" + '">';
                rowXml += currentValue;
              }
              else {
                rowXml += '<Cell ss:MergeDown="'+(currentColumn.rowSpan||rowSpan||"0")+'" ss:MergeAcross="'+(currentColumn.columnSpan||"0")+'" ss:StyleID="' +  (currentColumn.style? columnStyleName:styleName)   + '"><Data ss:Type="' +"String" + '">';
                rowXml += currentValue;
              }
              rowXml += '</Data></Cell>';
          }else if(typeof currentColumn === "object"){
            console.log("currentColumn object",currentColumn)
            rowXml += '<Cell ss:MergeDown="'+(currentColumn.rowSpan||rowSpan||"0")+'" ss:MergeAcross="'+(currentColumn.columnSpan||"0")+'" ss:StyleID="' +  (currentColumn.style? columnStyleName:styleName)   + '"><Data ss:Type="' +"String" + '">';
            rowXml += currentValue;
            rowXml += '</Data></Cell>';
            console.log("rowXml",rowXml)
          }
    }else {
    if(typeof currentColumn === "string"){
      rowXml += '<Cell ss:MergeDown="'+(rowSpan||"0")+'" ss:StyleID="' + styleName  + '"><Data ss:Type="' +"String" + '">';
      rowXml += currentColumn;
      rowXml += '</Data></Cell>';
    }else if(typeof currentColumn === "number"){
      rowXml += '<Cell ss:MergeDown="'+(rowSpan||"0")+'" ss:StyleID="' +styleName   +(currentColumn % 1 === 0 ? "int":"float") +'"><Data ss:Type="' +"Number" + '">';
      rowXml += currentColumn;
    rowXml += '</Data></Cell>';
    }
  }}
  rowXml += '</Row>'
  for(let k=0;k<rowSpan;k++){
    rowXml += '<Row>'
    rowXml += '</Row>'
  }
  return rowXml;
}

export default createRowFromArray;