function twoDimArrToStr(two_d_arr,separator_l1,separator_l2) {
     var tmp = "";
     // bypass last element to avoid adding separator_l2 at the end of return tmp output
     for (i=0; i< two_d_arr.length-1; i++){
          tmp = tmp + arrToStr(two_d_arr[i],separator_l1) + separator_l2;
          }
        //add last element without separator   
        tmp = tmp + arrToStr(two_d_arr[i],separator_l1);
     return tmp;}
