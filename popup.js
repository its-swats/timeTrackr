$(function(){
  // $('#time').html(chrome.extension.getBackgroundPage().siteTimes[chrome.extension.getBackgroundPage().site])  
  displayTime();
  updateDisplay();
  
  // buttonClick();
})


var buttonClick = function(){
  $('#test').on('click', function(event){
    event.preventDefault();
    var site = chrome.extension.getBackgroundPage().site
    $('#time').html(chrome.extension.getBackgroundPage().siteTimes[site])  
    displayTime();
  })
}


var displayTime = function(){
  // var site = chrome.extension.getBackgroundPage().site
  // $('#time').html(chrome.extension.getBackgroundPage().siteTimes[site])  
  setInterval(function(){
    // $('#time').html(chrome.extension.getBackgroundPage().siteTimes[site])  
    $('#time').html(time())  
    // console.log(chrome.extension.getBackgroundPage().siteTimes['facebook.com'])
    // $('#time').html(chrome.extension.getBackgroundPage().siteTimes[chrome.extension.getBackgroundPage().site])  
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
  return chrome.extension.getBackgroundPage().siteTimes[site()]
}