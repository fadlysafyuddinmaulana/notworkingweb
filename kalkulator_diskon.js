function kalkulator_hasil() {
  var harga = parseInt(document.getElementById("harga").value);

  var diskon = parseInt(document.getElementById("diskon").value);

  var total = parseInt(document.getElementById("total").value);

  var bayar = parseInt(document.getElementById("bayar").value);

  var hasil = document.getElementById("hasil");

  var total;

  hasil1 = harga * total;
  hasil2 = hasil1 * (diskon / 100);
  hasil3 = bayar - hasil2;
  hasil.value = hasil3;

  // if (harga < 10000) {
  //   hasil1 = "Murah";
  //   hasil.value = hasil1;
  // } else {
  //   hasil2 = "Mahal";
  //   hasil.value = hasil2;
  // }
}
