$().ready(function () {
  // 함수 표현식 (함수를 변수에 넣어줌)
  var functionChangeColor = function () {
    var hexColor = $(this).data("hex-color");
    $(".big-thumbnail").css("backgroundColor", hexColor);
    $(".big-thumbnail").text(hexColor + "를 선택했습니다.");
  };

  //   $(".small-thumbnails") // .small-thumbnails에
  //     .children("li") // li라는 자식들 모두에게
  //     .on("mouseenter", function () {
  //       //이벤트를 줄거야~ 원래는 클릭이지만 mouseenter는 hover와 같단다 ^^7
  //       var color = $(this).data("hex-color"); // li에 있는 data를 받아오려면 변수를 선언해서 가져와야해 !! >_<
  //       $(".big-thumbnail").css("background-color", color); // 그렇게 가져온 변수는 css라는 문법으로 big-thumbnail에 넣어줄거야!!ㅎㅛㅎ
  //     });
  $(".small-thumbnails") // .small-thumbnails에
    .children("li") // li라는 자식들 모두에게
    .on("click", functionChangeColor);

  $(".add-color-button").on("click", function () {
    // 1. "color-picker"의 값을 읽어온다.
    var pickedColor = $(".color-picker").val(); // input 태그의 값을 가져오는 함수수
    // 2. "<li></li>" 엘리먼트를 만들어서
    //    inline-style로 백그라운드 색상을 지정한다.
    //    text는 "임의색상" 혹은 "색상코드" 으로 추가한다.
    var newListItem = $("<li></li>");
    newListItem.css("backgroundColor", pickedColor);
    newListItem.data("hex-color", pickedColor);
    newListItem.text(pickedColor);

    // 3. "li" 엘리먼트에 클릭 이벤트를 할당해서
    //    ".big-thumbnail"의 배경색을 지정한다.

    // newListItem.on("click", function () {
    //   var hexColor = $(this).data("hex-color");
    //   $(".big-thumbnail").css("backgroundColor", hexColor);
    //   $(".big-thumbnail").text(hexColor);
    // });
    newListItem.on("click", functionChangeColor); // 함수 자체를 파라미터로 보냄

    $(this).closest(".add-color").before(newListItem);
  });
});
