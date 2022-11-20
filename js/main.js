/* main.js */

/* 메인배너 이미지 전환 */
$(function () {
  let bgArr = [
    "images/main-visual-1.jpg",
    "images/main-visual-2.jpg",
    "images/main-visual-3.jpg",
  ];
  /* 스크립트에서 경로를 불러올 때는 js파일 폴더나 css파일 폴더가 기준이 아닌, HTML문서 기준으로 찾는다.
  DOM 조작은 attribute(인라인속성)을 변경하는 것이기 때문 */

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

/* 공지사항 클릭시 전환 */
$(function () {
  $(".section1 .notice-title-list li").on("click", function () {
    $(".section1 .notice-title-list li").removeClass("active");
    $(this).addClass("active");

    let indexNum = $(this).index();
    $(".section1 .notice-list").removeClass("active");
    $(".section1 .notice-list").eq(indexNum).addClass("active");
  });
});
