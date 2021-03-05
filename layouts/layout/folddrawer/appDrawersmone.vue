<template>
    <div class="myTransform2" :class="movedr?'movstartdra2':''">
      <v-btn icon @click="startmove2()">
      <v-icon>fa-angle-left</v-icon>
      </v-btn>
      <p class="text-center">child</p>
        <v-divider></v-divider>
      

      <div v-for="(i,n) in pages" :key="n">
        <v-list v-if="cholddra[n]">
          <p class="text-uppercase title">{{i.name}}</p>
          <v-list-item  v-for="(r) in i.pages" :key="r">
            <v-list-item-title class="d-block text-uppercase">
            {{r}}
          </v-list-item-title>

        </v-list-item>
      </v-list>
      </div>

      
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    props:["movedr","cholddra"],


  data() {
    return {
      pages:[
      {name:"home",pages:["home scail1","home scail2","home campany","login page","log out"]},
      {name:"timeline",pages:["timeline frinds","timeline pages","timeline photo","vedio","group page"]},
      {name:"acount sitting",pages:["crate fav page","edit page sitting","edit-Enterst","message","work"]},
      {name:"forum",pages:["forum page","forum catigory","forum open topic","forum opcreaten topic"]},
      {name:"our blog",pages:["our blog","Blog with R-Sidebar","Blog with L-Sidebar","Blog List Style","Blog List with R-Sidebar"]},
      {name:"portfolio",pages:["Portfolio 2col","Portfolio 3col","Portfolio 4col"]},
      {name:"support help",pages:["Support & Help","Support & Help Detail","Support & Help Search Result"]},

      ]
    }
  },
  computed: {
    ...mapGetters(["colortext", "maincolor"]),
  },
  methods:{
    startmove2(){
      let r = this.movedr 
      r = false
      this.$emit("mainmov2",r)
    }
  }

};
</script>
<style scoped>
.myTransform2{
  position: absolute;
  left:300px;
  top:0;
  height: 100%;
  width: 100%;
  transition: all .5s;
  opacity: 0;


  
}
.movstartdra2{
  left: 0px;
  transition-delay: .1s;
  opacity: 1;


}

</style>

