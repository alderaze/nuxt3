<template>
  <v-app-bar :color="!$vuetify.theme.dark?'white':''" fixed app height="56"  class="clipped">
    
     <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="restdraw"
    ></v-app-bar-nav-icon>
    <v-list style="background:transparent!important">
    <v-list-item router to="/" class="linkhead" >
    <v-img :src="!$vuetify.theme.dark?require('../../assets/img/logo.png'):require('../../assets/img/logo2.png')"></v-img>

    </v-list-item>
    </v-list>
    
    <myleft class="hidden-sm-and-down" />
    
    <v-spacer></v-spacer>
    <myright class="hidden-sm-and-down" />

   
    

  </v-app-bar>
</template>
<script>
import myleft from "./navbarheader/left"
import myright from "./navbarheader/right"
import { mapMutations, mapGetters } from "vuex";

export default {
  props: ["drawer"],
  data() {
    return {
      toggel:true,
      dialog:false,
      messages: 4,
      show: false,
      model: 1,
      infos: [
        "Mike John Responded to your email",
        "You have 5 new tasks",
        "You're now friends with Andrew",
        "Another Notification",
        "Another one",
      ],
      user: ["portfile", "sitting"],
    };
  },
  computed: {
    ...mapGetters(["maincolor", "colortext"]),
    mini: {
      get() {
        return this.$store.getters["naving/minii"];
      },
      set() {
        console.log("asdsd");
      },
    },
    
  },
  methods: {
    ...mapMutations("naving", ["setmini", "retdrawer"]),
    restdraw() {
      let r = this.drawer;
      r = !r;
      this.$emit("changemini", r);
      
    }

  },
  components:{myleft,myright}

};
</script>

<style>
.clipped{
  left: 0!important;
  width: 100%;
}
.bar {
  background: transparent !important;
}
</style>

<style scoped>
.home.v-btn:not(.v-btn--round).v-size--default {
  min-width: 60px !important;
}
.v-list-item :hover .v-list-item--link:before {
  background-color: red !important;
  bottom: 0;
  content: "";
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}
.linkhead.v-list-item--link:before{
  background: transparent!important;
}
</style>