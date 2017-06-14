var container, container_new, big;

$(document).ready(function(){
  $('.header_menu').addClass('js');
  $('.header_menu-btn').click(function(){
    if($(this).hasClass('open')) {
      $('.header_menu').slideUp();
      $(this).removeClass('open');
    }
    else {
      $('.header_menu').slideDown();
      $(this).addClass('open');
    }
  });
});

$(window).load(function(){
  container=$('.header_top>.container').outerWidth();
  if (container<700) {
    big=false;
  }
  else {
    big=true;
  }
});

$(window).resize(function(){
  container_new=$('.header_top>.container').outerWidth();
  if(container_new!=container) {
    container=container_new;

    if ((container<700)&&(big)) {
        $('.header_menu').css('display','block');
        $('.header_menu').hide().css('display','none');
        $('.header_menu-btn').removeClass('open');
        big=false;
    }
    else if ((container>700)&&(!big)) {
      $('.header_menu').show().css('display','flex');
      $('.header_menu-btn').removeClass('open');
      big=true;
    };

  };
});
