//Sample dates ( mm/dd/yyyy )
var dates = [];
//For the purpose of stringifying MM/DD/YYYY date format
var monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var contents = []

var circleLineStr = ''

var circleContStr = ''

var setTime = (date)=>{
  var reObj = []
  $.each( date, (k, v)=> {
    var m = v.split('/')[0];
    var d = v.split('/')[1];
    var y = v.split('/')[2]
    if (d.charAt(0) == '0') d = d.charAt(1);
    d = parseInt(d)
    m = parseInt(m)
    var eachobj = {
      month: m,
      day: d,
      year: y,
      timeString: ()=>{ return y + ' '+ monthList[m - 1] + '-' + d; }
    }
    reObj.push(eachobj);
  })
  return reObj
}

var drawCircle = (index, rate, taital, Context)=>{
  circleLineStr = circleLineStr + '<div class="circle" id="circle' + index + '" style="left: ' + rate + '%;"><div class="popupSpan">' + taital + '</div></div>'
  circleContStr = circleContStr + '<span id="span' + index + '" class="right">' + Context + '</span>'
  // $("#line").append('<div class="circle" id="circle' + index + '" style="left: ' + rate + '%;"><div class="popupSpan">' + taital + '</div></div>'); 
  // $("#mainCont").append('<span id="span' + index + '" class="right">' + Context + '</span>');
}

var addPage = (year)=>{
  var back = '<div class="back"><i class="fa fa-angle-double-left" aria-hidden="true"></i></div>'
  var lineCont = '<div id="lineCont"><div id="line">' + circleLineStr + '</div><div id="span">Date </div></div>'
  var mainCont = '<div id="mainCont">' + circleContStr + '</div>'
  var end = '<div id="time-line-' + year + '">' + back + lineCont + mainCont + '</div>'
  $('#time-line').append(end)
}

//Main function. Draw your circles.
function makeCircles() {
  //Forget the timeline if there's only one date. Who needs it!?
  var timeObj = setTime(dates);
  var objLen = Object.keys(timeObj).length
  if (objLen < 2) {
    $("#line").hide();
    //This is what you really want.
  } 
  else if (objLen >= 2) {
    //console.log(dates)
    //Set day, month and year variables for the math
    var firstMonth = timeObj['0'].month
    var firstDay = timeObj['0'].day
    
    var last = Object.keys(timeObj).length-1
    var lastMonth = timeObj[last].month
    var lastDay = timeObj[last].day

    //Integer representation of the last day. The first day is represnted as 0
    var timelen = ((lastMonth - firstMonth) * 30.5) + (lastDay - firstDay);

    $.each(timeObj, (k, v)=>{
      thisMonth = v.month
      if (k == 0) { drawCircle(k, 0, timeObj[k].timeString(), timeObj[k].timeString()) }
      else if (k == last) { 
        drawCircle(k, 99, timeObj[k].timeString(), timeObj[k].timeString())
        addPage(timeObj[k].year)
      }
      else{
        thisMonth = v.month
        thisDay = v.day
        timeString = v.timeString()
        //Integer representation of the date
        var nowlen = ((thisMonth - firstMonth) * 30.5) + (thisDay - firstDay);
        //Integer relative to the first and last dates
        var rate = nowlen  / timelen *100;
        drawCircle(k, rate, timeString, timeString) 
      } 
    })
  }
  $(".circle:first").addClass("active");
}

makeCircles();

$(".circle").mouseenter(function() {
  $(this).addClass("hover");
});

$(".circle").mouseleave(function() {
  $(this).removeClass("hover");
});

$(".circle").click(function() {
  var spanNum = $(this).attr("id");
  selectDate(spanNum);
});

function selectDate(selector) {
  console.log(selector)
  $selector = "#" + selector;
  $spanSelector = $selector.replace("circle", "span");
  var current = $selector.replace("circle", "");
  
  $(".active").removeClass("active");
  $($selector).addClass("active");
  
  if ($($spanSelector).hasClass("right")) {
    $(".center").removeClass("center").addClass("left")
    $($spanSelector).addClass("center");
    $($spanSelector).removeClass("right")
  } else if ($($spanSelector).hasClass("left")) {
    $(".center").removeClass("center").addClass("right");
    $($spanSelector).addClass("center");
    $($spanSelector).removeClass("left");
  }; 
};

console.log()