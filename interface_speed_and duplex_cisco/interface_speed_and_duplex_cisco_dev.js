var duplex_speed_media	= "FuLL-duplex, 10000Mb/s, media type is 10/100/1000BaseTX" // current readings
var duplex_range = "Duplex: half,full,auto"
var speed_range = "Speed: 10,100,1000,10000,auto"
var duplex_configured = " duplex full"
var speed_configured = " speed 100"

// speed_range = "Speed: 1000";
// duplex_range = "Duplex: full";

//config = "undefined" //"NaN"
//Static VAR:
regex_comma = new RegExp(",");



function get_max(range) {
  if (regex_comma.test(range)) {
    range_max_tmp = range.split(",");
    range_max = range_max_tmp[range_max_tmp.length - 2];
  }
  else {
    range_max_tmp = range.split(" ");
    range_max = range_max_tmp[range_max_tmp.length-1];
  }
  return range_max
}


function get_duplex_speed_media(duplex_speed_media_var) {
  duplex_speed_media_tmp = duplex_speed_media_var.split(",");
  duplex_tmp = duplex_speed_media_tmp[0];
  duplex = duplex_tmp.match(/full|half|auto-duplex/i);

  duplex_speed_media_tmp = duplex_speed_media_var.split(",");
  speed_tmp = duplex_speed_media_tmp[1];
  speed = speed_tmp.match(/\d+|auto-speed/i);

  duplex_speed_media_tmp = duplex_speed_media_var.split(",");
  media_tmp = duplex_speed_media_tmp[2];
  media_tmp = media_tmp.split("is ");
  media = media_tmp[1];
  return [duplex, speed, media];
}
function get_config(config_var) {
  config_tmp = config_var.split(" ");
  config = config_tmp[2];
  // check if config contains value  
  if (config){
    return config;
  }
  else {
    return "auto";
    }
}

function isSpeedAndDuplexOptimal(){
if (duplex.toString().toLowerCase() != duplex_max.toString().toLowerCase() || Number(speed) < Number(speed_max) ){
  return false;
}
else {
  return true;
}
}

function main() {

  duplex = get_duplex_speed_media(duplex_speed_media)[0]; // current operation
  duplex_max = get_max(duplex_range); // capable operation
  duplex_config = get_config(duplex_configured); // configured operation

  speed = get_duplex_speed_media(duplex_speed_media)[1]; // Number - current operation
  speed_max = get_max(speed_range); // Number - capable operation
  speed_config =get_config(speed_configured); // Number - configured operation

  media = get_duplex_speed_media(duplex_speed_media)[2];
  
  /* test = "duplex: " + duplex + ", duplex_max: " + duplex_max + ", duplex_config: " + duplex_config + ", speed: " + speed + ", speed_max: " + speed_max +
   ", speed_config: " + speed_config + ", media: " + media; */  
  
  result = isSpeedAndDuplexOptimal();
  return result;
}

main()
result;
