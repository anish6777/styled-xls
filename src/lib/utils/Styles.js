import createStyle from "./Style";
import capitalizeFirstletter from "./capitalizeFirstletter";

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


  

  const defaultIntStyle= createStyle("normalint","normal",null,null,"0");
  const defaultFloatStyle= createStyle("normalfloat","normal",null,null,"0.00");
  const defaultDateStyle= createStyle("normaldate","normal",null,null,"yyyy-mm-dd");
  const zebraIntStyle= createStyle("zebraint","zebra",null,null,"0");
  const zebraFloatStyle= createStyle("zebrafloat","zebra",null,null,"0.00");
  const zebraDateStyle= createStyle("zebradate","zebra",null,null,"yyyy-mm-dd");
  const zebraStyle= createStyle("zebra",null,defaultFontStyles,zebraInteriorStyles,null,null,defaultBorder);
  const defaultStyle= createStyle("normal",null,defaultFontStyles,defaultInteriorStyles,null,null,defaultBorder);
  const groupSeparatorStyle= createStyle("groupSeparator",null,null,groupSeperatorInteriorStyles);
  const titleStyle= createStyle("title",null,titleFontStyles,titleInteriorStyles,"@",titleAlignmentStyles,titleBorder);
  const normalStyle= createStyle("Default",null,normalFontStyles,titleInteriorStyles,"empty",normalAlignmentStyles,titleBorder,true,"Normal");
  const allStyles = [
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
    type:["Top","Bottom","Right","Left"],
    styles:{color:stylesInp.headerStyle.borderColor||"#000000"}
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
    horizontal:stylesInp.headerStyle.horizontalAlignment? capitalizeFirstletter(stylesInp.headerStyle.horizontalAlignment):null,
    wrapText:stylesInp.headerStyle.wrapText||"1",
  }
    const headerStyle= createStyle("headercell",null,headerFontStyles,headerInteriorStyles,null,headerAlignment,headerBorder);
    allStyles.push.apply(allStyles,headerStyle)
  }
  function addStyle(name,newStyles={}){
    const newFontStyles ={
      name:newStyles.fontName,
      family:newStyles.fontFamily,
      weight:newStyles.fontWeight,
      size:newStyles.fontSize,
      color:newStyles.color||newStyles.fontColor
    }
    const newInteriorStyles={
      color:newStyles.backgroundColor||"#A3C9F1",
      pattern:newStyles.pattern||"Solid"
    }

    const newBorderStyle={
      type:["Top","Bottom","Right","Left"],
      styles:{color:newStyles.borderColor||"#000000"},
    } 

    
  const newAlignmentStyles={
    vertical:newStyles.verticalAlignment ? capitalizeFirstletter(newStyles.verticalAlignment):null,
    horizontal:newStyles.horizontalAlignment  ? capitalizeFirstletter(newStyles.horizontalAlignment):null,
    wrapText:newStyles.wrapText,
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
