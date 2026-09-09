<template>
  <section class="container" id="hero_section">
    <div class="wrapper--hero">
      <div class="hero">
        <div class="hero-inner">
          <div class="hero-content">
            <h1 class="hero-title">
              Messaging for
              <br />
              the people who
              <br />
              <span class="hero-title__accent">actually matter</span>
            </h1>
          </div>
          <!-- Visual -->
          <div class="hero-visual-wrapper">
            <div class="hero-phone-container">
              <img
                v-for="(image, index) in heroImages"
                :key="image"
                class="hero-phone"
                :class="{ active: currentImage === index }"
                :src="image"
                alt="Klipsa mobile app"
                width="650"
                height="537"
              />
            </div>
            <img
              class="hero-phone-swap left"
              :class="`swap-${currentImage}`"
              :src="heroMobile1"
              alt="Klipsa heart"
              width="94"
              height="92"
            />

            <img
              class="hero-phone-swap right"
              :class="`swap-${currentImage}`"
              :src="heroMobile2"
              alt="Klipsa heart"
              width="187"
              height="184"
            />
          </div>
        </div>
        <div class="hero-join">
          <p class="title">
            Join<span class="count">2,847</span>people already on the list
          </p>
          <button class="btn btn-white">
            Join the waitlist
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path
                d="M12.129 8.25L8.106 4.227L9.1665 3.1665L15 9L9.1665 14.8335L8.106 13.773L12.129 9.75H3V8.25H12.129Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import heroSwap1 from "../../assets/images/hero-swap-1.png";
import heroSwap2 from "../../assets/images/hero-swap-2.png";
import heroSwap3 from "../../assets/images/hero-swap-3.png";
import heroMobile1 from "../../assets/images/hero-mobile-1.png";
import heroMobile2 from "../../assets/images/hero-mobile-2.png";

const heroImages = [heroSwap1, heroSwap2, heroSwap3];

const currentImage = ref(0);

let swapInterval;

onMounted(() => {
  // Preload all hero images
  heroImages.forEach((src) => {
    const img = new Image();
    img.src = src;
  });

  swapInterval = setInterval(() => {
    currentImage.value = (currentImage.value + 1) % heroImages.length;
  }, 3000);
});

onBeforeUnmount(() => {
  clearInterval(swapInterval);
});
</script>
<style scoped>
.wrapper--hero {
  background-image: url("../../assets/images/hero-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.hero {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  margin: 0 auto;
  padding-top: 170px;
  min-height: 100vh;
}

.hero-inner {
  width: 100%;
  padding: 0px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-inline: 16px;
  justify-content: space-between;
}
.hero-phone {
  width: 100%;
  height: auto;
  max-width: 750px;
}
/* animation mobile start */
.hero-phone-container {
  position: relative;
  width: 100%;
  max-width: 750px;
  aspect-ratio: 650 / 505;
}

.hero-phone {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;

  opacity: 0;
  transform: translateY(20px) scale(0.97);

  transition:
    opacity 0.7s ease,
    transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-phone.active {
  opacity: 1;
  transform: translateY(0) scale(1);

  animation: phone-float 4s ease-in-out infinite;
}

@keyframes phone-float {
  0%,
  100% {
    transform: translateY(0) scale(1);
  }

  50% {
    transform: translateY(-10px) scale(1);
  }
}
/* animation end */
.hero-join {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 34px;
}
.hero-join .btn-white {
  font-size: 14px;
}
.hero-join .title {
  font-family: var(--font-sans);
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0%;
  color: var(--color-white);
  display: flex;
  align-items: center;
}
.hero-join .title .count {
  position: relative;
  display: inline-block;
  margin-inline: 5px;
  font-weight: 700;
  color: var(--color-white);
  overflow: hidden;
}

.hero-join .title .count::after {
  content: "";
  position: absolute;
  top: -50%;
  right: -100%;
  width: 35%;
  height: 200%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.8),
    transparent
  );
  transform: skewX(-20deg);
  animation: count-glass-shimmer 2s ease-in-out infinite;
  pointer-events: none;
}

