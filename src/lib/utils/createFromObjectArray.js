import createsheet from './createsheet';
import dataURItoBlob from './dataURItoBlob';

function createFromObjectArray(title,data,style,columnConfig,extraHeaders,lastRow){
  const book =createsheet(title,data,style,columnConfig,extraHeaders,lastRow);
  let bookBuffer = new Buffer(book);
  let uri = 'data:application/vnd.ms-excel;base64,'
  let base64String = bookBuffer.toString('base64');
  const blob = dataURItoBlob(uri+base64String);
  return blob;
  }

export default createFromObjectArray;