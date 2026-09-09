<script setup>
import { computed, ref } from "vue";
import relationshipIcons from "../data/relationshipIcons.js";
import { playCardEnter, playCardLeave } from "../data/cardAnimations.js";

const props = defineProps({
  relationship: { type: Object, required: true },
});

const iconSrc = computed(
  () => relationshipIcons[props.relationship.icon] || relationshipIcons.soulmate,
);

// The type pill's color communicates the type itself (Mutual / Auto /
// Earned), not the relationship's own accent — so it reads consistently
// across every card instead of shifting with each relationship's color.
const typeClass = computed(() => {
  const slug = (props.relationship.type || "").toLowerCase();
  return slug ? `rel-card__pill--${slug}` : "";
});

const cardRootEl = ref(null); // the persistent, non-transitioning card box

function onEnter(el, done) {
  playCardEnter(el, done, cardRootEl.value);
}

function onLeave(el, done) {
  playCardLeave(el, done);
}
</script>

<template>
  <div class="rel-card" ref="cardRootEl">
    <Transition :css="false" @enter="onEnter" @leave="onLeave">
      <div class="rel-card__inner" :key="relationship.id">
        <div class="rel-card__meta">
          <span class="rel-card__label">{{ relationship.label }}</span>
          <span
            v-if="relationship.type"
            class="rel-card__pill rel-card__pill--type"
            :class="typeClass"
          >
            {{ relationship.type }}
          </span>
          <span
            v-if="relationship.status"
            class="rel-card__pill rel-card__pill--status"
          >
            {{ relationship.status }}
          </span>
        </div>

        <img class="rel-card__icon" :src="iconSrc" :alt="`${relationship.title} icon`" />

        <h3 class="rel-card__title">{{ relationship.title }}</h3>
        <p class="rel-card__desc">{{ relationship.description }}</p>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.rel-card {
  position: relative;
  background: #f7f6ff;
  border-radius: 20px;
  min-height: 270px;
  padding: 37px 28px;
  overflow: hidden;
  perspective: 900px;
}

.rel-card__inner {
  position: absolute;
  inset: 0;
  padding: 32px;
  display: flex;
  flex-direction: column;
  transform-style: preserve-3d;
  backface-visibility: hidden;
}

.rel-card__meta {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.rel-card__label {
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: var(--color-primary);
}

.rel-card__pill {
  font-size: 12px;
  font-weight: 500;
  padding: 3px 10px;
  border-radius: 999px;
  line-height: 1.5;
}

/* Type pills are colored by what the type means, not by the relationship's
   own accent, so "Mutual" / "Auto" / "Earned" read the same on every card. */
.rel-card__pill--mutual {
  background: #edeafc;
  color: #544bb6;
}

.rel-card__pill--auto {
  background: #e3f5ea;
  color: #1f8f56;
}

.rel-card__pill--earned {
  background: #fcf0dc;
  color: #b17a12;
}

.rel-card__pill--status {
  background: #fde3e1;
  color: #c8402f;
}

.rel-card__icon {
  width: 36px;
  height: 36px;
  object-fit: contain;
  margin-bottom: 14px;
}

.rel-card__title {
  margin: 0 0 12px;
  font-size: 30px;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: -0.01em;
  color: var(--color-black);
}

.rel-card__desc {
  margin: 0;
  font-size: 15px;
  font-weight: var(--font-weight-regular);
  line-height: 145%;
  color: var(--color-text-secondary);
  max-width: 34ch;
  letter-spacing: -0.1px;
}
</style>
