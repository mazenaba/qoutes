


const arrayOfQuotes =
 [
    {'author': "Oscar Wilde", 
     'quote': "Be yourself; everyone else is already taken."
    },
    {'author': 'Marilyn Monroe', 
     'quote': "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."
    },
    {'author': "Albert Einstein", 
     'quote': "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
    },
    {'author':  "Dr. Seuss", 
     'quote': "You know you're in love when you can't fall asleep because reality is finally better than your dreams"
    },
    {'author': "Steve Jobs", 
     'quote': "Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do."
    },
    {'author': "Mohamed Mazen", 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },
];



var lastRandomIndex = -1;

// Function to select a random index, ensuring it's not the same as the previous one
function randomSelector() {
  var randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * arrayOfQuotes.length);
  } while (randomIndex === lastRandomIndex);
  lastRandomIndex = randomIndex; 
  // Update the last shown index
  return randomIndex;
}

// Function to generate and display a random quote
function generateQuote() {
  var randomNumber = randomSelector();
  document.getElementById('quoteOutput').innerHTML = '"' + arrayOfQuotes[randomNumber].quote + '"';
  document.getElementById('authorOutput').innerHTML = "- " + arrayOfQuotes[randomNumber].author;
}