<template>
    <div class="myTransform" :class="movedr?'movstartdra1':''">

      <v-list>
        <p class="text-center">menue</p>
        <v-divider></v-divider>
        <v-list-item  
        v-for="(i,n) in items" 
        :key="n"
        @click="startmove(),showChild(n)" 

        >

          <div style="width:100%!important" class="d-flex justify-space-around">
            <v-list-item-title class="d-block text-uppercase">
            {{i.name}}
          </v-list-item-title>
          <v-icon @click="startmove(),showChild(n)"  class="d-block">
              {{i.icon}}
          </v-icon>
          </div>

        </v-list-item >
        <v-list-item v-for="(i) in items2" :key="i">

            <v-list-item-title class="d-block text-uppercase">
            {{i}}
          </v-list-item-title>

        </v-list-item>
      </v-list>
    
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    props:["movedr","cholddra"],
  data() {
    return {
      items:[
        {child:false,name:"home",icon:"fa-angle-right"},
        {child:false,name:"timeline",icon:"fa-angle-right"},
        {child:false,name:"acount sitting",icon:"fa-angle-right"},
        {child:false,name:"forum",icon:"fa-angle-right"},
        {child:false,name:"our blog",icon:"fa-angle-right"},
        {child:false,name:"portfolio",icon:"fa-angle-right"},
        {child:false,name:"support help",icon:"fa-angle-right"},
      ],
      items2:["about","contact","widgt"],
    };
  },
  computed: {
    ...mapGetters(["colortext", "maincolor"]),
  },
  methods:{
    startmove(){
      let r = this.movedr 
      r = true
      this.$emit("mainmov",r)
    },
    showChild(ind){
        let r = this.cholddra
      for(let i in r){
        r[i] = false
      }
        r[ind] = true
        this.$emit("showChils",r)

    }
  }

};
</script>
<style >
.myTransform{
  transition:all .5s;
  opacity: 1;

  
}
.movstartdra1{
    transform: translate(-309px, 0px);
    opacity: 0;
}

</style>

