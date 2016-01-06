$(function(){
  createTable();
})

var createTable = function(){
  var data = (_.pairs(localStorage))
  // var sorted = (_.sortBy(data[0]))
  var sorted = _(data).sortBy(function(array){
    return parseInt(-array[1])
  })
  debugger;
  _.each(sorted, function(array){
    $('#table').append("<tr><td>" + array[0] + "</td><td>" + array[1].toHHMMSS() + "</tr>");
  })
}

String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); 
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    var time    = hours+':'+minutes+':'+seconds;
    return time;
}