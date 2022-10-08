/*--------------------------------------------------------POPUP BOX-------------------------------------------------------------*/

var prompt = prompt("Ketik Nama");

if(prompt){
alert("Hallo " + prompt + " Selamat Datang Di Program Tranportasi Angkot");
}

else{
    alert("Thank You !");
}

/*------------------------------------------------------LOOPING WHILE-----------------------------------------------------------*/
/*KETERANGAN : Jumlah Angkot Yang Berjalan Dengan Baik Ada 10 Angkot */

var jmlAngkot = 10;
var noAngkot = 1;
var jmlAngkotTidakBeroperasi = 6;

while(noAngkot <= jmlAngkot){
    console.log("Angkot No. " + noAngkot + " Berjalan dengan baik.");

noAngkot++;

}   

/*------------------------------------------------------LOOPING FOR-----------------------------------------------------------*/

/*File ada di (angkot2.js) --> */