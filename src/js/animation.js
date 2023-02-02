

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger);


gsap.timeline(
  {
    scrollTrigger: {
      trigger: ".payment-plan",
      start: "top-=100 top",
      end: "bottom center",

      markers: true
    }
  }
).from('.item-payment-plan__prc span', {
  innerText: 0,
  duration: 6,
  snap: { innerText: 1 },
  stagger: 0.1
});