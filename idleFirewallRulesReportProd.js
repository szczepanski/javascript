/#1 get client &  cnt_hostnames_tmp & init txt_glob_stat_report &  txt_glob_data_rep

function setvar(name, value) {
  if (this.hasOwnProperty(name)) { //typos happen
    this[name] = value;
    execution.getExecutionVariableForScope(name, executionPointer.getCurrentScope()).setValue(value);
  }
}

// htmlGlobArr
var htmlGlobArr = [];

htmlGlobArr.push('<h1>    Unused Firewall Rules Report</h1>');
htmlGlobArr.push('<h2>Global Context</h2><br>');

//header row 
htmlGlobArr.push('<table style="width:45%"><tr><th>All Unused Rules</th><th>All Used Rules</th></tr>');


var htmlGlobStrTmp = htmlGlobArr.join('\n');

setvar("htmlGlobStr", htmlGlobStrTmp);


// htmlHostArr
var htmlHostArr = [];

htmlHostArr.push("<br>");
htmlHostArr.push('<h2>Firewall Context</h2>');


var htmlHostStrTmp = htmlHostArr.join('\n');

setvar("htmlHostStr", htmlHostStrTmp);


// htmlAccGrpArr
var htmlAccGrpArr = [];

htmlAccGrpArr.push("<br>");
htmlAccGrpArr.push('<h2>Firewall / Access Group Context</h2>');


var htmlAccGrpStrTmp = htmlAccGrpArr.join('\n');

setvar("htmlAccGrpStr", htmlAccGrpStrTmp);


// htmlPolArr
var htmlPolArr = [];

htmlPolArr.push("<br>");
htmlPolArr.push('<h2>Firewall / Access Group / Policy Context</h2>');


var htmlPolStrTmp = htmlPolArr.join('\n');

setvar("htmlPolStr", htmlPolStrTmp);

// #2 get client &  cnt_hostnames_tmp & init txt_glob_stat_report &  txt_glob_data_rep

function setvar(name, value) {
  if (this.hasOwnProperty(name)) { //typos happen
    this[name] = value;
    execution.getExecutionVariableForScope(name, executionPointer.getCurrentScope()).setValue(value);
  }
}


var clientID = execution.getAutomaton().getClientID();
var tmp_client = executionService.getClientDao().findByID(java.lang.Long(clientID));
var tmp_client = tmp_client.toString().match(/[a-z]+$/i)[0];

var cnt_hostnames_tmp = hostnames.split(",").length;


setvar("client",tmp_client);
setvar("cnt_hostnames",cnt_hostnames_tmp);

function getDate() {

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yy = today.getFullYear();
var month = "";

    switch(mm) {
        case 1:
            month = "Januray";
            break;
        case 2:
            month = "February";
            break;
        case 3:
            month = "March";
            break;
        case 4:
            month = "April";
            break;
        case 5:
            month = "May";
            break;
        case 6:
            month = "June";
            break;
        case 7:
            month = "July";
            break;
        case 8:
            month = "August";
            break;
        case 9:
            month = "September";
            break;
        case 10:
            month = "October";
            break;
        case 11:
            month = "November";
            break;
        case 12:
            month = "December";
            break;
    }
    var date = dd+ " " + month + " " + yy;
    return date;

}

// htmlGlobArr
var htmlGlobArr = [];

htmlGlobArr.push('<h1>Unused Firewall Rules Report</h1>');
htmlGlobArr.push("<h4>"+ getDate() + "</h4><br>");

htmlGlobArr.push('<h2>Global Context</h2><br>');

//header row 
htmlGlobArr.push('<table style="width:45%"><tr><th>All Unused Rules</th><th>All Used Rules</th></tr>');


var htmlGlobStrTmp = htmlGlobArr.join('\n');

setvar("htmlGlobStr", htmlGlobStrTmp);


// htmlHostArr
var htmlHostArr = [];

htmlHostArr.push("<br>");
htmlHostArr.push('<h2>Firewall Context</h2>');


var htmlHostStrTmp = htmlHostArr.join('\n');

setvar("htmlHostStr", htmlHostStrTmp);


