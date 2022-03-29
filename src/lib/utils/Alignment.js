function createAlignment(vertical,horizontal,wrapText){
  return `<Alignment${!vertical ? "": ' ss:Vertical="'+(vertical||"Center")+'"'}${!horizontal ? "": ' ss:Horizontal="'+(horizontal||"Center")+'"'}${!wrapText ? "": ' ss:WrapText="'+(wrapText||"1")+'"'}/>`;
}

export default createAlignment;