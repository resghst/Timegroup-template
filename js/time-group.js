var backageImg = []
//image iteam it should 800*800

var year = ['2011','2012','2013','2014']
//show four year in your list

var taitle = []
//in the year your taitle

var content = []
//in the year your description


var yearLen = Object.keys(year).length
for (var i = 0; i < 4; i++) {
  var imgStr = '<div class="tl-bg" style="background-image: url(' + backageImg[i] + ')"></div>'
  var yerStr = '<div class="tl-year"><p class="f2 heading--sanSerif">' + year[i] + '</p></div>'
  var contentStr = '<div class="tl-content"><h1 class="f3 text--accent ttu">' + taitle[i] + '</h1><p>' + content[i] + '</p></div></div>'
  $('#timegroup').append('<div class="tl-item" id="year-' + year[i] + '">' + imgStr + yerStr + contentStr + '</div>')
}


