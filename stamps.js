/**
 * /stamps ページ用スクリプト
 * スタンプ一覧は stamps-data.js の STAMPS 配列から自動生成されます
 */

function renderStampList() {
  const container = document.getElementById("stamp-list");
  if (!container || typeof STAMPS === "undefined") return;

  container.innerHTML = STAMPS.map(
    (stamp, index) => `
    <article class="stamp-card fade-in-card" style="--card-delay: ${index * 0.12}s">
      <div class="stamp-card__media">
        <img
          class="stamp-card__img"
          src="${stamp.image}"
          alt="${stamp.name}のスタンプ画像"
          loading="lazy"
          onerror="this.classList.add('stamp-card__img--missing'); this.alt='画像準備中：${stamp.name}'"
        />
      </div>
      <div class="stamp-card__body">
        <h2 class="stamp-card__title">${stamp.name}</h2>
        <p class="stamp-card__desc">${stamp.description}</p>
        <a
          class="stamp-card__btn"
          href="${stamp.storeUrl}"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="stamp-card__btn-icon" aria-hidden="true">💬</span>
          <span>${stamp.buttonLabel}</span>
        </a>
      </div>
    </article>
  `
  ).join("");
}

function initStampPage() {
  renderStampList();

  if (typeof initParticles === "function") {
    initParticles();
  } else {
    initLightParticles();
  }

  const targets = document.querySelectorAll(".fade-in, .fade-in-card");
  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  targets.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add("is-visible");
    } else {
      observer.observe(el);
    }
  });
}

/** トップの script.js を読み込まない場合の簡易パーティクル */
function initLightParticles() {
  const canvas = document.getElementById("particles");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let items = [];
  let animationId;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createSakura() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      size: Math.random() * 8 + 4,
      speedY: Math.random() * 0.55 + 0.35,
      speedX: Math.random() * 0.35 - 0.15,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.02,
      opacity: Math.random() * 0.4 + 0.3,
    };
  }

  function drawSakura(p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation);
    ctx.globalAlpha = p.opacity;
    const s = p.size;
    ctx.fillStyle = "#ffb7d5";
    for (let i = 0; i < 5; i++) {
      const angle = (i * Math.PI * 2) / 5;
      ctx.beginPath();
      ctx.ellipse(
        Math.cos(angle) * s * 0.35,
        Math.sin(angle) * s * 0.35,
        s * 0.3,
        s * 0.2,
        angle,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }
    ctx.restore();
  }

  function init() {
    resize();
    items = Array.from({ length: window.innerWidth < 640 ? 28 : 40 }, createSakura);
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    items.forEach((p) => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.rotation += p.rotSpeed;
      if (p.y > canvas.height + 20) {
        p.y = -20;
        p.x = Math.random() * canvas.width;
      }
      drawSakura(p);
    });
    animationId = requestAnimationFrame(animate);
  }

  init();
  animate();
  window.addEventListener("resize", () => {
    cancelAnimationFrame(animationId);
    init();
    animate();
  });
}

document.addEventListener("DOMContentLoaded", initStampPage);
