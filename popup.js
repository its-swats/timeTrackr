$(function(){
  displayTime();
  updateDisplay();
  buttonClick();
})


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

var buttonClick = function(){
  console.log('test')
  $('#dashboard').on('click', function(event){
    chrome.tabs.create({url: 'dashboard.html'})
  })
}


var displayTime = function(){
  setInterval(function(){
    $('#time').html(time())  
  }, 1000)
}

var updateDisplay = function(){
  $('#link').html(site());
  $('#time').html(time());
}

var site = function(){
  return chrome.extension.getBackgroundPage().site
}

var time = function(){
  var seconds = chrome.extension.getBackgroundPage().storage[site()];
  return seconds.toString().toHHMMSS();
}
