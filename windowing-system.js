// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

 export class Size {
    constructor(width = 80, height = 60) {
      this.width = width;
      this.height = height;
    }
  
    resize(newWidth, newHeight){
      this.width = newWidth;
      this.height = newHeight;
    }
  }
  
  export class Position{
    constructor(x = 0, y = 0){
      this.x = x;
      this.y = y;
    }
  
    move(newX, newY){
      this.x = newX;
      this.y = newY;
    }
  }
  
  export class ProgramWindow{
    constructor(){
      this.screenSize = new Size(800, 600);
      this.size = new Size();
      this.position = new Position();
    }
  
    resize(newSize){
      let width;
      let height;
  
      if(newSize.width < 1)
        width = 1;
      else if((this.position.x + newSize.width) > this.screenSize.width)
        width = this.screenSize.width - this.position.x;
      else
        width = newSize.width;
  
      if(newSize.height < 1)
        height = 1;
      else if((this.position.y + newSize.height) > this.screenSize.height)
        height = this.screenSize.height - this.position.y;
      else
        height = newSize.height;
  
      this.size.width = width;
      this.size.height = height;
    }
  
    move(newPosition){
      let x;
      let y;
  
      if (newPosition.x < 0)
        x = 0;
      else if ((newPosition.x + this.size.width) > this.screenSize.width)
        x = this.screenSize.width - this.size.width;
      else
        x = newPosition.x;
  
      if (newPosition.y < 0)
        y = 0;
      else if ((newPosition.y + this.size.height) > this.screenSize.height)
        y = this.screenSize.height - this.size.height;
      else
        y = newPosition.y;
  
      this.position.x = x;
      this.position.y = y;
    }
  }
  
  export function changeWindow(window){
    let newPosition = new Position(100, 150);
    let newSize     = new Size(400, 300)
    
    window.resize(newSize);
    window.move(newPosition);
  
    return window;
  }
  