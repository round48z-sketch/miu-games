/**
 * MIU GAMES — 設定ファイル
 * ゲームURL・SNSリンク・SEO情報はここを編集するだけで変更できます
 */

const CONFIG = {
  site: {
    // ★ Vercel公開後、実際のURLに変更してください
    siteUrl: "https://miu-games.vercel.app",
    seoTitle: "MIU GAMES｜AIみうの無料ブラウザゲーム",
    title: "MIU GAMES",
    metaDescription:
      "MIU GAMES｜AIみうの無料ブラウザゲーム。MIU BLOCKS・MIU POPS・MIU BREAKERを今すぐプレイ。ゲームのあとはTikTok・X・Spotifyでみうの世界をもっと楽しもう。",
    keywords:
      "AIみう,みう,MIU GAMES,AIみう ゲーム,みう ゲーム,無料ブラウザゲーム,MIU BLOCKS,MIU POPS,MIU BREAKER,無料ゲーム",
    tagline: "AIみうの無料ゲームセンターへようこそ！",
    titleImage: "title.png",
    titleAlt: "AIみう（みう）の公式キービジュアル｜ネオンピンクのゲームセンター",
    ogImage: "title.png",
    twitter: "@miu_4519",
    locale: "ja_JP",
  },

  about: {
    title: "AIみうについて",
    paragraphs: [
      "AIみうは、音楽・ゲーム・SNSで活動するオリジナルAIキャラクターです。",
      "ゲームやLINEスタンプを楽しんだら、TikTok・X・SpotifyでもAIみうの世界を楽しんでください。",
    ],
    bridge: "みうの世界は、ゲームの外にも続いています。",
  },

  gamesIntro:
    "AIみうの世界観で遊べる無料ブラウザゲーム。好きなゲームから、みうの世界に飛び込もう。",

  footer: {
    heading: "♡ みうの世界をもっと楽しむ ♡",
    lead: "ゲームのあとに、音楽や動画でもみうとつながろう。",
  },

  games: [
    {
      id: "blocks",
      title: "MIU BLOCKS",
      description: "ブロックを積み上げてハイスコアを目指そう！",
      seoDescription:
        "AIみうが主役の落ちものパズルゲーム「MIU BLOCKS」。テトリス風にブロックを積み上げてハイスコアを目指す無料ブラウザゲームです。",
      url: "https://miu-tetris-v2-z.vercel.app",
      icon: "🧱",
      accent: "#ff4fd8",
      genre: "Puzzle",
    },
    {
      id: "pops",
      title: "MIU POPS",
      description: "連鎖を決めて爽快コンボを狙おう！",
      seoDescription:
        "AIみうの世界観で遊ぶ連鎖パズルゲーム「MIU POPS」。玉を消してコンボを決め、爽快にスコアを伸ばす無料ブラウザゲームです。",
      url: "https://miu-pops.vercel.app",
      icon: "✨",
      accent: "#ff6ec7",
      genre: "Puzzle",
    },
    {
      id: "breaker",
      title: "MIU BREAKER",
      description: "ブロックを破壊してステージクリアを目指そう！",
      seoDescription:
        "AIみうテーマのブロック崩しゲーム「MIU BREAKER」。ブロックを破壊してステージをクリアする、懐かしくも新しい無料ブラウザゲームです。",
      url: "https://miu-block-breaker.vercel.app",
      icon: "💥",
      accent: "#ff1493",
      genre: "Arcade",
    },
  ],

  social: [
    {
      id: "spotify",
      label: "Spotify",
      sublabel: "ゲームのあとは、みうの音楽へ",
      url: "https://open.spotify.com/artist/1R4C6DHAIVCRrwCptYNqNw",
      icon: "spotify",
    },
    {
      id: "x",
      label: "X",
      sublabel: "みうの日常をのぞいてみて",
      url: "https://x.com/miu_4519",
      icon: "x",
    },
    {
      id: "tiktok",
      label: "TikTok",
      sublabel: "みうの動画で世界観を味わう",
      url: "https://www.tiktok.com/@miu_4519",
      icon: "tiktok",
    },
  ],
};

function createSocialIcon(type) {
  const icons = {
    spotify: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>`,
    x: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
    tiktok: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>`,
  };
  return icons[type] || "";
}

