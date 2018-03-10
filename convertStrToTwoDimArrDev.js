
// Convert string to Two dimmensional Array
//separator_l1 - 1st level / dimmension
//separator_l2 - 2nd level / dimmension

function strToTwoDimArr(str_var,separator_l1,separator_l2){
var tmp_arr1 = txtToArr(str_var,separator_l2);
var tmp_arr2 =[];
var tmp_arr3 = [];

for (i=0; i< tmp_arr1.length;i++) {
    
    tmp_arr2 = tmp_arr1[i].split(separator_l1);
    tmp_arr3.push(tmp_arr2);
}
return tmp_arr3;
}
