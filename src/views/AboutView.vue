<template>
  <main class="wrapper">
    <AboutStart />
    <AboutDesc />
    <AboutSpec />
    <AboutCollab />

    <!-- <p class="about__paragraph">
      You can go to the
      <RouterLink class="about__link" to="/projects">Projects</RouterLink>
      section to see my work. In this section, I would like to share with you
      some of the projects I have been working on.
    </p>
    
    <p class="about__paragraph">
      You can also learn more about the technologies I use in the
      <RouterLink class="about__link" to="/stack">Technologies</RouterLink>
      section.
    </p> -->
  </main>
</template>

<script setup>
import AboutDesc from "@/views/AboutDesc.vue";
import AboutStart from "@/views/AboutStart.vue";
import AboutCollab from "@/views/AboutCollab.vue";
import AboutSpec from "@/views/AboutSpec.vue";
</script>
