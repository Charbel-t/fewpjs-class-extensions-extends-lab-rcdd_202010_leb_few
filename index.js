class Polygon{
  constructor(sides){
    this.sides=sides;
  }
  
  get countSides(){
    return (this.sides.length +1);
  }
}