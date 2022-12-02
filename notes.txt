// Question 1)

class Movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    if (rating == undefined) {
      this.rating = "PG";
    } else {
      this.rating = rating;
    }
  }
  getPG(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
      if (array[i].rating == this.rating) {
        result.push(array[i]);
      }
    }
    return result;
  }
}

var movie1 = new Movie("RRR", "MARVEL");
var movie2 = new Movie("KGF", "DC", "PG13");
var movie3 = new Movie("PUSHPA", "AA");
var movie4 = new Movie("VIKRAM", "VJS", "PG13");
var arr = [movie1, movie2, movie3, movie4];
console.log(movie3.getPG(arr));

  // Question 2)

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

  // Question 3)

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

// Question 4)

class Uber {
  static BaseFare = 10;
  static CostPerMile = 2;
  static CostPerMinute = 1;
  static BookingFee = 6;
  constructor(time=1,mile=1){
      this.time=time;
      this.mile=mile;
  }
  totalPrice(time=this.time , mile=this.mile){
      console.log(`the total price is ${(Uber.BaseFare)+(Uber.BookingFee)+((Uber.CostPerMinute)*time)+((Uber.CostPerMile)*mile)} only`);
  }
}
let bike = new Uber();
bike.totalPrice(15,10); //the total price is 51 only
bike.totalPrice(10,10); //the total price is 46 only