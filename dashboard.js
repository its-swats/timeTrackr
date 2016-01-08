$(function(){
  createTable();
  resetDataHandler();
  toggleMetrics();
  prepGraph();
  deleteLineItem();
  highCharts();
})

var createTable = function(){
  var data = (_.pairs(localStorage))
  var sorted = _(data).sortBy(function(array){
    return parseInt(-array[1])
  })
  _.each(sorted.slice(0,10), function(array){
    $('#table').append("<tr><td><a id='"+array[0]+"' href='#'>&#x2715</a> " + array[0] + "</td><td>" + array[1].toHHMMSS() + "</tr>");
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

var resetDataHandler = function(){
  $('#resetData').on('click', function(event){
    event.preventDefault();
    chrome.tabs.getCurrent(function(tab) {
      localStorage.clear()
      chrome.tabs.remove(tab.id, function() { 
      });
    });
  })
}
var toggleMetrics = function(){
  $('.toggle-metrics').on('click', function(event){
    event.preventDefault();
    $('#metrics').toggleClass('hidden')
    $('#top10').toggleClass('hidden')
  })
}

var deleteLineItem = function(){
  $('#table').on('click', 'tr td a', function(event){
    event.preventDefault();
    var kill = $(this).attr('id');
    $(this).parent().parent().remove();
    delete localStorage[kill];
  })
}

var highCharts = function() {
  $('#highChart').highcharts({
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Time Spent'
    },
    tooltip: {
      enabled: false
    },
    series: [{
      data: datas
    }]  
  });
}


var prepGraph = function(){
  datas = []
  var data = (_.pairs(localStorage))
  var sorted = _(data).sortBy(function(array){
    return parseInt(-array[1])
  })
    
  _.each(sorted.slice(0,15), function(site){
    datas.push({"name": site[0], "data": parseInt(site[1])})
  })

  $.each(datas, function (i, point) {
    point.y = point.data;
  });
}
