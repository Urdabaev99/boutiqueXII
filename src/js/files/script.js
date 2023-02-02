// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";



document.querySelectorAll('._btn').forEach(btn => {
  btn.addEventListener('mouseover', (e) => {
    const targetElement = e.target;
    btn.classList.add('_active');
  });
  btn.addEventListener('mouseout', (e) => {
    const targetElement = e.target;
    targetElement.classList.remove('_active');
  });
});

// document.addEventListener('click', (e) => {
//   const target = e.target;
//   if (target.closest('.gallery__item')) {
//     e.preventDefault();
//   }
// });
