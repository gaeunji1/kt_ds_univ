/**
 * 파라미터를 받는 함수 만들기
 */

function print() {
  console.log(arguments[0]);
  console.log(arguments[1]);
  // 출력하기
  console.log("함수가 호출되었습니다.");
}

function addAllNumbers() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
}

function hoistingExam() {
  console.log("before: " + number);
  console.log("before: " + isEven);
  console.log("before: " + isOdd);

  var number = 10;
  var isEven;
  var isOdd;
  if (number % 2 === 0) {
    isEven = true;
  } else {
    isOdd = true;
  }

  console.log(isEven);
  console.log(isOdd);
}

// 함수 호출하기
print("자바스크립트", "Javascript");
addAllNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 22);
