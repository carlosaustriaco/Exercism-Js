// @ts-check

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

 export function isValidCommand(command) {
    const expression = /^\s*CHATBOT/i;
  
    return expression.test(command);
  }
  
  /**
   * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
   *
   * @param {string} message
   * @returns {string} The message without the emojis encryption
   */
  export function removeEmoji(message) {
    return message.replace(/emoji\d+/ig, '');
  }
  
  /**
   * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
   *
   * @param {string} number
   * @returns {string} the Chatbot response to the phone Validation
   */
  export function checkPhoneNumber(number) {
    const expression = /\(\+\d{2}\) \d{3}-\d{3}-\d{3}/ig;
    
    if (expression.test(number)){
      return "Thanks! You can now download me to your phone.";  
    }
    else{
      return "Oops, it seems like I can't reach out to " + number;  
    }
  }
  
  /**
   * Given a certain response from the user, help the chatbot get only the URL.
   *
   * @param {string} userInput
   * @returns {string[] | null} all the possible URL's that the user may have answered
   */
  export function getURL(userInput) {
    const expression = /\w+\.\w+/gi;
    let arrayResult = new Array();
    let result;
    
    while ((result = expression.exec(userInput)) !== null){
     arrayResult.push(result[0]); 
    }
  
    return arrayResult;
  }
  
  /**
   * Greet the user using the full name data from the profile.
   *
   * @param {string} fullName
   * @returns {string} Greeting from the chatbot
   */
  export function niceToMeetYou(fullName) {
    let nameArray = fullName.split(", ");
  
    return `Nice to meet you, ${nameArray[1]} ${nameArray[0]}`;
  }  