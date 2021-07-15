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