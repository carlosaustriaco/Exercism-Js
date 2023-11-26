const NORMAL_ANSWER = "Sure.";
const CAPITAL_AFIRMATION = "Whoa, chill out!";
const CAPITAL_ANSWER = "Calm down, I know what I'm doing!";
const NO_ANSWER = "Fine. Be that way!";
const DEFAULT_ANSWER = "Whatever.";

function IsCapital(message){
  let counter;
  let bResult = true;
  let bHasLetters = HasLetters(message);

  if (bHasLetters){
    for (counter = 0; counter < message.length; counter++){
      if (message[counter].match(/[a-z]/i)){      
        if (message[counter] === message[counter].toLowerCase()){
          bResult = false;
          break;
        }  
      }
    }    
  }

  return bResult && bHasLetters;
}

function HasLetters(message){
  let bResult = false;
  let counter;

  for(counter = 0; counter < message.length; counter++){
    if (message[counter].match(/[a-z]/i)){
      bResult = true;
      break;
    }
  }

  return bResult;
}

function HasMessage(message){
  let bResult = false;
  let counter;

  for(counter = 0; counter < message.length; counter++){
    if ((message[counter] !== " ")  && (message[counter] !== "\t") &&
        (message[counter] !== "\n") && (message[counter] !== "\r")){
      bResult = true;
      break;
    }
  }

  return bResult;
}

function IsQuestion(message){
  let counter;

  for(counter = message.length - 1; counter >= 0; counter--){
    if(message[counter] !== " "){
      return (message[counter] === "?");
    }    
  }
}

function IsNormalQuestion(message){
  return !IsCapital(message) && IsQuestion(message);  
}

function IsCapitalAfirmation(message){
  return IsCapital(message) && !IsQuestion(message);
}

function IsCapitalQuestion(message){
  return IsCapital(message) && IsQuestion(message);
}

export const hey = (message) => {
  if (IsNormalQuestion(message)){
    return NORMAL_ANSWER;
  }
  else if (IsCapitalAfirmation(message)){
    return CAPITAL_AFIRMATION;
  }
  else if (IsCapitalQuestion(message)){
    return CAPITAL_ANSWER;
  }
  else if (!HasMessage(message)){
    return NO_ANSWER;
  }
  else{
    return DEFAULT_ANSWER;
  }
};
