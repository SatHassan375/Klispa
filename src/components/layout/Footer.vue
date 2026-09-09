<template>
  <footer class="footer--section" id="footer_section">
    <div class="footer--container">
      <!-- Content -->
      <div class="conversation--action">
        <div class="conversation--heading">
          <h2>Every conversation</h2>

          <h2 class="story">
            is a story.
            <span class="heart">♡</span>
          </h2>
        </div>

        <p class="conversation--description">
          Klipsa is built around the connection between you two.
          <br />
          The more you share, the more it understands.
        </p>

        <div class="conversation--actions">
          <button class="btn btn-primary get--klispa">
            <span class="button--text"> Get Klispa </span>

            <span class="button--icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M12.129 8.25L8.106 4.227L9.1665 3.1665L15 9L9.1665 14.8335L8.106 13.773L12.129 9.75H3V8.25H12.129Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </button>

          <a href="#features" class="explore--features">
            <span>Explore features</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M12.129 8.25L8.106 4.227L9.1665 3.1665L15 9L9.1665 14.8335L8.106 13.773L12.129 9.75H3V8.25H12.129Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>
      <!-- Footer Part 2 -->
      <div class="footer--links-section">
        <div class="footer--links-container">
          <!-- Product Links -->
          <div class="footer--links-group">
            <span class="footer--category">PRODUCT</span>

            <nav class="footer--nav" aria-label="Product navigation">
              <a href="#features">Features</a>
              <a href="#wrapped">Wrapped</a>
              <a href="#mutual-features">Mutual Features</a>
              <a href="#labels">Labels</a>
              <a href="#proximity">Proximity</a>
              <a href="#memories">Memories</a>
            </nav>
          </div>

          <!-- Legal Links -->
          <div class="footer--links-group footer--legal">
            <span class="footer--category">LEGAL</span>

            <nav class="footer--nav" aria-label="Legal navigation">
              <a href="#">Terms</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Security</a>
            </nav>
          </div>
        </div>
      </div>
      <!-- Footer Part 3 -->
      <div class="footer--bottom-section">
        <div class="footer--bottom-container">
          <!-- Left Content -->
          <div class="footer--bottom-left">
            <!-- Language -->
            <div class="language--wrapper">
              <select
                v-model="selectedLanguage"
                class="language--select"
                aria-label="Select language"
              >
                <option
                  v-for="country in countries"
                  :key="country.value"
                  :value="country.value"
                >
                  {{ country.name }}
                </option>
              </select>

              <!-- Custom arrow -->
              <svg
                class="language--arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M3 4.5L6 7.5L9 4.5"
                  stroke="currentColor"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <!-- Copyright -->
            <p class="footer--copyright">
              © 2026 Klipsa. Every conversation is a story.
            </p>

            <!-- Legal -->
            <nav class="footer--bottom-legal" aria-label="Legal navigation">
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
              <a href="#">Security</a>
              <a href="#">Cookies</a>
            </nav>
          </div>

          <!-- Social Icons -->
          <div class="footer--socials">
            <a href="#" aria-label="Facebook" class="social--icon">
              <img
                src="/src/assets/images/facebook-footer-icon.svg"
                width="32"
                height="32"
                loading="lazy"
                alt="icon"
              />
            </a>

            <a href="#" aria-label="Instagram" class="social--icon">
              <img
                src="/src/assets/images/instagram-footer-icon.svg"
                width="32"
                height="32"
                loading="lazy"
                alt="icon"
              />
            </a>

            <a href="#" aria-label="X" class="social--icon">
              <img
                src="/src/assets/images/x-footer-icon.svg"
                width="32"
                height="32"
                loading="lazy"
                alt="icon"
              />
            </a>

            <a href="#" aria-label="YouTube" class="social--icon">
              <img
                src="/src/assets/images/youtube-footer-icon.svg"
                width="32"
                height="32"
                loading="lazy"
                alt="icon"
              />
            </a>

            <a href="#" aria-label="Pinterest" class="social--icon">
              <img
                src="/src/assets/images/pintrest-footer-icon.svg"
                width="32"
                height="32"
                loading="lazy"
                alt="icon"
              />
            </a>

            <a href="#" aria-label="TikTok" class="social--icon">
              <img
                src="/src/assets/images/tiktok-footer-icon.svg"
                width="32"
                height="32"
                loading="lazy"
                alt="icon"
              />
            </a>
          </div>
        </div>
      </div>
      <!-- klispa wordmark -->
      <div class="klipsa--wordmark">
        <div class="klipsa--wordmark-inner">
          <h2 class="klipsa--title">KLISPA</h2>
        </div>
      </div>
      <!-- Decorative icon -->
      <img
        src="/src/assets/images/klispa-footer-background.svg"
        class="klispa--icon-footer"
        width="312"
        height="393"
        loading="lazy"
        alt=""
        aria-hidden="true"
      />
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const countries = [
  { name: "English", value: "en" },
  { name: "French", value: "fr" },
  { name: "German", value: "de" },
  { name: "Spanish", value: "es" },
  { name: "Italian", value: "it" },
  { name: "Portuguese", value: "pt" },
  { name: "Dutch", value: "nl" },
  { name: "Japanese", value: "ja" },
  { name: "Korean", value: "ko" },
  { name: "Chinese", value: "zh" },
];

