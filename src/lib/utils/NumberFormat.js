function createNumberFormat(format){
  return `<Numberformat${format === undefined || format === "empty"? "": ' ss:Format="'+format+'"'}/>`;
}

export default createNumberFormat;
