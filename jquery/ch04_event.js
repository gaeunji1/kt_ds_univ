$().ready(function () {
  /*
     button(".package-green-button")을 클릭하면
     <p>From $399.99</p>를 버튼 아래에 추가하고
     button("package-green-button")은 삭제한다.
     */

  // 아래 jQuery 코드와 완전하게 동일한 역할을 수행하는 코드임
  //   document.querySelectorAll(".package-green-button").forEach((element) => {
  //     element.addEventListener("click", function () {});
  //   });
  $(".package-green-button").on("click", function () {
    var priceElement = $("<p></p>");
    priceElement.text("From $399.99");

    // .package-green-button 외부 아래에 <p>From $399.99</p>를 추가하고
    // .package-green-button은 완전하게 삭제한다.
    // $(".package-green-button").after(priceElement);
    // $(".package-green-button").remove();

    // .package-green-button의 부모 태그 내부 아래에 <p>From $399.99</p>를 추가하고
    // .package-green-button은 완전하게 삭제한다.
    $(".package-green-button").parent().append(priceElement);
    $(".package-green-button").remove();
  });
});
