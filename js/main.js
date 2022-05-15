$(function() {
        $('.animate-rotate-1').animatedHeadline({
            animationType: 'rotate-1'
        });

        $('.animate-type').animatedHeadline({
            animationType: 'type'
        });

        $('.animate-rotate-2').animatedHeadline({
            animationType: 'rotate-2'
        });

        $('.animate-loading-bar').animatedHeadline({
            animationType: 'loading-bar'
        });

        $('.animate-slide').animatedHeadline({
            animationType: 'slide'
        });

        $('.animate-clip').animatedHeadline({
            animationType: 'clip'
        });

        $('.animate-zoom').animatedHeadline({
            animationType: 'zoom'
        });

        $('.animate-rotate-3').animatedHeadline({
            animationType: 'rotate-3'
        });

        $('.animate-scale').animatedHeadline({
            animationType: 'scale'
        });

        $('.animate-push').animatedHeadline({
            animationType: 'push'
        });

        $('.slider').slick({
            arrows:false,
            asNavFor:'.bottom'
        })

        $('.bottom').slick({
            arrows:true,
            slidesToShow:3,
            centerMode:true,
            centerPadding:"0",
            prevArrow:'<i class="fas fa-long-arrow-alt-right next"></i>',
            nextArrow:'<i class="fas fa-long-arrow-alt-left prev"></i>',
            asNavFor:'.slider'
        })

        $(".item-two").mouseenter(function(){
            $(".item-two .round").css("transform","scale(1)")
            $(".item-six .round").css("transform","scale(1)")
            $(".line2").css("width","39%")
            $(".h-two").css("opacity",".5")
            
           
        })

        $(".item-two").mouseleave(function(){
            $(".item-two .round").css("transform","scale(.8)")
            $(".item-six .round").css("transform","scale(.5)")
            $(".line2").css("width","17%")
            $(".h-two").css("opacity","1")
        })

        $(".item-three").mouseenter(function(){
            $(".item-two .round").css("transform","scale(1)")
            $(".item-six .round").css("transform","scale(1)")
            $(".item-three .round").css("transform","scale(1)")
            $(".item-seven .round").css("transform","scale(1)")
            $(".line2").css("width","61%")
            $(".h-three").css("opacity",".5")
        })

        $(".item-three").mouseleave(function(){
            $(".item-two .round").css("transform","scale(.8)")
            $(".item-six .round").css("transform","scale(.5)")
            $(".item-three .round").css("transform","scale(.8)")
            $(".item-seven .round").css("transform","scale(.5)")
            $(".line2").css("width","17%")
            $(".h-three").css("opacity","1")
        })

        $(".item-four").mouseenter(function(){
            $(".item-two .round").css("transform","scale(1)")
            $(".item-six .round").css("transform","scale(1)")
            $(".item-three .round").css("transform","scale(1)")
            $(".item-seven .round").css("transform","scale(1)")
            $(".item-four .round").css("transform","scale(1)")
            $(".item-eight .round").css("transform","scale(1)")
            $(".line2").css("width","100%")
            $(".h-four").css("opacity",".5")
        })

        $(".item-four").mouseleave(function(){
            $(".item-two .round").css("transform","scale(.8)")
            $(".item-six .round").css("transform","scale(.5)")
            $(".item-three .round").css("transform","scale(.8)")
            $(".item-seven .round").css("transform","scale(.5)")
            $(".item-four .round").css("transform","scale(.8)")
            $(".item-eight .round").css("transform","scale(.5)")
            $(".line2").css("width","17%")
            $(".h-four").css("opacity","1")
        })
    });