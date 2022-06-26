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

