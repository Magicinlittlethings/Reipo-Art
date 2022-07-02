gsap.registerPlugin(ScrollTrigger);
   
    
  
//const tl = gsap.timeline({
 // scrollTrigger: {
  // trigger: '.section_1_01',
  // scrub: 3,
 //  start: "top 7%",
   
  //pin:'.first-section',
  // markers:true
//}
//});

gsap.from('.reipo',  {
   y:-65,
    duration:3,
    ease: Power3.easeInOut,
   
})

gsap.from('.nav',  {
    y:-55,
     duration:3,
     ease: Power3.easeInOut,
    
 })
 const tl = gsap.timeline();
 tl.from('.seen',  {
     autoAlpha:0,
     duration:2,
     ease: Power3.easeInOut,
    
 })
.from('.best',  {
    autoAlpha:0,
    duration:1,
    ease: Power3.easeInOut,
   
})
.from('.download',  {
    autoAlpha:0,
    duration:1,
    ease: Power3.easeInOut,
   
})
gsap.to('.firstimg',  {
    scaleX:1.3,
    x:-200,
    duration:4,
    ease: Power3.easeInOut,
     scrollTrigger: {
   trigger: '.first',
   scrub: 1,
   start: "top",
   
 
}
   
})
const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.ab1',
      
        
        start: "top 80%",
        
      
     }
    });
 tl2.from('.ab1',  {
     autoAlpha:0,
     duration:1,
     ease: Power1.easeInOut,
    
 })
 .from('.ab2',  {
    autoAlpha:0,
    duration:1,
    ease: Power1.easeInOut,
   
})
.from('.ab3',  {
    autoAlpha:0,
    duration:1,
    ease: Power1.easeInOut,
   
})
gsap.from('.ab4',  {
    autoAlpha:0,
    duration:2,
    ease: Power1.easeInOut,
    scrollTrigger: {
        trigger: '.ab4',
        
        
        start: "top 80%",
        
      
     }
   
})
const tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.ab5',
        
        toggleActions: "play none reverse none ",
        start: "top 90%",
        
      
     }
    });
tl3.from('.ab5',  {
    autoAlpha:0,
    y:50,
    duration:3,
    ease: Power3.easeInOut,
   
})
.from('.baby',  {
    autoAlpha:0,
    
    duration:2,
    ease: Power1.easeInOut,
   
})

const tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: '.art1',
        
        
        start: "top 80%",
        
      
     }
    });
 tl4.from('.art1',  {
     autoAlpha:0,
     duration:1,
     ease: Power1.easeInOut,
    
 })
 .from('.art2',  {
    autoAlpha:0,
    duration:1,
    ease: Power1.easeInOut,
   
})
gsap.from('.purple',  {
    y:300,
    duration:4,
    ease: Power3.easeInOut,
    scrollTrigger: {
        trigger: '.purple',
        
        
        start: "top 80%",
        end:"top 40%",
        
        scrub:1,
        
        
      
     }
    })



