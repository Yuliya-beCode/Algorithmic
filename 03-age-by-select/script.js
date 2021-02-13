/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  document.getElementById('run').addEventListener('click', getAge)

  function getAge() {


    let day = document.getElementById("dob-day").value;
    let month = document.getElementById("dob-month").value;
    let year = document.getElementById("dob-year").value;

    aujour = new Date();
    var age;
    var tYear = aujour.getFullYear();
    var tMonth = aujour.getMonth() + 1;
    var tDay = aujour.getDate();

    console.log('la date de naissance du visiteur :' + day, month, year)


    jour = parseInt("dob-day");
    mois = parseInt("dob-month");
    annee = parseInt("dob-mYear");
    age = tYear - year;
    if (tMonth < month)
      age = age - 1;
    if (tMonth == month) {
      if (tDay < day)
        age = age - 1;
    }
    console.log('Ton âge exact est :' + age);
    return true;


  }

})();