function Developer(specialty, language, tool) {
  this.specialty = specialty;
  this.language = language;
  this.tool = tool;
  this.githubPage = function () {
    alert("http://username.github.io/");
  };
  this.gcp = function () {
    alert('http://firebase.com/');
  };
}
var me = new Developer("front-end", "javascript", "atom");
console.log(me);


// 퀴즈 - 위 생성자 함수의 githubPage() 와 gcp() 를 Prototype 으로 분리하고,
//        자신의 분야(specialty), 주력언어(language), 개발툴(tool) 을 갖는 student 객체를 생성해보세요.
function Developer(specialty, language, tool) {

}

Developer.prototype = {

};
var student = new Developer();
