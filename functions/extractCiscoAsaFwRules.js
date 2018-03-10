function extractRules() {
// test input
var p1 = "access-list global_access extended permit icmp any any";
var p2 = "access-list OAZZ-TRANSIT_access_in remark Dummy iDummy Staging 123 SHU VIP";
var p3 = "access-list OAZZ-OOAZZ2D-TRANSIT_access_in remark additional servers";
var p4 = "access-list OA334ZZ-OAr4ZZ-TRANSIT_access_in extended permit tcp object-group OAZZ-Solaris-Servers object-group AB_INLINE_NETWORK eq sqlnet log debugging";
var p5 = "access-list OAZZ-OAOAZZT-core-transit_access_in extended permit tcp object-group AB_INLINE_NETWORK_100 object-group TEST5-APP-SVRS eq 7510";
var acl_rules_out = (p1 + "\n" + p2 + "\n" + p3 + "\n" +p4 + "\n" +p5);

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
