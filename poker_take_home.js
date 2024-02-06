/* 
  # Programming Proficiency Test
  
  For extra credit, you may click the drop down above and switch the editor to typescript and do your test in typescript.

  ## Exercises

  1. Clicking the button should generate two random hands in memory (console.log).
  2. Clicking the button should render two random hands on the page as cards.
  3. Determine the winning hand by its number of pairs, add class="winning" to hand.
  4. Determine winning pairs and add class="pair0" (or "pair1" for 2nd pair) to cards.
  5. [Extra Credit] Ensure that 90% of hands have at least one pair.

*/

const Poker = (() => {

    const cardBaseURL = "https://raw.githubusercontent.com/uzair-ashraf/storage-bucket/master/cards/{suit}_{card}.png";
    const suits = ['spade', 'heart', 'diamond', 'club'];
    const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    // *-* public methods *-*

    const init = () => {
        document.querySelector(".buttons button").addEventListener("click", eventPlayAgainClicked);
    };

    // *-* utility methods *-*
    
    	//This func will return a random int vals for indexing into the suits and cards arrays
    const generateIdx = (exclusiveMax) => {
    	let randDecimal = Math.random()
      let randomIntIdx = Math.floor(randDecimal * exclusiveMax)
      
      return randomIntIdx
    }
    
    	//This function will take in a arr where each subarr is a string['suit,card'] and will use a set to return a count of unique pairs found in the given had matrix
      const detectPairs = (handId) => {
      	let cards = $(`#${handId} img`);
        let cardCounts = {};
        
        cards.each(function() {
        	let value = $(this).data('value')
          cardCounts[value] = (cardCounts[value] || 0) + 1
        });
        
        return cardCounts
      };
      
      const applyCSS = (handId) => {
      	let counts = detectPairs(handId);
        let cards = $(`#${handId} img`);
        
        cards.each(function() {
            let value = $(this).data('value')
            let count = counts[value]
          
          
        })
        
      }
      
      
    
    
				//This function take in a string that is the HTML element ID for the given player's hand,
        //it will make a hand arr to pass into the pair count returning function,
        //it will also create the img elements and attach them to the correct section element 
        //with the corresponding handId String, after the h2 tag
        
    const makeHand = (handId) => {
    
        for(let i = 0; i < 5; i++) {
        	let currSuitIdx = generateIdx(suits.length);
          let currCardIdx = generateIdx(cards.length);
          
          let currSuit = suits[currSuitIdx]
          let currCard = cards[currCardIdx]
          let currStr = currSuit + currCard;
         
        
          
          //add logic to make last card a pair 90% if time if there is not already one
          
          let imgElement = $('<img>', {
          src: `https://raw.githubusercontent.com/uzair-ashraf/storage-bucket/master/cards/${currSuit}_${currCard}.png`,
          alt: 'playing card',
          'data-value': currStr
          });
          
          imgElement.addClass('card')
          $(`#${handId} h2`).after(imgElement)
        }
        
        let pairsCount = checkPairs(hand)
        return pairsCount
    };

    // *-* event methods *-*

    const eventPlayAgainClicked = () => {
    		//grads DOM elements to append img elements to
    		let firstHand = $('#hand1');
        let secondHand = $('#hand2');
        //removes prev card img for new game, does nothing if first playy
        firstHand.find('h2').nextAll('img').remove();
        secondHand.find('h2').nextAll('img').remove();
       
        
        let handOneCount = makeHand('hand1')
        let handTwoCount = makeHand('hand2')
        
        //if hand count is zero, run 90% odds, then need to change last card and change
        //class for the corresponding partner
        
        //then figure out winner and apply winner style
        
        
    };

    // expose public methods
    return {
        init: init
    };
})();

document.onready = Poker.init;