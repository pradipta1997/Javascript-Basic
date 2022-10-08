var penumpang = [];
var tambahPenumpang = function(namaPenumpang,penumpang){
    //Jika Angkot Kosong
    if(penumpang.length == 0){
        //Tampilkan pesan bahwa penumpang sudah naik ke dalam angkot
        console.log("Nama " + namaPenumpang + " sudah sudah naik ke angkot");
        //Tambah penumpang di awal array
        penumpang.push(namaPenumpang);
        //Kembalikan isi array & keluar dari function
        return penumpang;
    }

    else{
        //Telusuri seluruh kursi dari awal
        for(var i = 0; i<penumpang.length; i++){
            //Jika ada kursi kosong
            if(penumpang[i] == undefined){
                //Tambah penumpang dari kursi tersebut
                penumpang[i] = namaPenumpang;
                console.log("Nama " + namaPenumpang + " sudah duduk di bangku kosong yang sebelumnya di tempati");
                //Kembalikan isi array & keluar dari function
                return penumpang;
            }
            //Jika sudah ada nama yang sama
            else if(penumpang[i] == namaPenumpang){
                //Tampilkan pesan kesalahan
                console.log("Nama " + namaPenumpang + " sudah ada di dalam angkot!");
                //Kembalikan isi array & keluar dari function
                return penumpang;
            }
            //Jika seluruh kursi terisi
            else if(i == penumpang.length - 1){
                //Tambah penumpang di akhir array
                penumpang.push(namaPenumpang);
                //Kembalikan isi array & keluar dari function
                return penumpang;
            }
        }
    }
}



var hapusPenumpang = function(namaPenumpang,penumpang){
    //Jika angkot kosong
    if(penumpang.length == 0){
        //Tampilkan pesan bahwa angkot kosong, dan tidak mungkin ada penumpang turun
        console.log("Angkot Masih Kosong.");
        //Kembalikan isi array & keluar dari function
        return penumpang;
    }
    
    else{

        //Telusuri seluruh kursi dari awal
        for(var i = 0; i < penumpang.length; i++){
            //Jika nama penumpang sesuai
            if(penumpang[i] == namaPenumpang){
                //Tampilkan pesan bahwa penumpang sudah turun dari angkot
                console.log("Nama " + namaPenumpang + " sudah turun dari angkot");
                //hapus penumpang dengan mengubah namanya menjadi undefined
                penumpang[i] = undefined;
                //Kembalikan isi array & keluar dari function
                return penumpang;
            }

            //Jika tidak ada nama yang sesuai
            else if(i == penumpang.length -1){
                //Tampilkan pesan kesalahannya
                console.log(namaPenumpang + " tidak ada di dalam angkot");
                //Kembalikan isi array & keluar dari function
                return penumpang;
            }
        }
    }
}