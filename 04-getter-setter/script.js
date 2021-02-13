/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
        // getters => access properties
        // setters => change or mutate them
        get fullName() {
            return '${this.firstname} ${this.lastname}';
        }
        set fullName(space) {
            const parts = space.split(' ');
            this.firstname = parts[0];
            this.lastname = parts[1];
        }
    }

document.getElementById("run").addEventListener('click', () => {
        let yuliya = new Person('Yuliya', 'Person');
        console.log(yuliya.fullName);
        yuliya.fullName = 'Yuliya Person';
        console.log(yuliya.firstname + ' ' + yuliya.lastname);
      
    }) 
})();