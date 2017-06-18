var classActive = 'open',
    classHide = 'hide';

var header = document.querySelector('.header'),
    menu = document.querySelector('.header_menu'),
    menuBtn = document.querySelector('.header_menu-btn'),
    videoImg = document.querySelector('.video_img'),
    videoIframe = document.querySelector('.video_iframe iframe'),
    searchBtn = document.querySelector('.search_btn'),
    searchBlock = document.querySelector('.search_block'),
    searchExit = document.querySelector('.search_block-exit');


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
if (videoImg) {
  videoImg.addEventListener('click', function() {
    if (videoImg.classList.contains(classHide)) {
      videoImg.classList.remove(classHide);
      videoIframe.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
    }
    else {
      videoImg.classList.add(classHide);
      videoIframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    }

  });
}

if (searchBtn) {
  searchBtn.addEventListener('click', function() {
      searchBlock.classList.add(classActive);
  });
  searchExit.addEventListener('click', function() {
      searchBlock.classList.remove(classActive);
  });
}



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
  document.querySelector('.btn-order').addEventListener('click', function (event) {
    event.preventDefault();
    console.log('popup open');
    body.classList.add(bodyClassPopup);
    orderPopup.classList.add(classActive);
    return false;
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
};



