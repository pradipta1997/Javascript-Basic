//PEMBUATAN FUNCTION

function jumlahVolumeDuaKubus(a,b){
    var volumeA;
    var volumeB;
    var total;

    volumeA = a * a * a;
    volumeB = b * b * b;

    total = volumeA + volumeB;

    return total;
}

//MENJALANKAN FUNCTION DENGAN DI ISI PARAMETER-NYA
console.log(jumlahVolumeDuaKubus(8,5));

console.log(jumlahVolumeDuaKubus(10,9));