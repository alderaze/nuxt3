<template>
  <v-app class="dd" dark :style="!$vuetify.theme.dark?'background:#f4f2f2':'background:#505050'">
  <app-Nave/>
  <app-Sittings/>
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>

     <v-footer
    dark
    padless
    height="50px"
  >
  <v-card class="text-center" width="100%">
    <v-card-title class="d-block tex-center">
      dan 2021
    </v-card-title>
  </v-card>

  </v-footer>
    
  </v-app>
</template>

<script>
import appNave from"./layout/appNave"
import appSittings from"./layout/appSittings"
export default {
  
  components:{appNave,appSittings},
  middleware:"med"
}
</script>

<style >

  
</style>

