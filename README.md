# styled-xls

JS libeary to create xls/xlsx with style.

A 50KB JS library which helps to create excel files with styles.

It has mainly two functions
- createFromObjectArray - to convert object arrays directly to xls/xlsx
- createBook - to convert two dimensional arrays to excel

# Installation and Setup Instructions

`npm install styled-xls xml-js --save`

# Creating excel from object array

## using createFromObjectArray

```
import { createFromObjectArray } from "styled-xls";
import { saveAs } from "file-saver";


#suppose you have to convert the sample data in childMalnutrition below
const childMalnutrition =[{type:"stunting",percentage:"22"},{type:"wasting",percentage:"6.7"},{type:"overweight",percentage:"5.7"}]

#You can create the book by passing sheet name and object array to be converted
const malnutritionBook = createFromObjectArray("malnutrition_2020",childMalnutrition)

# After the book is created you can extract the xml using the below function
var result = malnutritionBook.extract();

#extracted xml can be saved in the required formal
const blob = new Blob([result], { type: "application/vnd.ms-excel" });
saveAs(blob, "child-malnutrition.xlsx");

```
 ## Adding header and content styles
 You can pass an object having headerStyle and defaultStyle as third parameter to style the header and default style of all the populated cells

 ```
 import { createFromObjectArray } from "styled-xls";
import { saveAs } from "file-saver";
const childMalnutrition =[{type:"stunting",percentage:"22"},{type:"wasting",percentage:"6.7"},{type:"overweight",percentage:"5.7"}]

//create a constant headerStyle with required styles for header
const headerStyle= {
  backgroundColor: "#6A6C6D",
  color: "#ffffff",
  fontSize: "9",
};

//create a constant defaultStyle with default styles for the all the cells with content
const defaultStyle = {
  backgroundColor: "#f4f5f5",
  color: "#fff",
  borderColor:"#6A6C6D",
  fontSize: "6",
};

//pass an object with headerStyle and defaultStyle as the third parameter 
const malnutritionBook = createFromObjectArray("malnutrition_2020",childMalnutrition,{headerStyle,defaultStyle})

var result = malnutritionBook.extract();

#extracted xml can be saved in the required formal
const blob = new Blob([result], { type: "application/vnd.ms-excel" });
saveAs(blob, "child-malnutrition.xlsx");
 ```
 ## Modifying header values and column styles