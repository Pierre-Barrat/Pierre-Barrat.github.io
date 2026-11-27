// Menu mobile
var toggle = document.querySelector('.menu-toggle');
var menu = document.getElementById('menu');
if (toggle && menu) {
  toggle.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  menu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Année du pied de page
var year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Surligne le lien de la section visible (menu de l'accueil, sommaire des pages projet)
var links = document.querySelectorAll('.menu a[href^="#"], .toc a[href^="#"]');
if (links.length && 'IntersectionObserver' in window) {
  var byId = {};
  links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      links.forEach(function (a) { a.removeAttribute('aria-current'); });
      var current = byId[entry.target.id];
      if (current) current.setAttribute('aria-current', 'true');
    });
  }, { rootMargin: '-35% 0px -60% 0px' });
  Object.keys(byId).forEach(function (id) {
    var target = document.getElementById(id);
    if (target) observer.observe(target);
  });
}
