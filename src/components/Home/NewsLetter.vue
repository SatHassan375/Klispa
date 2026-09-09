<template>
  <section id="news_letter" class="news--letter">
    <!-- Grid -->
    <div class="newsletter-grid"></div>

    <!-- news letter -->
    <div class="newsletter-content-wrapper">
      <div class="newsletter-content">
        <h2 class="title">Your people are waiting</h2>
        <div class="content-para">
          <p class="para">
            Be one of the first to experience messaging that actually feels like
            something.
          </p>
        </div>
        <div class="join--waitlist">
          <form class="newsletter-form" @submit.prevent="handleSubmit">
            <input
              v-model="email"
              type="email"
              placeholder="your@email.com"
              aria-label="Email address"
              required
            />

            <button type="submit" class="btn btn-primary">
              Join the waitlist
            </button>
          </form>
        </div>
        <div class="join--waitlist">
          <!-- who's your first one -->
          <div class="first-one-card">
            <h3 class="first-one-title">Who’s your first one?</h3>

            <p class="first-one-description">
              Enter their email. You’ll both get a spot, and the label is held
              for you
            </p>

            <div class="first-one-fields">
              <!-- Email -->
              <div class="field-input">
                <input
                  v-model="email2"
                  type="email"
                  placeholder="your@email.com"
                />
              </div>

              <!-- Label -->
              <div class="field-select">
                <select v-model="selectedLabel">
                  <option v-for="label in labels" :key="label" :value="label">
                    {{ label }}
                  </option>
                </select>

                <svg
                  class="select-arrow"
                  width="16"
                  height="10"
                  viewBox="0 0 16 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 1.5L8 8L14.5 1.5"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const email2 = ref("");

const selectedLabel = ref("Soulmate");

const labels = [
  "Soulmate",
  "Situationship",
  "Flame",
  "Constant",
  "Person",
  "Safe Space",
  "The Circle",
  "Legacy",
];
const handleSubmit = () => {
  console.log("Email:", email.value);
};
</script>
<style scoped>
.news--letter {
  position: relative;
  padding-block: 80px;
  overflow: hidden;
  background: linear-gradient(270deg, #1e1b3c 0%, #0b091f 100%);
  box-shadow: 4px 4px 239px 133px #00000099 inset;
}

/* =========================================================
   Grid
   ========================================================= */

.newsletter-grid {
  position: absolute;
  inset: 0;

  pointer-events: none;

  background-image:
    linear-gradient(to right, rgba(0, 0, 0, 0.55) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.55) 1px, transparent 1px);

  background-size: 10px 10px;
}

/* =========================================================
   Content
   ========================================================= */

.newsletter-content-wrapper {
  position: relative;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 592px;
  margin: 0 auto;
}
.newsletter-content .title {
  font-family: var(--font-sans);
  font-weight: var(--font-weight-bold);
  font-size: 51px;
  line-height: 100%;
  margin-bottom: 28px;
  text-align: center;
  color: var(--color-white);
}
.content-para {
  display: flex;
  align-items: center;
  justify-content: center;
}
.newsletter-content .para {
  max-width: 460px;
  font-family: var(--font-sans);
  font-weight: var(--font-weight-regular);
  font-size: var(--text-base);
  line-height: 150%;
  text-align: center;
  color: var(--color-white);
  margin-bottom: 28px;
}
/* newletter */
.join--waitlist {
  display: flex;
  align-items: center;
  justify-content: center;
}

.newsletter-form {
  width: 100%;
  max-width: 440px;
  height: 53px;

  display: flex;
  align-items: center;

  padding: 4px;

  background: #302d4d;
  border: 1px solid #514d86;
  border-radius: 100px;

  box-sizing: border-box;
}

/* Input */

.newsletter-form input {
  min-width: 0;
  flex: 1;

  height: 100%;
  border-radius: 100px;
  padding: 0 16px;

  border: 0;
  outline: none;
  background: transparent;

  color: var(--color-white);

  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 400;
}

.newsletter-form input::placeholder {
  color: var(--color-white);
  opacity: 1;
}

/* Button */

.newsletter-form button {
  height: 41px;
  font-size: 14px;
  font-weight: var(--font-weight-semibold);

  transition:
    background-color var(--transition-fast),
    transform var(--transition-fast);
}

/* who is your first one */
/* =========================================================
   Card
   ========================================================= */

.first-one-card {
  width: 100%;
  max-width: 440px;
  margin-top: 28px;
  padding: 20px 22px;
  box-sizing: border-box;
  background: #302d4d;
  border: 1px solid #514d86;
  border-radius: 20px;
}

/* =========================================================
   Title
   ========================================================= */

.first-one-title {
  margin: 0 0 8px;

  font-family: var(--font-sans);
  font-size: 18px;
  line-height: 22px;
  font-weight: var(--font-weight-semibold);

  color: var(--color-white);
}

/* =========================================================
   Description
   ========================================================= */

.first-one-description {
  max-width: 780px;

  margin: 0 0 15px;

  font-family: var(--font-sans);
  font-size: 14px;
  line-height: 18px;
  font-weight: var(--font-weight-regular);

  color: var(--color-text-muted);
}

/* =========================================================
   Fields
   ========================================================= */

.first-one-fields {
  display: flex;
  align-items: center;

  gap: 12px;

  width: 100%;
}

/* =========================================================
   Input
   ========================================================= */

.field-input {
  flex: 1;
  min-width: 0;
}

.field-input input {
  width: 100%;
  height: 41px;

  box-sizing: border-box;

  padding: 0 30px;

  border: 1px solid #585481;
  border-radius: 65px;

  outline: none;

  background: #3f3b62;

  color: var(--color-white);

  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: var(--font-weight-regular);
}

.field-input input::placeholder {
  color: #948bb7;
  opacity: 1;
}

.field-input input:focus {
  border-color: var(--color-primary);
}

/* =========================================================
   Select
   ========================================================= */

.field-select {
  position: relative;

  max-width: 145px;
  flex-shrink: 0;
}

.field-select select {
  appearance: none;
  -webkit-appearance: none;

  width: 100%;
  height: 41px;

  box-sizing: border-box;

  padding: 0 48px 0 30px;

  border: 1px solid #585481;
  border-radius: 65px;

  outline: none;

  background: #3f3b62;

  color: var(--color-white);

  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: var(--font-weight-semibold);

  cursor: pointer;
}

.field-select select:focus {
  border-color: var(--color-primary);
}

.select-arrow {
  position: absolute;

  top: 50%;
  right: 20px;

  width: 14px;
  height: auto;

  transform: translateY(-50%);

  color: #c2bfd0;

  pointer-events: none;
}

/* =========================================================
   Mobile
   ========================================================= */

@media (max-width: 640px) {
  .newsletter-grid {
    background-size: 14px 14px;
  }

  .newsletter-content-wrapper {
    padding-inline: var(--gutter);
  }
  .first-one-card {
    margin-top: 24px;

    padding: 20px;
    border-radius: 18px;
  }

  .first-one-title {
    font-size: 18px;
  }

  .first-one-description {
    line-height: 20px;
  }

  .first-one-fields {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }

  .field-input,
  .field-select {
    width: 100%;
  }

  .field-input input,
  .field-select select {
    height: 44px;
  }
}
@media (max-width: 480px) {
  .newsletter-form {
    height: 53px;
  }

  .newsletter-form input {
    padding-inline: 12px;
    font-size: 13px;
  }

  .newsletter-form button {
    height: 45px;
    padding-inline: 20px;
    font-size: 13px;
  }
}
</style>
