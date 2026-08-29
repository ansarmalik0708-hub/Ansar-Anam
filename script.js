const music = document.querySelector("#music");
const musicBtn = document.querySelector("#musicBtn");
const open = document.querySelector("#open");
const cake = document.querySelector("#cake");
const hint = document.querySelector("#hint");
const hearts = document.querySelector("#hearts");

let musicPlaying = false;

/* =========================
   MUSIC
========================= */

if (musicBtn && music) {
  musicBtn.addEventListener("click", async () => {
    try {
      if (musicPlaying) {
        music.pause();
        musicBtn.innerHTML = "🎵 Play Music";
        musicPlaying = false;
      } else {
        await music.play();
        musicBtn.innerHTML = "⏸ Pause Music";
        musicPlaying = true;
      }
    } catch (error) {
      console.log("Music error:", error);
    }
  });
}

if (open) {
 open.addEventListener("click", async () => {

  try {
    await music.play();
    musicPlaying = true;

    if (musicBtn) {
      musicBtn.innerHTML = "⏸ Pause Music";
    }

  } catch (error) {
    console.log("Music needs manual play:", error);
  }

  open.textContent = "Our story begins… ♥";

  /* =========================
     BIG ROSE PETAL CELEBRATION
  ========================= */

  if (typeof createPetal === "function") {

    /* Extra petals for 10 seconds */
    for (let i = 0; i < 45; i++) {
      setTimeout(() => {
        createPetal();
      }, i * 180);
    }

  }

  /* =========================
     BIG HEART BURST
  ========================= */

  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      heart();
    }, i * 80);
  }

  /* Scroll to letter */
  setTimeout(() => {

    const letter = document.querySelector(".letter");

    if (letter) {
      letter.scrollIntoView({
        behavior: "smooth"
      });
    }

  }, 700);

});
}


/* =========================
   SCROLL REVEAL
========================= */

const io = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.12
  }
);

document.querySelectorAll(".reveal").forEach(element => {
  io.observe(element);
});


/* =========================
   FLOATING HEARTS
========================= */

function heart() {
  if (!hearts) return;

  const x = document.createElement("span");

  x.className = "heart";
  x.textContent = Math.random() > 0.2 ? "♥" : "✦";

  x.style.left = Math.random() * 100 + "vw";
  x.style.fontSize = 10 + Math.random() * 20 + "px";
  x.style.animationDuration = 5 + Math.random() * 6 + "s";

  hearts.appendChild(x);

  setTimeout(() => {
    x.remove();
  }, 12000);
}

setInterval(heart, 900);


/* =========================
   CAKE CUTTING
========================= */

if (cake) {
  cake.addEventListener("click", () => {

    /* Prevent clicking repeatedly */
    if (cake.classList.contains("cut")) return;

    cake.classList.add("cut");

    if (hint) {
      hint.textContent = "Happy Birthday, Anam! ✨ Make your wish.";
    }

    /* Celebration hearts */
    for (let i = 0; i < 35; i++) {
      setTimeout(heart, i * 45);
    }

    /* Scroll to final section */
    setTimeout(() => {
      const finalSection = document.querySelector(".final");

      if (finalSection) {
        finalSection.scrollIntoView({
          behavior: "smooth"
        });
      }
    }, 2800);
  });
}


/* =========================
   PHOTO SLIDESHOW
========================= */

const galleryImages = document.querySelectorAll(".gallery img");

if (galleryImages.length > 1) {

  let currentPhoto = 0;

  /* Initially show first image */
  galleryImages.forEach((image, index) => {
    image.style.opacity = index === 0 ? "1" : "0";
    image.style.transition = "opacity 1s ease";
  });

  /* Change photo every 3.5 seconds */
  setInterval(() => {

    galleryImages[currentPhoto].style.opacity = "0";

    currentPhoto++;

    if (currentPhoto >= galleryImages.length) {
      currentPhoto = 0;
    }

    galleryImages[currentPhoto].style.opacity = "1";

  }, 3500);
}
/* =========================
   ROSE PETAL ANIMATION
========================= */

const petals = document.querySelector("#petals");

function createPetal() {
  if (!petals) return;

  const petal = document.createElement("span");

  petal.className = "petal";

  petal.style.left = Math.random() * 100 + "vw";

  const size = 10 + Math.random() * 12;
  petal.style.width = size + "px";
  petal.style.height = size * 1.4 + "px";

  petal.style.animationDuration =
    5 + Math.random() * 5 + "s";

  petal.style.animationDelay =
    Math.random() * 2 + "s";

  petals.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 12000);
}

/* धीरे-धीरे petals गिरेंगे */
setInterval(createPetal, 650);

/* शुरुआत में थोड़े extra petals */
for (let i = 0; i < 12; i++) {
  setTimeout(createPetal, i * 250);
}
