<template>
  <section id="labels" class="labels-section">
    <!-- Heading -->
    <div class="labels-header">
      <p class="labels-eyebrow">
        EIGHT WAYS TO LABEL WHAT SOMEONE MEANS TO YOU
      </p>
    </div>

    <!-- Marquee -->
    <div class="labels-marquee">
      <!-- Left edge fade -->
      <div class="marquee-fade marquee-fade-left"></div>

      <div class="marquee-track">
        <!--
          Repeated 5x (not just duplicated once) so the track stays wider
          than the viewport at every point in the loop, even on wide
          desktop screens - otherwise the marquee runs out of content and
          shows a blank gap right before it resets.
        -->
        <div
          v-for="group in 5"
          :key="`group-${group}`"
          class="labels-list"
          :aria-hidden="group > 1 ? 'true' : undefined"
        >
          <div
            v-for="label in labels"
            :key="`${group}-${label.name}`"
            class="label-chip"
          >
            <img
              v-if="label.icon"
              :src="label.icon"
              :alt="group === 1 ? `${label.name} icon` : ''"
              class="label-icon"
            />

            <span v-else class="label-icon-placeholder"></span>

            <span>{{ label.name }}</span>
          </div>
        </div>
      </div>

      <!-- Right edge fade -->
      <div class="marquee-fade marquee-fade-right"></div>
    </div>
  </section>
</template>

<script setup>
import soulmateIcon from "../../assets/images/labels/soulmate-icon.svg";
import moonIcon from "../../assets/images/labels/moon-icon.svg";
import fireIcon from "../../assets/images/labels/fire-icon.svg";
import constantIcon from "../../assets/images/labels/constant-icon.svg";
import personIcon from "../../assets/images/labels/person-icon.svg";
import safeSpaceIcon from "../../assets/images/labels/safe-space-icon.svg";
import thisCircleIcon from "../../assets/images/labels/this-circle-icon.svg";
import legacyIcon from "../../assets/images/labels/legacy-icon.svg";

const labels = [
  {
    name: "Soulmate",
    icon: soulmateIcon,
  },
  {
    name: "Situationship",
    icon: moonIcon,
  },
  {
    name: "Flame",
    icon: fireIcon,
  },
  {
    name: "Constant",
    icon: constantIcon,
  },
  {
    name: "Person",
    icon: personIcon,
  },
  {
    name: "Safe Space",
    icon: safeSpaceIcon,
  },
  {
    name: "The Circle",
    icon: thisCircleIcon,
  },
  {
    name: "Legacy",
    icon: legacyIcon,
  },
];
</script>

<style scoped>
/* =========================================================
   Section
   ========================================================= */

.labels-section {
  position: relative;
  width: 100%;
  padding-block: var(--space-8);

  overflow: hidden;

  background: var(--color-white);
}

/* =========================================================
   Heading
   ========================================================= */

.labels-header {
  display: flex;
  justify-content: center;

  margin-bottom: var(--space-6);
}

.labels-eyebrow {
  margin: 0;

  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-regular);
  line-height: 18px;

  color: var(--color-primary);

  text-align: center;
}

/* =========================================================
   Marquee
   ========================================================= */

.labels-marquee {
  position: relative;
  width: 100%;

  overflow: hidden;
}

.marquee-track {
  display: flex;
  width: max-content;

  animation: labels-scroll 24s linear infinite;
  will-change: transform;
}

/*
 * Both lists must have identical width/spacing.
 * The animation moves exactly one list width.
 */
.labels-list {
  display: flex;
  align-items: center;

  gap: 24px;

  flex-shrink: 0;
  padding-right: 24px;
}

/* =========================================================
   Label chip
   ========================================================= */

.label-chip {
  display: inline-flex;
  align-items: center;

  gap: 5px;

  padding: 8px 10px;

  border-radius: var(--radius-full);

  background: var(--color-background-soft);

  color: var(--color-purple-deep);

  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 18px;
  font-weight: var(--font-weight-regular);

  white-space: nowrap;

  flex-shrink: 0;

  transition: transform var(--transition-fast);
}

.label-chip:hover {
  transform: translateY(-2px);
}

/* =========================================================
   Icons
   ========================================================= */

.label-icon {
  width: 20px;
  height: 20px;

  object-fit: contain;

  flex-shrink: 0;
}

.label-icon-placeholder {
  width: 20px;
  height: 20px;

  flex-shrink: 0;
}

/* =========================================================
   Edge fades
   ========================================================= */

.marquee-fade {
  position: absolute;

  top: 0;
  bottom: 0;

  width: 180px;

  z-index: 2;

  pointer-events: none;
}

.marquee-fade-left {
  left: 0;

  background: linear-gradient(
    90deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0.9) 25%,
    rgba(255, 255, 255, 0.45) 55%,
    rgba(255, 255, 255, 0) 100%
  );
}

.marquee-fade-right {
  right: 0;

  background: linear-gradient(
    270deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0.9) 25%,
    rgba(255, 255, 255, 0.45) 55%,
    rgba(255, 255, 255, 0) 100%
  );
}

/* =========================================================
   Infinite scroll
   ========================================================= */

@keyframes labels-scroll {
  from {
    transform: translateX(0);
  }

  to {
    /* one group's worth of the 5 repeated groups in .marquee-track */
    transform: translateX(-20%);
  }
}

/* =========================================================
   Hover pause
   ========================================================= */

.labels-marquee:hover .marquee-track {
  animation-play-state: paused;
}

/* =========================================================
   Accessibility
   ========================================================= */

@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation-play-state: paused;
  }
}

/* =========================================================
   Tablet
   ========================================================= */

@media (max-width: 900px) {
  .labels-section {
    padding-block: 36px;
  }

  .labels-list {
    gap: 20px;
    padding-right: 20px;
  }

  .label-chip {
    font-size: 15px;
  }

  .marquee-fade {
    width: 130px;
  }
}

/* =========================================================
   Mobile
   ========================================================= */

@media (max-width: 640px) {
  .labels-section {
    padding-block: 32px;
  }

  .labels-header {
    margin-bottom: 20px;
    padding-inline: var(--gutter);
  }

  .labels-eyebrow {
    font-size: 11px;
    line-height: 16px;
  }

  .labels-list {
    gap: 14px;
    padding-right: 14px;
  }

  .label-chip {
    gap: 4px;

    padding: 7px 10px;

    font-size: 14px;
    line-height: 18px;
  }

  .label-icon,
  .label-icon-placeholder {
    width: 14px;
    height: 14px;
  }

  .marquee-fade {
    width: 90px;
  }
}
</style>
