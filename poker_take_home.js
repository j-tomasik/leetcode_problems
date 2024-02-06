const Poker = (() => {

    const cardBaseURL = "https://raw.githubusercontent.com/uzair-ashraf/storage-bucket/master/cards/{suit}_{card}.png";
    const suits = ['spade', 'heart', 'diamond', 'club'];
    const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    // *-* public methods *-*

    const init = () => {
        document.querySelector(".buttons button").addEventListener("click", eventPlayAgainClicked);
    };

    // *-* utility methods *-*
    
    
    	//This func will be called if no pair is found in a random hand
      //Hard code changed first two to match, could refacor to randomize which are paired
    const createPair = (handId) => {
    		//grabs all cards for the given hand
    	let cards = $(`#${handId} img`)
      	//grabs card value and img src to transfer to second card
      let firstVal = $(cards[0]).data('value').toString();
      let firstSrc = $(cards[0]).attr('src');
      	//sets second card to match first
      $(cards[1]).attr('src', firstSrc)
      $(cards[1]).data('value', firstVal)
      	//Adds first pair class styling to both
      $(cards[0]).addClass('pair0')
      $(cards[1]).addClass('pair0')
      
    };
    
    	//This func will return a random int val for indexing into the suits and cards arrays
      //It takes the length of the array it is index into
    const generateIdx = (exclusiveMax) => {
    	let randDecimal = Math.random()
      let randomIntIdx = Math.floor(randDecimal * exclusiveMax)
      
      return randomIntIdx
    }
    
    
    
    
    		//This function will take in a string for which hand to get cards from
    		//It will return a obj of key-values to count how many of each card are found in the hand
      const detectPairs = (handId) => {
      	let cards = $(`#${handId} img`);
        let cardCounts = {};
        
        cards.each(function() {
        	let value = $(this).data('value').toString()
          
          cardCounts[value] = (cardCounts[value] || 0) + 1
        });
        
        return cardCounts
      };
      
      
      	//This function takes in a string for which hand to apply styles to
        //It will use the detectPairs() to get a counter obj
        //It will return this obj at the end to be used by outer function later on
        //It will loop through cards from the given hand and assign class
        //based on which pair a card is a part of
      const applyCSS = (handId) => {
      	let counts = detectPairs(handId);
        let cards = $(`#${handId} img`);
        let firstPairFound = false;
        let firstPairComplete = false;
        let secondPairCounter = 0;
        let first;
        
        cards.each(function() {
        	let value = $(this).data('value').toString();
          
          if (counts[value] >= 2) {
          	if(!firstPairFound) {
            	$(this).addClass('pair0')
              first = value
              firstPairFound = true
              
            } else if (value === first && !firstPairComplete) {
            	$(this).addClass('pair0')
              firstPairComplete = true
              
            } else if (value !== first && secondPairCounter < 2) {
          		$(this).addClass('pair1')
              secondPairCounter += 1
            };    
          }; 
        });
        
        return counts
      };
      
    
				//This function take in a string that is the HTML element ID for the given player's hand,
        //It will make a hand arr to pass into the pair count returning function,
        //It will also create the img elements and attach them to the correct section element 
        //with the corresponding handId String, after the h1 tag
    const makeHand = (handId) => {
    
        for(let i = 0; i < 5; i++) {
        	let currSuitIdx = generateIdx(suits.length);
          let currCardIdx = generateIdx(cards.length);
          
          let currSuit = suits[currSuitIdx]
          let currCard = cards[currCardIdx]
          
          //add logic to make last card a pair 90% if time if there is not already one
          
          let imgElement = $('<img>', {
          src: `https://raw.githubusercontent.com/uzair-ashraf/storage-bucket/master/cards/${currSuit}_${currCard}.png`,
          alt: 'playing card',
          'data-value': currCard
          });
          
          imgElement.addClass('card')
          $(`#${handId} h1`).after(imgElement)
        };
        
        	//This will style the now created img tags
          //It will also return an obj with the cards as keys and their counts as values
        let cardsCount = applyCSS(handId)
        
        	//This could definitely be refactored into a helper func or have its logic moved elsewhere
          //Now, when makeHand() is called it will return the count of pairs for the hand arg it was given
        let pairs = 0
        for(let key in cardsCount) {
        	if(cardsCount[key] === 2) {
          	pairs += 1
          } else if (cardsCount[key] === 3) {
          	pairs += 1
          } else if (cardsCount[key] === 4) {
          	pairs += 2
          }
        }
        
        return pairs
    };

    // *-* event methods *-*

    const eventPlayAgainClicked = () => {
    			//remove 'winning' class from both hands to start over
        $('#hand1, #hand2').removeClass('winning');
    
    			//grads DOM elements to append img elements to
    		let firstHand = $('#hand1');
        let secondHand = $('#hand2');
        
        	//removes prev card img for new game, does nothing if first playy
        firstHand.find('h1').nextAll('img').remove();
        secondHand.find('h1').nextAll('img').remove();
        
        	//runs make hand to creates imgs for cards and returns int for num of pairs in hand
        let HandOneCount = makeHand('hand1')
        let HandTwoCount = makeHand('hand2')

        //A five card hand has 50% of having a pair
        //Rand generate num 0-4
        //If I create a pair when the rand num is 0,1,2,3 but not 4 that
        //represents an 80% chance to create a pair in the code below
        
        //Now overall chance is 5/10 it has a pair by default and then out of the 
        //remaining 5 times it doesnt, 4 of those 5 will be given a pair
        
        if (HandOneCount === 0) {
        	let chance = Math.floor(Math.random() * 5)
          if (chance < 4) {
          	createPair('hand1')
            HandOneCount += 1
          }
        }
        
        if (HandTwoCount === 0) {
        	let chance = Math.floor(Math.random() * 5)
          if (chance < 4) {
          	createPair('hand2')
            HandTwoCount += 1
          }
        }
        
        	//asigns winning class based on count 
        if (HandOneCount > HandTwoCount) {
        	$('#hand1').addClass('winning')
        } else if (HandOneCount < HandTwoCount) {
        	$('#hand2').addClass('winning')
        }
        
    };

    // expose public methods
    return {
        init: init
    };
})();

document.onready = Poker.init;