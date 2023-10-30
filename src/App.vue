<template>
  <v-app>
    <!-- Toolbar -->
    <v-toolbar title="Application" class="full-width"></v-toolbar>
    <!-- Main Content -->
      <router-view/>
  </v-app>
</template>

<script>
// ... Your script here
</script>

<style>
body, html, #app {
  margin: 0 !important;
  padding:0;
}
.full-width {
  min-width: 100vw;
}
</style>
