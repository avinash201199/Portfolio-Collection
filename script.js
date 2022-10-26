$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrolly > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    //slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrolTop:0});
    });

    //typing animation script
                var typed = new typed(".typing",{
     String:["pravin","bante","ssssss" ],
     typespeed:100,
     backspeed:60,
     loop:true
    });
});