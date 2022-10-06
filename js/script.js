

var selector = $('.owl-two');

$('.my-next-button').click(function() {
  selector.trigger('next.owl.carousel');
});

$('.my-prev-button').click(function() {
  selector.trigger('prev.owl.carousel');
});


    $(document).ready(function(){
    $('.owl-one').owlCarousel({
        loop: true,
            margin: 10,
            navRewind: false,
            dots:false,

            autoplay:true,
            autoplayTimeout:10000,
            
            responsive: {
              0: {
                items: 1,
                autoplay:true,
                autoplayTimeout:5000,
              },
              600: {
                items: 2,
                autoplay:true,
                autoplayTimeout:5000,
              },
              1000: {
                items: 3
              }
            }
    });

    $('.owl-two').owlCarousel({
        loop: true,
        margin: 10,
        navRewind: false,
        dots:false,
        nav:false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsive: {
            0: {
            items: 1
            },
            600: {
            items: 2
            },
            1000: {
            items: 3
            }
        }
    });

    
});