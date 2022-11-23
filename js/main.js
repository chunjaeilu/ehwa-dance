/* main.js */
var maker = " 만든사람 : 김민수, 최정호, 허희연";
console.log(maker);

/* ##### site-map ##### */
$(function () {
  $("#btn-toggle").on("click", function () {
    $("#site-map").toggleClass("show");
  });

  $("#site-map .btn-close").on("click", function () {
    $("#site-map").removeClass("show");
  });
});

/* ##### 메인배너 이미지 전환 ##### */
$(function () {
  let bgArr = [
    "images/main-visual-1.jpg",
    "images/main-visual-2.jpg",
    "images/main-visual-3.jpg",
  ];

  let bg_img_num = 0;

  setInterval(function () {
    bg_img_num++;

    if (bg_img_num >= bgArr.length) {
      bg_img_num = 0;
    }
    $("#main-visual .container").css({
      "background-image": `url(${bgArr[bg_img_num]})`,
    });
  }, 5000);
});

/* ##### 공지사항 클릭시 전환 ##### */
$(function () {
  $(".section1 .notice-title-list li").on("click", function () {
    $(".section1 .notice-title-list li").removeClass("active");
    $(this).addClass("active");

    let indexNum = $(this).index();
    $(".section1 .notice-list").removeClass("active");
    $(".section1 .notice-list").eq(indexNum).addClass("active");
  });
});

/* ##### 학사일정 날짜선택 #####*/
$(function () {
  let choosedDate = "2022.11.29";
  let date = 29;

  /* 날짜별 학사일정 */
  let scheduleList = [
    {
      theDate: 0,
      list: "",
    },
    {
      theDate: 1,
      list: "· 2022년도 2학기 중간고사",
    },
    {
      theDate: 2,
      list: "· 2022년도 2학기 중간고사",
    },
    {
      theDate: 3,
      list: "· 2022년도 2학기 중간고사",
    },
    {
      theDate: 4,
      list: "· 2022년도 2학기 중간고사",
    },
    {
      theDate: 5,
      list: "",
    },
    {
      theDate: 6,
      list: "",
    },
    {
      theDate: 7,
      list: "",
    },
    {
      theDate: 8,
      list: "",
    },
    {
      theDate: 9,
      list: "",
    },
    {
      theDate: 10,
      list: "· 2022 동아리축제",
    },
    {
      theDate: 11,
      list: "· 2022 동아리축제",
    },
    {
      theDate: 12,
      list: "",
    },
    {
      theDate: 13,
      list: "",
    },
    {
      theDate: 14,
      list: "",
    },
    {
      theDate: 15,
      list: "",
    },
    {
      theDate: 16,
      list: "",
    },
    {
      theDate: 17,
      list: "",
    },
    {
      theDate: 18,
      list: "",
    },
    {
      theDate: 19,
      list: "",
    },
    {
      theDate: 20,
      list: "",
    },
    {
      theDate: 21,
      list: "",
    },
    {
      theDate: 22,
      list: "",
    },
    {
      theDate: 23,
      list: "",
    },
    {
      theDate: 24,
      list: "",
    },
    {
      theDate: 25,
      list: "",
    },
    {
      theDate: 26,
      list: "",
    },
    {
      theDate: 27,
      list: "",
    },
    {
      theDate: 28,
      list: "",
    },
    {
      theDate: 29,
      list: "· 2학기 휴학원서 제출 마감",
    },
    {
      theDate: 30,
      list: "",
    },
  ];
  /* 학사일정 있는 날짜 표시하기 */
  for (let d in scheduleList) {
    if (scheduleList[d].list != "") {
      $(`.section1 .schedule-box .calendar td:contains(${d})`)
        .eq(0)
        .addClass("something");
    }
  }

  /* 달력에서 날짜 선택 */
  $(".section1 .schedule-box .calendar td").on("click", function () {
    $(".section1 .schedule-box .calendar td").removeClass("choosed");
    $(this).addClass("choosed");
    choosedDate = "2022.11." + $(this).html();
    $(".section1 .schedule-list .schedule-date p").html(choosedDate);
    date = $(this).html();
    /* 해당 날짜 학사일정 출력 */
    $(".section1 .schedule-list ul").empty();

    $(".section1 .schedule-list ul").append(
      `<li>${scheduleList[date].list}</li>`
    );
  });

  /* 버튼으로 날짜 선택 */
  $(".section1 .schedule-list .schedule-date .btn-prev").on(
    "click",
    function () {
      date--;
      choosedDate = "2022.11." + date;
      $(".section1 .schedule-list .schedule-date p").html(choosedDate);
      $(".section1 .schedule-box .calendar td").removeClass("choosed");
      $(`.section1 .schedule-box .calendar td:contains(${date})`)
        .eq(0)
        .addClass("choosed");

      /* 해당 날짜 학사일정 출력 */
      $(".section1 .schedule-list ul").empty();

      $(".section1 .schedule-list ul").append(
        `<li>${scheduleList[date].list}</li>`
      );
    }
  );

  $(".section1 .schedule-list .schedule-date .btn-next").on(
    "click",
    function () {
      date++;
      choosedDate = "2022.11." + date;
      $(".section1 .schedule-list .schedule-date p").html(choosedDate);
      $(".section1 .schedule-box .calendar td").removeClass("choosed");
      $(`.section1 .schedule-box .calendar td:contains(${date})`)
        .eq(0)
        .addClass("choosed");

      /* 해당 날짜 학사일정 출력 */
      $(".section1 .schedule-list ul").empty();

      $(".section1 .schedule-list ul").append(
        `<li>${scheduleList[date].list}</li>`
      );
    }
  );
});
