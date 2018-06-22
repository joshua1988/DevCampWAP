// #1 - When not using Prototype
function Shoe(shoeSize, shoeColor, forGender) {
    this.size = shoeSize;
    this.color = shoeColor;
    this.gender = forGender;
    this.putOn = function() {
      alert("Shoe's on");
    };
    this.takeOff = function() {
      alert("What's that smell?");
    };
}
var beachShoe = new Shoe(10, "blue", "women");
console.log(beachShoe);


// #2 - Before adding prototype
// function Shoe(shoeSize, shoeColor, forGender) {
//     this.size = shoeSize;
//     this.color = shoeColor;
//     this.gender = forGender;
// }
// console.log(Shoe);
// var beachShoe = new Shoe(10, "blue", "women");
// console.log(beachShoe);


// #3 - After adding prototype
// Shoe.prototype = {
//   putOn : function() {
//     alert("Your shoes on!");
//   },
//   takeOff : function() {
//     alert("What's that smell?");
//   }
// };
// console.log(Shoe);
// var beachShoe = new Shoe(10, "blue", "women");
// console.log(beachShoe);
