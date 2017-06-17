var classActive = 'open';

var header = document.querySelector('.header'),
    menu = document.querySelector('.header_menu'),
    menuBtn = document.querySelector('.header_menu-btn');

var orderPopup = document.querySelector('.popup_catalog'),
  orderBtn = document.querySelector('.btn-order'),
  orderPopupCloseBtn = document.querySelector('.popup_close'),
  body = document.querySelector('body'),
  bodyClassPopup = 'popup';


/****** MENU FUNCTIONALITY *******/
menu.classList.add('js');
menuBtn.addEventListener('click', function() {
  if (menuBtn.classList.contains(classActive)) {
    menu.classList.remove(classActive);
    menuBtn.classList.remove(classActive);
  } else {
    menuBtn.classList.add(classActive);
    menu.classList.add(classActive);
  }
});

window.onresize = function () {
  if (window.innerWidth > 767) {
    menu.classList.remove(classActive);
    menuBtn.classList.remove(classActive);
    header.classList.remove(classActive);
  } else {
    if (!header.classList.contains('header--mob')) {
      header.classList.add('header--mob');
      menuBtn.classList.remove(classActive);
    }
  }
};


/****** POPUP FUNCTIONALITY *******/
if (orderBtn && orderPopup) {
  orderBtn.addEventListener('click', function () {
    body.classList.add(bodyClassPopup);
    orderPopup.classList.add(classActive);
  });
  orderPopupCloseBtn.addEventListener('click', function () {
    body.classList.remove(bodyClassPopup);
    orderPopup.classList.remove(classActive);
  });

  document.addEventListener('click', function (event) {
    if (document.documentElement.closest) {
      // CLOSE MENU
      if (window.innerWidth < 768) {
        if (!event.target.classList.contains('header_menu-btn') && event.target.closest('.header_menu') === null && menu.classList.contains(classActive)) {
          menu.classList.remove(classActive);
          menuBtn.classList.remove(classActive);
        }
      }

      // CLOSE POPUP
      if ((event.target !== orderBtn) && (event.target !== orderPopupCloseBtn) && event.target.closest('.popup_catalog') === null && body.classList.contains(bodyClassPopup)) {
        console.log('h');
        body.classList.remove(bodyClassPopup);
        orderPopup.classList.remove(classActive);
      }
    }
  });
}
