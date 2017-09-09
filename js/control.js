$(document).ready(function() {
  $('#time-line').hide()
  for (var i = 0; i < 4 ; i++) {
    var year = 2011 + i
    var timelist  = '#time-line-' + year
    $( timelist ).hide()
  }

  $( '#year-2011' ).click( ()=>{
    $( '#timegroup').fadeOut( 500, ()=> {
      $('nav.navbar').hide()
      $('nav.navbar').css("z-index", "0");
      $('#time-line').show()
      $( '#time-line-2011' ).fadeIn( 300 )
    })
  })

  $( '#year-2012' ).click( ()=>{
    $( '#timegroup').fadeOut( 500, ()=> {
      $('nav.navbar').hide()
      $('nav.navbar').css("z-index", "0");
      $('#time-line').show()
      $( '#time-line-2012' ).fadeIn( 300 )
    })
  })

  $( '#year-2013' ).click( ()=>{
    $( '#timegroup').fadeOut( 500, ()=> {
      $('nav.navbar').hide()
      $('nav.navbar').css("z-index", "0");
      $('#time-line').show()
      $( '#time-line-2013' ).fadeIn( 300 )
    })
  })

  $( '#year-2014' ).click( ()=>{
    $( '#timegroup').fadeOut( 500, ()=> {
      $('nav.navbar').hide()
      $('nav.navbar').css("z-index", "0");
      $('#time-line').show()
      $( '#time-line-2014' ).fadeIn( 300 )
    })
  })
  
  $( '.back' ).click( ()=>{
    console.log('rgr')
  })

  $( '.back' ).click( ()=>{
    $( '#time-line' ).fadeOut( 300, ()=> {
      $('nav.navbar').css("z-index", "1");
      $('nav.navbar').show()
      for (var i = 0; i < 4 ; i++) {
        var year = 2011 + i
        var timelist  = '#time-line-' + year
        $( timelist ).hide()
      }
      $( '#timegroup' ).fadeIn( 500 )
    })
  })

})