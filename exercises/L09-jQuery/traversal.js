$(document).ready(function(){
  var docHeader = $('header')
  docHeader.css('color', 'red')

  var docSections = $('section').find('*')
  docSections.css('color', 'green')

  var currentSection = $('div section.current')
  currentSection.css('background-color', 'black')

  var afterCurrent = currentSection.next()
  afterCurrent.css('background-color', 'purple')

  var beforeCurrent = currentSection.prev().find('h2').eq(0)
  beforeCurrent.css('font-size', '50px')

  var divHighlight = $('.highlight').parent().parent()
  divHighlight.css('font-family', 'Verdana')
  $( "section" )
    .find( "h2" )
    .eq( 1 )
        .text( "new text for the second h2!" )
        .end() // Restores the selection to all h3s in #content
    .eq( 0 )
        .css( 'font-size', '30px');
})
