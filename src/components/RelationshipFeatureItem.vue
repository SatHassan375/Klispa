<script setup>
import { computed } from "vue";
import icons from "../data/icons.js";

const props = defineProps({
  feature: { type: Object, required: true },
  active: { type: Boolean, default: true },
});

const iconMarkup = computed(() => icons[props.feature.icon] || icons.gift);
</script>

<template>
  <div class="feature-item" :class="{ 'is-active': active }">
    <span class="feature-item__icon" v-html="iconMarkup" />
    <div class="feature-item__text">
      <p class="feature-item__title">{{ feature.title }}</p>
      <p class="feature-item__desc">{{ feature.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.feature-item {
  display: grid;
  grid-template-columns: 22px 1fr;
  gap: 14px;
  align-items: start;
  padding: 10px 0;
  opacity: 0.4;
  transition: opacity 0.45s var(--ease-out);
}

.feature-item.is-active {
  opacity: 1;
}

.feature-item__icon {
  width: 20px;
  height: 20px;
  margin-top: 2px;
  color: var(--accent);
}

.feature-item__icon :deep(svg) {
  width: 100%;
  height: 100%;
}

.feature-item.is-active .feature-item__icon {
  color: var(--accent);
}

.feature-item:not(.is-active) .feature-item__icon {
  color: var(--ink-faint);
}

.feature-item__title {
  margin: 0 0 3px;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.3;
  color: var(--ink);
  transition: color 0.45s var(--ease-out);
}

.feature-item:not(.is-active) .feature-item__title {
  color: var(--ink-soft);
}

.feature-item__desc {
  margin: 0;
  font-size: 13.5px;
  line-height: 1.5;
  color: var(--ink-soft);
  max-width: 34ch;
}

.feature-item:not(.is-active) .feature-item__desc {
  color: var(--ink-faint);
}
</style>
