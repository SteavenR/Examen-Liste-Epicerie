//Animation de la nourriture
const foodAnimation = 

gsap.timeline({
  yoyo: true,
  duration: 0.5,
  repeat: -1,
  repeatDelay: 0,
})

.to(".food", {
  duration: 0.5,
  scale: 1.25,
  stagger: 0.25,
    each: 0.5,
  }, "<0.25");


//Animation du crayon
gsap.registerPlugin(ScrollTrigger);

gsap.to('.crayon', { 
  x: '900%',
  rotation: -35,
  scrollTrigger: {
    scrub: true,
    markers: true,
    opacity: 0,
    pin: true,
    start: 'top 75%',
    end: 'bottom 100%',
    trigger: '.boxFormulaire',
    
  }
})

//Animation du formulaire
gsap.to('.boxFormulaire', { 
  opacity: 0,
  scrollTrigger: {
    scrub: 1,
    markers: true,
    start: 'top 75%',
    end: 'bottom 100%',
    trigger: '.boxFormulaire',
  }
});
    