

Question 1)

class movie {
    constructor(title, studio, rating) {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    getrating() {
      return "the rating is  " + this.rating;
    }
  }
  
  
  // b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
   
  class movie {
      constructor(title, studio, rating){
          this.title = title;
          this.studio = studio;
          this.rating = "PG";
      }
  }
  
//   d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”,
//   the studio “Eon Productions”, and the rating “PG­13”
  
  const CasinoRoyale = new movie( "Casino Royal", "Eon Productions", "PG13");

  Question 2)


  class Circle {
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;
    }
    get radiusCircle() {
      return this.radius;
    }
    get colorCircle() {
      return this.color;
    }
    set radiusCircle(radius) {
      this.radius = radius;
    }
    set colorCircle(color) {
      this.color = color;
    }
    get toString() {
      return `"Circle[radius=${this.radius}, color=${this.color}]"`;
    }
    get areaCircle() {
      return Math.PI * this.radius * this.radius;
    }
    get circumferenceCircle() {
      return 2 * Math.PI * this.radius;
    }
  }
  var obj1 = new Circle(1.0, "red");
  console.log(obj1.radiusCircle); //get radiusCircle
  
  obj1.radiusCircle = 2.2;
  console.log(obj1.radiusCircle); //set radiusCircle

  Question 3)
  
  class Person {
    constructor(name, age, salary, gender){
        this.name = name;
        this.age = age;
        this.salary =salary;
        this.gender = gender;
    }
}
let murad = new Person('Murad', "20", "5000","Male");
console.log(murad);