$(document).ready(function () {

    $('.burger-icon').click(function () {
        $(this).toggleClass('rotation');
        $('.burger-navigation').toggleClass('burger-scale');
        $('body').toggleClass('lock');
        $('.responsive-header').toggleClass('responsive-header-black');
    });
    /*
        $('.feedback-range').slick({
            infinite: true,

            slidesToShow: 3,

            slidesToScroll: 3,

            dots: true,
            responsive: [
                {
                    breakpoint: 1020,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 3,
                        infinite: true,
                        dots:true,

                    }
                },
                {
                    breakpoint: 695,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 3,
                        infinite: true,
                        dots:true,
                        arrows:false,

                    }
                },
            ]
        });

        let buttons = $('.slick-dots li button');
        buttons[0].innerHTML = "Здравоохранение";
        buttons[1].innerHTML = "Бизнес ";
        buttons[2].innerHTML = "Семья";
        buttons[3].innerHTML = "ЖКХ ";
        buttons[4].innerHTML = "Недвижимость ";
        buttons[5].innerHTML = "Все";

        for (let i = 6; i <buttons.length; i++) {
            $(buttons[i]).hide();
        }
    */
    $('.partners-range').slick({
        infinite: true,

        slidesToShow: 4,

        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 730,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 490,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
        ]

    });

});