import createRowFromArray from "./createRowFromArray";
import createWorksheetHeader from "./createWorksheetHeader";
import {worksheetFooter} from "./constants";

function createWorkbookFromArr(inp, title,addStyle) {
  let colXml = '';
  let visibleColumnCount = 0;
  let totalWidth = 0;
  if(inp && Array.isArray(inp) && inp.length > 0){
    const keys = inp[0];
    visibleColumnCount = keys.length;
    for (let i = 0; i < keys.length; i++) {
      const currentHeader = keys[i];
        if (currentHeader){
            const width = 90;
            totalWidth += width;
                colXml += '<Column ss:AutoFitWidth="1" ss:Width="' + width + '" />';
        }
      }
  }
  let sheet = {
      height: 9000,
      width: Math.floor(totalWidth * 30) + 50
  };
  let numGridRows =  inp.length + 2;

  let worksheet = createWorksheetHeader(title,visibleColumnCount,numGridRows,colXml);
  for (let i=0; i < inp.length; i++) {
      let styleName = (i%2 === 1) ? 'zebra' : 'normal';
      let currentRow = inp[i];
      if(currentRow.style){
        addStyle("row"+i,currentRow.style);
      }
      const newRow = currentRow && currentRow.elements ?  createRowFromArray(currentRow.elements,currentRow.style ? ("row"+i) :styleName,addStyle,currentRow.rowSpan):createRowFromArray(currentRow,styleName);
      worksheet += newRow;
  }

  sheet.xml = worksheet+worksheetFooter;
  return sheet;
}

export default createWorkbookFromArr;