// htmlAccGrpArr
var htmlAccGrpArr = [];

htmlAccGrpArr.push("<br>");
htmlAccGrpArr.push('<h2>Firewall / Access Group Context</h2>');


var htmlAccGrpStrTmp = htmlAccGrpArr.join('\n');

setvar("htmlAccGrpStr", htmlAccGrpStrTmp);


// htmlPolArr
var htmlPolArr = [];

htmlPolArr.push("<br>");
htmlPolArr.push('<h2>Firewall / Access Group / Policy Context</h2>');


var htmlPolStrTmp = htmlPolArr.join('\n');

setvar("htmlPolStr", htmlPolStrTmp);

cnt_hostnames_tmp;


// #3 select hostname and get its details

function setvar(name, value) {
  if (this.hasOwnProperty(name)) { //typos happen
    this[name] = value;
    execution.getExecutionVariableForScope(name, executionPointer.getCurrentScope()).setValue(value);
  }
}

var arr_hostnames = hostnames.split(",");


var hostname_tmp  = arr_hostnames[cnt_hostnames_tmp -1];
setvar("hostname",hostname_tmp);

var clientID = execution.getAutomaton().getClientID();
var client_tmp = executionService.getClientDao().findByID(clientID);


var host = executionService.getHostDao().findAllByNameAndClient(hostname_tmp, client_tmp).toArray()[0];
var ipmon_partial_name = host.getServiceChecks().toArray()[0].getIpmon().getName().toLowerCase();
var ipmon_service = executionService.IPmonEntryDao.findByName(ipmon_partial_name);
var ipmon_server = ipmon_service.getIpmon().getName();



setvar("hostname",hostname_tmp);
setvar("ipmon",ipmon_server);

// flush txt_host_data and txt_host_data_brief
var txt_host_data_tmp = "";
setvar("txt_host_data",txt_host_data_tmp);

var txt_host_data_brief_tmp = "";
setvar("txt_host_data_brief",txt_host_data_brief_tmp);


// flush and update cnt_host_hit; cnt_host_hit_0 and cnt_host_hit counters
var cnt_host_hit_tmp = 0;
var cnt_host_hit_0_tmp = 0;
var cnt_host_hit_all_tmp = 0;
setvar("cnt_host_hit",cnt_host_hit_tmp);
setvar("cnt_host_hit_0",cnt_host_hit_0_tmp);
setvar("cnt_host_hit_all",cnt_host_hit_all_tmp);






function getHtmlAccGrpStr(){
  var htmlAccGrpArr = htmlAccGrpStr.split('\n');          

  htmlAccGrpArr.push("<br>");
  htmlAccGrpArr.push('<table style="width:45%"><tr><td><h3><b>'+ hostname +'</h3></td></tr>');
  htmlAccGrpArr.push('</table>');

  var htmlAccGrpStrTmp = htmlAccGrpArr.join('\n');
  setvar("htmlAccGrpStr", htmlAccGrpStrTmp);

}


function main() {
  getHtmlAccGrpStr();
}

main();




hostname_tmp;




// #4


PYConnection -host ${hostname} -cl ${client} -c "${command1}" -m s





// # 5 

PYConnection -host ${hostname} -cl ${client} -c "show version" -m s












// #6 extarct csv_access_groups and add hostname
 
// overwrite function

function setvar(name, value) {
  if (this.hasOwnProperty(name)) { //typos happen
    this[name] = value;
    execution.getExecutionVariableForScope(name, executionPointer.getCurrentScope()).setValue(value);
  }
}

// get all rulles names / IDs 

function extractRules(acl_rules_out) {
  var regex_acl_rules = /(^access-list)(.*)/img;
  var regex_acl_rule = /(^access-list)(\s)([A-Za-z0-9_-]*)(\s)(.+)/i;
  var arr_acl_rule = [];
  var arr_acl_rules = [];

//turn output lines into array

  arr_acl_rules_out = acl_rules_out.match(regex_acl_rules);

  for (i=0; i < arr_acl_rules_out.length; i++ ){
    arr_acl_rule = arr_acl_rules_out[i];
    arr_acl_rule = regex_acl_rule.exec(arr_acl_rule);
    arr_acl_rule = arr_acl_rule[3];
    arr_acl_rules.push(arr_acl_rule);

}
  return arr_acl_rules;
}

