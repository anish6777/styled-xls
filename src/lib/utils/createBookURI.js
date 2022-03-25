import createsheet from './createsheet';

function createBook(title,data,style){
  const book =createsheet(title,data,{defaultStyle:style},null,null,null,true);
  let bookBuffer = Buffer.from(book);
  let uri = 'data:application/vnd.ms-excel;base64,'
  let base64String = bookBuffer.toString('base64');
  return uri+base64String;
}

export default createBook;