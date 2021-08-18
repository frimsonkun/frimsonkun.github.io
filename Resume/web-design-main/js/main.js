
$('.single-item').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows:true,
    dots:true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          
          slidesToShow: 1,
          autoplay: true,
    autoplaySpeed: 4000,
        }
      }]
  });