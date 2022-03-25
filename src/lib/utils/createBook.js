import createsheet from './createsheet';
import dataURItoBlob from './dataURItoBlob';

function createBook(title,data,style){
  const book =createsheet(title,data,{defaultStyle:style},null,null,null,true);
  let bookBuffer = new Buffer(book);
  let uri = 'data:application/vnd.ms-excel;base64,'
  let base64String = bookBuffer.toString('base64');
  const blob = dataURItoBlob(uri+base64String);
  return blob;
}

export default createBook;