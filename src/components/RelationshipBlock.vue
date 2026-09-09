<script setup>
import RelationshipFeatureItem from "./RelationshipFeatureItem.vue";

defineProps({
  relationship: { type: Object, required: true },
  active: { type: Boolean, default: false },
});
</script>

<template>
  <article
    class="rel-block"
    :class="{ 'is-active': active }"
    :style="{
      '--accent': relationship.accent,
      '--accent-soft': relationship.accentSoft,
    }"
  >
    <div class="rel-block__features">
      <RelationshipFeatureItem
        v-for="feature in relationship.features"
        :key="feature.key"
        :feature="feature"
        :active="active"
      />
    </div>
  </article>
</template>

<style scoped>
.rel-block {
  padding: 40px 0;
  border-top: 1px solid var(--border-soft);
}

.rel-block:first-child {
  border-top: none;
  padding-top: 4px;
}

.rel-block__features {
  display: flex;
  flex-direction: column;
}
</style>