/*
Below js remDupl function creates
new array from input array by adding (case insensitive) unique elements only
to the arr_out.
*/

function compareArr(arr_out,arr_in_element) {
  var n;
  for (n=0; n < arr_out.length;n++) {
    if (String(java.lang.String(arr_out[n]).toLowerCase()) == String(java.lang.String(arr_in_element).toLowerCase

())){
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
  return remDupl(extractRules(acl_rules_out));
}


// get number of unique rules an overwrite counter

cnt_acc_grps_tmp = Math.floor(main().length);
setvar("cnt_acc_grps", cnt_acc_grps_tmp);
setvar("cnt_acc_grps_tmp", cnt_acc_grps_tmp);

// add host to txt_host_data

txt_host_data_tmp = txt_host_data + "\n\n*** Firewall: "+ hostname + " ***";

setvar("txt_host_data", txt_host_data_tmp);


// convert output array into CSV 

var arr_acc_grps = main();
var txt_acc_grps = arr_acc_grps.join("\n");
txt_acc_grps;





// #6.1
regexUpTime = /(^.*\s)(up\s)(.*)/im;
var upTime = regexUpTime.exec(shVerOut);
upTime = upTime[3];





// #7
// overwrite function

function setvar(name, value) {
  if (this.hasOwnProperty(name)) { //typos happen
    this[name] = value;
    execution.getExecutionVariableForScope(name, executionPointer.getCurrentScope()).setValue(value);
  }
}

// convert output array into CSV 

var arr_acc_grps = txt_acc_grps.split("\n");
var command_pref = "show access-list ";
var command_suf1 = " | i ";
var command_suf2 = " line"

var cnt_acc_grps_index = Math.floor(cnt_acc_grps_tmp -1);
var acc_grp_tmp =  arr_acc_grps[cnt_acc_grps_index];
var command2 = command_pref + command_suf1 +  acc_grp_tmp + command_suf2;

setvar("acc_grp", acc_grp_tmp);


command2;







// #8 getReportData

  
// .test regex
var regex_ind_t = /^\s+acc/;
var regex_remark_t = /\sremark\s/;
var regex_hit_0_t = /(hitcnt=0)/;
var regex_hit_t = /hitcnt=[1,2,3,4,5,6,7,8,9]+/;
var regex_log_t = /log debugging interval/;

//.exec regex
var regex_remark_e = /(^access-list.*\s)(remark\s)(.+)/;
var regex_line_info_e = /(^access-list.*\s)(line\s)(\d+\s)(.*)(\s0x.+)/;
var regex_no_log_e = /(^\s\saccess-list.*\s)(line\s\d+\s)(.*)(\(hitcnt=\d+\))( \(inactive\)){0,1}(\s0x.+)/; 

//optional "(inactive)"
var regex_log_e = /(^.*)(\slog debugging interval \d*)(.*)/;


// var arrays and other 
var arr_acc_grp_data = [];
var arr_acc_grp_pol_data = [];

var remark = "";
var acc_grp_pol_line = "";
var acc_grp_pol_detail = "";
var acc_grp_pol_mem_detail = "";
var txt_host_data_tmp = "";

// var COUNTERS and PERCENTAGES:

//POLICY level

var cnt_acc_grp_pol_hit = 0;
var cnt_acc_grp_pol_hit_0 = 0;
var cnt_acc_grp_pol_mem_hit = 0;
var cnt_acc_grp_pol_mem_hit_0 = 0;
var cnt_acc_grp_pol_mem_hit_0_tmp = 0;

//ACCESS GROUP level

var cnt_acc_grp_hit = 0;
var cnt_acc_grp_hit_0 = 0;
var cnt_acc_grp_hit_all = 0;

var pct_acc_grp_hit = 0;
var pct_acc_grp_hit_0 = 0;

// FUNCTIONS
/////////////////////////////////////////////////////////////////////////////////////////

function setvar(name, value) {
  if (this.hasOwnProperty(name)) { //typos happen
    this[name] = value;
    execution.getExecutionVariableForScope(name, executionPointer.getCurrentScope()).setValue(value);
  }
}

// convert txt variable to an array variable on the return, specify separator in ""
function txtToArr(txt_var,separator) {
     arr_var = txt_var.split(separator);
     return arr_var;}
// convert arr variable to a txt variable on the return, specify separator in ""
function arrToTxt(arr_var,separator) {
    txt_var = arr_var.join(separator);
    return txt_var;}

// trim array from first and last entry - here: command and prompt lines
function trimArr(arr_var) {
    //var arr_access_group_out = csvToArr();
    arr_var.shift();
    arr_var.pop();
    return arr_var;
}

function rmLog(var_in,reg_t,reg_e){
    var tmp = "";
    if (reg_t.test(var_in)){
        tmp = reg_e.exec(var_in);
        tmp = tmp[1]+tmp[3];
    }
    else {
        tmp = var_in;
        }
 return tmp;
}

// Convert two Dim Arr To Txt 
//separator_l1 - data
//separator_l2 - policy

function twoDimArrToTxt(two_d_arr,separator_l1,separator_l2) {
     var tmp = "";
     // bypass last element to avoid adding separator_l2 at the end of return tmp output
     for (i=0; i< two_d_arr.length-1; i++){
          tmp = tmp + arrToTxt(two_d_arr[i],separator_l1) + separator_l2;
          }
        //add last element without separator   
        tmp = tmp + arrToTxt(two_d_arr[i],separator_l1);
     return tmp;}

// Convert txt to Two Dim Arr
//separator_l1 - data
//separator_l2 - policy

function txtToTwoDimArr(txt_var,separator_l1,separator_l2){
var tmp_arr1 = txtToArr(txt_var,separator_l2);
var tmp_arr2 =[];
var tmp_arr3 = [];

for (i=0; i< tmp_arr1.length;i++) {
    
    tmp_arr2 = tmp_arr1[i].split(separator_l1);
    tmp_arr3.push(tmp_arr2);
}
return tmp_arr3;
}



function getReportData(input_arr) {
    for (i=0; i < input_arr.length;i++) {
        
        if (regex_remark_t.test(input_arr[i]) === true){
            // flash arr_acc_grp_pol_data
            arr_acc_grp_pol_data = [];
            // in case of multiple remark lines - - while
            remark = "#";
          while (regex_remark_t.test(input_arr[i]) === true){
            //get the remark and increase iterator 
            remark_tmp = input_arr[i];
            remark_tmp = regex_remark_e.exec(remark_tmp);
            remark_tmp = remark_tmp[3];
            remark = remark + remark_tmp + "#";
            i++;
          }
    }
        else {
            // flash arr_acc_grp_pol_data
            arr_acc_grp_pol_data = [];
            remark = "none";}
    
          ///// START OF MUTAL PART /////
          
          //get the policy line number
          acc_grp_pol_line = input_arr[i];
          acc_grp_pol_line = regex_line_info_e.exec(acc_grp_pol_line);
          acc_grp_pol_line = acc_grp_pol_line[3];
          
          // get the policy detail
          acc_grp_pol_detail = input_arr[i];
          acc_grp_pol_detail = regex_line_info_e.exec(acc_grp_pol_detail);
          acc_grp_pol_detail = acc_grp_pol_detail[4];
          acc_grp_pol_detail = rmLog(acc_grp_pol_detail,regex_log_t,regex_log_e);
          
          // add the policy line number, remark, policy detail:
          arr_acc_grp_pol_data.push("<br>" + "- Policy Line: " + acc_grp_pol_line + "<br>");
          arr_acc_grp_pol_data.push("- Remark: " + remark + "<br>");
          arr_acc_grp_pol_data.push("- Policy Details: " + acc_grp_pol_detail + "<br>");
          
          //(^acc.+) PART - check if hitcnt > 0 is contained in acc_grp_pol_detail - within the non indented line 
          if (regex_hit_t.test(acc_grp_pol_detail)){
          cnt_acc_grp_pol_hit++;     
          }
          else {
                    //do none
               } 
          
          //(^\s\sacc.+) PART - check indented lines 
               i++;
               //reset tmp counter
               cnt_acc_grp_pol_mem_hit_0_tmp = 0;
               while (regex_ind_t.test(input_arr[i])){
                    acc_grp_pol_mem_detail = regex_no_log_e.exec(input_arr[i]);
                    acc_grp_pol_mem_detail = acc_grp_pol_mem_detail[3]+acc_grp_pol_mem_detail[4];
                   acc_grp_pol_mem_detail = rmLog(acc_grp_pol_mem_detail,regex_log_t,regex_log_e);
                    if (regex_hit_0_t.test(acc_grp_pol_mem_detail)) {
                         arr_acc_grp_pol_data.push("- Policy Member Details: " + acc_grp_pol_mem_detail + "<br>");
                         cnt_acc_grp_pol_mem_hit_0++;
                         cnt_acc_grp_pol_mem_hit_0_tmp++;
                         }
                    else {                        
                         cnt_acc_grp_pol_mem_hit++;}
                        
                        i++;}
                        ///////////////////////////
               // push if temp cnt > 0
               if (cnt_acc_grp_pol_mem_hit_0_tmp > 0) {
                arr_acc_grp_data.push(arr_acc_grp_pol_data);
                }
                // push if the acc_grp_pol_detail contains hitcnt=0 
               else if (regex_hit_0_t.test(acc_grp_pol_detail)) {
               cnt_acc_grp_pol_hit_0++;
               arr_acc_grp_data.push(arr_acc_grp_pol_data); 
          }
                
                //////////check whether the 
                else {
                    //do none - This access group policy does not contain hitcnt=0
                }
     
          //decrease iterator to go back to previous line and go to begining
          i--; 
          
          }
    //get  counters and percentages global to acc_grp
    cnt_acc_grp_hit = cnt_acc_grp_pol_hit + cnt_acc_grp_pol_mem_hit;
    cnt_acc_grp_hit_0 = cnt_acc_grp_pol_hit_0 + cnt_acc_grp_pol_mem_hit_0;
    cnt_acc_grp_hit_all = cnt_acc_grp_hit + cnt_acc_grp_hit_0;
    
    pct_acc_grp_hit = ((cnt_acc_grp_hit / cnt_acc_grp_hit_all)*100).toFixed(0);
    pct_acc_grp_hit_0 = ((cnt_acc_grp_hit_0/cnt_acc_grp_hit_all)*100).toFixed(0); 
}

function getTxtHostData(){
    // Add per acc_group data - incl policy information 
    txt_host_data_tmp = txt_host_data +
    "\n\nFirewall: " + hostname +
    "\nAccess Group: " + acc_grp +
    "\n- Unused Policies: " +pct_acc_grp_hit_0 + "% (" + cnt_acc_grp_hit_0 + ")" +
    "\n- Used Policies: " + pct_acc_grp_hit + "% (" + cnt_acc_grp_hit + ")"  +
    "\n- All Policies: " + cnt_acc_grp_hit_all +
    "\n\n\n"+ txt_acc_grp_data;
   
    setvar("txt_host_data", txt_host_data_tmp);

    // with no policy details 
    txt_host_data_brief_tmp = txt_host_data_brief +
    "\n\nFirewall: " + hostname +
    "\nAccess Group: " + acc_grp +
    "\n- Unused Policies: " +pct_acc_grp_hit_0 + "% (" + cnt_acc_grp_hit_0 + ")" +
    "\n- Used Policies: " + pct_acc_grp_hit + "% (" + cnt_acc_grp_hit + ")" +
    "\n- All Policies: " + cnt_acc_grp_hit_all;
   
    setvar("txt_host_data_brief", txt_host_data_brief_tmp);

}

function getHostStats(){    
    var cnt_host_hit_tmp = Math.floor(cnt_host_hit) + Math.floor(cnt_acc_grp_hit);
    var cnt_host_hit_0_tmp = Math.floor(cnt_host_hit_0) + Math.floor(cnt_acc_grp_hit_0);
    var cnt_host_hit_all_tmp = Math.floor(cnt_host_hit_all) + Math.floor(cnt_acc_grp_hit_all);
    setvar("cnt_host_hit", cnt_host_hit_tmp);
    setvar("cnt_host_hit_0", cnt_host_hit_0_tmp);
    setvar("cnt_host_hit_all", cnt_host_hit_all_tmp);
}


function getHtmlAccGrpStr(){
  var htmlAccGrpArr = htmlAccGrpStr.split('\n');          
  var colourG = '<font color = "#026d2b">';
  var colourR = '<font color = "#a31d00">';
  
  htmlAccGrpArr.push('<table style="width:45%">');

  
  //add blank row
  htmlAccGrpArr.push('<tr><td><br></td></tr>');
  

  htmlAccGrpArr.push('<tr><td><h4><b>'+ acc_grp + '</b>' +'  (All group policies: '+ cnt_acc_grp_hit_all + ')'+ '</h4>'+'</td></tr>');
  htmlAccGrpArr.push('</table>');


  //header row 
  htmlAccGrpArr.push('<table style="width:45%"><tr><th>All Unused Rules</th><th>All Used Rules</th></tr>');
    
  htmlAccGrpArr.push("<td>" + colourR + "<b>" + pct_acc_grp_hit_0 + "%" + "</b>" + "  (" + cnt_acc_grp_hit_0 + ")" 

+ "</td>");
  htmlAccGrpArr.push("<td>" + colourG + "<b>" + pct_acc_grp_hit + "%" + "</b>" + "  (" + cnt_acc_grp_hit + ")" + 

"</td>");
  htmlAccGrpArr.push('</table>');

  
  var htmlAccGrpStrTmp = htmlAccGrpArr.join('\n');

  setvar("htmlAccGrpStr", htmlAccGrpStrTmp);

}

function getHtmlPolStr(){
  var htmlPolArr = htmlPolStr.split('\n');          
  htmlPolArr.push('<h4>Firewall: '+ hostname +'</h4>');
  htmlPolArr.push('<h4>Access Group: ' + acc_grp + '</h4>');
    
  htmlPolArr.push('<h4>Unused Policies: ' + pct_acc_grp_hit_0 + "%  (" + cnt_acc_grp_hit_0 + ")" + "</h4>");
  htmlPolArr.push('<h4>Used Policies: ' + pct_acc_grp_hit + "%  (" + cnt_acc_grp_hit + ")" + "</h4>");
  
  htmlPolArr.push("<h4>Policy Details: </h4>");
  htmlPolArr.push(txt_acc_grp_data);
  htmlPolArr.push("<br><br>");





  var htmlPolStrTmp = htmlPolArr.join('\n');  
  setvar("htmlPolStr", htmlPolStrTmp);

}



//Main 

function main() {
    
    tmp_a = txtToArr(txt_acc_grp_out,"\n");
    tmp_b = trimArr(tmp_a);
    tmp_c = getReportData(tmp_b); // provides array output: arr_acc_grp_data
    txt_acc_grp_data = twoDimArrToTxt(arr_acc_grp_data,"\n","\n\n"); // converts output arr to txt_acc_grp_data
    arr_acc_grp_data = txtToTwoDimArr(txt_acc_grp_data, "\n","\n\n"); // test only - reverse conversion to a 2 dim 

array 
    
    getTxtHostData();
    getHostStats();
    getHtmlAccGrpStr();
    getHtmlPolStr();
    
    return txt_acc_grp_data;
    
}

main();






// #9 update txt_glob_stat with host_stats

function setvar(name, value) {
  if (this.hasOwnProperty(name)) { //typos happen
    this[name] = value;
    execution.getExecutionVariableForScope(name, executionPointer.getCurrentScope()).setValue(value);
  }
}


function updateTxtGlobStat() {
  var pct_host_hit = ((cnt_host_hit / cnt_host_hit_all)*100).toFixed(0);
  var pct_host_hit_0 = ((cnt_host_hit_0 / cnt_host_hit_all)*100).toFixed(0);

  var txt_host_stat = "Firewall: " + hostname +
  "\n- All Unused Policies: " + pct_host_hit_0 +"% (" + cnt_host_hit_0 + ")"+
  "\n- All Used Policies: "+ pct_host_hit + "% (" + cnt_host_hit + ")" +
  "\n- All Policies: " + cnt_host_hit_all +
  "\n- All Access Groups: " + cnt_acc_grps;

  var txt_glob_stat_tmp = txt_glob_stat + "\n\n" + txt_host_stat;
  setvar("txt_glob_stat", txt_glob_stat_tmp);

  var cnt_acc_grps_glob_tmp = Math.floor(cnt_acc_grps_glob) +  Math.floor(cnt_acc_grps);
  setvar("cnt_acc_grps_glob", cnt_acc_grps_glob_tmp);
  
  //get global counters
  var cnt_glob_hit_tmp = Math.floor(cnt_glob_hit) + Math.floor(cnt_host_hit);
  var cnt_glob_hit_0_tmp = Math.floor(cnt_glob_hit_0) + Math.floor(cnt_host_hit_0);
  var cnt_glob_hit_all_tmp = Math.floor(cnt_glob_hit_all) + Math.floor(cnt_host_hit_all);
  setvar("cnt_glob_hit", cnt_glob_hit_tmp);
  setvar("cnt_glob_hit_0", cnt_glob_hit_0_tmp);
  setvar("cnt_glob_hit_all", cnt_glob_hit_all_tmp);
  
  var cnt_hostnames_succ_tmp = Math.floor(cnt_hostnames_succ) + 1;
  setvar("cnt_hostnames_succ", cnt_hostnames_succ_tmp);

  var hostnames_succ_tmp = hostnames_succ + hostname +"\n";
  setvar("hostnames_succ", hostnames_succ_tmp);
}
  
  
function updateTxtGlobData(){
 // including policy level information
  var txt_glob_data_tmp =  txt_glob_data +  "\n\n" + txt_host_data;
  setvar("txt_glob_data", txt_glob_data_tmp);
// with no policy level information  
  var txt_glob_data_brief_tmp =  txt_glob_data_brief +  "\n\n" + txt_host_data_brief;
  setvar("txt_glob_data_brief", txt_glob_data_brief_tmp);  
}


function getHtmlHostStr(){
      var htmlHostArr = htmlHostStr.split('\n');      
      var pct_host_hit = ((cnt_host_hit / cnt_host_hit_all)*100).toFixed(0);
      var pct_host_hit_0 = ((cnt_host_hit_0 / cnt_host_hit_all)*100).toFixed(0);      
      var colourG = '<font color = "#026d2b">';
      var colourR = '<font color = "#a31d00">';

      htmlHostArr.push("<br>");
      htmlHostArr.push('<table style="width:45%"><tr><td><h3><b>'+ hostname + '</h3></td></tr>');
      htmlHostArr.push("</table>");

      //header row 
      htmlHostArr.push('<table style="width:45%"><tr><th>All Unused Rules</th><th>All Used Rules</th></tr>');
      
    
      htmlHostArr.push("<td>" + colourR + "<b>" + pct_host_hit_0 + "%" + "</b>" + "  (" + cnt_host_hit_0 + ")" + 

"</td>");
      htmlHostArr.push("<td>" + colourG + "<b>" + pct_host_hit + "%" + "</b>" + "  (" + cnt_host_hit + ")" + 

"</td>");
      htmlHostArr.push("</table>");
    
    
     ///separator
    htmlHostArr.push('<br>');
    
    
    //acc grps
    htmlHostArr.push('<table style="width:45%">'+ '<tr>' + 'All Access Groups: ' + cnt_acc_grps + '</tr><br>');
    //policies
    htmlHostArr.push('<tr>' + 'All Policies: ' + cnt_host_hit_all + '</tr>');
    htmlHostArr.push('<tr>' + 'Uptime: ' + upTime + '</tr>');
    htmlHostArr.push('</table>');
    htmlHostArr.push('<br>');

    var htmlHostStrTmp = htmlHostArr.join('\n');
    setvar("htmlHostStr", htmlHostStrTmp);

    
}



function getHtmlAccGrpStr(){
  var htmlAccGrpArr = htmlAccGrpStr.split('\n');          
  htmlAccGrpArr.push("<br>");

  var htmlAccGrpStrTmp = htmlAccGrpArr.join('\n');
  setvar("htmlAccGrpStr", htmlAccGrpStrTmp);

}




function main() {
  updateTxtGlobStat();
  updateTxtGlobData();
  getHtmlHostStr();
  getHtmlAccGrpStr();
  }
  
main();







// #10 Assamble email_body
function setvar(name, value) {
  if (this.hasOwnProperty(name)) { //typos happen
    this[name] = value;
    execution.getExecutionVariableForScope(name, executionPointer.getCurrentScope()).setValue(value);
  }
}






// assamble  email_body

function getEmailBody(){
  
  var pct_glob_hit = ((cnt_glob_hit / cnt_glob_hit_all)*100).toFixed(0);
  var pct_glob_hit_0 = ((cnt_glob_hit_0 / cnt_glob_hit_all)*100).toFixed(0);

  var email_body_tmp = "Hello,\n\nplease see the report below:" +
"\n\n\n\t\tCisco ASA Unused Rules Report" +
"\n__________________________________________________" +
"\n\n\t\tGlobal Context:"+
"\n\n- All Unused Policies: " + pct_glob_hit_0 + "% ("+ cnt_glob_hit_0 + ")"+ 
"\n- All Used Policies: " + pct_glob_hit + "% ("+cnt_glob_hit + ")" + 
"\n- All Policies: " + cnt_glob_hit_all +
"\n- All Access Groups: " + cnt_acc_grps_glob +
"\n\n- Tested Firewalls ("+ cnt_hostnames_succ + "):" +
"\n" + hostnames_succ +
"\n\n\t\tFirewall Context:" +
"\n\n" + txt_glob_stat +
"\n\n\t\tFirewall\/Access Group Context:" +
"\n\n" +txt_glob_data_brief +
"\n\n\t\tPolicy Context:" +
"\n\n" +txt_glob_data;

setvar("email_body",email_body_tmp);

}

//get htmlGlobStr stats
function getHtmlGlobStr() {
    var pct_glob_hit = ((cnt_glob_hit / cnt_glob_hit_all)*100).toFixed(0);
    var pct_glob_hit_0 = ((cnt_glob_hit_0 / cnt_glob_hit_all)*100).toFixed(0);
    var colourG = '<font color = "#026d2b">';
    var colourR = '<font color = "#a31d00">';
    var htmlGlobArr = htmlGlobStr.split('\n');
    
    htmlGlobArr.push("<td>" + colourR + "<b>" + pct_glob_hit_0 + "%" + "</b>" + "  (" + cnt_glob_hit_0 + ")" + 

"</td>");
    htmlGlobArr.push("<td>" + colourG + "<b>" + pct_glob_hit + "%" + "</b>" + "  (" + cnt_glob_hit + ")" + 

"</td>");
    htmlGlobArr.push("</table>");
    
     //separator
    htmlGlobArr.push('<br>');
    
     //acc grps
    htmlGlobArr.push('<table style="width:45%">'+ '<tr>' + 'All Access Groups: ' + cnt_acc_grps_glob + 

'</tr><br>');
    //policies
    htmlGlobArr.push('<tr>' + 'All Policies: ' + cnt_glob_hit_all + '</tr><br>');    
     //tested fw #
    htmlGlobArr.push('<tr>' + 'Tested Firewalls (' + cnt_hostnames_succ + '): ' + hostnames_succ + '</tr>');
    
    htmlGlobArr.push('</table>');
    
    
    
    
    

    
    
    
    var htmlGlobStrTmp = htmlGlobArr.join('\n');
    setvar("htmlGlobStr", htmlGlobStrTmp);
    
    
}


//main

function main()
{
  getHtmlGlobStr();
}
main();
