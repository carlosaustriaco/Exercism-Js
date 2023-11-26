// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
 export function twoSum(array1, array2) {
    function convertArrayToNumber(array){
      let convertedNumber = 0;
      const length = array.length;
  
      for (let i = 0; i < length; i++){
        convertedNumber += array[length - i - 1] * (10 ** i);  
      }
  
      return convertedNumber;
    }
  
    return convertArrayToNumber(array1) + convertArrayToNumber(array2);
  }
  
  /**
   * Checks whether a number is a palindrome.
   *
   * @param {number} value
   * @returns {boolean} whether the number is a palindrome or not
   */
  export function luckyNumber(value) {
    let originalValue = String(value);
    let reversedValue = originalValue;
    reversedValue = originalValue.split("").reverse().join("");
  
    return originalValue === reversedValue;
  }
  
  /**
   * Determines the error message that should be shown to the user
   * for the given input value.
   *
   * @param {string|null|undefined} input
   * @returns {string} error message
   */
  export function errorMessage(input) {
    if ((input === null) || (input === undefined) || (input === '')){
      return 'Required field';
    }
  
    input = input.trim();
    let num = Number(input);
    console.log(num);
    
    if (Number.isNaN(num) || (input.indexOf('0') != -1)){
      return 'Must be a number besides 0';
    }
  
    return ''
  }
  