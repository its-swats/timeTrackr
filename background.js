var siteTimes = {}

setInterval(function(){  
  chrome.tabs.query({'currentWindow': true, 'active': true, 'lastFocusedWindow': true}, function(tabs){
    site = tabs[0].url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/)[2]
    if (!!siteTimes[site] == false) {
      siteTimes[site] = 1
    } else {
      siteTimes[site] += 1
    };
  });
}, 1000)