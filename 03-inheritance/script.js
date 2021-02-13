/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  class Animal {
    sayHello() {
      return `${this.constructor.greeting}! I'm ${this.name}!`;
    }
  }

  document.getElementById('run').addEventListener('click', () => {
    // crée une instance de la classe Dog
    class Dog {
      constructor(nom) {
        this.nom = nom;
      }
      sayHello() {

        console.log(`${this.nom} Hello.`);
      }
    }
    Object.setPrototypeOf(Dog.prototype, Animal);

    let b = new Dog('Persik');
    b.sayHello();

    // // crée une instance de la classe Cat
    class Cat {
      constructor(nom) {
        this.nom = nom;
      }
      sayHello() {

        console.log(`${this.nom} Hello.`);
      }
    }
    Object.setPrototypeOf(Cat.prototype, Animal);

    let d = new Cat('Marusija');
    d.sayHello();
  })
})();