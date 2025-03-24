$().ready(function () {
  // 1. 페이지에 추가할 가상의 p 엘리먼트를 만들어준다.
  var priceElement = $("<p></p>");
  priceElement.text("From $399.99");

  // 2. ".package-button-area" 내부의 가상의 p엘리먼트를 추가한다.
  /**
   *$(".package-button-area").before(priceElement);
   * ->> <p> From $399.99</p>
   *<div class="package-button-area">
   *  ...
   * </div>
   *
   *
   * $(".package-button-area").after(priceElement);
   *<div class="package-button-area">
   *  ...
   * </div>
   * ->> <p> From $399.99</p>
   *
   *
   * $(".package-button-area").pretend(priceElement);
   *<div class="package-button-area">
   *    ->> <p> From $399.99</p>
   *  ...
   * </div>
   *
   *
   * * $(".package-button-area").append(priceElement);
   *<div class="package-button-area">
   *  ...
   *    ->> <p> From $399.99</p>
   * </div>
   */
  $(".package-button-area").append(priceElement);
  //$(".package-green-area").after(priceElement);

  // 3. ".package-green-area" 은 완전히 삭제한다.
  $(".package-green-area").remove();
});
