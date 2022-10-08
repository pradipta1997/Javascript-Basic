//This
/*
var a = 10;
var b = "pradipta";
console.log(this);
//NOTE :This membawa/menjadikan variabel a & b ke dalam object global 
*/


//CARA 1 - FUNCTION DECLARATION
/*
function halo(){
    console.log(this);
    console.log("Halo");
}

this.halo();
//NOTE :This mengembalikan object global
*/



//CARA 2 - OBJECT LITERAL
/*
var obj = {a:10, nama:"pradipta"};
obj.halo = function(){
    console.log(this);
    console.log("Halo There");
}

obj.halo();
//NOTE :This mengembalikan object yang bersangkutan
*/


//CARA 3 - CONSTRUCTOR FUNCTION

function halo(){
    console.log(this);
    console.log("Hi,Apa Kabar?");
}

var obj1 = new halo();
var obj2 = new halo();
//NOTE :This mengembalikan object yang baru dibuat


