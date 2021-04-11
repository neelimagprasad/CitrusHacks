/* Variable that holds current password to change via input from website */

var checker;
var submit = document.getElementById('generate');
var newpass = '';

/* Code for taking input from website */
document.getElementById("generate").addEventListener("click", function(event){
    event.preventDefault();  

    newpass = '';
    
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var randletter = alphabet[Math.floor(Math.random() * alphabet.length)];
    newpass += randletter;
        
    var Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var randletter2 = Alphabet[Math.floor(Math.random() * Alphabet.length)];
    newpass += randletter2;

    var nums = "0123456789";
    var randnum = nums[Math.floor(Math.random() * nums.length)];
    newpass += randnum;

    var specialchars = "!@#$%^&*";
    var randchar = specialchars[Math.floor(Math.random() * specialchars.length)];
    newpass += randchar;

    var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
        
    while (newpass.length < 10) {
        newpass += chars[Math.floor(Math.random() * chars.length)];;   
    }
    document.getElementById("suggestions").innerHTML = newpass;
    document.getElementById('email_box').style.display= 'block';

});
document.getElementById("submit1").addEventListener("click", function(event){
    event.preventDefault();  
    document.getElementById('linkshow').style.display= 'block';    
    var email = document.getElementById('email').value;
    var string = "mailto:"+email+"?subject= Secure Password&body= Your new password is "+newpass;
    console.log(email);
    console.log(string);
    var link = document.getElementById("send");
    link.innerHTML = "email";
    link.setAttribute('href', string);

});