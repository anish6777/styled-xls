function Body() {
  this.type = "element";
  this.name = "office:body";
  this.elements = [
    {
      type: "element",
      name: "office:spreadsheet",
      elements: [
        {
          type: "element",
          name: "table:calculation-settings",
          attributes: {
            "table:case-sensitive": "false",
            "table:automatic-find-labels": "false",
            "table:use-regular-expressions": "false",
            "table:use-wildcards": "true",
          },
        },
        {
          type: "element",
          name: "table:named-expressions",
        },
      ],
    },
  ];
}

export default Body;
