import less from './../less/styles.less';
import $ from 'jquery';

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