// Changing word
const el = document.getElementById("door-word");
if (el) {
  const doors = ["Israeli Door", "Turkish Doors", "Sliding Doors", "Double Doors", "local Doors"];
  let index = 0;

  function rotate() {
    el.classList.remove("fade-in");
    el.classList.add("fade-out");
    setTimeout(() => {
      index = (index + 1) % doors.length;
      el.textContent = doors[index];
      el.classList.remove("fade-out");
      el.classList.add("fade-in");
    }, 350);
  }
  setInterval(rotate, 3000);
}

// Hero slider
const track = document.getElementById("track");
const dotsContainer = document.getElementById("dots");
if (track && dotsContainer) {
  const slides = document.querySelectorAll(".slide");
  const total = slides.length;
  let current = 0;
  let timer;

  slides.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.className = "dot" + (i === 0 ? " active" : "");
    dot.addEventListener("click", () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  function updateDots() {
    document.querySelectorAll(".dot").forEach((d, i) => {
      d.classList.toggle("active", i === current);
    });
  }

  function goTo(index) {
    current = (index + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    updateDots();
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  document.getElementById("nextBtn").addEventListener("click", () => { next(); resetTimer(); });
  document.getElementById("prevBtn").addEventListener("click", () => { prev(); resetTimer(); });

  function startTimer() { timer = setInterval(next, 9000); }
  function resetTimer() { clearInterval(timer); startTimer(); }
  startTimer();
}

// Second slider
const slider2Track = document.getElementById("slider2Track");
if (slider2Track) {
  const slider2DotsContainer = document.getElementById("slider2Dots");
  const slider2Counter = document.getElementById("slider2Counter");
  const slider2Slides = document.querySelectorAll(".slide2");
  const slider2Total = slider2Slides.length;
  let slider2Current = 0;
  let slider2Timer;

  slider2Slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "slider2-dot" + (i === 0 ? " active" : "");
    dot.setAttribute("aria-label", "Go to slide " + (i + 1));
    dot.addEventListener("click", () => { slider2GoTo(i); slider2ResetTimer(); });
    slider2DotsContainer.appendChild(dot);
  });

  function slider2UpdateUI() {
    document.querySelectorAll(".slider2-dot").forEach((d, i) => {
      d.classList.toggle("active", i === slider2Current);
    });
    slider2Counter.textContent = (slider2Current + 1) + " / " + slider2Total;
  }

  function slider2GoTo(index) {
    slider2Current = (index + slider2Total) % slider2Total;
    slider2Track.style.transform = `translateX(-${slider2Current * 100}%)`;
    slider2UpdateUI();
  }

  function slider2Next() { slider2GoTo(slider2Current + 1); }
  function slider2Prev() { slider2GoTo(slider2Current - 1); }

  document.getElementById("slider2Next").addEventListener("click", () => { slider2Next(); slider2ResetTimer(); });
  document.getElementById("slider2Prev").addEventListener("click", () => { slider2Prev(); slider2ResetTimer(); });

  function slider2StartTimer() { slider2Timer = setInterval(slider2Next, 3000); }
  function slider2ResetTimer() { clearInterval(slider2Timer); slider2StartTimer(); }
  slider2StartTimer();
}

// FAQ
const questions = document.querySelectorAll(".faq-question");
if (questions.length) {
  questions.forEach((btn) => {
    btn.addEventListener("click", () => {
      const answer = btn.nextElementSibling;
      const isOpen = btn.classList.contains("open");
      questions.forEach((b) => {
        b.classList.remove("open");
        b.nextElementSibling.classList.remove("open");
        b.nextElementSibling.style.maxHeight = "0";
      });
      if (!isOpen) {
        btn.classList.add("open");
        answer.classList.add("open");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
}

// Scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.3 });
document.querySelectorAll('.animate').forEach(el => observer.observe(el));

// Scroll to top
const scrollTopBtn = document.getElementById("scrollTop");
if (scrollTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  });
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Index page hamburger
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    const icon = hamburger.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
  });
  navMenu.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      const icon = hamburger.querySelector('i');
      icon.classList.add('fa-bars');
      icon.classList.remove('fa-xmark');
    });
  });
}

// About page hamburger
const hamburgerAbout = document.getElementById('hamburger-about');
const navMenuAbout = document.getElementById('nav-menu-about');
if (hamburgerAbout && navMenuAbout) {
  hamburgerAbout.addEventListener('click', () => {
    navMenuAbout.classList.toggle('open');
    const icon = hamburgerAbout.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
  });
  navMenuAbout.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', () => {
      navMenuAbout.classList.remove('open');
      const icon = hamburgerAbout.querySelector('i');
      icon.classList.add('fa-bars');
      icon.classList.remove('fa-xmark');
    });
  });
}


// about us more button

const aboutText = document.getElementById("about-text");
const seeMoreBtn = document.getElementById("seeMoreBtn");

if (aboutText && seeMoreBtn) {
  seeMoreBtn.addEventListener("click", () => {
    aboutText.classList.toggle("expanded");
    seeMoreBtn.textContent = aboutText.classList.contains("expanded") ? "See less" : "See more";
  });
}



// get started page
// Get Started page hamburger
const hamburgerGs = document.getElementById('hamburger');
const navMenuGs = document.getElementById('nav-menu-gs');

if (hamburgerGs && navMenuGs) {
  hamburgerGs.addEventListener('click', () => {
    navMenuGs.classList.toggle('open');
    const icon = hamburgerGs.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
  });

  navMenuGs.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', () => {
      navMenuGs.classList.remove('open');
      const icon = hamburgerGs.querySelector('i');
      icon.classList.add('fa-bars');
      icon.classList.remove('fa-xmark');
    });
  });
}