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
      :mini-variant-width="$vuetify.breakpoint.mdAndUp?70:320"
      enable-resize-watcher
      app
    >
      <app-Drawerr class="px-2 hidden-sm-and-down" />


      <app-Drawersm 
      :movedr="movedr"
      :cholddra="cholddra"
      @showChils="cholddra = $event"
      @mainmov="movedr = $event"
      class="px-2 hidden-md-and-up" />


      <app-Drawersmone 
      :cholddra="cholddra"
      :movedr="movedr"
      @mainmov2="movedr = $event"
      class="px-2 hidden-md-and-up"  />
    </v-navigation-drawer>

    <v-navigation-drawer
      class="px-2 hidden-sm-and-down"
      right
      id="default-drawer"
      :mini-variant="true"
      :clipped="true"
      height="100vh"
      mini-variant-width="70"
      enable-resize-watcher
      app
    >
      <app-Drawerr2 class=" hidden-sm-and-down" />
    </v-navigation-drawer>
    <app-Navheader 
    :drawer="drawer"
    @changemini="drawer= $event"
    />
  </div>
</template>

<script>
import appNavheader from "./appNavheader";
import appDrawerr from "./folddrawer/appDrawerr";
import appDrawerr2 from "./folddrawer/appDrawerr2";
import appDrawersm from "./folddrawer/appDrawersm";
import appDrawersmone from "./folddrawer/appDrawersmone";

import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      drawer:true,
      small:true,
      movedr:false,
      cholddra:[false,false,false,false,false,false,false]

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
    appDrawersm,
    appDrawersmone,
  },
};
</script>

<style>

.alderaze{
  display: none;
}
</style>



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

