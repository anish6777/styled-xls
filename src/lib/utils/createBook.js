import createsheet from './createsheet';
import dataURItoBlob from './dataURItoBlob';
import base64 from './base64Encode';

function createBook(title,data,style){
  const book =createsheet(title,data,{defaultStyle:style},null,null,null,true);
  let uri = 'data:application/vnd.ms-excel;base64,'
  let base64String = base64.encode(book);
  const blob =dataURItoBlob(uri+base64String);
  return blob;
}

export default createBook;