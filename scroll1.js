gsap.from("#mask-stroke", {
  drawSVG: "0%",
  scrollTrigger: {
    trigger: "#page",
    start: "-7% top",
    end: "bottom+=20% bottom",
    scrub: 1
  }
});

gsap.from("#stroke", {
  "--dashOffset": 1000,
  delay: 1,
  scrollTrigger: {
    trigger: "#page",
    start: "-5% top",
    end: "bottom+=20% bottom",
    scrub: 1
  }
});

let text = gsap.utils.toArray(".revealer-inner");
text.forEach((el, i) => {
  gsap.from(el, {
    yPercent: 120,
    duration: 1,
    delay: el.classList.contains("page-title-secondary") ? 2 : 1,
    scrollTrigger: {
      trigger: el,
      start: "top center",
      end: "bottom top",
      toggleActions: "restart pause resume reset"
    }
  });
});

let images = gsap.utils.toArray(".revealer-img");
images.forEach((el) => {
  gsap.from(el, {
    opacity: 0,
    yPercent: 10,
    scale: 1.2,
    duration: 2,
    scrollTrigger: {
      trigger: el,
      start: "top bottom",
      end: "bottom top",
      //markers: true,
      toggleActions: "restart pause resume pause"
    }
  });
});

// const observer = new window.IntersectionObserver(([entry]) => {
//   if (entry.isIntersecting) {
//     console.log(entry)
//     entry.target.dataset.visible = true;
//   } else {
//     delete entry.target.dataset.visible;
//   }
// }, {
//   root: null,
//   threshold: 0,
// })

// document
//   .querySelectorAll('.revealer')
//   .forEach(el => {
//     if (elementInViewport(el)) {
//       el.dataset.visible = true;
//     }
//     observer.observe(el);
//   });

// function elementInViewport(el) {
//   var rect = el.getBoundingClientRect();

//   return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }