$(document)
  .on("ajaxStart", function () {
    $(".spinner")[0].showModal();
  })
  .on("ajaxComplete", function () {
    $(".spinner")[0].close();
  });

$().ready(function () {
  $(".load-github-users-button").on("click", function () {
    // $(".github-users") 의 내용을 모두 지워라!
    $(".github-users").html("");
    console.log("Ajax Request 보내기!");

    var githubUsersURL = "https://api.github.com/users";

    // Ajax Request
    // github에게 사용자 정보를 달라고 요청
    $.get(githubUsersURL, function (githubUsers) {
      console.log("Ajax Response 받아옴!");

      // Ajax Request에 대한 github response가 도착했을 때 실행되는 Callback function
      // function의 파라미터(githubUsers)는 github이 response한 데이터
      // 일반적인 HTTP 요청의 경우 : url을 요청하면 서버는 html을 response
      // Ajax HTTP 요청의 경우 : url을 요청하면 서버는 JSON(JavaScript Object Notation)을 response
      console.log(githubUsers);

      //   var json = JSON.stringify(githubUsers);
      //   console.log(json);
      //   $(".github-users").text(json);

      for (var i = 0; i < githubUsers.length; i++) {
        var eachAccount = githubUsers[i];

        var template = $("#github-users-template").html();
        var templateDom = $(template);

        templateDom.children("img").attr("src", eachAccount.avatar_url);
        templateDom.children("a").attr("href", eachAccount.html_url);
        templateDom.children("a").text(eachAccount.login);

        $(".github-users").append(templateDom);

        var eachAccount = githubUsers[i];
        console.log("login: " + eachAccount.login);
        console.log("html_url: " + eachAccount.html_url);
        console.log("avatar_url: " + eachAccount.avatar_url);
      }
    });
  });
});
