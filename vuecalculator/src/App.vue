<template>
  <header>
    <div class="wrapper">
      <Logo />
    </div>
    <router-view></router-view>
  </header>
</template>

<script setup>
import { RouterView } from "vue-router";
import Logo from "./components/Logo.vue";
</script>
