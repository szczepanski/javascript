// dummy CSVs 
var a = "a,hostafg-22.ho,c,d,e,f,g,h"; // main csv - string
var b = "a,c,d,hostaf,g"; // exceptions csv string




/*remove list of exceptions (csv string ) from main csv string
and return as ssv or array - options str or arr */

function remValuesFromArr(mainStr,exceptionsStr,format) {

//convert both csv - strings into arrays
mainArr = mainStr.split(",");
exceptionsArr = exceptionsStr.split(",");
outputArr = [];
output = "";

for (i = 0; i < mainArr.length; i++) {
  if (exceptionsArr.indexOf(mainArr[i]) < 0){
    outputArr.push(mainArr[i]);
  }
  else {
    // do nothing 
  }
}
  if (format == "str" ) {
  output = outputArr.join(",");
}

  else if (format == "arr"){
  output = outputArr;
}
return output;

}
