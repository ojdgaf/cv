$(function() {

    /* Smooth Scrolling */

    $('a[href*="#"]').click(function(event) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

        if (target.length) {
            event.preventDefault();

            $('html, body').animate(
              { scrollTop: target.offset().top - $('nav').outerHeight() }, 
              1000, 
              function() {
                  var $target = $(target);
                  $target.focus();
                  if ($target.is(":focus")) {
                    return false;
                  } else {
                    $target.attr('tabindex','-1');
                    $target.focus();
                  }
            });
        }
    });

    /* Make header equal to window height */

    $('header').css({ 'height': $(window).height() });
    $(window).on('resize', function() {
        $('header').css({ 'height': $(window).height() });
        $('body').css({ 'width': $(window).width() })
    });

    /*  Navigation disappearing */

    $(window).scroll(function() {
        $('nav').css('opacity', $(window).scrollTop() / 550);
    });

    /*  Contact form */

    $('#submit').click(function() { 
        var contactName = $('#contactName').val();
        var contactEmail = $('#contactEmail').val();
        var contactSubject = $('#contactSubject').val();
        var contactMessage = $('#contactMessage').val();

        var data = 'contactName=' + contactName +
                    '&contactEmail=' + contactEmail +
                    '&contactSubject=' + contactSubject + 
                    '&contactMessage=' + contactMessage;

        $.ajax({
            type: "POST",
            url: "url",
            data: data,
            success: function(msg) {
                if (msg == 'OK') {
                    $('#message-success').show();
                    $('#contactForm').fadeOut();
                } else {
                    $('#message-warning').show();
                }
            }
        });

        return false;
    });

});