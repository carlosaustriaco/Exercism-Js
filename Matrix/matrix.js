export class Matrix {
    #strData;
    #arrRows;
    
    constructor(strData) {
      this.#strData = strData;
      this.#arrRows = strData.split("\n");
    }
  
    get rows() {
      let arrResult = new Array();
      let arrRow;
      
      for (let row of this.#arrRows) {
        arrRow = row.split(" ");
        arrRow.forEach((value, index) => arrRow[index] = Number(value));
        arrResult.push(arrRow);
      }
      
      return arrResult;
    }
  
    get columns() {
      let arrRows = this.rows;
      let arrColumns = new Array();
      let arrColumn;
      let nColumns;
      let nCounter;
  
      if (arrRows.length > 0){
        let row = arrRows[0];
        nColumns = row.length;
      }
  
      for (nCounter = 0; nCounter < nColumns; nCounter++){
        arrColumn = new Array();
        
        arrRows.forEach((value) => arrColumn.push(Number(value[nCounter])));
        arrColumns.push(arrColumn);
      }
  
      return arrColumns;
    }
  }
  