// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile, removeClasses } from "./functions.js";
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

document.addEventListener('click', (e) => {
  const target = e.target;
  if (target.closest('.item-payment-plan')) {
    removeClasses(document.querySelectorAll('.item-payment-plan'), '_popup-active');
    target.closest('.item-payment-plan').classList.toggle('_popup-active');
  } else if (!target.closest('.item-payment-plan')) {
    removeClasses(document.querySelectorAll('.item-payment-plan'), '_popup-active');
  }
});
