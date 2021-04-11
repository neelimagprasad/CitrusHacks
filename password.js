
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
var newpass;
/* Code for taking input from website */
document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();  
    x = document.getElementById('pwd').value;
    newpass = x
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
        var alphabet = "abcdefghijklmnopqrstuvwxyz";
        var randletter = alphabet[Math.floor(Math.random() * alphabet.length)];
        newpass += randletter;
    }
    else{
        document.getElementById('message_lower').style.display= 'none';
    }
    if(upper == false){
        document.getElementById('message_upper').style.display= 'block';
        var Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var randletter2 = Alphabet[Math.floor(Math.random() * Alphabet.length)];
        newpass += randletter2;
    }
    else{
        document.getElementById('message_upper').style.display= 'none';
    }
    if(number == false){
        document.getElementById('message_number').style.display= 'block';
        var nums = "0123456789";
        var randnum = nums[Math.floor(Math.random() * nums.length)];
        newpass += randnum;
    }
    else{
        document.getElementById('message_number').style.display= 'none';
    }
    if(special == false){
        document.getElementById('message_special').style.display= 'block';
        var specialchars = "!@#$%^&*";
        var randchar = specialchars[Math.floor(Math.random() * specialchars.length)];
        newpass += randchar;
    }
    else{
        document.getElementById('message_special').style.display= 'none';
    }
    if(length < 8){
        document.getElementById('message_length').style.display= 'block';
        var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
        
        while (newpass.length < 8) {
            newpass += chars[Math.floor(Math.random() * chars.length)];;
            
            }
    }
    else{
        document.getElementById('message_length').style.display= 'none';
    }
    document.getElementById("suggestions").innerHTML = newpass;  

});

