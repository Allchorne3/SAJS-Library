$(window).scroll(function(){

    var slideIn = $('.slideIn');

    var winTop = $(window).scrollTop(), //Top of the window
        winHeight = $(window).height(), //Full height of the window
        winBottom = (winTop + winHeight); //Bottom of the window
    
    function if_in_view(element, className) {
        $.each(element, function(){
            var el = $(this),
                elementHeight = el.outerHeight(), //Height of an element, including padding, margin and border
                elementTop = el.offset().top, //position of the top of the element
                elementBottom = (elementTop + elementHeight); //position of the bottom of the element
            
            //check to see if current container is within viewport
            if((elementBottom >= winTop) && (elementTop <= winBottom)) {
                el.addClass(''+className+'');
            } else {
                el.removeClass(''+className+'');
            }
        })
    }

    // 1st Arugment: Element to test against
    // 2nd Argument: Class to be added. '' are necessary
    if_in_view(slideIn, 'appear');
});