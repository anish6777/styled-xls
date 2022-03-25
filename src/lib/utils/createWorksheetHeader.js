function createWorksheetHeader(title,visibleColumnCount,numGridRows,colXml,rowXml){
  let worksheetHead = `<Worksheet ss:Name="${title}">
  <Names>
  <NamedRange ss:Name="Sheet_Titles" ss:RefersTo="='${title}'!R1:R2">
  </NamedRange></Names>
  <Table ss:ExpandedColumnCount="${(visibleColumnCount + 2)}" ss:ExpandedRowCount="${numGridRows}" x:FullColumns="1" x:FullRows="1" ss:DefaultColumnWidth="80" ss:DefaultRowHeight="15">
  ${colXml}`
  if(rowXml){
    worksheetHead=worksheetHead+rowXml
  }
  return worksheetHead;
}

export default createWorksheetHeader;