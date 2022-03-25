function createAlignment(vertical,horizontal,wrapText){
  return `<Alignment${vertical === undefined ? "": ' ss:Vertical="'+(vertical||"Center")+'"'}${horizontal === undefined ? "": ' ss:Horizontal="'+(horizontal||"Center")+'"'}${wrapText === undefined ? "": ' ss:WrapText="'+(wrapText||"1")+'"'}/>`;
}

export default createAlignment;