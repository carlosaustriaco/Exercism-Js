// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines whether or not you need a licence to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
 export function needsLicense(kind) {
    const CAR = 'car';
    const TRUCK = 'truck';
      
      return (kind === CAR) || (kind === TRUCK);
    }
    
    /**
     * Helps choosing between two options by recommending the one that
     * comes first in dictionary order.
     *
     * @param {string} option1
     * @param {string} option2
     * @returns {string} a sentence of advice which option to choose
     */
    export function chooseVehicle(option1, option2) {
      const restOfSentence = ' is clearly the better choice.';  
      let chosenOption = ((option1 > option2) ? option2 : option1);
    
      return chosenOption + restOfSentence;
    }
    
    /**
     * Calculates an estimate for the price of a used vehicle in the dealership
     * based on the original price and the age of the vehicle.
     *
     * @param {number} originalPrice
     * @param {number} age
     * @returns {number} expected resell price in the dealership
     */
    export function calculateResellPrice(originalPrice, age) {
      let reduction = 1;
    
      if (age < 3){
        reduction = 0.8;
      }
      else if (age > 10){
        reduction = 0.5
      }
      else{
        reduction = 0.7;
      }
    
      return originalPrice * reduction;
    }
    