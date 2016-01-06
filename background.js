var storage = localStorage

setInterval(function(){  
  chrome.tabs.query({'currentWindow': true, 'active': true, 'lastFocusedWindow': true}, function(tabs){
    site = tabs[0].url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/)[2]
    if (!!storage[site] == false) {
      storage[site] = 1
    } else {
      var count = parseInt(storage[site]) + 1
      storage[site] = count
    };
  });
}, 1000)