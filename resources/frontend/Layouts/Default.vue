<template>
    <main>
      <Navbar />
      <slot></slot>
    </main>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
</script>

<style>
body {
  background-color: #edf1f5 !important;
}
@media (min-width: 1200px){
  .container {
      max-width: 1320px !important;
  }
}
</style>