const selectedLanguage = ref("en");
</script>
<style scoped>
/* =========================================================
   FOOTER PART 1
   ========================================================= */

.footer--section {
  position: relative;
  overflow: hidden;
  background: #120e29;
  color: var(--color-white);
}

.footer--section::before {
  content: "";
  position: absolute;
  inset: 0;

  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.25'/%3E%3C/svg%3E");

  opacity: 0.8;

  /* Restrict noise to the radial area */
  mask-image: radial-gradient(50% 50% at 50% 50%, #000 0%, transparent 100%);

  -webkit-mask-image: radial-gradient(
    50% 50% at 50% 50%,
    #000 0%,
    transparent 100%
  );

  pointer-events: none;
  z-index: 0;
}

.footer--section::after {
  content: "";
  position: absolute;
  inset: 0;

  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(77, 56, 138, 0.55) 0%,
    rgba(77, 56, 138, 0) 100%
  );

  pointer-events: none;
  z-index: 0;
}

.footer--container {
  position: relative;
  z-index: 1;
}

/* =========================================================
   Container
   ========================================================= */

.footer--container {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-block: 96px;
  box-sizing: border-box;
}

/* =========================================================
   Conversation Content
   ========================================================= */

.conversation--action {
  position: relative;
  z-index: 2;

  display: flex;
  flex-direction: column;

  padding-top: 0;
}

/* =========================================================
   Heading
   ========================================================= */

.conversation--heading {
  display: flex;
  flex-direction: column;
}

.conversation--heading h2 {
  margin: 0;

  font-family: var(--font-display);

  font-size: 72px;
  line-height: 104%;
  font-weight: 400;

  color: var(--color-white);
}

.conversation--heading .story {
  color: var(--color-primary-soft);

  font-style: italic;
}

.heart {
  display: inline-block;

  margin-left: 8px;

  font-family: var(--font-sans);
  font-size: 40px;
  line-height: 100%;
  font-weight: 400;
  font-style: normal;

  color: var(--color-primary-soft);

  vertical-align: middle;

  transform: translateY(-4px);
}

/* =========================================================
   Description
   ========================================================= */

.conversation--description {
  margin: 24px 0 0;

  font-family: var(--font-sans);

  font-size: 17px;
  line-height: 150%;
  font-weight: 400;

  color: #cdc8dd;
}

/* =========================================================
   Actions
   ========================================================= */

.conversation--actions {
  display: flex;
  align-items: center;

  gap: 20px;

  margin-top: 28px;
  border-bottom: 1px solid #9685ea2e;
  padding-bottom: 49px;
}

/* =========================================================
   Get Klispa Button
   ========================================================= */

.get--klispa {
  height: 46px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 10px;

  padding: 0 6px 0 18px;

  border: 0;
  border-radius: 100px;

  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 500;

  white-space: nowrap;
}

/* Button text */

.button--text {
  display: inline-flex;
  align-items: center;
}

/* Button circle */

.button--icon {
  width: 34px;
  height: 34px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: var(--color-white);

  color: var(--color-primary);
}

.button--icon svg {
  width: 16px;
  height: 16px;

  transform: rotate(318deg);
}

/* =========================================================
   Explore Features
   ========================================================= */

.explore--features {
  display: inline-flex;
  align-items: center;

  gap: 8px;

  color: #cdc8dd;

  font-family: var(--font-sans);

  font-size: 15px;
  line-height: 100%;
  font-weight: 500;

  text-decoration: none;

  transition:
    color var(--transition-fast),
    gap var(--transition-fast);
}

.explore--features svg {
  width: 18px;
  height: 18px;

  transition: transform var(--transition-fast);
}

.explore--features:hover {
  color: var(--color-white);

  gap: 10px;
}

.explore--features:hover svg {
  transform: translateX(2px);
}

/* =========================================================
   Decorative Klispa Icon
   ========================================================= */

