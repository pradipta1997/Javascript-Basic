/*
PROMPT,yang dimasukan ke dalam Prompt harus tipe data STRING dan selain itu tidak bisa untuk memaksa Prompt ini bisa
menggunakan semua tipe data termasuk INT,maka harus di tambahkan keyword PARSEINT.

atau bisa juga diakali dengan merubah angka pada CASE dari INT menjadi STRING dengan menambahkan ("").
*/

/*
var angka = parseInt( prompt("Masukan angka :"));

switch(angka){
    case 1:
        alert("Anda Memasukan Angka 1");
    break;

    case 2:
        alert("Anda Memasukan Angka 2");
    break;

    case 3:
        alert("Anda Memasukan Angka 3");
    break;

    default:
        alert("Angka Yang Anda Masukan Salah");
    break;

}
*/

/*--------------------------------------------------------CONTOH LAIN-------------------------------------------------------------*/

var item = prompt("Masukan Nama Makanan / Minuman : \n (cth: Sayur,Susu,Buah,Ikan,Nasi,Gorengan,Soda,Mie Instan)");

switch(item){
    case "nasi":
        alert("Nasi Adalah Makanan Sehat!");
    break;

    case "sayur":
        alert("Sayur Adalah Makanan Sehat!");
    break;

    case "susu":
        alert("Susu Adalah Minuman Sehat!");
    break;

    case "buah":
        alert("Buah Adalah Makanan Sehat!");
    break;

    case "daging Ikan":
        alert("Daging Ikan Adalah Makanan Sehat!");
    break;

    case "gorengan":
        alert("Gorengan Adalah Makanan Tidak Sehat!");
    break;

    case "soda":
        alert("Soda Adalah Minuman Tidak Sehat!");
    break;

    case "Mie Instan":
        alert("Mie Instan Adalah Makanan Tidak Sehat!");
    break;

    default:
        alert("Makanan / Minuman Yang Anda Input Belum Terdaftar Di Sistem Kami");
    break;

}