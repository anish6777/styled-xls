function createInterior(color,pattern){
  return `<Interior${color === undefined ? "": ' ss:Color="'+(color||"#ffffff")+'"'}${pattern === undefined ? "": ' ss:Pattern="'+(pattern||"Solid")+'"'}/>`;
}


export default createInterior;
