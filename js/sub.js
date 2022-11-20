/* sub.js */

/* site-map */
$(function () {
  $("#btn-toggle").on("click", function () {
    $("#site-map").toggleClass("show");
  });

  $("#site-map .btn-close").on("click", function () {
    $("#site-map").removeClass("show");
  });
});

/* lnb 2뎁스 메뉴 보이기 */
$(function () {
  $(".lnb h3 a").on("click", function (event) {
    event.preventDefault();
    $(".lnb .lnb-list").toggleClass("view");
  });
});

/* #sub4-1 버튼 전환 효과 */

$(function () {
  $("#sub4-1 .section3 button").on("click", function () {
    $("#sub4-1 .section3 button").removeClass("active");
    $(this).addClass("active");
  });
});
