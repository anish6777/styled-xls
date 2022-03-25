function createFont(fontName,fontFamily,fontWeight,fontSize,fontColor){
  return `<Font ${fontName === undefined ? "": ' ss:FontName="'+(fontName||"Calibri")+'"'}${fontFamily === undefined ? "": ' x:Family="'+(fontFamily||"Swiss")+'"'}${fontWeight === undefined ? "": ' ss:Bold="'+(fontWeight||"0")+'"'}${fontSize === undefined ? "": ' ss:Size="'+(fontSize||"10")+'"'}${fontColor === undefined ? "": ' ss:Color="'+(fontColor||"ffffff")+'"'}/>`;
}

export default createFont;