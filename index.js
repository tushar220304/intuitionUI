// Radhe Radhe


$(document).ready(function() {
    navbar = $('.navbar');
    expandedNav = $('.expanded-nav');
    $('.expand-btn').on('click', function() {
        childElements = $(this).find('span');
        if (expandedNav.attr('expand') == 'false') {
            expandedNav.removeClass('close-nav');
            navbar.addClass('black');
            childElements.addClass('initial');
            childElements.removeClass('close');
            expandedNav.css('display', 'flex');
            expandedNav.attr('expand', 'true');
        }
        else {
            expandedNav.addClass('close-nav');
            navbar.removeClass('black');
            childElements.removeClass('initial');
            childElements.addClass('close');
            // expandedNav.css('display', 'none');
            expandedNav.attr('expand', 'false');
        }
    });
});
  
$(window).scroll(function() {
    var element = $('header');
    var scrollPosition = $(window).scrollTop();
    if (scrollPosition > 150) { 
        element.css({
            'transform': 'translateY(-100%)',
            'position': 'fixed',
            'background-color': 'white',
            'box-shadow': '0 0 10px #ddd',
            'animation': 'headerFixed .3s forwards'
        });

        $('header .brand-logo a, header .nav-links a, header .nav-btn a svg').css({
            'color': 'black',
            'fill': 'black'
        });
    } else {
        element.removeAttr('style');
        $('header .brand-logo a, header .nav-links a, header .nav-btn a svg').removeAttr('style');
    }
});
  