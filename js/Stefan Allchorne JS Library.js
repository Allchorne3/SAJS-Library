// ================================================================================ //
// == SCROLL EVENTS =============================================================== //                                                           
// ================================================================================ //

// DONT FORGET TO ADD THIS
var wScroll = $(this).scrollTop();

$(window).scroll(function(){
    // ADD CODE HERE
});

//===============================================
// 1. PARALLAX ON AN ELEMENT
//===============================================
function elementPara(div, speed){
	var wScroll = $(this).scrollTop();
	$(div).css({'transform':'translate(-50%, '+ -wScroll/speed +'px)'});
}
// TO CALL: elementPara('Element Name', Speed) | E.G. elementPara('.headerList', 5);


//===============================================
// 2. PARALLAX ON A BACKGROUND
//===============================================
function bgPara(container, speed){
	var wScroll = $(this).scrollTop();
	$(container).css({'background-position':'center '+ wScroll/speed +'px'});
}
// TO CALL: bgPara('Div Name', Speed) | E.G. bgPara('body', 10);


//===============================================
// 3. ADD CLASS TO EACH ELEMENT INDIVIDUALLY
//===============================================
var containerTop = $('.container').offset().top;
var figure = $('.container figure');

if(wScroll > containerTop - 200) {
    figure.each(function(i){
        setTimeout(function(){
            figure.eq(i).addClass('is-showing');
        }, 150 * (i+1));
    });
}
// Set (.container) and (.container figure) to your own elements


//===============================================
// 4. ADD CLASS WHEN IN VIEWPORT
//===============================================

// USING INTERSECTION OBSERVERS
//-----------------------------
document.addEventListener("DOMContentLoaded", function() {
    
    const fadeOn = (entries, observer) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add('appear');
            } else {
                entry.target.classList.remove('appear');
            }
        });
    }

    // Create the observer
    const imageOptions = {
        rootMargin: "0px 0px -200px 0px"
    }

    const observer = new IntersectionObserver(fadeOn, imageOptions);
    const targets = document.querySelectorAll('.slideIn');
    targets.forEach((target) => {
        observer.observe(target);
    })

})


// USING JQUERY - WHEN IT COMES INTO VIEW FROM THE BOTTOM OF THE WINDOW
//---------------------------------------------------------------------
var slideIn = $('.slideIn');

var winTop = $(window).scrollTop(),
    winHeight = $(window).height(),
    winBottom = (winTop + winHeight); 

function in_view(element, offset, className) {
    $.each(element, function(){
        var element = $(this);
        var elementTop = element.offset().top;
        var elementHeight = element.outerHeight();
        var elementBottom = (elementTop + elementHeight);

        if(winBottom > elementTop + offset) {
            element.addClass(className);
        }
    });
}
// TO CALL: if_in_view(element, offset(below element), 'Class Name'); | E.g. if_in_view(slideIn, 70, 'appear');


// USING JQUERY - ONLY ADD CLASS IF ITS IN VIEW (REMOVES CLASS IF NOT IN VIEW)
//----------------------------------------------------------------------------
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
// TO CALL if_in_view(element, 'ClassName'); | E.g. if_in_view(slideIn, 'appear');