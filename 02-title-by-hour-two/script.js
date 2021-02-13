/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  today = new Date()
  if (today.getHours() >= 0 && today.getHours() < 17,30) /* A noter que si on mettait <= Bonjour continuerait jusqu'à 17h29 et qu'ici il s'arrête à 17h */ {
    document.getElementById('target').innerHTML = 'Bonjour';
  }
  else {
    document.getElementById('target').innerHTML = 'Bonsoir';
  }
})();