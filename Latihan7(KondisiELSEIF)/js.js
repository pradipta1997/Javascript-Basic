/*METODE PENGKONDISIAN ELSE.. IF.. INI EFEKTIF DIGUNAKAN JIKA DIMANA LEBIH DARI DUA KONDISI */

var angka = prompt("Input Angka :");

if(angka % 2 == 0){
    alert(angka + " Adalah Bilangan Genap");

}

else if(angka % 2 == 1){
    alert(angka + " Adalah Bilangan Ganjil");

}

else{
    alert("Yang Anda Masukan Bukan Angka !");

}