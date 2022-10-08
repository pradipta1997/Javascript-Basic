/*METODE LOOPING YG HANYA DI LAKUKAN DENGAN FOR SAJA,DENGAN PENGKONDISIAN DI DALAMNYA */
/*KETERANGAN: Jumlah Angkot Yang Beroperasi Dengan Baik Ada 6 Dan Yang Tidak Beroperasi Ada 4*/

var jmlAngkot  = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

for(noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++){

    if(noAngkot <= angkotBeroperasi){
        console.log("Angkot No. " + noAngkot + " Beroperasi Dengan Baik");
    }

    else{
        console.log("Angkot No. " + noAngkot + " Sedang Tidak Beroperasi");
    }

}