const DNA_BASES_COMPLEMENTS = {
    G: "C",
    C: "G",
    T: "A",
    A: "U"
  }
  
  export const toRna = (base) => {
    if (base === ""){
      return "";
    }
  
    if (base.length === 1){  
      return DNA_BASES_COMPLEMENTS[base];
    }
  
    let result = "";
  
    for (let c of base) {
      result += DNA_BASES_COMPLEMENTS[c];
    }
  
    return result;
  };
  