const accordionItems = document.querySelectorAll('.accordion li');

accordionItems.forEach((item) => {
  const input = item.querySelector('input[type="radio"]');
  const label = item.querySelector('label');
  const content = item.querySelector('.content');

  input.addEventListener('click', () => {
    accordionItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.querySelector('.content').classList.remove('active');
      }
    });
    content.classList.toggle('active');
  });

  // Add keyboard navigation
  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      const currentIndex = Array.prototype.indexOf.call(accordionItems, item);
      const nextIndex = e.key === 'ArrowDown' ? currentIndex + 1 : currentIndex - 1;
      const nextItem = accordionItems[nextIndex];

      if (nextItem) {
        nextItem.querySelector('input[type="radio"]').focus();
      }
    }
  });
});
const emailInput = document.querySelector('.email-signup input[type="email"]');
const emailForm = document.querySelector('.email-signup');

emailForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailValue = emailInput.value.trim();

  if (!emailValue || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailValue)) {
    alert('Please enter a valid email address');
    return;
  }

  // Submit the form or perform any other action you want
  console.log('Email submitted:', emailValue);
});

