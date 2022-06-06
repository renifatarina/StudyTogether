$(document).ready(function() {
    $nav = $('.nav');
    $toggleCollapese = $('.toggle-collapse');

    // click event on toggle menu
    $toggleCollapese.click(function() {
        $nav.toggleClass('collapse');
    })

    window.addEventListener("scroll", function(){
            var header = document.querySelector("nav");
            header.classList.toggle("sticky", window.scrollY > 0);
        })

});