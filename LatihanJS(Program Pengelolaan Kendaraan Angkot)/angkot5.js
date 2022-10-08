/*METODE LOOPING YG HANYA DI LAKUKAN DENGAN FOR SAJA,DENGAN PENGKONDISIAN DI DALAMNYA */

/*Jika ingin membuat kondisi lainnya seperti angkot 8 dan 10 status sedang lembur bisa dengan metode 2 ELSE.. IF.. */
/*Atau bisa juga dengan menggunakan OPERATOR LOGIKA (&&,||) pada satu ELSE.. IF.. */




/*KETERANGAN: Jumlah Angkot Yang Beroperasi Dengan Baik Ada 6 */
/*KETERANGAN: Jumlah Angkot Yang Tidak Beroperasi Ada 2 */
/*KETERANGAN: Jumlah Angkot Yang Sedang Lembur Ada 2 */

var jmlAngkot  = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

for(noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++){

    if(noAngkot <= angkotBeroperasi){
        console.log("Angkot No. " + noAngkot + " Beroperasi Dengan Baik");
    }

    else if(noAngkot === 8 || noAngkot === 10){
        console.log("Angkot No. " + noAngkot + " Sedang Lembur");
    }

    else{
        console.log("Angkot No. " + noAngkot + " Sedang Tidak Beroperasi");
    }

}