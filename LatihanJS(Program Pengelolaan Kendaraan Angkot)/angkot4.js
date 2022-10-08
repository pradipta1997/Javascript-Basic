/*METODE LOOPING YG HANYA DI LAKUKAN DENGAN FOR SAJA,DENGAN PENGKONDISIAN DI DALAMNYA */

/*Jika ingin membuat kondisi lainnya seperti angkot 8 dan 10 status sedang lembur bisa dengan metode 2 ELSE.. IF.. */
/*Atau bisa juga dengan menggunakan OPERATOR LOGIKA (&&,||) pada satu ELSE.. IF.. */

var jmlAngkot  = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

for(noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++){

    if(noAngkot <= angkotBeroperasi){
        console.log("Angkot No. " + noAngkot + " Beroperasi Dengan Baik");
    }

    else if(noAngkot === 8){
        console.log("Angkot No. " + noAngkot + " Sedang Lembur");
    }

    else{
        console.log("Angkot No. " + noAngkot + " Sedang Tidak Beroperasi");
    }

}