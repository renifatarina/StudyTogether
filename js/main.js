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

function showT(){
    var x = document.getElementById("note-text").value;

    if(x == "" | x == " " | x == "."){
        confirm("Please fill the comment")
    }
    else{
            document.getElementById("mytext").innerHTML = x;
            document.getElementById("toggle").style.display = 'flex';
            document.getElementById("note-text").value='';

            setTimeout(function(){
                var hitung = x.length;
                if(hitung <= 4){
                    document.getElementById("mytext2").style.display = 'flex';
                    document.getElementById("toggle2").style.display = 'flex';
                    $("#mytext2").css("padding-top", "50px")
                    $("#toggle2").css("padding-top", "50px")

                }
                else{
                    document.getElementById("mytext2").style.display = 'flex';
                    document.getElementById("toggle2").style.display = 'flex';
                    $("#mytext2").css("margin-top", "30px")
                    $("#toggle2").css("margin-top", "30px")
                }
            }, 2000);
    }

}

// memanggil page sebelumnya
function backto(){
    history.back();
}

                //HITUNG MUNDUR Pomodoro..

// Mengatur waktu akhir perhitungan mundur
var countDownDate = new Date("Jul 22, 2022 10:10:35").getTime();

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
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
// Jika hitungan mundur selesai, tulis beberapa teks 
}, 1000);


                //HITUNG MUNDUR PW..

// Mengatur waktu akhir perhitungan mundur
var countDownDatex = new Date("Jul 15, 2022 10:10:35").getTime();

// Memperbarui hitungan mundur setiap 1 detik
var x = setInterval(function() {

  // Untuk mendapatkan tanggal dan waktu hari ini
  var now = new Date().getTime();
    
  // Temukan jarak antara sekarang dan tanggal hitung mundur
  var distance = countDownDatex - now;
    
  // Perhitungan waktu untuk hari, jam, menit dan detik
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdownPw").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // Jika hitungan mundur selesai, tulis beberapa teks 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdownPw").innerHTML = "EXPIRED";
  }
// Jika hitungan mundur selesai, tulis beberapa teks 
}, 1000);


                //HITUNG MUNDUR Ai..

// Mengatur waktu akhir perhitungan mundur
var countDownDatey = new Date("July 17, 2022 01:10:35").getTime();

// Memperbarui hitungan mundur setiap 1 detik
var x = setInterval(function() {

  // Untuk mendapatkan tanggal dan waktu hari ini
  var now = new Date().getTime();
    
  // Temukan jarak antara sekarang dan tanggal hitung mundur
  var distance = countDownDatey - now;
    
  // Perhitungan waktu untuk hari, jam, menit dan detik
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdownAi").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // Jika hitungan mundur selesai, tulis beberapa teks 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdownAi").innerHTML = "EXPIRED";
  }
// Jika hitungan mundur selesai, tulis beberapa teks 
}, 1000);



                //HITUNG MUNDUR Pbd..

// Mengatur waktu akhir perhitungan mundur
var countDownDatez = new Date("Jul 20, 2022 23:10:35").getTime();

// Memperbarui hitungan mundur setiap 1 detik
var x = setInterval(function() {

  // Untuk mendapatkan tanggal dan waktu hari ini
  var now = new Date().getTime();
    
  // Temukan jarak antara sekarang dan tanggal hitung mundur
  var distance = countDownDatez - now;
    
  // Perhitungan waktu untuk hari, jam, menit dan detik
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdownPbd").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // Jika hitungan mundur selesai, tulis beberapa teks 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdownPbd").innerHTML = "EXPIRED";
  }
// Jika hitungan mundur selesai, tulis beberapa teks 
}, 1000);

 
 



