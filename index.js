class Polygon{
  constructor(sides){
    this.sides=sides;
  }
  
  get countSides(){
    return this.sides.length;
  }
  
  get perimeter(){
    let sum=0;
    for (i of this.sides) {sum+=i;}
    return sum;
  }
}