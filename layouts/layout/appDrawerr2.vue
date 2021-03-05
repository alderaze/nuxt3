<template>
  <div >

    <v-list-item
      class=" hov color-icon rounded mt-4 item-nav"
      style=""
      router
      v-for="(item, index) in acounts" :key="index"
      active-class="activebar"
      @click="val(index)"

    
    >
    <v-badge
        bordered
        bottom
        :color="item.active == 'true'?'green':'grey'"
        dot
        offset-x="10"
        offset-y="10"
      >
        <v-avatar size="40">
          <v-img :src="item.img"></v-img>
        </v-avatar>
      </v-badge>
      
    </v-list-item>

  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  mounted(){

        this.$axios.$get('http://localhost:5000/counts').
        then(res => {
            this.numbermess = "message "+res.length
                this.acounts = res

                console.log(this.acounts)
        })

    },

  data() {
    return {
      acounts:[]
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

