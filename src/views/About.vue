<template>
  <main class="about">
    <h1>About</h1>
    <p>
      This page exists mainly to prove that navigating away from
      <router-link to="/">Home</router-link> correctly tears down the
      ScrollTrigger instance created by the relationship section, so no
      pinned element or scroll listener lingers on this route.
    </p>
  </main>
</template>

<style scoped>
.about {
  max-width: 560px;
  margin: 0 auto;
  padding: 140px 24px;
}

.about h1 {
  font-size: 28px;
  margin-bottom: 12px;
}

.about p {
  color: var(--ink-soft);
  line-height: 1.6;
}
</style>
