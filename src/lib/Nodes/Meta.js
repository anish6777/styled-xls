function Meta() {
  this.type = "element";
  this.name = "office:meta";
  this.elements = [
    {
      type: "element",
      name: "meta:creation-date",
      elements: [
        {
          type: "text",
          text: `${new Date().toISOString()}`,
        },
      ],
    },
    {
      type: "element",
      name: "dc:date",
      elements: [
        {
          type: "text",
          text: `${new Date().toISOString()}`,
        },
      ],
    },
    {
      type: "element",
      name: "meta:editing-cycles",
      elements: [
        {
          type: "text",
          text: "1",
        },
      ],
    },
    {
      type: "element",
      name: "meta:editing-duration",
      elements: [
        {
          type: "text",
          text: "PT13H15M58S",
        },
      ],
    },
    {
      type: "element",
      name: "meta:document-statistic",
      attributes: {
        "meta:table-count": "1",
        "meta:cell-count": "9",
        "meta:object-count": "0",
      },
    },
    {
      type: "element",
      name: "meta:generator",
      elements: [
        {
          type: "text",
          text: "styled-xlsx",
        },
      ],
    },
  ];
}

export default Meta;
