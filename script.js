// Scroll down click smooth effect
document.querySelector('.scroll-down').addEventListener('click', function(e){
  e.preventDefault();
  document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});
