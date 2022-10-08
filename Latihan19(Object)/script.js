//MEMBUAT OBJECT DENGAN;

//Object Literal
/*
var mahasiswa = {

    nama : "Pradipta Ramadhan",
    umur : 23,
    email : "pradiptaramadhan1997@gmail.com",
    jurusan : "Teknik Informatika",
    ips : [3.00,2.50,3.20],

    alamat : {
        jalan : "Jl.Pinang II No.15",
        Kota : "Depok",
        provinsi : "Jawa Barat"
    }
};

var mahasiswa2 = {

    nama : "Mr.x",
    umur : 25,
    email : "mrxanonymous@gmail.com",
    jurusan : "Teknik Mesin",
    ips : [2.53,3.00,3.50],

    alamat :{
        jalan : "Jl.Samosir 2",
        kota : "Jakarta",
        provinsi : "DKI Jakarta"
    }
};
*/


//Function Declaration
/*
function buatObjectMahasiswa(nama,nim,email,jurusan){
    
    var mahasiswa = {};

    mahasiswa.nama = nama;
    mahasiswa.nim = nim;
    mahasiswa.email = email;
    mahasiswa.jurusan = jurusan;

    return mahasiswa;
}

var mahasiswa3 = buatObjectMahasiswa("Delita","0123987654","delitarahayu11@gmail.com","Kedokteran")

var mahasiswa4 = buatObjectMahasiswa("Rahman","0432156789","rahmanagus12","Psikologi")
*/


//Constructor Function(Keyword New)
function mahasiswa(nama,nim,email,jurusan){
    this.nama = nama;
    this.nim = nim;
    this.email = email;
    this.jurusan = jurusan;
}

var mahasiswa5 = new mahasiswa("Alika","97654312","alikarahma@gmail.com","Ekonomi Bisnis");

var mahasiswa6 = new mahasiswa("Alex","876549812","Alexandre@gmail.com","Teknik Argo");
