//PEMBUATAN FUNCTION

function tambah(a,b){
    return a + b;
}


//PEMANGGILAN FUNCTION DENGAN BERBAGAI CARA & MEMBERIKAN ARGUMENT DENGAN BERBAGAI CARA

/*
var hasil = tambah(2,5);

console.log(hasil);
*/

//-------------------------------------------

/*
console.log(tambah(2,3));
*/

//-------------------------------------------

/*
var a = parseInt(prompt("Masukan Nilai 1 :"));
var b = parseInt(prompt("Masukan Nilai 2 :"));

var hasil = tambah(a,b);

alert(hasil);
*/

//-------------------------------------------


var a = parseInt(prompt("Masukan Nilai 1 :"));
var b = parseInt(prompt("Masukan Nilai 2 :"));

var hasil = tambah(a*2,b*2);

alert(hasil);