function renderGames() {
  const container = document.getElementById("game-list");
  if (!container) return;

  container.innerHTML = CONFIG.games
    .map(
      (game, index) => `
    <article class="game-card fade-in-card" style="--card-accent: ${game.accent}; --card-delay: ${index * 0.12}s">
      <div class="game-card__frame">
        <div class="game-card__glow"></div>
        <div class="game-card__inner">
          <div class="game-card__shine" aria-hidden="true"></div>
          <div class="game-card__icon" aria-hidden="true">${game.icon}</div>
          <h3 class="game-card__title">${game.title}</h3>
          <p class="game-card__desc">${game.description}</p>
          <p class="game-card__seo">${game.seoDescription}</p>
          <a
            class="game-card__btn"
            href="${game.url}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="${game.title}をプレイする — ${game.seoDescription}"
          >
            <span class="game-card__btn-icon" aria-hidden="true">🎮</span>
            <span>プレイする</span>
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>
          </a>
        </div>
      </div>
    </article>
  `
    )
    .join("");
}

function renderSocial() {
  const container = document.getElementById("social-links");
  if (!container) return;

  container.innerHTML = CONFIG.social
    .map(
      (link) => `
    <a
      class="social-btn social-btn--${link.id}"
      href="${link.url}"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="${link.label} — ${link.sublabel}"
    >
      <span class="social-btn__icon">${createSocialIcon(link.icon)}</span>
      <span class="social-btn__text">
        <span class="social-btn__label">${link.label}</span>
        <span class="social-btn__sublabel">${link.sublabel}</span>
      </span>
    </a>
  `
    )
    .join("");
}

