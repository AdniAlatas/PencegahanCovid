function analisisGejala() {
    const checkboxes = document.querySelectorAll(".gejala");
    let jumlahGejala = 0;

    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            jumlahGejala++;
        }
    });

    const hasil = document.getElementById("hasil");

    if (jumlahGejala === 0) {
        hasil.innerHTML = "✅ Anda tidak memilih gejala apa pun. Tetap jaga kesehatan ya!";
        hasil.style.color = "green";
    } 
    else if (jumlahGejala <= 2) {
        hasil.innerHTML =
            "⚠️ Anda memiliki beberapa gejala ringan. Disarankan untuk istirahat dan memantau kondisi.";
        hasil.style.color = "orange";
    } 
    else {
        hasil.innerHTML =
            "🚨 Gejala cukup serius! Segera hubungi fasilitas kesehatan terdekat dan lakukan tes Covid-19.";
        hasil.style.color = "red";
    }
}
