/* sub.js */
var maker = " 만든사람 : 김민수, 최정호, 허희연";
console.log(maker);

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
  let toDay = new Date();
  let toDate = toDay.getDate();
  let date = toDate;
  $(`#sub4-1 .section4 .calendar-box .calendar td:contains(${date})`)
    .eq(0)
    .addClass("choosed");

  $("#sub4-1 .section4 .calendar-box .calendar td").on("click", function () {
    $("#sub4-1 .section4 .calendar-box .calendar td").removeClass("choosed");
    $(this).addClass("choosed");
    $("#sub4-1 .section4 .popup-reservation").addClass("view");
    date = $(this).html();

    /* 선택날짜 팝업창 표시 */
    choosedDate = "2022.12." + date;
    $("#sub4-1 .section4 .popup-reservation h3").html(choosedDate);
  });

  $("#sub4-1 .section4 .popup-reservation .btn-close").on("click", function () {
    $("#sub4-1 .section4 .popup-reservation").removeClass("view");
  });

  /* 좌우 버튼으로 날짜 선택 */
  $("#sub4-1 .section4 .btn-prev").on("click", function () {
    date--;
    if (date <= 0) {
      date = 1;
    }
    choosedDate = "2022.11." + date;
    $("#sub4-1 .section4 .popup-reservation h3").html(choosedDate);
    $("#sub4-1 .section4 .calendar-box .calendar td").removeClass("choosed");
    $(`#sub4-1 .section4 .calendar-box .calendar td:contains(${date})`)
      .eq(0)
      .addClass("choosed");
    $("#sub4-1 .section4 .popup-reservation").addClass("view");
  });

  $("#sub4-1 .section4 .btn-next").on("click", function () {
    date++;
    if (date >= 31) {
      date = 30;
    }
    choosedDate = "2022.11." + date;
    $("#sub4-1 .section4 .popup-reservation h3").html(choosedDate);
    $("#sub4-1 .section4 .calendar-box .calendar td").removeClass("choosed");
    $(`#sub4-1 .section4 .calendar-box .calendar td:contains(${date})`)
      .eq(0)
      .addClass("choosed");
    $("#sub4-1 .section4 .popup-reservation").addClass("view");
  });

  /* today 버튼 클릭 효과 */
  $("#sub4-1 .section4 button#today").on("click", function () {
    $("#sub4-1 .section4 .calendar-box .calendar td").removeClass("choosed");
    $(`#sub4-1 .section4 .calendar-box .calendar td:contains(${toDate})`)
      .eq(0)
      .addClass("choosed");
    date = toDate;
    $("#sub4-1 .section4 .popup-reservation").removeClass("view");
  });
});
