/*-------------------------------------------------------------ALERT-------------------------------------------------------*/

/*alert("Hello My name is Pradipta"); */

/* TAG ALERT,BISA JUGA MENGGUNAKAN MULTI ALERT PADA JS
alert("Hello");
alert("Welcome");
alert("to simple");
alert("site");
*/

/*-------------------------------------------------------------PROMPT------------------------------------------------------*/

/*Prompt menampilkan Text Box*/

/*
var name = prompt("Type your name below :");
alert("Hello :" + name);
*/

/*-------------------------------------------------------------CONFIRM------------------------------------------------------*/

var confirm = confirm("Wanna try it again ?");
if(confirm === true){

    var prompt = prompt("Type Name");

    alert("Your Name :" + prompt);

}

else{
    
    alert("Thank you!");

}
