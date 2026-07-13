const botol = document.querySelectorAll(".botol");

const gambarLarutan = document.getElementById("gambarLarutan");
const namaBotol = document.getElementById("namaBotol");

let warnaDipilih = "";
let larutanDipilih = false;

let phDipilih = "";
let sifatDipilih = "";

botol.forEach(function(item) {

item.addEventListener("click", function() {
  if (larutanDipilih) {
    alert("Tekan Reset terlebih dahulu sebelum memilih larutan lain");
    return;
}

const gambar = this.dataset.gambar;    
const nama = this.dataset.nama;    
const ph = this.dataset.ph;    
const sifat = this.dataset.sifat;    
const warnaCairan = this.dataset.warnaCairan;    

warnaDipilih = warnaCairan;    
larutanDipilih = true;

phDipilih = ph;
sifatDipilih = sifat;

gambarLarutan.src = gambar;
namaBotol.textContent = nama;

// hasil pengamatan muncul saat tombol Uji Larutan ditekan

});

});

function ambilLarutan() {

const nama = namaBotol.textContent;
const cairan = document.getElementById("cairan");
const kertasLakmus = document.getElementById("kertasLakmus");
const statusLakmus = document.getElementById("statusLakmus");
const pipet = document.getElementById("pipet");
const hasilLakmus = document.getElementById("hasilLakmus");

if (nama === "Pilih larutan") {

alert("Pilih larutan terlebih dahulu");

} else {

// alert(nama + " masuk ke gelas");

pipet.classList.add("pipet-animasi");    

// cairan masuk ke gelas    
cairan.style.backgroundColor = warnaDipilih;    
cairan.style.height = "18px";    
cairan.style.width = "41px";    
cairan.style.position = "absolute";    
cairan.style.bottom = "20px";    
cairan.style.left = "50%";    
cairan.style.transform = "translateX(-50%)";    
cairan.style.borderRadius = "0 0 5px 5px";    


}

}

function ujiLarutan(){

const kertasLakmus = document.getElementById("kertasLakmus");
const hasilLakmus = document.getElementById("hasilLakmus");
const statusLakmus = document.getElementById("statusLakmus");


if (sifatLarutan.textContent.includes("Asam")) {

    kertasLakmus.style.backgroundColor = "#e74c3c";

    statusLakmus.textContent = "Lakmus berubah menjadi merah (Asam)";

    hasilLakmus.textContent = "Berwarna merah → Larutan bersifat asam";

}


else if (sifatLarutan.textContent.includes("Basa")) {

    kertasLakmus.style.backgroundColor = "#3498db";

    statusLakmus.textContent = "Lakmus berubah menjadi biru (Basa)";

    hasilLakmus.textContent = "Berwarna biru → Larutan bersifat basa";

}

}

document.getElementById("ujiBtn").addEventListener("click", function(){

    const kertasLakmus = document.getElementById("kertasLakmus");
    const hasilLakmus = document.getElementById("hasilLakmus");
    const statusLakmus = document.getElementById("statusLakmus");
 
document.getElementById("namaLarutan").textContent = namaBotol.textContent;

document.getElementById("nilaiPH").textContent = phDipilih;

document.getElementById("hasilSifat").textContent = sifatDipilih;


    if (sifatDipilih.includes("Asam")) {
        kertasLakmus.style.backgroundColor = "#e74c3c";
        alert("Lakmus berubah merah");
        statusLakmus.textContent = "Lakmus berubah menjadi merah (Asam)";
        hasilLakmus.textContent = "Berwarna merah → Larutan bersifat asam";

    }

    else if (sifatDipilih.includes("Basa")) {

        kertasLakmus.style.backgroundColor = "#3498db";
        statusLakmus.textContent = "Lakmus berubah menjadi biru (Basa)";
        hasilLakmus.textContent = "Berwarna biru → Larutan bersifat basa";

    }

});
document.getElementById("resetBtn").addEventListener("click", function(){

    document.getElementById("cairan").style.height = "0px";

    document.getElementById("kertasLakmus").style.backgroundColor = "white";

    document.getElementById("hasilLakmus").textContent = "-";
    document.getElementById("statusLakmus").textContent = "-";

document.getElementById("namaLarutan").textContent = "-";
document.getElementById("nilaiPH").textContent = "-";
document.getElementById("hasilSifat").textContent = "-";

    warnaDipilih = "";
    larutanDipilih = false;

});
