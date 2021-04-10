
/* Variable that holds current password to change via input from website */
console.log("helloworld");

var x = document.getElementById('pwd').value;
var checker;
var lower = false;
var upper;
var number;
var special;
var length;
var submit = document.getElementById('submit');
/* Code for taking input from website */
document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();  
    x = document.getElementById('pwd').value;

    checker = /[a-z]/;
    lower = checker.test(x);
    checker = /[A-Z]/;
    upper = checker.test(x);
    checker = /[0-9]/;
    number = checker.test(x);
    checker = /[!@#$%^&*]/;
    special = checker.test(x);
    length = x.length;
    
    if(lower == false){
        document.getElementById('message_lower').style.display= 'block';
    }
    else{
        document.getElementById('message_lower').style.display= 'none';
    }
    if(upper == false){
        document.getElementById('message_upper').style.display= 'block';
    }
    else{
        document.getElementById('message_upper').style.display= 'none';
    }
    if(number == false){
        document.getElementById('message_number').style.display= 'block';
    }
    else{
        document.getElementById('message_number').style.display= 'none';
    }
    if(special == false){
        document.getElementById('message_special').style.display= 'block';
    }
    else{
        document.getElementById('message_special').style.display= 'none';
    }
    if(length < 8){
        document.getElementById('message_length').style.display= 'block';
    }
    else{
        document.getElementById('message_length').style.display= 'none';
    }


});

