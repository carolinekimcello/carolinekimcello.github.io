$(document).ready(function() {

  $( window ).resize(function() {
    var w_in_em = $(window).width() / parseFloat($("body").css("font-size"));
    if (w_in_em < 36){
      $('nav').css('margin', '0rem 0 0 -1rem');
      $('.jumbotron').css('padding', '3rem 0 1rem 0');
      $('.inner').css('padding', '0.5em');
    }
    else{
      $('nav').css('margin', '0');
      $('.jumbotron').css('padding', '5rem 0 1rem 0');
      $('.inner').css('padding', '2em');
    }
  });


  $('.navbar-toggler').click(function(){
    document.getElementById("mySidenav").style.width = "250px";
    $('.overlay').fadeIn();
    $(this).children().first().replaceWith('<i class="fa fa-times" aria-hidden="true"></i>');
    console.log('btn clicked');
  });
  $('.overlay').click(function(){
    document.getElementById("mySidenav").style.width = "0px";
    $('.overlay').fadeOut();
    $('.navbar-toggler').children().first().replaceWith('<i class="fa fa-bars" aria-hidden="true"></i>');
  });

  $('.dropdown').on('show.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(200);
  });
  $('.dropdown').on('hide.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
  });

  $('#main-dropdown').click(function(){
    if($(this).children().first().hasClass('fa-caret-down')){
      $(this).children().first().replaceWith('<i class="fa fa-caret-up" aria-hidden="true"></i>');
    }
    else{
      $(this).children().first().replaceWith('<i class="fa fa-caret-down" aria-hidden="true"></i>');
    }
  });

  $('#side-dropdown').click(function(){
    if(!$(this).next().html().includes('PHOTO')){
      $(this).removeClass('closed');
      $(this).children().first().replaceWith('<i class="fa fa-caret-up" aria-hidden="true"></i>');
      $(this).after('<div style="display: none;" class="side-dropdown-menu"></div>');
      if($(this).hasClass('active')){
        if($(this).hasClass('photo')) {
          $('.side-dropdown-menu').append(
           '<a href="../audio" class="sidenav-subitem">AUDIO</a>\
            <a href="../video" class="sidenav-subitem">VIDEO</a>\
            <a href="../photo" class="sidenav-subitem active">PHOTO</a>');
        }
        else if($(this).hasClass('video')){
          $('.side-dropdown-menu').append(
           '<a href="../audio" class="sidenav-subitem">AUDIO</a>\
            <a href="../video" class="sidenav-subitem active">VIDEO</a>\
            <a href="../photo" class="sidenav-subitem">PHOTO</a>');
        }
        else {
          $('.side-dropdown-menu').append(
           '<a href="../audio" class="sidenav-subitem active">AUDIO</a>\
            <a href="../video" class="sidenav-subitem">VIDEO</a>\
            <a href="../photo" class="sidenav-subitem">PHOTO</a>');
        }
      }
      else{
        $('.side-dropdown-menu').append(
           '<a href="../audio" class="sidenav-subitem">AUDIO</a>\
            <a href="../video" class="sidenav-subitem">VIDEO</a>\
            <a href="../photo" class="sidenav-subitem">PHOTO</a>');
      }
      
      $('.side-dropdown-menu').slideDown(200);
    }
    else{
      $(this).children().first().replaceWith('<i class="fa fa-caret-down" aria-hidden="true"></i>');
      if(!$(this).hasClass('active') ){
        $(this).addClass('closed');  
      }
      $(this).next().slideUp(200, function(){ $(this).remove(); });
    }
  });

  
});