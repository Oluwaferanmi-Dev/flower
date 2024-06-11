window.onload = () => {
  const splashScreen = document.getElementById('splash-screen');
  const yesButton = document.getElementById('yes-button');
  const flowers = document.querySelector('.flowers');
  
  yesButton.addEventListener('click', () => {
    splashScreen.classList.add('hidden');
    flowers.classList.remove('hidden');
    document.body.classList.remove('not-loaded');
  });
};

onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};