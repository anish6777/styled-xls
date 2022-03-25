import createsheet from './createsheet';

function createFromObjectArray(title,data,style,columnConfig,extraHeaders,lastRow){
  const book =createsheet(title,data,style,columnConfig,extraHeaders,lastRow);
  let bookBuffer = Buffer.from(book);
  let uri = 'data:application/vnd.ms-excel;base64,'
  let base64String = bookBuffer.toString('base64');
  return uri+base64String;
  }

export default createFromObjectArray;