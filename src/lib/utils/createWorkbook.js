import createRowFromArray from "./createRowFromArray";
import createRowFromObject from "./createRowFromObject";
import {worksheetFooter} from "./constants";

function createWorkbook(inp, title,headers,addStyle,lastRow,extraHeaders) {
  let headerXml = '<Row ss:AutoFitHeight="1">';
  let visibleColumnCount = 0;
  let totalWidth = 0;
  let colXml = '';
  if(headers){
    visibleColumnCount=headers.length;
    for (let i = 0; i < headers.length; i++) {
      const currentHeader = headers[i];
      console.log("i",i)
      console.log("currentHeader",currentHeader)
        if (currentHeader){
            const width = currentHeader.width;
            totalWidth += width;
            console.log("totalWidth",totalWidth)
            if(currentHeader.headerStyle){
              addStyle((currentHeader.key||"")+"ColumnHeader",currentHeader.headerStyle);
            } 
            if(currentHeader.columnStyle){
              addStyle((currentHeader.key||"")+"ColumnCell",currentHeader.columnStyle);
            } 
  
            if (currentHeader.displayName === "") {
              visibleColumnCount--;
            } else {
                colXml += '<Column ss:AutoFitWidth="1" ss:Width="' + width + '" />';
                headerXml += `<Cell ss:StyleID="${currentHeader.headerStyle ? (currentHeader.key||"")+"ColumnHeader":"headercell"}">` +
                    '<Data ss:Type="String">' + currentHeader.displayName + '</Data>' +
                    '<NamedCell ss:Name="Header_Texts"></NamedCell></Cell>';
            }
        }
    }
  }else if(inp && Array.isArray(inp) && inp.length > 0){
    const keys = Object.keys(inp[0]);
    for (let i = 0; i < keys.length; i++) {
      const currentHeader = keys[i];
      console.log("i",i)
        if (currentHeader){
            const width = 90;
            totalWidth += width;
            console.log("totalWidth",totalWidth)
                colXml += '<Column ss:AutoFitWidth="1" ss:Width="' + width + '" />';
                headerXml += `<Cell ss:StyleID="headercell">` +
                    '<Data ss:Type="String">' + currentHeader + '</Data>' +
                    '<NamedCell ss:Name="Header_Texts"></NamedCell></Cell>';
        }
    }

  console.log("keys",keys)
  }
  headerXml += '</Row>'
  
  if(Array.isArray(extraHeaders)){
    extraHeaders.forEach((eh,i) => {
      if(typeof eh === "object"){
        const firstRowStyles =eh.style;//{color:"#000000",fontColor:"#FFFFFF"}
        addStyle("firstRow"+i,firstRowStyles);
        const firstRowXml = createRowFromArray(eh.elements,eh.style ? ("firstRow"+i):"default",addStyle);
        headerXml = firstRowXml+headerXml;
      }else{
        const firstRowXml = createRowFromArray(eh,"default",addStyle);
        headerXml = firstRowXml+headerXml;
      }

    })
  }

  let sheet = {
      height: 9000,
      width: Math.floor(totalWidth * 30) + 50
  };

  let numGridRows =  inp.length + 2;

  let worksheet = worksheetHeader(title,visibleColumnCount,numGridRows,colXml,headerXml);

  for (let i=0; i < inp.length; i++) {
    console.log("row",i)
      let styleName = (i%2 === 1) ? 'zebra' : 'default';
      let currentRow = inp[i];
      const newRow = createRowFromObject(currentRow,headers,styleName)
      worksheet += newRow;
  }
  
  if(lastRow && lastRow.elements){
    const lastRowStyles =lastRow.style;//{color:"#000000",fontColor:"#FFFFFF"}
    addStyle("lastRow",lastRowStyles);
    const lastRowXml = createRowFromArray(lastRow.elements,lastRow.style ? "lastRow":"default",addStyle);
    worksheet += lastRowXml;
  }


  
  console.log("t",worksheet)


  sheet.xml = worksheet+worksheetFooter;
  return sheet;
}

export default createWorkbook;