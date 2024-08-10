// console.log('https://type.fit/api/quotes');
const quoteContainer = document.getElementById("quote-container");
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newQuote = document.getElementById("new-quote");
const loader = document.getElementById('loader')


let resQuotes = [];


// Loading Spinner Shown
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
  }
  
  // Remove Loading Spinner
  function complete() {
    if (!loader.hidden) {
      quoteContainer.hidden = false;
      loader.hidden = true;
    }
  }

async function QuoteGen() {
    loading()
  const apiUrl = "https://type.fit/api/quotes";

  try {
    const response = await fetch(apiUrl);
    resQuotes = await response.json();
    const randomQuotes = Math.floor(Math.random() * resQuotes.length + 1);
    // console.log(resQuotes[randomQuotes]);
    var singleQuote = resQuotes[randomQuotes];

    if (!singleQuote.author) {
      author.innerText = "Undefined";
    } else {
      author.innerText = singleQuote.author;
    }
    quote.innerText = singleQuote.text;
  } catch (error) {
    console.log("Error fetching data from api", error);
  }
  complete()
}

QuoteGen();


//eventListeners
newQuote.addEventListener("click", QuoteGen);


// QuoteGen()
