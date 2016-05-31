/**
 * Created by dscott on 5/7/2016.
 */

$(function() {
    $( 'body' ).showlightbox();

    $('header > nav > ul > li > a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function() {
            window.location.hash = target;
        });
    });

    $( '#site-overlay' ).on( 'click', function() {
        $( 'body' ).closelightbox();
    });
});