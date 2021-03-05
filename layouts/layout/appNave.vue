<template>
  <div class="px-5">
    <v-navigation-drawer
      v-model="drawer"
      class=""
      id="default-drawer"
      :mini-variant="true"
      :clipped="true"
      :src="groundnav"
      height="100vh"
      mini-variant-width="70"
      enable-resize-watcher
      app
    >
      <app-Drawerr class="px-2 hidden-sm-and-down" />
    </v-navigation-drawer>

    <v-navigation-drawer
      v-model="drawer"
      right
      id="default-drawer"
      :mini-variant="true"
      :clipped="true"
      :src="groundnav"
      height="100vh"
      mini-variant-width="70"
      enable-resize-watcher
      app
    >
      <app-Drawerr2 class=" hidden-sm-and-down" />
    </v-navigation-drawer>
    <app-Navheader :drawer="drawer" @changemini="drawer= $event" />
  </div>
</template>

<script>
import appNavheader from "./appNavheader";
import appDrawerr from "./appDrawerr";
import appDrawerr2 from "./appDrawerr2";

import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      drawer:true
    };
  },
  computed: {
    ...mapGetters(["maincolor", "colortext", "groundnav"]),

    
  },
  methods: {
  },

  components: {
    appNavheader,
    appDrawerr,
    appDrawerr2,
  },
};
</script>





<style lang='sass'>
.nav
  overflow-y: auto !important
  overflow-x: hidden !important

#default-drawer
  .v-list-item
    margin-bottom: 8px

  .v-list-item::before,
  .v-list-item::after
    display: none

  .v-list-group__header__prepend-icon,
  .v-list-item__icon
    margin-top: 12px
    margin-bottom: 12px
    margin-left: 4px

  &.v-navigation-drawer--mini-variant
    .v-list-item
      justify-content: flex-start !important
</style>

