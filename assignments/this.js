/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Global binding is when "this" refers to "the forest". The most general collection of things it can point to is itself.
 * 2. Implicit binding is one of the most common uses for this. when a function is preceded by "this."
 * 3. New binding is used in conjunction with a constructor. Build a function that returns an object and then use the new keyword to make new instances of the object.
 * 4. Explicit binding it used to have the greatest amount of control. It allows you to be able to over-ride using .call and .apply
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const sayNameFunc = obj => {
  obj.sayName = function() {
    console.log(`Hello my name is ${this.name}`);
    console.log(this);
  };
};
const me = { name: "Deejay" };
const you = { name: "Dan" };
sayNameFunc(me);
sayNameFunc(you);

// Invoke Methods on our objects
me.sayName();
you.sayName();

// Principle 3

// code example for New Binding
function Villain(name) {
  this.name = name;
}

let badMan = new Villain("Im BadMan! Boogity-boogity-boogity!!!");

// Principle 4

// code example for Explicit Binding
function greet() {
  console.log(this.name);
}

var person = {
  name: "Alex"
};

var greetPerson = greet.bind(person);
greetPerson();
