
function fadeOut(){

    TweenMax.to(".myBtn", 1, {
        y: -100,
        opacity: 0
    });

    TweenMax.to(".slide-1-h4", 2, {
        y: -400,
        opacity: 0,
        ease: Power2.easeInOut,
        delay: 0.5
    });
    TweenMax.to(".slide-1-h5", 2, {
        y: -400,
        opacity: 0,
        ease: Power2.easeInOut,
        delay: 0.9
    });
    TweenMax.to(".slide-1-p", 2, {
        y: -600,
        opacity: 0,
        ease: Power2.easeInOut,
        delay: 1.3
    });
    TweenMax.to(".navigation-border1", 2, {
        y: -600,
        opacity: 0,
        ease: Power2.easeInOut,
        delay: 2.2
    });
    TweenMax.to(".navigation-border2", 2, {
        y: -800,
        opacity: 0,
        ease: Power2.easeInOut,
        delay: 2.1
    });
    TweenMax.to(".line-3", 1.3, {
        y: -100,
        opacity: 0,
        ease: Power2.easeInOut,
        delay: 2.8
    });
    TweenMax.to(".line-2", 1.3, {
        y: -100,
        opacity: 0,
        ease: Power2.easeInOut,
        delay: 2.6
    });
    TweenMax.to(".line-1", 1.3, {
        y: -100,
        opacity: 0,
        ease: Power2.easeInOut,
        delay: 2.4
    });
    TweenMax.to(".overlay-foreground", 2, {
        opacity: 0,
        ease: Power2.easeInOut,
        delay: 3.6
    });
    TweenMax.to(".navigation", 2, {
        x: -600,
        opacity: 0,
        ease: Power2.easeInOut,
        delay: 4.4
    });
    TweenMax.to(".overlay-background", 2, {
        x: 600,
        opacity: 0,
        ease: Power2.easeInOut,
        delay: 4.4
    });
    TweenMax.to(".mail", 1, {
        opacity: 0,
        ease: Power2.easeInOut,
        delay: 3.4
    });
    TweenMax.to(".border2", 1, {
        opacity: 0,
        ease: Power2.easeInOut,
        delay: 3.5
    });
    TweenMax.to(".instagram", 1, {
        opacity: 0,
        ease: Power2.easeInOut,
        delay: 3.6
    });
    TweenMax.to(".border3", 1, {
        opacity: 0,
        ease: Power2.easeInOut,
        delay: 3.7
    });
    TweenMax.to(".facebook", 1, {
        opacity: 0,
        ease: Power2.easeInOut,
        delay: 3.8
    });
    TweenMax.to(".border4", 1, {
        opacity: 0,
        ease: Power2.easeInOut,
        delay: 3.9
    });
    TweenMax.to(".twitter", 1, {
        opacity: 0,
        ease: Power2.easeInOut,
        delay: 4
    });
    TweenMax.to(".social-media2", 2, {
        x: 600,
        opacity: 0,
        ease: Power2.easeInOut,
        delay: 4.4
    });
    TweenMax.to(".overlay", 2, {
        delay: 5.4,
        top: "-110%",
        ease: Expo.easeInOut
    });
    TweenMax.to(".overlay-2", 1.8, {
        delay: 6,
        top: "-110%",
        ease: Expo.easeInOut
    });
//-------------------------

var element = document.querySelector(".waterfall-box1");
    element.classList.add("active-box1");
var element = document.querySelector(".waterfall-box2");
    element.classList.add("active-box2");    
var element = document.querySelector(".waterfall-box3");
    element.classList.add("active-box3");
var element = document.querySelector(".waterfall-box4");
    element.classList.add("active-box4");

var element = document.querySelector(".img-waterfall-shadow");
    element.classList.add("img-waterfall-shadow-active");

var element = document.querySelector(".content-foreground-box");
    element.classList.add("content-foreground-box-active");

    TweenMax.from(".content", 2, {
        delay: 6,
        opacity: 0,
        y: 800,
        ease: Power2.easeInOut
    });
    TweenMax.to(".content", 2, {
        opacity: 1,
        y: 0,
        delay: 6,
        ease: Power2.easeInOut
    })
    TweenMax.from(".img-waterfall1", 2, {
        delay: 6.4,
        opacity: 0,
        x: -400,
        rotation:"-90deg",
        ease: Power2.easeInOut
    });
    TweenMax.to(".img-waterfall1", 2, {
        opacity: 1,
        x: 0,
        delay: 6.4,
        ease: Power2.easeInOut
    })
    TweenMax.from(".active-box3", 2, {
        delay: 6.6,
        opacity: 0,
        x: -400,
        rotation:"-180deg",
        ease: Power2.easeInOut
    });
    TweenMax.to(".active-box3", 2, {
        opacity: 1,
        x: 0,
        delay: 6.6,
        ease: Power2.easeInOut
    })
    TweenMax.from(".border3-box3", 2, {
        delay: 7.3,
        y:-400,
        ease: Power2.easeInOut
    });
    TweenMax.to(".border3-box3", 2, {
        x: 0,
        delay: 7.3,
        ease: Power2.easeInOut
    })
    TweenMax.from(".instagram-slide2", 2, {
        delay: 7.4,
        y:-400,
        rotation:"-720deg",
        ease: Power2.easeInOut
    });
    TweenMax.to(".instagram-slide2", 2, {
        x: 0,
        delay: 7.4,
        ease: Power2.easeInOut
    })
    TweenMax.from(".border2-box3", 2, {
        delay: 7.5,
        y:-400,
        ease: Power2.easeInOut
    });
    TweenMax.to(".border2-box3", 2, {
        x: 0,
        delay: 7.5,
        ease: Power2.easeInOut
    })  
    TweenMax.from(".mail-slide2", 2, {
        delay: 7.6,
        y:-400,
        rotation:"-720deg",
        ease: Power2.easeInOut
    });
    TweenMax.to(".mail-slide2", 2, {
        x: 0,
        delay: 7.6,
        ease: Power2.easeInOut
    })
    TweenMax.from(".border1-box3", 2, {
        delay: 7.7,
        y:-400,
        ease: Power2.easeInOut
    });
    TweenMax.to(".border1-box3", 2, {
        x: 0,
        delay: 7.7,
        ease: Power2.easeInOut
    })
    TweenMax.from(".img-waterfall3", 2, {
        delay: 6.4,
        opacity: 0,
        x: 400,
        rotation:"-90deg",
        ease: Power2.easeInOut
    });
    TweenMax.to(".img-waterfall3", 2, {
        opacity: 1,
        x: 0,
        delay: 6.4,
        ease: Power2.easeInOut
    })
    TweenMax.from(".active-box4", 2, {
        delay: 6.6,
        opacity: 0,
        x: 400,
        rotation:"-180deg",
        ease: Power2.easeInOut
    });
    TweenMax.to(".active-box4", 2, {
        opacity: 1,
        x: 0,
        delay: 6.6,
        ease: Power2.easeInOut
    })
    TweenMax.from(".border3-box4", 2, {
        delay: 7.3,
        y:400,
        ease: Power2.easeInOut
    });
    TweenMax.to(".border3-box4", 2, {
        x: 0,
        delay: 7.3,
        ease: Power2.easeInOut
    })
    TweenMax.from(".twitter-slide2", 2, {
        delay: 7.4,
        y:400,
        rotation:"-720deg",
        ease: Power2.easeInOut
    });
    TweenMax.to(".twitter-slide2", 2, {
        x: 0,
        delay: 7.4,
        ease: Power2.easeInOut
    })
    TweenMax.from(".border2-box4", 2, {
        delay: 7.5,
        y:400,
        ease: Power2.easeInOut
    });
    TweenMax.to(".border2-box4", 2, {
        x: 0,
        delay: 7.5,
        ease: Power2.easeInOut
    })  
    TweenMax.from(".facebook-slide2", 2, {
        delay: 7.6,
        y:400,
        rotation:"-720deg",
        ease: Power2.easeInOut
    });
    TweenMax.to(".facebook-slide2", 2, {
        x: 0,
        delay: 7.6,
        ease: Power2.easeInOut
    })
    TweenMax.from(".border1-box4", 2, {
        delay: 7.7,
        y:400,
        ease: Power2.easeInOut
    });
    TweenMax.to(".border1-box4", 2, {
        x: 0,
        delay: 7.7,
        ease: Power2.easeInOut
    })
    TweenMax.from(".img-waterfall2", 2, {
        delay: 8.1,
        opacity: 0,
        y: 800,
        ease: Power2.easeInOut
    });
    TweenMax.to(".img-waterfall2", 2, {
        opacity: 1,
        y: 0,
        delay: 8.1,
        ease: Power2.easeInOut
    })
    TweenMax.from(".waterfall-box1", 2, {
        delay: 8.2,
        opacity: 0,
        x: 1000,
        ease: Power2.easeInOut
    });
    TweenMax.to(".waterfall-box1", 2, {
        delay: 8.2,
        opacity: 1,
        x: 0,
        ease: Power2.easeInOut
    });
    TweenMax.from(".content-foreground-box", 2, {
        delay: 9.2,
        opacity: 0,
        y: -1000,
        ease: Power2.easeInOut
    });
    TweenMax.to(".content-foreground-box", 2, {
        delay: 9.2,
        opacity: 0.4,
        y: 0,
        ease: Power2.easeInOut
    });
    TweenMax.from(".content-paragraph", 2, {
        delay: 9.4,
        opacity: 0,
        x: 1000,
        ease: Power2.easeInOut
    });
    TweenMax.from(".content-h1", 2, {
        delay: 9.4,
        opacity: 0,
        x: -1000,
        ease: Power2.easeInOut
    });
    TweenLite.from(".waterfall-box2", 2, { 
        ease: Back.easeOut.config(1.7), 
        x: -2000, 
        delay: 9 });
    TweenLite.to(".waterfall-box2", 2, { 
        ease: Back.easeOut.config(1.7), 
        x: 0,
        delay: 9  });
    TweenMax.from(".img-waterfall-shadow", 2, {
        delay: 10,
        opacity: 0,
        ease: Power2.easeInOut
    });
    TweenMax.to(".img-waterfall-shadow", 2, {
        delay: 10,
        opacity: 1,
        ease: Power2.easeInOut
    });
    TweenMax.from(".slide-2-button", 2, {
        delay: 10.4,
        opacity: 0,
        ease: Power2.easeInOut
    });
    TweenMax.to(".slide-2-button", 2, {
        delay: 10.4,
        opacity: 1,
        ease: Power2.easeInOut
    });

    }

