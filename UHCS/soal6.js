// JavaScript untuk mendeteksi jenis smartphone berdasarkan spesifikasi
function tampilkanJenis() {
    var inputText = document.getElementById("inputText").value.toLowerCase();
    var jenis = "";
  
    if (inputText.includes("10 mp")) {
      jenis = "Kamera";
    } else if (inputText.includes("128gb")) {
      jenis = "Memori";
    } else {
      jenis = "Tidak dapat mengenali jenis smartphone.";
    }
  
    document.getElementById("jenis").textContent = jenis;
  }
  