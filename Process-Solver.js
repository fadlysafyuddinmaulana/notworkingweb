function Main_Function() {
  var s1 = parseInt(document.getElementById("s1").value);

  var s2 = parseInt(document.getElementById("s2").value);

  var spod1 = parseInt(document.getElementById("spod1").value);
  var spod2 = parseInt(document.getElementById("spod2").value);
  var spod3 = parseInt(document.getElementById("spod3").value);
  //   sprl
  var sprl1 = parseInt(document.getElementById("sprl1").value);
  var sprl2 = parseInt(document.getElementById("sprl2").value);
  var sprl3 = parseInt(document.getElementById("sprl3").value);
  //   sptl
  var sptl1 = parseInt(document.getElementById("sptl1").value);
  var sptl2 = parseInt(document.getElementById("sptl2").value);
  var sptl3 = parseInt(document.getElementById("sptl3").value);
  //   sppm
  var sppm1 = parseInt(document.getElementById("sppm1").value);
  var sppm2 = parseInt(document.getElementById("sppm2").value);
  var sppm3 = parseInt(document.getElementById("sppm3").value);
  //   sppd
  var sppd1 = parseInt(document.getElementById("sppd1").value);
  var sppd2 = parseInt(document.getElementById("sppd2").value);
  var sppd3 = parseInt(document.getElementById("sppd3").value);
  //   spps
  var spps1 = parseInt(document.getElementById("spps1").value);
  var spps2 = parseInt(document.getElementById("spps2").value);
  var spps3 = parseInt(document.getElementById("spps3").value);

  var Total = document.getElementById("Total");
  var Nilai_Akhir = document.getElementById("Nilai-Akhir");
  var Nilai_Huruf = document.getElementById("Nilai-Huruf");

  if (isNaN(s1) || isNaN(s2)) {
    alert("Mohon di isi yak masing masing form");
  } else if (isNaN(spod1) || isNaN(spod2) || isNaN(spod3)) {
    alert("Mohon di isi yak masing masing form");
  } else if (isNaN(sprl1) || isNaN(sprl2) || isNaN(sprl3)) {
    alert("Mohon di isi yak masing masing form");
  } else if (isNaN(sptl1) || isNaN(sptl2) || isNaN(sptl3)) {
    alert("Mohon di isi yak masing masing form");
  } else if (isNaN(sppm1) || isNaN(sppm2) || isNaN(sppm3)) {
    alert("Mohon di isi yak masing masing form");
  } else if (isNaN(sppd1) || isNaN(sppd2) || isNaN(sppd3)) {
    alert("Mohon di isi yak masing masing form");
  } else if (isNaN(spps1) || isNaN(spps2) || isNaN(spps3)) {
    alert("Mohon di isi yak masing masing form");
  } else {
    eksekusi1 = (s1 * 50) / 100;
    eksekusi2 = (s2 * 50) / 100;
    eksekusi3 = eksekusi1 + eksekusi2;

    eksekusi_sp1 = spod1 + spod2 + spod3;
    eksekusi_spb1 = eksekusi_sp1 / 3;
    eksekusi_spk1 = eksekusi_spb1 * 15;
    eksekusi_spf1 = eksekusi_spk1 / 100;

    eksekusi_sp2 = sprl1 + sprl2 + sprl3;
    eksekusi_spb2 = eksekusi_sp2 / 3;
    eksekusi_spk2 = eksekusi_spb2 * 20;
    eksekusi_spf2 = eksekusi_spk2 / 100;

    eksekusi_sp3 = sptl1 + sptl2 + sptl3;
    eksekusi_spb3 = eksekusi_sp3 / 3;
    eksekusi_spk3 = eksekusi_spb3 * 20;
    eksekusi_spf3 = eksekusi_spk3 / 100;

    eksekusi_sp4 = sppm1 + sppm2 + sppm3;
    eksekusi_spb4 = eksekusi_sp4 / 3;
    eksekusi_spk4 = eksekusi_spb4 * 20;
    eksekusi_spf4 = eksekusi_spk4 / 100;

    eksekusi_sp5 = sppd1 + sppd2 + sppd3;
    eksekusi_spb5 = eksekusi_sp5 / 3;
    eksekusi_spk5 = eksekusi_spb5 * 15;
    eksekusi_spf5 = eksekusi_spk5 / 100;

    eksekusi_sp6 = spps1 + spps2 + spps3;
    eksekusi_spb6 = eksekusi_sp6 / 3;
    eksekusi_spk6 = eksekusi_spb6 * 10;
    eksekusi_spf6 = eksekusi_spk6 / 100;

    eksekusi_bsf = Math.round(
      eksekusi_spf1 +
        eksekusi_spf2 +
        eksekusi_spf3 +
        eksekusi_spf4 +
        eksekusi_spf5 +
        eksekusi_spf6
    );

    eksekusi_sa = eksekusi3 / 100;
    hasil_sa = eksekusi_sa * 40;

    eksekusi_nsa = eksekusi_bsf / 100;
    hasil_nsa = eksekusi_nsa * 60;

    if (eksekusi_bsf >= 86 && eksekusi_bsf <= 100) {
      hasil1 = "A";
      alert("Mendapatkan Nilai: " + hasil1);
      Nilai_Huruf.value = hasil1;
    } else if (eksekusi_bsf >= 81 && eksekusi_bsf < 86) {
      hasil1 = "A-";
      alert("Mendapatkan Nilai: " + hasil1);
      Nilai_Huruf.value = hasil1;
    } else if (eksekusi_bsf >= 76 && eksekusi_bsf < 86) {
      hasil1 = "B+";
      alert("Mendapatkan Nilai: " + hasil1);
      Nilai_Huruf.value = hasil1;
    } else if (eksekusi_bsf >= 71 && eksekusi_bsf < 76) {
      hasil1 = "B";
      alert("Mendapatkan Nilai: " + hasil1);
      Nilai_Huruf.value = hasil1;
    } else if (eksekusi_bsf >= 66 && eksekusi_bsf < 71) {
      hasil1 = "B-";
      alert("Mendapatkan Nilai: " + hasil1);
      Nilai_Huruf.value = hasil1;
    } else if (eksekusi_bsf >= 61 && eksekusi_bsf < 66) {
      hasil1 = "C+";
      alert("Mendapatkan Nilai: " + hasil1);
      Nilai_Huruf.value = hasil1;
    } else if (eksekusi_bsf >= 56 && eksekusi_bsf < 61) {
      hasil1 = "C";
      alert("Mendapatkan Nilai: " + hasil1);
      Nilai_Huruf.value = hasil1;
    } else {
      hasil1 = "D";
      alert("Mendapatkan Nilai: " + hasil1);
      Nilai_Huruf.value = hasil1;
    }
  }
  Total.value = eksekusi_bsf;
  Nilai_Akhir.value = eksekusi3;
}

