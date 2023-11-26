//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (resistorColors) => {
    let result = 0;
  
    if (resistorColors.length > 0){
      result += COLORS.indexOf(resistorColors[0]) * 10;
    }
  
    if (resistorColors.length > 1){
      result += COLORS.indexOf(resistorColors[1]);
    }
  
    return result;
  };
  
  export const COLORS = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white"
  ];
  