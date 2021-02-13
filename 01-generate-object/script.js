/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {



  document.getElementById("run").addEventListener("click", () => {

    var person = {
      firstName: "John",
      lastName: "Doe",
      age: 33,
      city: 'Brussels',
      country: 'Belgium' };

      console.log(person.firstName);
      console.log(person.lastName);
      console.log(person.age);
      console.log(person.city);
      console.log(person.country);

  })

})();