//Membuat Object Angkot

//pembuatan object dengan metode constructor
function Angkot(sopir,trayek,penumpang,kas){
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;


    this.penumpangNaik = function(namaPenumpang){
        this.penumpang.push(namaPenumpang);
        return penumpang;
    }


    this.penumpangTurun = function(namaPenumpang,bayar){

        if(this.penumpang.length === 0){
            alert("Angkot Masih Kosong");
            return false;
        }
    }


    for(var i = 0; i < this.penumpang.length; i++){
         if(this.penumpang[i] == namaPenumpang){
             this.penumpang[i] = undefined;
             this.kas += bayar;
             return this.penumpang;
         }
    }


}

//inisialisasi object baru dari object diatas
var angkot1 = new Angkot("Kasdim",['Margonda','Pasar Minggu'],[],0);