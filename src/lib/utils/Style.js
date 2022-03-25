import createNumberFormat from "./NumberFormat";
import createFont from "./Font";
import createBorders from "./Borders";
import createAlignment from "./Alignment";
import createInterior from "./Interior";
import createProtection from "./Protection";

function createStyle(id,parent,font,interior,format,alignment,borders,protection,styleName){
  const styles=[];
  styles.push(`<Style ss:ID="${id}" ${parent ? 'ss:Parent="'+parent+'"':''}${styleName ? ' ss:Name="'+styleName+'"':''}>`)
  if(format){
    const numberFormt = createNumberFormat(format);
    styles.push(numberFormt)
  }
  if(font){
    const styleFont = createFont(font.name,font.family,font.weight,font.size,font.color);
    styles.push(styleFont)
  }
  if(borders){
    const styleBorders = createBorders(borders.type,borders.styles);
    styles.push.apply(styles,styleBorders)
  }
  if(alignment){
    const styleAlignment = createAlignment(alignment.vertical,alignment.horizontal,alignment.wrapText);
    styles.push(styleAlignment)
  }
  if(interior){
    const styleInterior = createInterior(interior.color,interior.pattern);
    styles.push(styleInterior)
  }
  if(protection){
    const styleProtection = createProtection();
    styles.push(styleProtection)
  }
  styles.push(`</Style>`)

  return styles;
}

export default createStyle;
