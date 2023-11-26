/// <reference path="./global.d.ts" />
// @ts-check

export function cookingStatus(time){
    if (time === 0){
      return 'Lasagna is done.';
    }
  
    if (time > 0){
      return 'Not done, please wait.'
    }
  
    return 'You forgot to set the timer.';
  }
  
  export function preparationTime(layers, avgTime = 2){
    return layers.length * avgTime;
  }
  
  export function quantities(ingredients){
    const GRAMS_PER_NOODLE = 50;
    const LITERS_PER_SAUCE = 0.2;
    let qtdNoodles = 0;
    let qtdSauce = 0;
  
    for (let i = 0; i < ingredients.length; i++){
      if (ingredients[i] === 'noodles'){
        qtdNoodles += GRAMS_PER_NOODLE;
      }
      else if (ingredients[i] === 'sauce'){
        qtdSauce += LITERS_PER_SAUCE;
      }
    }
  
    return {
      'noodles' : qtdNoodles,
      'sauce' : qtdSauce,
    }
  }
  
  export function addSecretIngredient(friendsList, myList){
    let secret = friendsList[friendsList.length - 1];
    myList.push(secret);
  }
  
  export function scaleRecipe(recipe, portions){
    let newRecipe = {};
    let multiplier = portions / 2;
    
    Object.assign(newRecipe, recipe);
  
    for (let key in newRecipe){
      newRecipe[key] *= multiplier;    
    }
  
    return newRecipe;
  }