/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
 function myFunction()
{
var i=0;
var n=prompt("enter a number:")
var str="";
for(i=1;i<=10;i++)
{
document.write('<table border="1" cellspacing="0">');
for(i=1;i<=10;i++) {
    document.write("<tr><td>" + n + " x " + i + " = " + n*i + "</td></tr>");
}
 document.write("</table>");
}
}

document.getElementById('target').innerHTML = myFunction();

})();