/*
Below js remDupl function creates
new array from input array by adding (case insensitive) unique elements only
to the arr_out.
*/
function compareArr(arr_out,arr_in_element) {
  var n;
  for (n=0; n < arr_out.length;n++) {
    if (arr_out[n].toString().toLowerCase() == arr_in_element.toString().toLowerCase()) {
      return true;
    }
  }
return false;
}


function remDupl(arr_in){
  var i;
  var arr_out =[];
  for (i=0; i<arr_in.length;i++){
    if (compareArr(arr_out,arr_in[i]) === false){
      arr_out.push(arr_in[i]);
    }
  }
return arr_out;
}


function main(){
  var arr_in_test = [1,"Piotr",2,3,4,"pioTR","Olive",3,3,4,"oLIvE",5];
  return remDupl(arr_in_test);
}


console.log(main());
