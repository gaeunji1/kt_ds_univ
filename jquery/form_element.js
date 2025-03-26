$().ready(function () {
  $(".email-validation-button").on("click", function (event) {
    // form 전송 무력화
    event.preventDefault();

    // #email인 input box의 값을 가져온다.
    var email = $("#email").val();

    // 값이 없다면 "입력값이 없습니다!" 경고창을 노출시킨다.
    if (email === "") {
      alert("입력값이 없습니다!");
      return; // 함수의 실행을 중단시킨다.
    }

    // 사용자가 입력한 값에 "@"가 없다면
    // 입력값 가장 끝에 "@exam.com"를 추가한다.
    // 추가된 이메일 값을 인풋박스에 갱신시킨다.
    if (!email.includes("@")) {
      email += "@exam.com";
      $("#email").val(email); // 값을 갱신시킬 때는 갱신시킬 값을 넣어줌
    }

    // 만약 입력값이 5자리 미만이이라면 "이메일은 5자리 이상으로 입력해주세요." 라는 경고창을 노출시킨다.
    console.log(email.length);
    if (email.length < 5) {
      alert("이메일은 5자리 이상으로 입력해주세요.");
    }
    // 값이 있다면 "입력값은 ~~ 입니다." 경고창을 노출시킨다.
    else {
      alert("입력값은 " + email + "입니다.");
    }
  });

  $(".jobs-validation-button").on("click", function (event) {
    // 폼 전송 무력화
    event.preventDefault();

    // "#jobs"인 것의 value를 가져와서 alert
    var jobId = $("#jobs").val();
    alert("선택한 직업의 값은 " + jobId + "입니다.");
  });

  $(".jobs-selection-button").on("click", function (event) {
    // form 전송 무력화
    event.preventDefault();

    // 0 ~ 3
    // option[0] ~ option[3]
    var options = $("#jobs").children("option");
    console.log(options);

    var randomIndex = parseInt(Math.random() * options.length);
    console.log(randomIndex);

    var randomOptionValue = $(options[randomIndex]).val();
    console.log(randomOptionValue);
    $("#jobs").val(randomOptionValue);

    // #jobs의 change 이벤트 실행!
    $("#jobs").trigger("change");
  });

  $("#jobs").on("change", function () {
    // id가 jobs인 select의 선택값이 변경되면
    // 함수가 실행된다.
    // change 이벤트는 해당 엘리먼트를 직접 변경해야 실행된다!!!
    var selectedOptionsValue = $(this).val();
    var trueOrFalse = confirm(
      "선택한 항목이 " + selectedOptionsValue + "맞습니까?"
    );
    console.log(trueOrFalse);
  });

  $("input[type='radio'][name='age']").on("change", function () {
    console.log("라디오버튼을 선택했습니다.");
    console.log($(this).val());
    console.log($(this).prop("checked")); // 선택이 되었으면 true, 아니면 false

    $(".print-age").hide();
    $(".print-age[data-age='" + $(this).val() + "']").show();
  });

  $(".age-validation-button").on("click", function (event) {
    // 폼 전송 무력화
    event.preventDefault();

    // 1. input type="radio" name="age" 인 것들 중에
    //    check되어있는 항목의 수를 센다.
    var checkedRadios = $("input[type='radio'][name='age']:checked");
    var checkedLength = checkedRadios.length;

    // 2. check된 항목의 수가 없다면
    //    첫 번쨰 항목을 강제 선택해준다.
    if (checkedLength == 0) {
      $("input[type='radio'][name='age']").eq(0).prop("checked", true);
      $("input[type='radio'][name='age']").eq(0).trigger("change");
    }
    // 3. 해당 엘리먼트에게 change 이벤트를 실행시켜준다.
  });

  $("#checked-all").on("change", function () {
    // 1. 전체 선택의 체크 여부를 가져온다.
    var checked = $(this).prop("checked");
    // 체크가 되었다면 true 체크가 안 되었다면 false

    // 2. 전체 선택이 체크되어 있다면 나머지 체크박스들도 모두 체크한다.
    // 3. 전체 선택이 체크해제 되어 있디면 나머지 체크박스들도 모두 체크해제 한다.
    $("input[type='checkbox'][name='favorate-genre']").prop("checked", checked);
  });

  $("input[type='checkbox'][name='favorate-genre']").on("change", function () {
    // 1. 체크된 항목의 개수를 세어온다.
    var checkedBoxLength = $(
      "input[type='checkbox'][name='favorate-genre']:checked"
    ).length;
    // 2. 체크박스 자체의 개수를 세어온다.
    var checkboxLength = $(
      "input[type='checkbox'][name='favorate-genre']"
    ).length;
    // 3. 1과 2의 결과가 같다면 전체선택을 체크한다.
    // 4. 1과 2의 결과가 다르다면 전체선택을 체크해제한다.
    $("#checked-all").prop("checked", checkedBoxLength === checkboxLength);
  });

  /**
   *  검증하기 -> 체크된 항목의 개수를 가져옴
   * * 수가 2 미만일때 "두 개 이상의 장르를 선택해 주세요." alert 출력
   * */
  $(".genre-validation-button").on("click", function (event) {
    event.preventDefault();

    var checkedBoxLength = $(
      "input[type='checkbox'][name='favorate-genre']:checked"
    ).length;

    if (checkedBoxLength < 2) {
      alert("두 개 이상의 장르를 선택해 주세요.");
    }
  });

  $(".submit-button").on("click", function () {
    // user input validation check;

    // action = "/create-my-info"
    // method = "POST"
    // $("#sign-up-form").attr("action", "/create-my-info");
    // $("#sign-up-form").attr("method", "POST");
    // $("#sign-up-form").submit(); // 데이터 전송
    $("#sign-up-form")
      .attr({
        action: "/create-my-info",
        method: "POST",
      })
      .submit();
  });
});
