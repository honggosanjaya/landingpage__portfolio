gsap.to(".logo", { duration: 2, borderRadius: "20%", border: "5px solid #666" });
gsap.from(".logo", { duration: 1.5, opacity: 0, scale: 2, ease: "bounce.out" });

var header = document.getElementsByTagName("header")[0];
TweenLite.to(header, 1, { opacity: 1, y: -30 });

var nama = document.getElementById("nama");
TweenLite.from(nama, 1, { autoAlpha: 0, delay: 2 });

var siapa = document.getElementById("siapaAku");
TweenLite.from(siapa, 1, { autoAlpha: 0, delay: 3.5 });

let tlIntro = gsap.timeline({
  scrollTrigger: {
    trigger: "#service",
    start: "top bottom",
    toggleActions: "restart none none none",
  },
});

tlIntro.from(".intro", { y: 300, opacity: 0, duration: 1 }, "-=1");

gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".Mwrap",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: () => "+=" + document.querySelector(".Mwrap").offsetWidth,
  },
});

// -------------------------------------------------------------------------
const contact__aside = document.getElementsByClassName("contact__aside")[0];
const contact__form = document.getElementsByClassName("contact__form")[0];

const t1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#contact",
    start: "center bottom",
    toggleActions: "restart none none none",
  },
});

t1.fromTo(contact__aside, 1, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut });
t1.fromTo(contact__form, 1, { x: "100%" }, { x: "0", ease: Power2.easeInOut }, "-=1");

// -------------------------------------------------------------------------
const working__image = document.querySelectorAll(".working__image");
const working__content = document.querySelectorAll(".working__content");

const t2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#working",
    start: "center bottom",
    toggleActions: "restart none none none",
  },
});

t2.fromTo(working__image[0], 1.1, { opacity: 0, rotation: 50 }, { opacity: 1, rotation: 0, ease: Power2.easeInOut });

t2.fromTo(working__content[0], 1.1, { opacity: 0, top: "100%" }, { opacity: 1, top: "50%", ease: Power2.easeInOut });
