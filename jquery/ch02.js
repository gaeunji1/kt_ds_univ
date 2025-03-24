$().ready(function () {
  /**
   * decendant selector
   *  selector other-selector
   *      traversing
   * $("selector").find("other-selector");
   *
   * child selector
   *      selector > other-selector
   *          traversing
   *      $("selector").children("other-selector");
   *
   * pseudo class
   *      selector : first-child
   *          traversing
   *      $("selector").first()
   *
   *      selector: last-child
   *          traversing
   *      $("selector").last()
   *
   *      selector:nth-child(n) | selector:nth-of-type(n)
   *      $("selector").last()
   */
  // 예제 1
  // h1의 텍스트를 출력한다.
  $("h1").text();
  // 예제 2
  // p의 텍스트를 변경한다. ("다음 여행지를 선택해주세요.")
  $("h1").text("다음 여행지를 선택해주세요.");
  // 예제 3
  // #destinations의 텍스트를 출력한다.
  console.log($("#destinations").text());
  // 예제 4
  // #destinations의 html을 출력한다. (.html())
  console.log($("#destinations").html().text());
  // 예제 5
  // #destinations > li의 텍스트를 출력한다.
  console.log($("#destinations").children("li").text());
  // 예제 6
  // #destinations li의 텍스트를 출력한다.
  console.log($("#destinations").find("li").text());
  // 예제 7
  // .promo의 부모 텍스트를 출력한다.
  console.log($(".promo").parent().text());
  // 예제 8
  // h2의 부모 html을 출력한다.
  cconsole.log($("h2").parent().html());
  // 예제 9
  // #destinations > li 중 마지막 li의 텍스트를 출력한다.
  console.log($("#destinations").children("li").last().text());
  // 예제 10
  // #destinations li 중 두번째 li의 텍스트를 출력한다.
  console.log($("#destinations").find("li").first().next().text());
  console.log($("#destinations").find("li").eq(1).text());
});