@keyframes count-glass-shimmer {
  0% {
    right: -100%;
  }
  45%,
  100% {
    right: 150%;
  }
}

/* Content */

.hero-content {
  flex: 1 1 320px;
  min-width: 0;
  /* padding-left: calc(80px - var(--space-4)); */
}

.hero-title {
  margin: 0;
  color: var(--color-white);
  font-family: var(--font-sans);
  font-size: 60px;
  line-height: 120%;
  font-weight: 700;
  text-wrap: balance;
}

.hero-title__accent {
  background: linear-gradient(105deg, #f4e8ff 0%, #d7b5ff 48%, #e8b7ff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-description {
  margin-top: 24px;
  max-width: 420px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
  line-height: 1.6;
}

.hero-btn {
  margin-top: 32px;
}

.hero-users {
  margin-top: 20px;
  color: rgba(255, 255, 255, 0.55);
  font-size: 12px;
}

/* Visual */
.hero-visual-wrapper {
  position: relative;
  flex: 1 1 380px;
  min-width: 0;
  max-width: 750px;
  /* padding-right: calc(36px - var(--space-4)); */
}
.hero-phone-swap {
  position: absolute;
  top: 0px;
  transition:
    transform 0.8s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.5s ease;
}
.hero-phone-swap.left {
  left: 22%;
  top: -9%;
}
.hero-phone-swap.right {
  right: -7%;
  top: -4%;
}

.hero-phone-swap.left.swap-0 {
  transform: translate(0, 0) rotate(0);
}

.hero-phone-swap.left.swap-1 {
  transform: translate(-15px, -10px) rotate(-8deg);
}

.hero-phone-swap.left.swap-2 {
  transform: translate(10px, 5px) rotate(6deg);
}
.hero-phone-swap.right.swap-0 {
  transform: translate(0, 0) rotate(0);
}

.hero-phone-swap.right.swap-1 {
  transform: translate(-15px, -10px) rotate(-8deg);
}

.hero-phone-swap.right.swap-2 {
  transform: translate(10px, 5px) rotate(6deg);
}
/* .hero-phone-swap.left {
  animation: heart-float-left 3s ease-in-out infinite;
}

.hero-phone-swap.right {
  animation: heart-float-right 4s ease-in-out infinite;
} */
@keyframes heart-float-left {
  0%,
  100% {
    transform: translateY(0) rotate(-3deg);
  }

  50% {
    transform: translateY(-12px) rotate(3deg);
  }
}

@keyframes heart-float-right {
  0%,
  100% {
    transform: translateY(0) rotate(3deg);
  }

  50% {
    transform: translateY(15px) rotate(-4deg);
  }
}

/* media query */
@media (max-width: 900px) {
  .hero {
    min-height: 100vh;
    padding-block: 96px 60px;
  }
  .hero-inner {
    flex-direction: column;
    gap: 40px;
  }
  .hero-content {
    order: 1;
    padding-left: 0;
    text-align: center;
    margin: auto;
    flex: 1 1 239px;
  }
  .hero-description {
    margin-inline: auto;
  }
  .hero-title {
    font-size: 40px;
  }

  .hero-visual-wrapper {
    order: -1;
    width: 100%;
    max-width: 480px;
    padding-right: 0;
    margin: 0 auto;
  }
  .hero-phone-swap.right {
    right: -1%;
    top: -2%;
    height: auto;
    max-width: 84px;
  }
  .hero-phone-swap.left {
    left: 10%;
    top: 77%;
    height: auto;
    max-width: 77px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 32px;
  }

  .hero-visual-wrapper {
    max-width: 340px;
    flex: 1 1 264px;
  }

  .hero-join .title {
    font-size: 16px;
  }
  .hero-content {
    flex: 1 1 163px;
  }
  .hero-join {
    padding-bottom: 0;
  }
  .hero-phone-swap.right {
    right: -1%;
    top: -2%;
    height: auto;
    max-width: 84px;
  }
  .hero-phone-swap.left {
    left: 10%;
    top: 77%;
    height: auto;
    max-width: 77px;
  }
}
</style>
