if (screen.width > 1281) {
  // grab an element
  var elem = document.querySelector("header.gbl");
  // construct an instance of Headroom, passing the element
  var headroom = new Headroom(elem, {
    "offset": 200,
    "tolerance": 5,
    "classes": {
      initial : "h",
      pinned : "pinned",
      unpinned : "unpinned",
      top : "top",
      notTop : "not-top",
      bottom : "bottom",
      notBottom : "not-bottom"
    }
  });
  // initialise
  headroom.init(); 
}

$('.js-modal').click(function () {
  $('body').addClass('modal-open');
});
$('.js-modal-close').click(function () {
  $('#Fintech-modal').removeClass('open');
  $('#Fintech-Thank-Modal').removeClass('open');
  $('body').removeClass('modal-open');
});
$('#Fintech-Modal').click(function () {
  $('#Fintech-modal').addClass('open');
});
$('#Fintech-T-Modal').click(function () {
  $('#Fintech-Thank-Modal').addClass('open');
});

$(".navigation .c-hamburger").click(function () {
  $(this).parent("").toggleClass("open");
  $("body").toggleClass("nav-open");
  $(".sidebar").removeClass("open");
  $(".open-sidebar").removeClass("open");
});

$(".open-sidebar").click(function () {
  $(this).toggleClass("open");
  $(".sidebar").toggleClass("open");
});

$('.navigation').on('click', '.nav-click', function(){
  var currentSubmenu = $(this).siblings('.nav-submenu');
  var currentNavClick = $(this);
  $('.nav-submenu').not(currentSubmenu).slideUp();
  $('.nav-click').not(currentNavClick).removeClass('icon-close');
  $('.nav-click').not(currentNavClick).parent("").removeClass('open');
  $(this).siblings('.nav-submenu').toggle();


// This will toggle the + and - when clicked
  $(this).removeClass('nav-click');
  $(this).toggleClass('icon-close');
  $(this).toggleClass('nav-click');   
  $(this).parent("").toggleClass('open'); 
});
if (screen.width < 1280) {
  $(".nav-submenu").hide();
}



