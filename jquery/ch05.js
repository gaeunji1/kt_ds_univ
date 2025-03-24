$().ready(function () {
  /**
   * button(".package-green-button")을 클릭하면
   * <p>From $399.99<p>를 버튼 아래에 추가하고
   * button(".package-green-button")은 삭제한다.
   */
  /**
   * 자바 스크립트에서는
   * document.querySelectorAll(".package-green-button").forEach((element) => {
   * element.addEventListener("click",function(){
   * //추가 했을 대 수행할 코드
   * });
   * });
   * 아래 jQuery  코드와 완전하게 동일한 역할을 수행하는 코드
   */

  // 아래 코드를 javascript로 하면 이 코드
  //   document.querySelectorAll(".package-green-button").forEach((element) => {
  //     element.addEventListener("click", function (event) {
  //       //   var clickedButton = event.target;
  //       this.style.display = "none";
  //       //   console.log(clickedButton);
  //     });
  //   });
  $(".package-green-button").on("click", function () {
    var priceElement = $("<p></p>");
    priceElement.text("From $399.99");
    // console.log($(this));
    //.package-green-button 외부 아래에 <p>From $399.99</p>를 추가하고
    //.package-green-button은 완전하게 삭제한다.

    // $(this).after(priceElement);
    // $(this).remove();

    //.package-green-button 부모 태그 내부에 <p>From $399.99</p>를 추가하고
    //.package-green-button은 완전하게 삭제한다.
    //중간에 넣으려면 first().after() => 부모 태그 내부에서 첫번째 후에 넣어라.

    $(this).closest(".package-button-area").append(priceElement); //this. -> 일반 돔으로 가져와서
    //closest -> html은 구조가 자주 바뀔 수 있기 때문에 parent만 쓰면 수정하기 복잡해져서
    // closest를 사용하는 것이 좋다.
    // jquery  객체로 바꿔줘야 함. -> ce.fn.init  <-(console.log($(this))
    $(this).remove();
  });
});
