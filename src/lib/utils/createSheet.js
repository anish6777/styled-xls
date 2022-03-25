import createWorkbookFromArray from './createWorkbookFromArray';
import createWorkbook from './createWorkbook';
import createStyles from './Styles';

function createStyleXML(styleList){
  return '<Styles>'.concat(...styleList,"</Styles>")
}

function createsheet (title,inp,styles={defaultStyle:{},headerStyle:{}},headers,extraHeaders,lastRow,fromArr=false) {
  const allStyles = createStyles(styles,!fromArr);
  const worksheet = fromArr ? createWorkbookFromArray(inp, title,allStyles.addStyle) : createWorkbook(inp,title,headers,allStyles.addStyle,lastRow,extraHeaders) ;
  const workSheetHeader = `<?xml version="1.0"?>
  <Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet" xmlns:html="http://www.w3.org/TR/REC-html40">
  <DocumentProperties xmlns="urn:schemas-microsoft-com:office:office"><Title>${title}</Title></DocumentProperties>
  <OfficeDocumentSettings xmlns="urn:schemas-microsoft-com:office:office"><AllowPNG/></OfficeDocumentSettings>
  <ExcelWorkbook xmlns="urn:schemas-microsoft-com:office:excel">
  <WindowHeight>${worksheet.height}</WindowHeight>
  <WindowWidth>${worksheet.width}</WindowWidth>
  <ProtectStructure>False</ProtectStructure>
  <ProtectWindows>False</ProtectWindows>
  </ExcelWorkbook>`
  const stylesXML = createStyleXML(allStyles.styles);
  const sheet = workSheetHeader + stylesXML + worksheet.xml + "</Workbook>";
  return sheet;
}

export default createsheet;