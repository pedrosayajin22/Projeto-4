$(function () {
    $('section.mosaico .container .mosaico-wrapper').slick({
        centerMode: false,
        slidesToShow: 6,
        arrow: false,
        reponsive: [

            {
                breakpoint: 768,
                settings: {
                    arrow: false,
                    centerMode: true,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    })

    $('.tratamentos .container').slick({
        centerMode: false,
        slidesToShow: 3,
        arrows: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true,
                    infinite: false,
                    centerMode: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    dots: true,
                    infinite: false,
                    centerMode: false,
                    slidesToShow: 1

                }
            }
        ]
    })

    $('.depoimentos .container').slick({
        centerMode: false,
        slidesToShow: 1,
        arrows: false,
        infinite: false,
        dots:true
    })
})

