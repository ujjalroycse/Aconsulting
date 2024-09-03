$(document).ready(function () {
    $('.count-number1').counterUp({
        delay: 5,
        time: 1000
    })
    $('.count-number2').counterUp({
        delay: 7,
        time: 1000
    })
    $('.count-number3').counterUp({
        delay: 9,
        time: 1000
    })
    $('.count-number4').counterUp({
        delay: 6,
        time: 1000
    })


    // $(".menu-bars").click(function(){
    //     $(".menu").toggleClass("active");
    // })

    $('.client-carousol').owlCarousel({
        items: 2,
        loop: true,
        // autoplay:true,
        center: true,
        responsive:{
            0:{
                items:1
            },
            1150:{
                items:2
            }
        },
    })

    $('.popup-link').magnificPopup({
        type: 'iframe',
    })

})

const icon = document.querySelector(".menu-bars");
const menu = document.querySelector(".menu");
icon.onclick = function () {
    icon.classList.toggle("slide")
    menu.classList.toggle("slide")
}