/**
 * 객체 리터럴?
 *
 * - Java의 HashMap과 동일한 개념.
 * - Hashmap과 객체 리터럴의 차이점
 *      - HashMap : 키/값의 타입을 제한한다.
 *      - 객체리터럴 : 키/값의 타입이 제한이 없다!
 * - 객체리터럴의 키 혹은 값은 아래 타입을 자유롭게 사용할 수 있다.
 *      - 정수
 *      - 실수
 *      - 불린
 *      - 문자
 *      - 배열
 *      - 객체
 *      - 함수
 * 객체리터럴을 이용하는 부분?
 *  - 데이터의 구조.
 *  - 파라미터
 *  - 객체 자체(자바의 클래스와 유사한 개념)
 *  - 해시맵(ES6 : Map, WeakMap)
 *  - 배열
 *
 * 객체리터럴은 어떻게 만드는가?
 * var object = {}; 비어있는 객체 리터럴
 *
 * var object = {
 *      "name" : "장민창",
 *      "Skills" : ["Java", "kotlin", "scala", "rust", "C++", "C#", "javascript", "python", "ecmascript"]};
 *      "liveInKorea" : true
 *      true: "맞다",
 *      [1,2,3] : values...,
 *      hello : function(){
 *          console.log("hello?");
 *      },
 *      "address" : {
 *          "country" : "south Korea",
 *          "city" : "incheon",
 *          "state" : "gye-yang"
 *      }
 * }
 *
 * 객체 리터럴의 값은 어떻게 참조하는가?
 * 두가지 방법이 있다.
 *  1. "."을 이용하는 방법
 *     var nameValue = object.name;
 *     var skill = object.Skills[0];
 *     obhect.hello();
 *
 *  2. "[]"를 이용하는 방법
 *      var key = "Skills";
 *      var nameValue = object[key];
 *
 *      var addressKey = "address";
 *      var countryKey = "country";
 *      var countryValue = object[addressKey][countryKey];
 */

var member = {
  id: "admin",
  administrator: true,
  password: "admin1234",
  authorization: ["admin", "operator", "user", "manager"],
  showMemberInformation: function () {
    console.log(this.id);
    console.log(this.administrator);
    console.log(this.password);
    for (var i in this.authorization) {
      console.log(this.id);
      console.log(this.administrator);
      console.log(this.password);
      for (var i in this.authorization) {
        console.log(this.authorization[i]);
      }
    }
  },
};

console.log(member);
// 키/값 추가
member.grade = "VIP";
setTimeout function(){
    console.log(member);
}

console.log(member);

// 키/값 제거
delete member.grade;
console.log(member);
