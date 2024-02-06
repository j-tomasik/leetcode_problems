
interface CardCounts {
    [key: string]: number;
}

const Poker = (() => {

    const cardBaseURL: string = "https://raw.githubusercontent.com/uzair-ashraf/storage-bucket/master/cards/{suit}_{card}.png";
    const suits: string[] = ['spade', 'heart', 'diamond', 'club'];
    const cards: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    // *-* public methods *-*

    const init = (): void => {
        document.querySelector(".buttons button")?.addEventListener("click", eventPlayAgainClicked);
    };

    // *-* utility methods *-*

    // This func will be called if no pair is found in a random hand
    // Hard code changed first two to match, could refactor to randomize which are paired
    const createPair = (handId: string): void => {
        // grabs all cards for the given hand
        const cards: NodeListOf<HTMLImageElement> = document.querySelectorAll(`#${handId} img`);
        // grabs card value and img src to transfer to the second card
        const firstVal: string | undefined = cards[0]?.dataset.value?.toString();
        const firstSrc: string | null = cards[0]?.getAttribute('src');
        // sets the second card to match the first

        if (cards[1]) {
            cards[1].setAttribute('src', firstSrc || "");
            cards[1].dataset.value = firstVal || "";
        }
        // adds first pair class styling to both
        cards[0]?.classList.add('pair0');
        cards[1]?.classList.add('pair0');
    };

    // This func will return a random int val for indexing into the suits and cards arrays
    // It takes the length of the array it is indexed into
    const generateIdx = (exclusiveMax: number): number => {
        const randDecimal: number = Math.random();
        const randomIntIdx: number = Math.floor(randDecimal * exclusiveMax);
        return randomIntIdx;
    };

    // This function will take in a string for which hand to get cards from
    // It will return an object of key-values to count how many of each card are found in the hand
    const detectPairs = (handId: string): CardCounts => {
        const cards: NodeListOf<HTMLImageElement> = document.querySelectorAll(`#${handId} img`);
        const cardCounts: CardCounts = {};

        cards.forEach((card) => {
            const value: string | undefined = card?.dataset.value?.toString();

            if(value !== undefined) {
                cardCounts[value] = (cardCounts[value] || 0) + 1;
            }
            
        });

        return cardCounts;
    };

    // This function takes in a string for which hand to apply styles to
    // It will use the detectPairs() to get a counter obj
    // It will return this obj at the end to be used by outer function later on
    // It will loop through cards from the given hand and assign class
    // based on which pair a card is a part of
    const applyCSS = (handId: string): CardCounts => {
        const counts: CardCounts = detectPairs(handId);
        const cards: NodeListOf<HTMLImageElement> = document.querySelectorAll(`#${handId} img`);
        let firstPairFound: boolean = false;
        let firstPairComplete: boolean = false;
        let secondPairCounter: number = 0;
        let first: string | undefined;

        cards.forEach((card) => {
            const value: string | undefined = card?.dataset.value?.toString();

            if (value !== undefined) {
                if (counts[value] && counts[value] >= 2) {
                    if (!firstPairFound) {
                        card.classList.add('pair0');
                        first = value;
                        firstPairFound = true;
                    } else if (value === first && !firstPairComplete) {
                        card.classList.add('pair0');
                        firstPairComplete = true;
                    } else if (value !== first && secondPairCounter < 2) {
                        card.classList.add('pair1');
                        secondPairCounter += 1;
                    }
                }
            }
        });

        return counts;
    };

    // This function takes in a string that is the HTML element ID for the given player's hand,
    // It will make a hand arr to pass into the pair count returning function,
    // It will also create the img elements and attach them to the correct section element
    // with the corresponding handId String, after the h1 tag
    const makeHand = (handId: string): number => {

        for (let i = 0; i < 5; i++) {
            const currSuitIdx: number = generateIdx(suits.length);
            const currCardIdx: number = generateIdx(cards.length);

            const currSuit: string = suits[currSuitIdx];
            const currCard: string = cards[currCardIdx];

            // add logic to make the last card a pair 90% of the time if there is not already one

            const imgElement: HTMLImageElement = document.createElement('img');
            imgElement.src = `https://raw.githubusercontent.com/uzair-ashraf/storage-bucket/master/cards/${currSuit}_${currCard}.png`;
            imgElement.alt = 'playing card';
            imgElement.dataset.value = currCard;

            imgElement.classList.add('card');
            document.getElementById(handId)?.querySelector('h1')?.after(imgElement);
        };

        // This will style the now created img tags
        // It will also return an obj with the cards as keys and their counts as values
        const cardsCount: CardCounts = applyCSS(handId);

        // This could definitely be refactored into a helper func or have its logic moved elsewhere
        // Now, when makeHand() is called it will return the count of pairs for the hand arg it was given
        let pairs: number = 0;
        for (const key in cardsCount) {
            if (cardsCount[key] && cardsCount[key] === 2) {
                pairs += 1;
            } else if (cardsCount[key] && cardsCount[key] === 3) {
                pairs += 1;
            } else if (cardsCount[key] && cardsCount[key] === 4) {
                pairs += 2;
            }
        }

        return pairs;
    };

    // *-* event methods *-*

    const eventPlayAgainClicked = (): void => {
        // remove 'winning' class from both hands to start over
        const hand1: HTMLElement | null = document.getElementById('hand1');
        const hand2: HTMLElement | null = document.getElementById('hand2');
        hand1?.classList.remove('winning');
        hand2?.classList.remove('winning');

        // grabs DOM elements to append img elements to
        const firstHand: HTMLElement | null = document.getElementById('hand1');
        const secondHand: HTMLElement | null = document.getElementById('hand2');

        // removes prev card img for new game, does nothing if first play
        firstHand?.querySelector('h1')?.nextElementSibling?.remove();
        secondHand?.querySelector('h1')?.nextElementSibling?.remove();

        // runs make hand to creates imgs for cards and returns int for num of pairs in hand
        const HandOneCount: number = makeHand('hand1');
        const HandTwoCount: number = makeHand('hand2');

        // A five card hand has a 50% chance of having a pair
        // Rand generate num 0-4
        // If I create a pair when the rand num is 0,1,2,3 but not 4 that
        // represents an 80% chance to create a pair in the code below

        // Now overall chance is 5/10 it has a pair by default and then out of the
        // remaining 5 times it doesn't, 4 of those 5 will be given a pair

        if (HandOneCount === 0) {
            const chance: number = Math.floor(Math.random() * 5);
            if (chance < 4) {
                createPair('hand1');
            }
        }

        if (HandTwoCount === 0) {
            const chance: number = Math.floor(Math.random() * 5);
            if (chance < 4) {
                createPair('hand2');
            }
        }

        // assigns winning class based on count
        if (HandOneCount > HandTwoCount) {
            hand1?.classList.add('winning');
        } else if (HandOneCount < HandTwoCount) {
            hand2?.classList.add('winning');
        }
    };

    // expose public methods
    return {
        init: init
    };
})();

document.addEventListener("DOMContentLoaded", Poker.init);