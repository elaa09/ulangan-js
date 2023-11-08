function hitungKeliling() {
    var sisiA = parseFloat(document.getElementById("sisiA").value);
    var sisiB = parseFloat(document.getElementById("sisiB").value);
  
    var keliling = 2 * (sisiA + sisiB);
  
    document.getElementById("keliling").textContent = keliling;
  }
  