/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // Ctor function
  function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.sayHello = function () {
      return 'Hello';
    };
    this.greetings = function () {
      console.log(`${this.sayHello()} from ${this.firstname} ${this.lastname}`);
    };
  }

  document.getElementById('run').addEventListener('click', () => {
    // Create object
    const man = new Person('Yuliya', 'beCode');
    // Call method
    man.greetings();
    // Hello from Marios
  })

})();