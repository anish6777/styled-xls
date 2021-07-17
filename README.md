# styled-xls

JS libeary to create xls/xlsx with style.

A 50KB JS library which helps to create excel files with styles.

It has mainly two functions
- createFromObjectArray - to convert object arrays directly to xls/xlsx
- createBook - to convert two dimensional arrays to excel

# Installation and Setup Instructions

`npm install styled-xls xml-js --save`

# Creating excel from object array

We will see how we can create an excel as below from an object array of shape [{"type":"string"},"percentage":"string"]

![alt text](https://github.com/anish6777/styled-xls/blob/images/images/createObjectFromArray.JPG?raw=true)

## Step 1 : create a simple excel download

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
 ## Step 2 : Adding header and content styles
 You can pass an object having headerStyle and defaultStyle as third parameter to style the header and default style of all the populated cells

 ```
 //Rest of the code same as in step 1

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

//Rest of the code same as in step 1
 ```
 ## Step 3 - Modifying header values and column styles

 ```
 //Rest of the code same as in step 2
 
const columnConfig=[{key:"type",displayName:"Type"},{key:"percentage",displayName:"Percentage(%)",headerStyle:{backgroundColor:"#0074D9"},columnStyle:{backgroundColor:"#39CCCC"}}]

//Add columnConfig as the fourth parameter
const malnutritionBook = createFromObjectArray("malnutrition_2020",childMalnutrition,{headerStyle,defaultStyle},columnConfig)

 //Rest of the code same as in step 2
 
 ```

  ## Step:4 - Adding merged headers on top of the default header

 ```
 //Rest of the code same as in step 3

#Add extra headers with column span for each column
#Adding first header
const extraHeader1 = {elements:[{element:"Source: UNICEF ",columnSpan:2,style:{backgroundColor: "#6A6C6D",color: "#ffffff"}}]}
#Adding second header
const extraHeader2 = {elements:[{element:"Malnutrition data",columnSpan:2,style:{backgroundColor: "#6A6C6D",color: "#ffffff"}}]}
const extraHeaders=[extraHeader1,extraHeader2]

#Pass extraHeaders array as the fifth parameter to function
const malnutritionBook = createFromObjectArray("malnutrition_2020",childMalnutrition,{headerStyle,defaultStyle},columnConfig,extraHeaders)

 //Rest of the code same as in step 3
 ```