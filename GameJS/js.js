var tanya = true;
while(tanya){

//Menangkap Pilihan Player
var player = prompt("Pilih: gajah,semut,orang,satan");

//Menangkap Pilihan Computer
//Generate Bilangan Random
var computer = Math.random();

if(computer < 0.34){
    computer = "gajah";
}

else if(computer >= 0.34 && computer < 0.67){
    computer = "orang";
}

else if(computer >= 0.67 && computer < 0.134){
    computer = "satan";
}

else{
    computer = "semut";
}

console.log(computer);
    

//Menentukan Rules
var hasil = "";

if(player == computer){
    hasil = "SERI";
}

else if(player == "gajah"){
    if(computer == "orang"){
        hasil = "MENANG";
    }
    else{
        hasil = "KALAH";
    }
}

else if(player == "orang"){
    if(computer == "gajah"){
        hasil = "KALAH";
    }
    else{
        hasil = "MENANG";
    }
}

else if(player == "semut"){
    if(computer == "orang"){
        hasil = "KALAH";
    }
    else{
        hasil = "MENANG";
    }
}

else if(player == "satan"){
    if(computer == "orang"){
        hasil = "SATAN SELALU MENGUASAI MU !!!";
    }
    else{
        hasil = "KALAH";
    }
}

else if(player == "orang"){
    if(computer == "satan"){
        hasil = "SATAN TETAP MENGUASAIMU DI SEMUA SISI!!!";
    }
    else{
        hasil = "KALAH";
    }
}

else{
    hasil = "Pilihan Yang Anda Masukan Tidak Terdapat Pada List Tertera!";
}

//Tampilkan Hasil
alert("Kamu Memilih: " + player + " & Komputer Memilih: " + computer + "\n Maka Hasilnya: " + hasil);


tanya = confirm("Bermain Lagi ?");
}

alert("Terima Kasih Sudah Bermain & Tetaplah di Jalan Satanisme :)");