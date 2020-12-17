class Polygon{
  constructor(sides){
    this.sides=sides;
  }
  
  get countSides(){
    return this.sides.length;
  }
  
  get perimeter(){
    let sum=0;
    for (let i of this.sides)  sum+=i;
    return sum;
  }
}

class Triangle extends Polygon{
  get isValid(){
    if(countSides()!==3)  return;
    
  }
}

