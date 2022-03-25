
function createBorders(positions=["Left","Right","Bottom","Top"],borderStyles={},defaultStyles={}){
  console.log("borderStyles",borderStyles)
  const borders=[];
  borders.push('<Borders>');
  if(positions && Array.isArray(positions)){
    positions.forEach(p => {
      borders.push(`<Border ss:Position="${p}" ss:LineStyle="Continuous"  ss:Color="${(borderStyles[p] && borderStyles[p].color)||borderStyles.color||defaultStyles.color||"#ffffff"}" ss:Weight="${borderStyles[p] && borderStyles[p].weight||borderStyles.weight||defaultStyles.weight||"1"}"/>`)
    })
  }
  borders.push('</Borders>');
  return borders;
}

export default createBorders;