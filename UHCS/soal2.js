function tampilkanPesan() {
    var nilai = parseInt(document.getElementById("nilai").value);
    var pesan = "";
  
    if (nilai > 80) {
      pesan = "SANGAT MEMUASKAN";
    } else if (nilai >= 60 && nilai <= 80) {
      pesan = "MEMUASKAN";
    } else {
      pesan = "JANGAN MENYERAH, COBA LAGI!";
    }
  
    document.getElementById("pesan").textContent = pesan;
  }
  