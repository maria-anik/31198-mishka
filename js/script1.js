
window.onload = function() {
  document.querySelector('.header_menu').classList.add('js');
  var menu_btn = document.querySelector('.header_menu-btn');
  menu_btn.onclick = function() {
    if(menu_btn.classList.contains('open')) {
      document.querySelector('.header_menu').classList.remove('open');
      menu_btn.classList.remove('open');
    }
    else {
      menu_btn.classList.add('open');
      document.querySelector('.header_menu').classList.add('open');
    }
  }
  document.querySelector('.btn-order').onclick = function() {
    document.querySelector('body').classList.add('popup');
    document.querySelector('.popup_catalog').classList.add('open');
  };
  document.querySelector('.popup_close').onclick = function() {
    document.querySelector('body').classList.remove('popup');
    document.querySelector('.popup_catalog').classList.remove('open');
  };

  document.onclick = function(event) {
      if ( ((event.target).closest('.popup_catalog').length)) {
        if(document.querySelector('body').classList.contains('popup')) {
          console.log('h');
          document.querySelector('body').classList.remove('popup');
          document.querySelector('.popup_catalog').classList.remove('open');
        }
      }
  };

};

window.onresize = function(event) {
    if (window.innerWidth>767) {
    document.querySelector('.header_menu').classList.remove('open');
    document.querySelector('.header_menu-btn').classList.remove('open');
    document.querySelector('.header').classList.remove('open');
  }
  else {
    if (!document.querySelector('.header').classList.contains('header--mob')) {
      document.querySelector('.header').classList.add('header--mob');
      document.querySelector('.header_menu-btn').classList.remove('open');
    }
  }
};
