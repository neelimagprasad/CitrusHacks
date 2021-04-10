
/* Variable that holds current password to change via input from website */
window.onload = function () {
    var x = document.getElementById("pwd");
}

var checker;
var lower;
var upper;
var number;
var specialchar;
var length;
/* Code for taking input from website */

checker = /[a-z]/;
    lower = checker.test(x.value);
    
checker = /[A-Z]/;
    upper = checker.test(x.value);
checker = /[0-9]/;
    number = checker.test(x.value);
checker = /[!@#$%^&*]/;
    specialchar = checker.test(x.value);

length = x.length >= 8;
console.log(lower);
if( lower == true ){
    document.getElementById("message").style.display = "block";
}


