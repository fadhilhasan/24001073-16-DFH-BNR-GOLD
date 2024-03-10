// "user strict";

// Navigation
// const sectionHeroEl = document.querySelector(".section-hero");

// const obs = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];
//     console.log(ent);

//     if (ent.isIntersecting === false) {
//       document.body.classList.add("sticky");
//     }

//     if (ent.isIntersecting === true) {
//       document.body.classList.remove("sticky");
//     }
//   },
//   {
//     // in the viewport
//     root: null,
//     threshold: 0,
//   }
// );
// obs.observe(sectionHeroEl);

// FAQ
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

// // Current year
// const yearEl = document.querySelector(".year");
// const currentYear = new Date().getFullYear();
// yearEl.textContent = currentYear;

// // mobile navigation
// const btnNavEl = document.querySelector(".btn-mobile-nav");
// const headerEl = document.querySelector(".navigation");

// btnNavEl.addEventListener("click", function () {
//   headerEl.classList.toggle("nav-open");
// });
