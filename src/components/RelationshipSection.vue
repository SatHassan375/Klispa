<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from "vue";
import gsap from "gsap";
import relationships from "../data/relationships.js";
import RelationshipCard from "./RelationshipCard.vue";
import RelationshipBlock from "./RelationshipBlock.vue";

// Below this width the sticky/scroll mechanism is replaced entirely by a
// plain stacked layout (see .rel-stack) — matches the CSS breakpoint below.
const MOBILE_BREAKPOINT = 900;

const sectionRootEl = ref(null);
const blockEls = ref([]); // populated via :ref on each RelationshipBlock's root
const activeIndex = ref(0);

const activeRelationship = computed(() => relationships[activeIndex.value]);

let ticking = false;
let reduceMotion = false;

function setBlockRef(el, index) {
  if (el) blockEls.value[index] = el.$el || el;
}

// Whichever block's vertical center sits closest to the middle of the
// viewport becomes active — this is what actually makes "the next one"
// take over as it scrolls into that middle band, instead of a
// calculated scroll-progress index. On mobile there's no sticky card or
// active-block concept at all, so this does nothing there.
function updateActiveFromScroll() {
  ticking = false;
  if (window.innerWidth <= MOBILE_BREAKPOINT) return;

  const centerLine = window.innerHeight * 0.5;
  let closestIndex = activeIndex.value;
  let closestDistance = Infinity;

  blockEls.value.forEach((el, index) => {
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const blockCenter = rect.top + rect.height / 2;
    const distance = Math.abs(blockCenter - centerLine);
    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = index;
    }
  });

  if (closestIndex !== activeIndex.value) {
    activeIndex.value = closestIndex;
    animateAccent(relationships[closestIndex]);
  }
}

function onScroll() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(updateActiveFromScroll);
}

function animateAccent(toRelationship) {
  const root = sectionRootEl.value;
  if (!root) return;
  if (reduceMotion) {
    root.style.setProperty("--accent", toRelationship.accent);
    root.style.setProperty("--accent-soft", toRelationship.accentSoft);
    return;
  }
  gsap.to(root, {
    "--accent": toRelationship.accent,
    "--accent-soft": toRelationship.accentSoft,
    duration: 0.45,
    ease: "power2.out",
    overwrite: "auto",
  });
}

onMounted(async () => {
  reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  await nextTick();
  animateAccent(relationships[0]);

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  updateActiveFromScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("resize", onScroll);
});
</script>

<template>
  <section class="rel-section" ref="sectionRootEl" id="relationships_cards">
    <h2 class="rel-heading">
      Different relationships unlock different experiences.
    </h2>

    <div class="rel-layout">
      <div class="rel-sticky-col">
        <RelationshipCard :relationship="activeRelationship" />
      </div>

      <div class="rel-scroll-col">
        <RelationshipBlock
          v-for="(relationship, index) in relationships"
          :key="relationship.id"
          :ref="(el) => setBlockRef(el, index)"
          :relationship="relationship"
          :active="index === activeIndex"
        />
      </div>
    </div>

    <!-- Mobile: no sticky card, no scroll-driven active state — just each
         relationship's card followed by its own feature list, stacked. -->
    <div class="rel-stack">
      <div v-for="relationship in relationships" :key="relationship.id" class="rel-stack__item">
        <RelationshipCard :relationship="relationship" />
        <RelationshipBlock :relationship="relationship" :active="true" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.rel-section {
  --accent: #6a5cf0;
  --accent-soft: #edeafc;
  padding: 112px 0 0;
  background: var(--page-bg);
  scroll-margin-top: calc(var(--header-height) + 16px);
}

.rel-heading {
  margin: 0 auto 57px;
  font-family: var(--font-sans);
  padding: 0 16px;
  text-align: center;
  font-size: 36px;
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 43px;
  color: var(--color-text-primary);
}

.rel-layout {
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 40px 16px 64px;
  display: grid;
  grid-template-columns: minmax(280px, 380px) 1fr;
  gap: 64px;
  align-items: start;
}

.rel-sticky-col {
  position: sticky;
  top: 20vh;
}

.rel-scroll-col {
  min-width: 0;
}

.rel-stack {
  display: none;
}

@media (max-width: 900px) {
  .rel-layout {
    display: none;
  }

  .rel-stack {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 560px;
    margin: 0 auto;
    padding: 40px 16px 60px;
    gap: 48px;
  }

  .rel-stack__item {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
}

@media (max-width: 720px) {
  .rel-section {
    padding-top: 64px;
  }

  .rel-heading {
    margin-bottom: 36px;
  }
}
</style>
