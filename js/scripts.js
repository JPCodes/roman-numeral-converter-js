
var answer = [];

var numerals = [["","I","II","III","IV","V","VI","VII","VIII","IX"],
               ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
               ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
               ["", "M", "MM", "MMM"]];


var converter = function(number) {
  answer = [];                              // Resets answer after every click
  var reverseNum = number.split("").reverse();


  for (i = 0; i < number.length; i++) {

    var thing = numerals[i][parseInt(reverseNum[i])];
    answer.push(thing);


  };
      return (answer.reverse().join(""));
};

// Create array of arrays of roman numerals
  // index refers to each place (ones, tens, hundreds, thousands)
// When converter is called, the argument is converted to an array and reversed
  // The reversed argument will enter a for loop
    // The for loop will iterate through the numerals array and iterate through one of the inner arrays and grab a value and push it to a new array "thing"
    // The for loop will repeat this for all argument values
  // The array "thing" will be reversed again and joined into a string to eliminate commas
  // return "thing"


$(document).ready(function() {

  $("form#entry").submit(function(event) {
    event.preventDefault();

    var userInput = $("#userInput").val();
    var parsedInput = parseInt(userInput);

    if (parsedInput > 3999 || parsedInput < 0) {
      alert("Invalid entry, must be a number below 4000 and above -1");
    } else {
      $("#output p").text(converter(userInput));
    }




  });

});
