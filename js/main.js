$(document).ready(function () {
    $nav = $('.nav');
    $toggleCollapese = $('.toggle-collapse');

    // click event on toggle menu
    $toggleCollapese.click(function () {
        $nav.toggleClass('collapse');
    })

    window.addEventListener("scroll", function () {
        var header = document.querySelector("nav");
        header.classList.toggle("sticky", window.scrollY > 0);
    })

});

var count = 1;

function setColor(btn, color) {
    var property = document.getElementById(btn);
    if (count == 0) {
        property.style.backgroundColor = "#14279B"
        count = 1;
    } else {
        property.style.backgroundColor = color
        count = 0;
    }
}

function submit() {
    if (confirm("Are you sure to submit this quiz?")) {
        window.location = "forum.html";
    }
}

function back() {
    if (confirm("Are you sure to close this section? You will lose your reward on focus time.")) {
        window.location = "forum.html";
    }
}

function save() {
    var x = document.getElementById("note-text").value;
    document.getElementById("mytext").innerHTML = x;
}

//HITUNG MUNDUR GAJELAS WKWKWK

// Mengatur waktu akhir perhitungan mundur
var countDownDate = new Date("Jul 12, 2022 10:10:35").getTime();

// Memperbarui hitungan mundur setiap 1 detik
var x = setInterval(function() {

  // Untuk mendapatkan tanggal dan waktu hari ini
  var now = new Date().getTime();
    
  // Temukan jarak antara sekarang dan tanggal hitung mundur
  var distance = countDownDate - now;
    
  // Perhitungan waktu untuk hari, jam, menit dan detik
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Day nya ku ilangin biar agak mirip pomodoro 
  document.getElementById("countdown").innerHTML =  hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // Jika hitungan mundur selesai, tulis beberapa teks 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);