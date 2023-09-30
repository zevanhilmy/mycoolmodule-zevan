// dibawah ini adalah fungsi untuk menghitung luas persegi
function luas_persegi(sisi) {
    return sisi * sisi;
    }
  
  // dibawah ini adalah fungsi untuk menghitung keliling persegi
  function keliling_persegi(sisi) {
    return 4 * sisi;
  }
  
  // dibawah ini adalah fungsi untuk menghitung luas persegi panjang
  function luas_persegi_panjang(panjang, lebar) {
    return panjang * lebar;
  }
  
  // dibawah ini adalah fungsi untuk menghitung luas keliling persegi panjang
  function keliling_persegi_panjang(panjang, lebar) {
    return 2 * (panjang + lebar);
  }
  
  // dibawah ini adalah fungsi untuk meng-exports fungsi-fungsi diatas agar dapat digunakan pada modul lain
  module.exports = {
    luas_persegi,
    keliling_persegi,
    luas_persegi_panjang,
    keliling_persegi_panjang,
  };