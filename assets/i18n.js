/**
 * Kamarooms /open — language toggle
 * Default: Russian. Persisted in localStorage.
 * Toggle: body.lang-ru / body.lang-en + CSS hides the other.
 */
(function() {
  var saved = localStorage.getItem('kamarooms-lang') || 'ru';
  document.body.classList.add('lang-' + saved);
  document.documentElement.lang = saved;

  var btn = document.querySelector('.lang-toggle');
  if (!btn) return;

  function update(lang) {
    document.body.classList.remove('lang-ru', 'lang-en');
    document.body.classList.add('lang-' + lang);
    document.documentElement.lang = lang;
    btn.textContent = lang === 'ru' ? 'EN' : 'RU';
    localStorage.setItem('kamarooms-lang', lang);
    // Update <option> elements with data-ru/data-en attributes
    var opts = document.querySelectorAll('option[data-' + lang + ']');
    for (var i = 0; i < opts.length; i++) {
      opts[i].textContent = opts[i].getAttribute('data-' + lang);
    }
  }

  update(saved);

  btn.addEventListener('click', function() {
    var current = document.body.classList.contains('lang-en') ? 'en' : 'ru';
    update(current === 'ru' ? 'en' : 'ru');
  });
})();
