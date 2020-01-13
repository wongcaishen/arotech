function splitScroll(){
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '200%',
        triggerElement:'.about-title',
        triggerHook: 0
    })
    .setPin('.about-title')
    .addIndicators()
    .addTo(controller);
}

splitScroll();

$('.testimonial-pics img').click(function(){
    $(".testimonial-pics img").removeClass("active");
    $(this).addClass("active");

    $(".testimonial").removeClass("active");
    $("#"+$(this).attr("alt")).addClass("active");
});