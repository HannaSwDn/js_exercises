// Create an array and add three numbers to it, use your array to return the second number.
let array = [1, 2, 3];
array[1];

// What data type is 123/12? "Things in quotes!"? undefined?
Number, string, undefined

// Write an if statement that returns true.
if (true) {
    return true;
}

// Consider these two arrays: myArray = ['Thomas', 'Amber', 'Raoul'] and emptyArray = [].
// Use a for loop to add our names to emptyArray. (Hint: n needs to be the length of the array.
// Google a helper method for finding the length of an array in Javascript. Is it the same as Ruby?)
myArray = ['Thomas', 'Amber', 'Raoul'];
let emptyArray = [];
for (let i = 0; i < myArray.length; i++) {
    emptyArray.push(myArray[i]);
}

// Exercise 2:
// 1. What is this? Does it have an equivalent in Ruby?
//It refers to the calling object. Equivalent in Ruby is self.

// 2.
class Person {
    constructor(first, last) {
      this.first = first;
      this.last = last;
    }
  
    greet() {
      return `Hello ${this.first} ${this.last}`;
    }
  }
  
  let person = new Person('Hanna', 'Nyman');
  person.greet();
  
  