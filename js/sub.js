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
  let btnHallList = ["홀I", "홀IV", "홀V", "홀402"];
  $("#sub4-1 .section3 button").on("click", function () {
    $("#sub4-1 .section3 button").removeClass("active");
    $(this).addClass("active");
    btnNum = $(this).index();
    $("#sub4-1 .section4 .popup-reservation .choosed-hall").html(
      btnHallList[btnNum]
    );
  });
});

/* #sub4-1 연습실 예약 */
/* 달력에서 날짜 선택 */
$(function () {
  $("#sub4-1 .section4 .calendar-box .calendar td").on("click", function () {
    $("#sub4-1 .section4 .calendar-box .calendar td").removeClass("choosed");
    $(this).addClass("choosed");
    $("#sub4-1 .section4 .popup-reservation").addClass("view");

    /* 선택날짜 팝업창 표시 */
    choosedDate = "2022.11." + $(this).html();
    $("#sub4-1 .section4 .popup-reservation h3").html(choosedDate);
  });

  $("#sub4-1 .section4 .popup-reservation .btn-close").on("click", function () {
    $("#sub4-1 .section4 .popup-reservation").removeClass("view");
  });
});
