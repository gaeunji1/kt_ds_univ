$().ready(function () {
  $(".vacation-title")
    .on("mouseover", function () {
      $(".ticket").show(2000); // 엘리먼트를 노출시킨다  : display :block;
    })
    .on("mouseout", function () {
      $(".ticket").hide(2000); // 엘리먼트를 숨긴다  : display :none;
    });
});