.klispa--icon-footer {
  position: absolute;
  z-index: 1;
  top: 9%;
  right: 70px;
  width: 416px;
  height: auto;
  object-fit: contain;
  opacity: 0.28;
  pointer-events: none;
}
/* =========================================================
   FOOTER PART 2 — LINKS
   ========================================================= */

.footer--links-section {
  width: 100%;
}

.footer--links-container {
  width: 100%;
  max-width: 1200px;
  min-height: 78px;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;
}

/* =========================================================
   Link Groups
   ========================================================= */

.footer--links-group {
  display: flex;
  align-items: center;
  gap: 14px;
}

.footer--category {
  flex-shrink: 0;

  font-family: var(--font-sans);
  font-size: 12px;
  line-height: 100%;
  font-weight: 400;

  letter-spacing: 0.08em;

  color: var(--color-purple-muted);
}

/* =========================================================
   Navigation
   ========================================================= */

.footer--nav {
  display: flex;
  align-items: center;
  gap: 12px;
}

.footer--nav a {
  font-family: var(--font-sans);
  font-size: 12px;
  line-height: 100%;
  font-weight: 400;

  color: #eae7f0;

  text-decoration: none;

  white-space: nowrap;

  transition: color var(--transition-fast);
}

.footer--nav a:hover {
  color: var(--color-white);
}

/* =========================================================
   Legal
   ========================================================= */

.footer--legal {
  gap: 14px;
}
/* =========================================================
   FOOTER PART 3 — BOTTOM BAR
   ========================================================= */

.footer--bottom-section {
  width: 100%;

  border-top: 1px solid rgba(150, 133, 234, 0.12);
  padding-block: 19px;
}

.footer--bottom-container {
  width: 100%;
  max-width: 1200px;
  min-height: 54px;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;
}

/* =========================================================
   LEFT CONTENT
   ========================================================= */

.footer--bottom-left {
  display: flex;
  align-items: center;

  gap: 24px;

  min-width: 0;
}

/* =========================================================
   Language Select
   ========================================================= */
.language--wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;
}

/* Select */
.language--select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  height: 32px;
  max-width: 94px;

  padding: 0 30px 0 16px;

  border: 1px solid #514d86;
  border-radius: 100px;

  background: transparent;

  color: #cdc8dd;

  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 500;
  line-height: 100%;

  outline: none;
  cursor: pointer;
}

/* Arrow */
.language--arrow {
  position: absolute;
  right: 12px;

  color: #cdc8dd;

  pointer-events: none;
}

/* Focus */
.language--select:focus {
  border-color: #6d5ce0;
}

/* Dropdown options */
.language--select option {
  background: #302d4d;
  color: #cdc8dd;
  font-family: var(--font-sans);
}

/* =========================================================
   Copyright
   ========================================================= */

.footer--copyright {
  margin: 0;

  font-family: var(--font-sans);
  font-size: 14px;
  line-height: 100%;
  font-weight: 400;

  color: #afaabf;

  white-space: nowrap;
}

/* =========================================================
   Bottom Legal Links
   ========================================================= */

.footer--bottom-legal {
  display: flex;
  align-items: center;

  gap: 20px;
}

.footer--bottom-legal a {
  font-family: var(--font-sans);
  font-size: 14px;
  line-height: 100%;
  font-weight: 400;

  color: #afaabf;

  text-decoration: none;

  white-space: nowrap;

  transition: color var(--transition-fast);
}

.footer--bottom-legal a:hover {
  color: var(--color-white);
}

/* =========================================================
   Social Icons
   ========================================================= */

.footer--socials {
  display: flex;
  align-items: center;

  gap: 17px;
}

.social--icon {
  width: 32px;
  height: 32px;

  flex: 0 0 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;

  transition:
    transform var(--transition-fast),
    opacity var(--transition-fast);
}

.social--icon img {
  display: block;

  width: 32px;
  height: 32px;

  object-fit: contain;
}

.social--icon:hover {
  transform: translateY(-2px);
  opacity: 0.85;
}
.klipsa--wordmark {
  width: 100%;
  overflow: hidden;
  padding-block: 50px;
}

