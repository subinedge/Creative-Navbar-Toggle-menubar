$('<button class="close-button">\
    <b class="visually-hidden">Close</b>\
    <span aria-hidden="true">\
      ×\
    </span>\
  </button>').appendTo(".main-nav");

$(".main-nav").on("click", function() {
   $(this).toggleClass("open");
});