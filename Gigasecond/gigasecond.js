export const gigasecond = (currentDate) => {
    const GIGA = 1000000000;
    
    let remainingTime;
    let gigaDays;
    let gigaHours;
    let gigaMinutes;
    let gigaSeconds;
    let newDate = new Date(currentDate);
  
    remainingTime = GIGA;
    
    gigaDays = Math.floor(remainingTime / 86400);
    remainingTime = GIGA - gigaDays * 86400;
  
    gigaHours = Math.floor(remainingTime / 3600);
    remainingTime = remainingTime - gigaHours * 3600;
  
    gigaMinutes = Math.floor(remainingTime / 60);
    remainingTime = remainingTime - gigaMinutes * 60;
  
    gigaSeconds = remainingTime;
  
    newDate.setDate(newDate.getDate() + gigaDays);
  
    newDate.setHours(newDate.getHours() + gigaHours);
    newDate.setMinutes(newDate.getMinutes() + gigaMinutes);
    newDate.setSeconds(newDate.getSeconds() + gigaSeconds);
  
    return newDate;
  };
  