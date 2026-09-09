<script setup>
import RelationshipSection from "../components/RelationshipSection.vue";
import Header from "../components/layout/Header.vue";
import Hero from "../components/Home/Hero.vue";
import MobileInformation from "../components/Home/MobileInformation.vue";
import Labels from "../components/Home/Labels.vue";
import NewsLetter from "../components/Home/NewsLetter.vue";
import Footer from "../components/layout/Footer.vue";
</script>

<template>
  <Header />
  <main>
    <Hero />
    <RelationshipSection />
    <MobileInformation />
    <Labels />
    <NewsLetter />
  </main>
  <Footer />
</template>

<style scoped></style>
