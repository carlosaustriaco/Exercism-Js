//
// This is only a SKELETON file for the 'React' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Cell {
    constructor() {
      this.subscribers = new Set();
      this.value = 0;
      this.pendingUpdate = false;
    }
  
    addSubscriber(subscriber){
      this.subscribers.add(subscriber);
    }
  
    removeSubscriber(subscriber){
      this.subscribers.delete(subscriber);
    }
  
    setValue (value){
      this.value = value;
      this.subscribers.forEach((subs) => subs.setPendingUpdate());
      this.subscribers.forEach((subs) => subs.update());
    }
  
    setPendingUpdate(){
      this.pendingUpdate = true;
  
      this.subscribers.forEach((subs) => subs.setPendingUpdate());
    }
  }
  
  export class InputCell extends Cell{
    constructor(value) {
      super();  
      this.value = value;
    }
  }
  
  export class ComputeCell extends Cell{
    constructor(inputCells, fn) {
      super();
      
      this.function = fn;
      this.inputCells = inputCells;
      this.value = fn(inputCells);
      this.callbackCell = new Set();
  
      for (let cell of inputCells) {
        cell.addSubscriber(this);
      }
    }
  
    addCallback(cb) {
      this.callbackCell.add(cb);
    }
  
    removeCallback(cb) {
      this.callbackCell.delete(cb);
    }
  
    update(){
      let canUpdate = true;
      let counter = 0;
      
      while (canUpdate && (counter < this.inputCells.length)){
        canUpdate = !this.inputCells[counter].pendingUpdate;
        counter++;
      }
  
      if (canUpdate){
        this.pendingUpdate = false;
        this.setValue(this.function(this.inputCells));      
      }
    }
  
    setValue(value){
      if (value !== this.value){
        super.setValue(value);
    
        if (this.callbackCell.size > 0){
          this.callbackCell.forEach((cb) => cb.setValue(this));
        }      
      }
    }
  }
  
  export class CallbackCell{
    constructor(fn) {
      this.values = new Array();
      this.function = fn;
    }
  
    setValue(value){
      this.values.push(this.function(value));
    }
  }
  