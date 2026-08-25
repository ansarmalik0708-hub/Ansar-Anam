const music = document.querySelector("#music");
const musicBtn = document.querySelector("#musicBtn");
const open = document.querySelector("#open");
const cake = document.querySelector("#cake");
const hint = document.querySelector("#hint");
const hearts = document.querySelector("#hearts");

let musicPlaying = false;

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

open.addEventListener("click", async () => {
  try {
    await music.play();
    musicPlaying = true;
    musicBtn.innerHTML = "⏸ Pause Music";
  } catch (error) {
    console.log("Music needs manual play:", error);
  }

  open.textContent = "Our story begins… ♥";

  setTimeout(() => {
    document.querySelector(".letter").scrollIntoView({
      behavior: "smooth"
    });
  }, 700);
});

const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("visible")),{threshold:.12});document.querySelectorAll(".reveal").forEach(x=>io.observe(x));
function heart(){let x=document.createElement("span");x.className="heart";x.textContent=Math.random()>.2?"♥":"✦";x.style.left=Math.random()*100+"vw";x.style.fontSize=10+Math.random()*20+"px";x.style.animationDuration=5+Math.random()*6+"s";hearts.appendChild(x);setTimeout(()=>x.remove(),12000)}setInterval(heart,900);
cake.onclick=()=>{hint.textContent="Happy Birthday, Anam! ✨ Make your wish.";for(let i=0;i<35;i++)setTimeout(heart,i*45);setTimeout(()=>document.querySelector(".final").scrollIntoView({behavior:"smooth"}),1700)};
