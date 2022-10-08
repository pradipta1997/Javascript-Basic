//MENAMBAH ISI PADA ARRAY
/*
var arr = ["a",1,true];
console.log(arr[2]);
*/

//atau bisa juga dengan cara kedua seperti ini;
/*
var arr = [];
arr[0] = "Coper byte";
arr[1] = "Tera byte";
arr[2] = "Giga byte";
arr[3] = "Mega byte";
arr[4] = "Kilo byte";

console.log(arr);
*/

//-----------------------------------------------------------------

//MENGHAPUS ISI PADA ARRAY
/*
var arr = ["Coper byte","Tera byte","Giga byte","Mega byte","Kilo byte"];

arr[2] = undefined;

console.log(arr);
*/

//-----------------------------------------------------------------

//MENAMPILKAN ISI PADA ARRAY(Array Tidak Berbentuk Type Object)
/*
var arr = ["Coper byte","Tera byte","Giga byte","Mega byte","Kilo byte","Byte","Bit"];

for(var i = 0; i < arr.length; i++)

    console.log("Memmory Size ke- " + (i+1) + " : \n" + arr[i]);
*/

//-------------------------------------------------------------------------------------------------------------------------------

//METHOD PADA ARRAY (join)
/*
var arr = ["Coper byte","Tera byte","Giga byte","Mega byte","Kilo byte","Byte","Bit"];

console.log(arr.join(" - "));
*/


//METHOD PADA ARRAY (push)
/*
var arr = ["Coper byte","Tera byte","Giga byte","Mega byte","Kilo byte"];

arr.push("Byte","Bit");

console.log(arr.join(" - "));
*/


//METHOD PADA ARRAY (pop)
/*
var arr = ["Coper byte","Tera byte","Giga byte","Mega byte","Kilo byte","Bit"];

arr.pop();

console.log(arr.join(" - "));
*/


//METHOD PADA ARRAY (unshift)
/*
var arr = ["Peta byte","Tera byte","Giga byte","Mega byte","Kilo byte","Bit"];

arr.unshift("Zetta byte","Exa byte");

console.log(arr.join(" - "));
*/


//METHOD PADA ARRAY (shift)
/*
var arr = ["Peta byte","Tera byte","Giga byte","Mega byte","Kilo byte","Bit"];

arr.shift();

console.log(arr.join(" - "));
*/


//METHOD PADA ARRAY (splice)
//note : konsep pengerjaan (nilaiIndexAwal - mauDihapusBerapaElemen - elemenBaru1,elemenBaru2,...)
/*
var arr = ["Peta byte","Tera byte","Giga byte","Mega byte","Kilo byte","Bit"];

arr.splice(1, 2, "Coper byte");

console.log(arr.join(" - "));
*/


//METHOD PADA ARRAY (slice)
//note : (nilaiAwal(elemennya terbawa) - nilaiAkhir(elemennya tdk terbawa), ini elemen yang akan tampil)
/*
var arr = ["Peta byte","Tera byte","Giga byte","Mega byte","Kilo byte","Bit"];

arr.slice(1,4);

console.log(arr.join(" - "));
*/


//METHOD PADA ARRAY (forEach)
/*
var angka = [1,2,3,4,5,6,7];
var nama = ["Pradipta","Ramadhan","Informatika"];

//angka.forEach(function(e) {
//    console.log(e);
//});

nama.forEach(function(e, i) {
    console.log("Nama ke- " + (i+1) + " Adalah :" + e);
});
*/


//METHOD PADA ARRAY (map)
/*
var angka = [1,2,3,4,5,6,7];

var angka2 = angka.map(function(e){
    return e * 2;
});

console.log(angka2.join(" - "));
*/


//METHOD PADA ARRAY (sort)
/*
var angka = [1,4,8,2,9,3,7,5,10,6];

angka.sort(function(a,b){
    return a-b;
});

console.log(angka.join(" - "));
*/


//METHOD PADA ARRAY (filter)
//Bisa mencari banyak nilai dengan metode JOIN
/*
var angka = [1,2,10,5,20,3,6,8,4];

var angka2 = angka.filter(function(x){
    return x == 5;

});

console.log(angka2.join( " - "));
*/


//METHO PADA ARRAY (find)
//Hanya bisa mencari satu nilai/value tanpa metode JOIN
var angka = [1,2,10,5,20,3,6,8,4];

var angka2 = angka.find(function(x){
    return x > 10;
});

console.log(angka2);6


 
