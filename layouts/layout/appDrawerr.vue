<template>
  <div >

    <v-list-item
      class="px-2 mx-2 hov color-icon rounded mt-4 item-nav"
      style=""
      router
      v-for="(item, index) in items" :key="index"
      :to="item.router"
      active-class="activebar"
      @click="val(index)"

    
    >
      <v-list-item-icon class="pa-0"  >
        <v-tooltip right :color="maincolor" >
          <template v-slot:activator="{ on, attrs }">
            <v-icon 
            v-on="on"
            v-bind="attrs"
            :class="item.color?colortext:'grey--text'"  
            size="20">
            {{item.icon}}
            </v-icon>
          </template>
          <span class="text-capitalize">{{item.title}}</span>
        </v-tooltip>
      </v-list-item-icon>
    </v-list-item>

  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
       contactme:["codepen","fa-github-alt","fa-facebook"],
    items: [
      {color:false, title:"newfeed page" ,icon: "fa-magnet" ,router:"/feed"},
      {color:false, title:"favourit page" ,icon: "far fa-star",router:"/favourit" },
      {color:false, title:"acount stats" ,icon: "fas fa-level-up-alt",router:"/acount" },
      {color:false, title:"inbox" ,icon: " fa-download",router:"/inbox" },
      {color:false, title:"message" ,icon: "far fa-comment-dots",router:"/message" },
      {color:false, title:"sitting" ,icon: "fas fa-users-cog",router:"/sitting" },
      {color:false, title:"faq'S" ,icon: "far fa-lightbulb",router:"/faq" },
      {color:false, title:"widgets" ,icon: "fas fa-eraser",router:"/wid" },
      {color:false, title:"notification" ,icon: "far fa-bookmark",router:"/notification" },
    ],
    hov:false
    };
  },
  computed: {
    ...mapGetters(["colortext", "maincolor"]),
    ...mapGetters("naving",["minii"]),

  },
  methods: {
    ...mapMutations("naving", ["setmini"]),
    val(val){
    for(let i = 0; i <= this.items.length-1; i++){
          this.items[i].color = false 
          this.items[val].color =  true  
        }
    }
  },
};
</script>
<style  >
.item-nav{
  transition: all .3s!important;

}
.hov:hover{
  transform: matrix(1.2, 0, 0, 1.2, 0, 0)!important;
}
.activebar{
  transform: matrix(1.2, 0, 0, 1.2, 0, 0)!important;
}

.color-icon .v-icon.v-icon {


}

</style>

