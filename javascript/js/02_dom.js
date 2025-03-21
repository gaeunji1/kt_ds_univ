// 브라우저 렌더링이 끝나면 코드를 실행시킨다.
window.onload = function () {
  console.log("Complete Render");

  var pTag = document.querySelector("#paragraph");
  console.log(pTag); //DOM 객체 자체를 출력
  console.dir(pTag); /// DOM Literal을 출력

  console.log(pTag.innerText);

  pTag.innerText = "<h3>Javascript에서 값을 변경했습니다.</h3>";

  var section = document.querySelectorAll(".section");
  console.log(section);

  //User Event 할당하기
  // Element.addEventListener("event name, event callback")
  //   document
  //     .querySelectorAll(".section")[1]
  //     .addEventListener("click", function () {
  //       console.log("Click!");
  //     });

  for (var i = 0; i < section.length; i++) {
    // console.log(i);
    // console.log(section);
    // console.log(section[i]);
    section[i].addEventListener("click", function (event) {
      console.log("Click!" + event.target.innerText);
    });

    section[i].addEventListener("mouseenter", function (event) {
      event.target.style.backgroundColor = "#00F";

      console.log(event.target.dataset);
      console.log(event.target.dataset.text);

      var text = event.target.innerText;
      event.target.innerText = text + " Mouse Enter!";
    });
    section[i].addEventListener("mouseleave", function (event) {
      event.target.style.backgroundColor = "#FFF";
      var text = event.target.dataset.text;
      event.target.innerText = text;
    });
  }
};
