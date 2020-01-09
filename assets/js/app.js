$(function() {
    let header = $("#header"),
        introHeight = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    // Fixed header
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        
        if (scrollOffset >= introHeight + 50) {
            header.addClass("fixed")
        } else {
            header.removeClass("fixed")
        }
    }
    // 

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

            $("#nav a").removeClass("active");
           
            $('#nav').toggleClass("active");
            $('#nav-toggle').toggleClass("active");

            $("html, body").animate ({
                scrollTop: blockOffset - 50
            }), 800;
    });


    // Menu nav toggle

    $('#nav-toggle').on('click', function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $('#nav').toggleClass("active");
        
    })
// Mogo loo
    $('#mogo').on('click', function(event) {
        event.preventDefault();

        $('#nav-toggle').removeClass("active");
        $('#nav').removeClass("active");
        
    })
    
    // Collapse
    let accordionaHeader = document.querySelectorAll('.accordion__header'),
        accordionItem = document.querySelectorAll('.accordion__item');

    for (let i = 0; i < accordionaHeader.length; i++) {
        accordionaHeader[i].addEventListener('click', function() {
                accordionItem[i].classList.toggle("active");
                $(accordionItem[i]).siblings().removeClass("active");
            
        });
    }
});;