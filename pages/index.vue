<template>
  <v-container>
  </v-container>
</template>

<script>

import {  mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["colortext", "maincolor"]),

  },
}
</script>