function initParticles() {
  const canvas = document.getElementById("particles");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let items = [];
  let animationId;
  let wind = 0;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createSakura() {
    return {
      type: "sakura",
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      size: Math.random() * 9 + 5,
      speedY: Math.random() * 0.6 + 0.4,
      speedX: Math.random() * 0.4 - 0.2,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.025,
      sway: Math.random() * Math.PI * 2,
      swaySpeed: Math.random() * 0.02 + 0.01,
      opacity: Math.random() * 0.45 + 0.35,
      hue: Math.random() > 0.5 ? "#ffb7d5" : "#ffc9e0",
    };
  }

  function createHeart() {
    return {
      type: "heart",
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 10 + 5,
      speedY: Math.random() * 0.25 + 0.08,
      speedX: (Math.random() - 0.5) * 0.15,
      opacity: Math.random() * 0.25 + 0.12,
      pulse: Math.random() * Math.PI * 2,
      glow: Math.random() * 0.5 + 0.5,
    };
  }

  function drawSakura(p) {
    ctx.save();
    p.sway += p.swaySpeed;
    const swayX = Math.sin(p.sway) * 1.2 + wind * 0.3;
    ctx.translate(p.x + swayX, p.y);
    ctx.rotate(p.rotation);
    ctx.globalAlpha = p.opacity;

    const s = p.size;
    for (let i = 0; i < 5; i++) {
      const angle = (i * Math.PI * 2) / 5 - Math.PI / 2;
      ctx.save();
      ctx.translate(Math.cos(angle) * s * 0.35, Math.sin(angle) * s * 0.35);
      ctx.rotate(angle + Math.PI / 2);
      ctx.fillStyle = p.hue;
      ctx.beginPath();
      ctx.ellipse(0, 0, s * 0.32, s * 0.22, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    ctx.fillStyle = "#ff6ea8";
    ctx.beginPath();
    ctx.arc(0, 0, s * 0.1, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function drawHeart(p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    const alpha = p.opacity * (0.5 + Math.sin(p.pulse) * 0.5);
    ctx.globalAlpha = alpha;

    const s = p.size;
    ctx.shadowColor = "#ff4fd8";
    ctx.shadowBlur = 12 * p.glow;
    ctx.fillStyle = "#ff4fd8";
    ctx.beginPath();
    ctx.moveTo(0, s * 0.3);
    ctx.bezierCurveTo(-s, -s * 0.3, -s * 0.5, -s, 0, -s * 0.4);
    ctx.bezierCurveTo(s * 0.5, -s, s, -s * 0.3, 0, s * 0.3);
    ctx.fill();
    ctx.restore();
  }

  function init() {
    resize();
    const count = window.innerWidth < 640 ? 40 : 55;
    items = [
      ...Array.from({ length: count }, createSakura),
      ...Array.from({ length: 16 }, createHeart),
    ];
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    wind = Math.sin(Date.now() * 0.001) * 0.5;

    items.forEach((p) => {
      p.x += p.speedX + wind * 0.15;
      p.y += p.speedY;

      if (p.type === "sakura") {
        p.rotation += p.rotSpeed;
        if (p.y > canvas.height + 20) {
          p.y = -20;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;
        drawSakura(p);
      } else {
        p.pulse += 0.025;
        if (p.y > canvas.height + 10) {
          p.y = -10;
          p.x = Math.random() * canvas.width;
        }
        drawHeart(p);
      }
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

function initScrollFadeIn() {
  const targets = document.querySelectorAll(
    ".fade-in, .fade-in-card, .social-btn, .about, .stamps-promo"
  );

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
    { threshold: 0.08, rootMargin: "0px 0px -10px 0px" }
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

function initSeo() {
  const { site } = CONFIG;
  const baseUrl = site.siteUrl.replace(/\/$/, "");

  document.title = site.seoTitle;

  const setMeta = (attr, key, content) => {
    let el = document.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  };

  setMeta("name", "description", site.metaDescription);
  setMeta("name", "keywords", site.keywords);
  setMeta("property", "og:title", site.seoTitle);
  setMeta("property", "og:description", site.metaDescription);
  setMeta("property", "og:url", `${baseUrl}/`);
  setMeta("property", "og:image", `${baseUrl}/${site.ogImage}`);
  setMeta("name", "twitter:title", site.seoTitle);
  setMeta("name", "twitter:description", site.metaDescription);
  setMeta("name", "twitter:image", `${baseUrl}/${site.ogImage}`);

  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = `${baseUrl}/`;

  const ldEl = document.getElementById("structured-data");
  if (ldEl) {
    const graph = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": `${baseUrl}/#website`,
          url: `${baseUrl}/`,
          name: site.title,
          description: site.metaDescription,
          inLanguage: "ja",
          publisher: { "@id": `${baseUrl}/#person` },
        },
        {
          "@type": "Person",
          "@id": `${baseUrl}/#person`,
          name: "AIみう",
          alternateName: ["みう", "AI Miu"],
          description: "ゲーム・音楽・SNSで活動するバーチャルキャラクター",
          url: `${baseUrl}/`,
          sameAs: CONFIG.social.map((s) => s.url),
        },
        {
          "@type": "WebPage",
          "@id": `${baseUrl}/#webpage`,
          url: `${baseUrl}/`,
          name: site.seoTitle,
          description: site.metaDescription,
          isPartOf: { "@id": `${baseUrl}/#website` },
          about: { "@id": `${baseUrl}/#person` },
          inLanguage: "ja",
        },
        {
          "@type": "ItemList",
          "@id": `${baseUrl}/#gamelist`,
          name: "AIみうのゲーム一覧",
          description: "AIみうの世界観を楽しめる無料ブラウザゲーム",
          itemListElement: CONFIG.games.map((game, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "VideoGame",
              name: game.title,
              description: game.seoDescription,
              url: game.url,
              genre: game.genre,
              gamePlatform: "Web browser",
              offers: { "@type": "Offer", price: "0", priceCurrency: "JPY" },
            },
          })),
        },
      ],
    };
    ldEl.textContent = JSON.stringify(graph);
  }
}

function renderAbout() {
  const { about, footer } = CONFIG;

  const text1 = document.getElementById("about-text-1");
  const text2 = document.getElementById("about-text-2");
  const bridge = document.getElementById("about-bridge");
  const footerHeading = document.getElementById("footer-heading");
  const footerLead = document.getElementById("footer-lead");

  if (text1 && about.paragraphs[0]) text1.textContent = about.paragraphs[0];
  if (text2 && about.paragraphs[1]) text2.textContent = about.paragraphs[1];
  if (bridge) bridge.textContent = about.bridge;
  if (footerHeading) footerHeading.textContent = footer.heading;
  if (footerLead) footerLead.textContent = footer.lead;
}

function renderStampsPromo() {
  if (typeof STAMPS_PROMO === "undefined") return;

  const title = document.getElementById("stamps-promo-heading");
  const desc = document.getElementById("stamps-promo-desc");
  const btn = document.getElementById("stamps-promo-btn");
  const btnLabel = document.getElementById("stamps-promo-btn-label");

  if (title) title.textContent = STAMPS_PROMO.title;
  if (desc) desc.textContent = STAMPS_PROMO.description;
  if (btn) btn.href = STAMPS_PROMO.href;
  if (btnLabel) btnLabel.textContent = STAMPS_PROMO.buttonLabel;
}

function init() {
  initSeo();

  const tagline = document.getElementById("tagline");
  if (tagline) tagline.textContent = CONFIG.site.tagline;

  const gamesIntro = document.getElementById("games-intro");
  if (gamesIntro) gamesIntro.textContent = CONFIG.gamesIntro;

  const titleImg = document.getElementById("title-img");
  if (titleImg) {
    titleImg.src = CONFIG.site.titleImage;
    titleImg.alt = CONFIG.site.titleAlt;
  }

  renderGames();
  renderStampsPromo();
  renderAbout();
  renderSocial();
  initParticles();
  initScrollFadeIn();
}

document.addEventListener("DOMContentLoaded", init);
