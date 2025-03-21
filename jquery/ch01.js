// window.onload = function () {
// var text = document.querySelector("h1").innerText;
// console.log(text);
// };

g$().ready(function () {
  var text = $("h1").text(); //innerText getter
  console.log(text);

  $("h1").text("어디로 갈래?"); // innerText setter
});
