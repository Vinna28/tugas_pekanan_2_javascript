const prompt = require('prompt-sync')({sigint: true});
const nilai = prompt('Input nilai: ');
let hasil;

if(nilai < 0){

    hasil = "Tidak bisa input bilangan negatif"

} else if (nilai % 2 == 0) {

    hasil = Math.sqrt(nilai)

} else {
    
    hasil = "Tidak bisa input bilangan ganjil"
};

console.log("Hasilnya adalah = " + hasil);