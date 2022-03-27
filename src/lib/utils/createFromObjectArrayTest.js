import createsheet from './createsheet';
import dataURItoBlob from './dataURItoBlob';
import base64 from './base64Encode';

function createFromObjectArray(title,data,style,columnConfig,extraHeaders,lastRow){
  const book =createsheet(title,data,style,columnConfig,extraHeaders,lastRow);
  let uri = 'data:application/vnd.ms-excel;base64,'
  let base64String = base64.encode(book);
  const blob = dataURItoBlob(uri+base64String,"application/vnd.ms-excel;base64");
  return {blob,book,dataURI:base64String};
  }

export default createFromObjectArray;