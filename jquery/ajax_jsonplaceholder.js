$(document)
  .on("ajaxStart", function () {
    $(".spinner")[0].showModal();
  })
  .on("ajaxComplete", function () {
    $(".spinner")[0].close();
  });

$().ready(function () {
  $(".load-github-posts-button").on("click", function () {
    // $(".github-users") 의 내용을 모두 지워라!
    $(".github-posts").html("");
    console.log("Ajax Request 보내기!");

    var githubPostsURL = "https://jsonplaceholder.typicode.com/posts";

    $.get(githubPostsURL, function (githubPosts) {
      console.log("Ajax Response 받아옴!");

      // Ajax Request에 대한 github response가 도착했을 때 실행되는 Callback function
      // function의 파라미터(githubUsers)는 github이 response한 데이터
      // 일반적인 HTTP 요청의 경우 : url을 요청하면 서버는 html을 response
      // Ajax HTTP 요청의 경우 : url을 요청하면 서버는 JSON(JavaScript Object Notation)을 response
      console.log(githubPosts);

      //   var json = JSON.stringify(githubUsers);
      //   console.log(json);
      //   $(".github-users").text(json);

      for (var i = 0; i < githubPosts.length; i++) {
        var eachPost = githubPosts[i];

        var template = $("#github-posts-template").html();
        var templateDom = $(template);

        $(".github-posts").append(templateDom);

        var eachPost = githubUsers[i];
        console.log("UserId: " + eachPost.userId);
        console.log("ID: " + eachPost.id);
        console.log("Title: " + eachPost.title);
      }
    });
  });
});
