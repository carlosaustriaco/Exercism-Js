// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
 export function seeingDouble(deck) {
    return deck.map((value) => 2 * value);
  }
  
  /**
   *  Creates triplicates of every 3 found in the deck.
   *
   * @param {number[]} deck
   *
   * @returns {number[]} deck with triplicate 3s
   */
  export function threeOfEachThree(deck) {
    const keyElement = 3;
  
    for (let index = deck.length - 1; index >= 0; index--) {
      if (deck[index] === keyElement){
        deck.splice(index, 0, keyElement, keyElement);  
      }     
    }
  
    return deck;
  }
  
  /**
   * Extracts the middle two cards from a deck.
   * Assumes a deck is always 10 cards.
   *
   * @param {number[]} deck of 10 cards
   *
   * @returns {number[]} deck with only two middle cards
   */
  export function middleTwo(deck) {
    let cardsToBeRemoved;
  
    cardsToBeRemoved = ((deck.length % 2) === 0) ? 2 : 1;
    
    return deck.splice(deck.length / 2 - 1, cardsToBeRemoved);;
  }
  
  /**
   * Moves the outside two cards to the middle.
   *
   * @param {number[]} deck with even number of cards
   *
   * @returns {number[]} transformed deck
   */
  
  export function sandwichTrick(deck) {
    let bottomCardRemoved = deck.splice(deck.length - 1, 1);
    let topCardRemoved = deck.splice(0, 1);
  
    deck.splice(deck.length / 2, 0, bottomCardRemoved[0], topCardRemoved[0]);
  
    return deck;
  }
  
  /**
   * Removes every card from the deck except 2s.
   *
   * @param {number[]} deck
   *
   * @returns {number[]} deck with only 2s
   */
  export function twoIsSpecial(deck) {
    const specialCard = 2;
  
    return deck.filter((card) => card === specialCard);
  }
  
  function compareCards(A, B){
    return A - B;
  } 
  
  /**
   * Returns a perfectly order deck from lowest to highest.
   *
   * @param {number[]} deck shuffled deck
   *
   * @returns {number[]} ordered deck
   */
  export function perfectlyOrdered(deck) {
    deck.sort(compareCards);
  
    return deck;
  }
  
  /**
   * Reorders the deck so that the top card ends up at the bottom.
   *
   * @param {number[]} deck
   *
   * @returns {number[]} reordered deck
   */
  export function reorder(deck) {
    deck.reverse();
  
    return deck;
  }
  