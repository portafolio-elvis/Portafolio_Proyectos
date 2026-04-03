// ===========================
// NAV: MOBILE TOGGLE
// ===========================
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
const navbar    = document.getElementById('navbar');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  const [s1, s2, s3] = navToggle.querySelectorAll('span');
  s1.style.transform  = isOpen ? 'translateY(7px) rotate(45deg)' : '';
  s2.style.opacity    = isOpen ? '0' : '1';
  s3.style.transform  = isOpen ? 'translateY(-7px) rotate(-45deg)' : '';
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.querySelectorAll('span').forEach(s => {
      s.style.transform = '';
      s.style.opacity   = '1';
    });
  });
});

// ===========================
// NAV: SCROLL SHADOW
// ===========================
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 24);
});

// ===========================
// NAV: ACTIVE LINK ON SCROLL
// ===========================
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav__link');

const activateLink = () => {
  const scrollY = window.scrollY + 120;
  sections.forEach(section => {
    const top    = section.offsetTop;
    const height = section.offsetHeight;
    const id     = section.getAttribute('id');
    const link   = document.querySelector(`.nav__link[href="#${id}"]`);
    if (link) {
      link.classList.toggle('active', scrollY >= top && scrollY < top + height);
    }
  });
};

window.addEventListener('scroll', activateLink, { passive: true });

// ===========================
// SCROLL REVEAL: PROJECT CARDS
// ===========================
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 150);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));

// ===========================
// CONTACT FORM — Formspree
// ===========================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const btn        = contactForm.querySelector('.btn--send');
  const original   = btn.textContent;
  const isLocalhost = location.hostname === 'localhost' || location.hostname === '127.0.0.1';

  btn.textContent = 'ENVIANDO...';
  btn.disabled    = true;

  // En localhost simula el envío (Formspree bloquea localhost)
  if (isLocalhost) {
    setTimeout(() => {
      btn.textContent      = 'MENSAJE ENVIADO ✓';
      btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
      btn.style.color      = '#fff';
      contactForm.reset();
      setTimeout(() => {
        btn.textContent      = original;
        btn.style.background = '';
        btn.style.color      = '';
        btn.disabled         = false;
      }, 3500);
    }, 1000);
    return;
  }

  try {
    const res = await fetch(contactForm.action, {
      method:  'POST',
      body:    new FormData(contactForm),
      headers: { Accept: 'application/json' }
    });

    if (res.ok) {
      btn.textContent      = 'MENSAJE ENVIADO ✓';
      btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
      btn.style.color      = '#fff';
      contactForm.reset();

      setTimeout(() => {
        btn.textContent      = original;
        btn.style.background = '';
        btn.style.color      = '';
        btn.disabled         = false;
      }, 3500);
    } else {
      throw new Error();
    }
  } catch {
    btn.textContent      = 'Error al enviar. Intenta de nuevo.';
    btn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
    btn.style.color      = '#fff';

    setTimeout(() => {
      btn.textContent      = original;
      btn.style.background = '';
      btn.style.color      = '';
      btn.disabled         = false;
    }, 3500);
  }
});
