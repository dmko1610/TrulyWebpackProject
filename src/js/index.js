import less from './../less/styles.less';
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.less';
import 'owl.carousel/dist/assets/owl.theme.default.less';
import 'owl.carousel';

$(function() {
    $('.toggles button').click(function() {
        let get_id = this.id;
        let get_current = $('.posts .' + get_id);
         
        $('.post').not(get_current).hide(500);
        get_current.show(500);
    });

    $('#showall').click(function() {
        $('.post').show(500);
    });
});


$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 7,
        margin: 10,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000
    });
  });
if ($(window).width() < 420) {
    $('.owl-carousel').owlCarousel({
        items: 3,
        margin: 10,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000
    });
}