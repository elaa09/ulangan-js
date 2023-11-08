function tampilkanSuara() {
    var selectedHewan = document.getElementById("hewan");
    var suara = "";
  
    if (selectedHewan.value === "kucing") {
      suara = "meong";
    } else if (selectedHewan.value === "anjing") {
      suara = "guguk";
    } else {
      suara = "Hewan tidak dikenal.";
    }
  
    document.getElementById("suara").textContent = suara;
  }
  