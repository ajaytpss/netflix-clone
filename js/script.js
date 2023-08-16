$(".accordianTitle").click(function () {
  $(this)
    .parent(".accordianItem")
    .siblings(".accordianItem")
    .children(".accordianBody")
    .slideUp();
  $(this)
    .parent(".accordianItem")
    .siblings(".accordianItem")
    .children(".accordianTitle")
    .removeClass("open");
  $(this).toggleClass("open");
  $(this).next(".accordianBody").slideToggle();
});