function isnumberonly(evt) {
  var ch = String.fromCharCode(evt.which);

  if (!/[0-9]/.test(ch)) {
    evt.preventDefault();
  }
}

function Test_Function() {
  var s1 = parseInt(document.getElementById("s1").value);

  var s2 = parseInt(document.getElementById("s2").value);

  var in1 = parseInt(document.getElementById("in1").value);
  var in2 = parseInt(document.getElementById("in2").value);
  var in3 = parseInt(document.getElementById("in3").value);
  var in4 = parseInt(document.getElementById("in4").value);

  if (isNaN(spod1) || isNaN(spod2) || isNaN(spod3)) {
    alert("test");
  }
}

function solver_msa() {
  var s1_hasil = document.getElementById("s1");
  var s2_hasil = document.getElementById("s2");
  var s3_hasil = document.getElementById("s3");
  var s4_hasil = document.getElementById("s4");

  var in1 = parseInt(document.getElementById("in1").value);
  var in2 = parseInt(document.getElementById("in2").value);
  var in3 = parseInt(document.getElementById("in3").value);
  var in4 = parseInt(document.getElementById("in4").value);

  var eksekusi_hasil_in = document.getElementById("eksekusi_hasil_in");
  var eksekusi_hasil_skor = document.getElementById("eksekusi_hasil_skor");

  if (in1 >= 80) {
    skor = 4;
    s1 = skor;
    s1_hasil.value = skor;
  } else if (in1 >= 60 && in1 < 80) {
    skor = 3;
    s1 = skor;
    s1_hasil.value = skor;
  } else if (in1 >= 40 && in1 < 60) {
    skor = 2;
    s1 = skor;
    s1_hasil.value = skor;
  } else if (in1 >= 10 && in1 < 40) {
    skor = 1;
    s1 = skor;
    s1_hasil.value = skor;
  } else {
    skor = 0;
    s1 = skor;
    s1_hasil.value = skor;
  }

  if (in2 >= 80) {
    skor = 4;
    s2 = skor;
    s2_hasil.value = skor;
  } else if (in2 >= 60 && in2 < 80) {
    skor = 3;
    s2 = skor;
    s2_hasil.value = skor;
  } else if (in2 >= 40 && in2 < 60) {
    skor = 2;
    s2 = skor;
    s2_hasil.value = skor;
  } else if (in2 >= 10 && in2 < 40) {
    skor = 1;
    s2 = skor;
    s2_hasil.value = skor;
  } else {
    skor = 0;
    s2 = skor;
    s2_hasil.value = skor;
  }

  if (in3 >= 80) {
    skor = 4;
    s3 = skor;
    s3_hasil.value = skor;
  } else if (in3 >= 60 && in3 < 80) {
    skor = 3;
    s3 = skor;
    s3_hasil.value = skor;
  } else if (in3 >= 40 && in3 < 60) {
    skor = 2;
    s3 = skor;
    s3_hasil.value = skor;
  } else if (in3 >= 10 && in3 < 40) {
    skor = 1;
    s3 = skor;
    s3_hasil.value = skor;
  } else {
    skor = 0;
    s3 = skor;
    s3_hasil.value = skor;
  }

  if (in4 >= 80) {
    skor = 4;
    s4 = skor;
    s4_hasil.value = skor;
  } else if (in4 >= 60 && in4 < 80) {
    skor = 3;
    s4 = skor;
    s4_hasil.value = skor;
  } else if (in4 >= 40 && in4 < 60) {
    skor = 2;
    s4 = skor;
    s4_hasil.value = skor;
  } else if (in4 >= 10 && in4 < 40) {
    skor = 1;
    s4 = skor;
    s4_hasil.value = skor;
  } else {
    skor = 0;
    s4 = skor;
    s4_hasil.value = skor;
  }

  eksekusi_in = in1 + in2 + in3 + in4;
  eksekusi_final_in = eksekusi_in / 4;
  eksekusi_hasil_in.value = eksekusi_final_in;

  eksekusi_skor = s1 + s2 + s3 + s4;
  eksekusi_final_skor = eksekusi_skor / 4;
  eksekusi_hasil_skor.value = eksekusi_final_skor;
}
