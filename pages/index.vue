<template>
  <v-container class="maincontaner">
    <v-row>
      <v-col md="3" sm="6" cols="12">
        <sidparLeft/>
      </v-col>
      <v-col 
      md="6" 
      sm="12" 
      cols="12"
      :class="$vuetify.breakpoint.smAndDown?'order-2':'order-1'" 
      >
      <posts/>

      </v-col>
      <v-col 
      md="3" 
      sm="6" 
      cols="12" 
      :class="$vuetify.breakpoint.mdAndDown?'order-1':'order-2'" 
      >
        <sidparRight/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import sidparLeft from "../components/index/assidLeft"
import sidparRight from "../components/index/assidRight"
import posts from "../components/index/posts"

import {  mapGetters } from "vuex";
export default {

  fetch({$axios,store}) {
    return $axios.$get("http://localhost:5000/counts")
      .then(res => {
        store.commit("gitfind",res)
        store.commit("gitfind2")
      }),
      $axios.$get("http://localhost:5000/posts")
      .then(res => {
        store.commit("getposts",res)
      });
  },
  // fetch({$axios,store}) {
  //   return $axios.$get("http://localhost:5000/posts")
  //     .then(res => {
  //       store.commit("getposts",res)
  //     });
  // },
  

  data(){
    return{
      
    }

  },
 
  
  computed: {
    ...mapGetters(["colortext", "maincolor"]),

  },
    methods:{
        
    },
  components:{sidparLeft,sidparRight,posts}
}
</script>

<style>
.maincontaner{
  padding: 0 2px;
}
  
</style>
