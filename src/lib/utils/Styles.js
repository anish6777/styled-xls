import createStyle from "./Style";

function createStyles(stylesInp={defaultStyle:{},headerStyle:{}},header=true){
  const defaultFontStyles={
    name:stylesInp.defaultStyle.fontName,
    family:stylesInp.defaultStyle.fontFamily,
    weight:stylesInp.defaultStyle.fontWeight,
    size:stylesInp.defaultStyle.fontSize,
    color:stylesInp.defaultStyle.fontColor
  }

  
  const titleFontStyles = {
    weight:"1",
    size:"18",
  }
  const normalFontStyles = {
    name:"Calibri",
    family:"Swiss",
    color:"#000000",
    size:"12",
  }
  const zebraInteriorStyles={
    color:stylesInp.alternateRowColor||stylesInp.defaultStyle.backgroundColor,
    pattern:"Solid"
  }
  const defaultInteriorStyles={
    color:stylesInp.defaultStyle.backgroundColor,
    pattern:"Solid"
  }

  const titleInteriorStyles={
  }
  const titleAlignmentStyles={
    vertical:"Center",
    horizontal:"Center",
    wrapText:"1",
  }


  const groupSeperatorInteriorStyles={
    color:"#D3D3D3"
  }

  const normalAlignmentStyles={
    vertical:"Bottom"
  }

  
  const titleBorder={
    type:[],
  }

  const defaultBorder={
    type:["Top","Bottom","Right","Left"],
    styles:{color:stylesInp.defaultStyle.borderColor||"#000000"},
  } 


  

  const defaultIntStyle= createStyle("defaultint","default",null,null,"0");
  const defaultFloatStyle= createStyle("defaultfloat","default",null,null,"0.00");
  const defaultDateStyle= createStyle("defaultdate","default",null,null,"yyyy-mm-dd");
  const zebraIntStyle= createStyle("zebraint","zebra",null,null,"0");
  const zebraFloatStyle= createStyle("zebrafloat","zebra",null,null,"0.00");
  const zebraDateStyle= createStyle("zebradate","zebra",null,null,"yyyy-mm-dd");
  const zebraStyle= createStyle("zebra",null,defaultFontStyles,zebraInteriorStyles,null,null,defaultBorder);
  const defaultStyle= createStyle("default",null,defaultFontStyles,defaultInteriorStyles,null,null,defaultBorder);
  const groupSeparatorStyle= createStyle("groupSeparator",null,null,groupSeperatorInteriorStyles);
  const titleStyle= createStyle("title",null,titleFontStyles,titleInteriorStyles,"@",titleAlignmentStyles,titleBorder);
  const normalStyle= createStyle("Default",null,normalFontStyles,titleInteriorStyles,"empty",normalAlignmentStyles,titleBorder,true,"Normal");
  const allStyles = [...normalStyle,
    ...normalStyle,
    ...titleStyle,
    ...defaultStyle,
    ...defaultDateStyle,
    ...defaultIntStyle,
    ...defaultFloatStyle,
    ...zebraStyle,
    ...groupSeparatorStyle,
    ...zebraDateStyle,
    ...zebraIntStyle,
    ...zebraFloatStyle];

  if(header){
    
  const headerBorder={
    type:["Top","Bottom","Right"],
    styles:{color:"#00FF00",Top:{color:"#FF0000",weight:"100"}},
  }
  const headerFontStyles = {
    name:stylesInp.headerStyle.fontName,
    family:stylesInp.headerStyle.fontFamily,
    weight:stylesInp.headerStyle.fontWeight,
    size:stylesInp.headerStyle.fontSize,
    color:stylesInp.headerStyle.fontColor
  }

  
  const headerInteriorStyles={
    color:stylesInp.headerStyle.backgroundColor||"#A3C9F1",
    pattern:"Solid"
  }

  
  const headerAlignment={
    horizontal:stylesInp.headerStyle.horizontalAlignment||"Center",
    wrapText:stylesInp.headerStyle.wrapText||"1",
  }
    const headerStyle= createStyle("headercell",null,headerFontStyles,headerInteriorStyles,null,headerAlignment,headerBorder);
    allStyles.push.apply(allStyles,headerStyle)
  }
  function addStyle(name,newStyles={}){
    const newFontStyles ={
      name:newstylesInp.fontName,
      family:newstylesInp.fontFamily,
      weight:newstylesInp.fontWeight,
      size:newstylesInp.fontSize,
      color:newstylesInp.color||newstylesInp.fontColor
    }
    const newInteriorStyles={
      color:newstylesInp.backgroundColor||"#A3C9F1",
      pattern:newstylesInp.pattern||"Solid"
    }

    const newBorderStyle={
      type:["Top","Bottom","Right","Left"],
      styles:{color:newstylesInp.borderColor||"#000000"},
    } 

    
  const newAlignmentStyles={
    vertical:newstylesInp.verticalAlignment,
    horizontal:newstylesInp.horizontalAlignment,
    wrapText:newstylesInp.wrapText,
  }
    
    const newStyle=createStyle(name,null,newFontStyles,newInteriorStyles,null,newAlignmentStyles,newBorderStyle);
    const newIntStyle= createStyle(name+"int",name,null,null,"0");
    const newFloatStyle= createStyle(name+"float",name,null,null,"0.00");
    const newDateStyle= createStyle(name+"date",name,null,null,"yyyy-mm-dd");
    const mergedStyles =[...newStyle,...newIntStyle,...newFloatStyle,...newDateStyle];
    if(Array.isArray(allStyles)){
      allStyles.push.apply(allStyles,mergedStyles)
    }
  }
  return {styles:allStyles,addStyle}
}

export default createStyles;
