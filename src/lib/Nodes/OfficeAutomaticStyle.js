import CellStyle from "./CellStyle";

function OfficeAutomaticStyle() {
  this.type = "element";
  this.name = "office:automatic-styles";
  this.elements = [
    {
      type: "element",
      name: "style:style",
      attributes: {
        "style:name": "co1",
        "style:family": "table-column",
      },
      elements: [
        {
          type: "element",
          name: "style:table-column-properties",
          attributes: {
            "fo:break-before": "auto",
            "style:column-width": "0.8882in",
          },
        },
      ],
    },
    {
      type: "element",
      name: "style:style",
      attributes: {
        "style:name": "ro1",
        "style:family": "table-row",
      },
      elements: [
        {
          type: "element",
          name: "style:table-row-properties",
          attributes: {
            "style:row-height": "0.178in",
            "fo:break-before": "auto",
            "style:use-optimal-row-height": "false",
          },
        },
      ],
    },
    {
      type: "element",
      name: "style:style",
      attributes: {
        "style:name": "ta1",
        "style:family": "table",
        "style:master-page-name": "PageStyle_5f_Sheet1",
      },
      elements: [
        {
          type: "element",
          name: "style:table-properties",
          attributes: {
            "table:display": "true",
            "style:writing-mode": "lr-tb",
          },
        },
      ],
    },
    {
      type: "element",
      name: "number:number-style",
      attributes: {
        "style:name": "N2",
      },
      elements: [
        {
          type: "element",
          name: "number:number",
          attributes: {
            "number:decimal-places": "2",
            "loext:min-decimal-places": "2",
            "number:min-integer-digits": "1",
          },
        },
      ],
    },
    {
      type: "element",
      name: "style:page-layout",
      attributes: {
        "style:name": "pm1",
      },
      elements: [
        {
          type: "element",
          name: "style:page-layout-properties",
          attributes: {
            "style:first-page-number": "continue",
            "style:writing-mode": "lr-tb",
          },
        },
        {
          type: "element",
          name: "style:header-style",
          elements: [
            {
              type: "element",
              name: "style:header-footer-properties",
              attributes: {
                "fo:min-height": "0.2953in",
                "fo:margin-left": "0in",
                "fo:margin-right": "0in",
                "fo:margin-bottom": "0.0984in",
              },
            },
          ],
        },
        {
          type: "element",
          name: "style:footer-style",
          elements: [
            {
              type: "element",
              name: "style:header-footer-properties",
              attributes: {
                "fo:min-height": "0.2953in",
                "fo:margin-left": "0in",
                "fo:margin-right": "0in",
                "fo:margin-top": "0.0984in",
              },
            },
          ],
        },
      ],
    },
    {
      type: "element",
      name: "style:page-layout",
      attributes: {
        "style:name": "pm2",
      },
      elements: [
        {
          type: "element",
          name: "style:page-layout-properties",
          attributes: {
            "style:writing-mode": "lr-tb",
          },
        },
        {
          type: "element",
          name: "style:header-style",
          elements: [
            {
              type: "element",
              name: "style:header-footer-properties",
              attributes: {
                "fo:min-height": "0.2953in",
                "fo:margin-left": "0in",
                "fo:margin-right": "0in",
                "fo:margin-bottom": "0.0984in",
                "fo:border": "2.49pt solid #000000",
                "fo:padding": "0.0071in",
                "fo:background-color": "#c0c0c0",
              },
              elements: [
                {
                  type: "element",
                  name: "style:background-image",
                },
              ],
            },
          ],
        },
        {
          type: "element",
          name: "style:footer-style",
          elements: [
            {
              type: "element",
              name: "style:header-footer-properties",
              attributes: {
                "fo:min-height": "0.2953in",
                "fo:margin-left": "0in",
                "fo:margin-right": "0in",
                "fo:margin-top": "0.0984in",
                "fo:border": "2.49pt solid #000000",
                "fo:padding": "0.0071in",
                "fo:background-color": "#c0c0c0",
              },
              elements: [
                {
                  type: "element",
                  name: "style:background-image",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "element",
      name: "style:page-layout",
      attributes: {
        "style:name": "pm3",
      },
      elements: [
        {
          type: "element",
          name: "style:page-layout-properties",
          attributes: {
            "fo:page-width": "8.5in",
            "fo:page-height": "11in",
            "style:num-format": "1",
            "style:print-orientation": "portrait",
            "fo:margin-top": "0.7874in",
            "fo:margin-bottom": "0.7874in",
            "fo:margin-left": "0.7874in",
            "fo:margin-right": "0.7874in",
            "style:scale-to": "100%",
            "style:writing-mode": "lr-tb",
          },
        },
        {
          type: "element",
          name: "style:header-style",
          elements: [
            {
              type: "element",
              name: "style:header-footer-properties",
              attributes: {
                "fo:min-height": "0.2953in",
                "fo:margin-left": "0in",
                "fo:margin-right": "0in",
                "fo:margin-bottom": "0.0984in",
              },
            },
          ],
        },
        {
          type: "element",
          name: "style:footer-style",
          elements: [
            {
              type: "element",
              name: "style:header-footer-properties",
              attributes: {
                "fo:min-height": "0.2953in",
                "fo:margin-left": "0in",
                "fo:margin-right": "0in",
                "fo:margin-top": "0.0984in",
              },
            },
          ],
        },
      ],
    },
    {
      type: "element",
      name: "style:style",
      attributes: {
        "style:name": "T1",
        "style:family": "text",
      },
      elements: [
        {
          type: "element",
          name: "style:text-properties",
          attributes: {
            "style:use-window-font-color": "true",
            "style:text-outline": "false",
            "style:text-line-through-style": "none",
            "style:text-line-through-type": "none",
            "style:text-position": "0% 100%",
            "style:font-name": "Arial",
            "fo:font-size": "10pt",
            "fo:font-style": "normal",
            "fo:text-shadow": "none",
            "style:text-underline-style": "none",
            "fo:font-weight": "normal",
            "style:font-size-asian": "10pt",
            "style:font-style-asian": "normal",
            "style:font-weight-asian": "normal",
            "style:font-name-complex": "Arial",
            "style:font-size-complex": "10pt",
            "style:font-style-complex": "normal",
            "style:font-weight-complex": "normal",
          },
        },
      ],
    },
  ];
}

export default OfficeAutomaticStyle;
