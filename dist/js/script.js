$(document).ready(function () {
  var state = false
  var substate = false
  $('header > div > div > button').click(function () {
    if (state == false) {
      $('header > div > ul').slideDown(500)
      state = true;
    }
    else {
      $('header > div > ul').slideUp()
      state = false
    }
  })

  $('.dropdown').mouseenter(function(event){
    $(event.currentTarget).children('ul').slideDown()
  })
  $('.dropdown').mouseleave(function(event){
    $(event.currentTarget).children('ul').slideUp()
  })

  $('.dropdown > span').click(function(event){
    if(substate == false){
          $(event.currentTarget).siblings().slideDown()
          substate = true;
    } else {
       $(event.currentTarget).siblings().slideUp()
       substate = false;
    }
  })

  $('span.dropdown').click(function () {
    $('div.dropdown-menu').toggleClass('hidden')
  })
  $('.about li').click(function(){
    $(this).children('p').slideToggle()
  })
})