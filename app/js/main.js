$(function(){
    $('.slider__items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrow: false
      });

     $('.menu__btn').on('click', function(){
        $('.menu__btn').toggleClass('menu__btn--opened'),
        $('.menu__list').toggleClass('menu__list--active');
     }); 
});