.klipsa--wordmark-inner {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.klipsa--title {
  font-family: "Sekuya", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 251.82px;
  line-height: 100%;
  letter-spacing: -3%;

  background: linear-gradient(90deg, #a38ae9 0%, #684cb4 100%);

  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* =========================================================
   Large Screens
   ========================================================= */

@media (max-width: 1200px) {
  .footer--container {
    padding-inline: var(--gutter);
  }

  .klispa--icon-footer {
    right: 30px;
  }
}

/* =========================================================
   Tablet
   ========================================================= */

@media (max-width: 900px) {
  .footer--container {
    min-height: 700px;

    padding-top: 80px;
  }

  .conversation--heading h2 {
    font-size: clamp(48px, 7vw, 72px);
  }

  .klispa--icon-footer {
    width: 280px;
    height: auto;

    right: -30px;
    top: 100px;

    opacity: 0.2;
  }
}

/* =========================================================
   Mobile
   ========================================================= */

@media (max-width: 640px) {
  .footer--section {
    min-height: 100svh;
  }

  .footer--container {
    min-height: 100svh;

    padding: 48px var(--gutter) 24px;
  }

  .conversation--action {
    width: 100%;
  }

  .conversation--heading h2 {
    font-size: clamp(42px, 11vw, 56px);
    line-height: 105%;
  }

  .heart {
    font-size: 30px;
    margin-left: 4px;
  }

  .conversation--description {
    margin-top: 20px;

    font-size: 14px;
    line-height: 150%;
  }

  .conversation--description br {
    display: none;
  }

  .conversation--actions {
    margin-top: 24px;

    flex-wrap: wrap;

    gap: 16px;
  }

  .get--klispa {
    height: 44px;
  }

  .explore--features {
    font-size: 13px;
  }

  .klispa--icon-footer {
    width: 220px;
    height: auto;

    top: auto;
    right: -70px;
    bottom: 80px;

    opacity: 0.16;
  }

  .footer--divider {
    bottom: 20px;
  }
}

/* =========================================================
   Small Mobile
   ========================================================= */

@media (max-width: 380px) {
  .conversation--heading h2 {
    font-size: 38px;
  }

  .heart {
    font-size: 26px;
  }

  .conversation--actions {
    align-items: flex-start;
    flex-direction: column;
  }
}
@media (max-width: 1200px) {
  .footer--links-container {
    padding-inline: var(--gutter);
  }

  .footer--nav {
    gap: 10px;
  }
}

/* =========================================================
   Tablet
   ========================================================= */

@media (max-width: 900px) {
  .footer--links-container {
    min-height: 90px;

    align-items: flex-start;
    justify-content: center;

    flex-direction: column;

    gap: 18px;
  }

  .footer--links-group {
    width: 100%;
  }
}

/* =========================================================
   Mobile
   ========================================================= */

@media (max-width: 640px) {
  .footer--links-container {
    padding-block: 24px;

    align-items: flex-start;

    gap: 22px;
  }

  .footer--links-group {
    align-items: flex-start;
    flex-direction: column;

    gap: 10px;
  }

  .footer--nav {
    flex-wrap: wrap;
    row-gap: 12px;
    column-gap: 16px;
  }

  .footer--nav a {
    font-size: 12px;
  }
}
@media (max-width: 1200px) {
  .footer--bottom-container {
    padding-inline: var(--gutter);
  }

  .footer--bottom-left {
    gap: 18px;
  }

  .footer--bottom-legal {
    gap: 16px;
  }
}

/* =========================================================
   Tablet
   ========================================================= */

@media (max-width: 900px) {
  .footer--bottom-container {
    min-height: auto;

    padding-top: 20px;
    padding-bottom: 20px;

    align-items: flex-start;

    gap: 20px;
  }

  .footer--bottom-left {
    flex-wrap: wrap;

    row-gap: 14px;
    column-gap: 18px;
  }

  .footer--socials {
    flex-shrink: 0;
  }
}

/* =========================================================
   Mobile
   ========================================================= */

@media (max-width: 640px) {
  .footer--bottom-container {
    flex-direction: column;

    align-items: flex-start;

    padding-top: 24px;
    padding-bottom: 24px;

    gap: 24px;
  }

  .footer--bottom-left {
    width: 100%;

    display: flex;
    flex-direction: column;

    align-items: flex-start;

    gap: 16px;
  }

  .footer--copyright {
    white-space: normal;

    font-size: 13px;
  }

  .footer--bottom-legal {
    flex-wrap: wrap;

    gap: 14px 20px;
  }

  .footer--bottom-legal a {
    font-size: 13px;
  }

  .footer--socials {
    gap: 17px;
  }
}

/* =========================================================
   Small Mobile
   ========================================================= */

@media (max-width: 380px) {
  .footer--socials {
    width: 100%;

    justify-content: space-between;

    gap: 10px;
  }
}
/* Tablet */
@media (max-width: 900px) {
  .klipsa--title {
    font-size: 20vw;
  }
}

/* Mobile */
@media (max-width: 640px) {
  .klipsa--wordmark {
    padding-block: 40px;
  }

  .klipsa--title {
    font-size: 19vw;
  }
}
</style>
