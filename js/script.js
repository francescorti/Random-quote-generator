// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// create an array with 6 different quotes
var quotes = [
  {
    quote: "I view computer science as a liberal art",
    source: "Steve Jobs",
    citation: "Steve Jobs: The Lost Interviews",
    year: "1995",
    tags: ["Computer", "Art"]
  },
  {
    quote: "Good artists copy; great artists steal",
    source: "Picasso",
    tags: ["Art", "Banksy", "Spain"]
  },
  {
    quote: "You can do anything but not everything",
    source: "David Allen",
    citation: "Making It All Work",
    year: "2009"
  },
  {
    quote:"The only way to atone for being occasionally a little over-dressed is by being always absolutely over-educated.",
    source:"Oscar Wilde",
    citation:"Phrases and Philosophies for the Use of the Young ",
    year:"1894"
  },
  {
    quote: "Never argue with an idiot. They will only bring you down to their level and beat you with experience.",
    source: "Mark Twain (probably)"
  },
  {
    quote: "When I have the chance to guard Michael Jordan, I want to guard him. I want him. It's the ultimate challenge.",
    source: "Kobe Bryant",
    year: "1997",
    tags: ["Basketball", "Mentality"]
  }
];

//create a copy of quotes array from which elements will be removed when
//displayed
var notDisplayed = quotes.slice();

// refresh the quote after 15 seconds
var intervalID = window.setInterval(printQuote, 15000);

// return a random quote from an array; a random quote is not displayed more
// than once until all quotes from the array have been displayed
function getRandomQuote(array){
    if(array.length === 0){
      for(i=0; i < quotes.length; i++){
        array[i]=quotes[i];
      }
    }
    var randomIndex = Math.floor(Math.random()*array.length);
    var randomQuote = array[randomIndex];
    array.splice(randomIndex,1);
    return randomQuote;
}

// return a random HEX color, es. #36b55c
function getRandomHex(){
  var letters = '0123456789abcdef';
  var hex = '#';
  for (i = 0; i < 6; i++) {
    hex += letters[Math.floor(Math.random() * 16)];
  }
  return hex;
}

// print a random quote
function printQuote(){

  //get quote from array and log it to the console
  var quoteToPrint = getRandomQuote(notDisplayed);
  console.log(quoteToPrint);


  // always print quote and source, print citation, year and tags only when
  //available
  var printIt = '<p class="quote">' + quoteToPrint.quote + '</p>';
  printIt += '<p class="source">' + quoteToPrint.source;
  if(quoteToPrint.citation!==undefined){
    printIt += '<span class="citation">' + quoteToPrint.citation + '</span>';
  }
  if(quoteToPrint.year!==undefined){
    printIt += '<span class="year">' + quoteToPrint.year + '</span>';
  }
  if(quoteToPrint.tags!==undefined){
    printIt += '<span class="tags"> [' + quoteToPrint.tags.join(", ") + ' ]</span>';
  }
  printIt+="</p>"
  document.getElementById('quote-box').innerHTML = printIt;

  //change body and button background color with a random hex
  var background = getRandomHex();
  document.body.style.backgroundColor = background;
  document.getElementById('loadQuote').style.backgroundColor = background;

}

//print the quote when page opens
printQuote();
