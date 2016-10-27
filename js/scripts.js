// var numerals = ["I", "V", "X", "L", "C", "D", "M"];

var answer = [];

var numerals = {

  O:0,
  I:1,
  V:5,
  X:10,
  L:50,
  C:100,
  D:500,
  M:1000

};

var numeralsOneNine = ["","I","II","III","IV","V","VI","VII","VIII","IX"];
var numeralsTenNinety = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
var numeralsHundredNineHundred = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
var numeralsThousandThreeThousand = ["", "M", "MM", "MMM"];

var converter = function(number) {
  var lengthNum = number.length;
  var reverseNum = number.split("").reverse();

  for (i = 0; i < lengthNum; i++) {
    var firstThing = numeralsOneNine[parseInt(reverseNum[i])];
    answer.push(firstThing);
    alert(answer);
  };

};

var ruleThree = function(arrayNum) {
  arrayNum = arrayNum.split("");

  for(i = 0; i < arrayNum.length; i++) {
    var two = i + 1;
    var three = i + 2;
      if (arrayNum[i] === arrayNum[two] && arrayNum[two] === arrayNum[three]) {
        result = false;
      } else {
        result = true;
      }
  }
  return result;
};


$(document).ready(function() {

  $("form#entry").submit(function(event) {
    event.preventDefault();

    var userInput = $("#userInput").val();

    $("#output p").text(converter(userInput));



  });

});
