export const isPangram = (text) => {
    let setLetters = new Set();
    let counter;
    let letter;
  
    for (counter = 0; counter < 26; counter++) {
      setLetters.add(String.fromCharCode(counter + 65));   
    }
  
    for(counter = 0; counter < text.length; counter++){
      letter = text[counter].toUpperCase();
      setLetters.delete(letter);
    }
  
    return (setLetters.size === 0);
  };
  