/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {


  var r = Math.floor(256 * Math.random());
  var g = Math.floor(256 * Math.random());
  var b = Math.floor(256 * Math.random());

  document.getElementById("run").addEventListener("click", displayColor);


  function displayColor() {
    document.getElementById('run').value;
    document.body.style.backgroundColor = "rgba(" + r + "," + g + "," + b + ",1)";
  }
  

})();