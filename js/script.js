$(function(){
    $(window).stroll(function(){
        let scrollDistance = $(window).scrollTop();

        $("section").each(function(){
            if($(this).position().top <= scrollDistance){
                $("nav a.active").removeClass("active");
                $("nav a").eq(i).addClass("active");
            }

        });


    });

});




























































