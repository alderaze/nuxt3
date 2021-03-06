<template>
    <div>
        <v-row>
            <v-col>
                <v-card class="px-2 ">
                    <v-list class="comain">
                        <p class="headline" :class="colortext">Your Page</p>
                        <v-list class="comain">
                        <v-list-item class="px-2 mb-4  mousecur" >  
                        <v-list-item-avatar size="60">
                        <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
                        </v-list-item-avatar>
                        <div class="d-block pt-2">
                            <v-list-item-title :class="colortext">my page</v-list-item-title>
                            <v-list-item-title class="body-2 mt-3">
                                <v-icon size="15">
                                    far fa-comment-dots
                                </v-icon>
                                message
                                <span style="border:1px solid;" class="d-inline-block">7</span>
                            </v-list-item-title>
                            <v-list-item-title class="body-2 mt-3">
                                <v-icon size="15">
                                    far fa-bell
                                </v-icon>
                                Notifications
                                <span style="border:1px solid;" class="d-inline-block">7</span>
                            </v-list-item-title>
                        </div>
                        
                    </v-list-item>
                    <v-list-item  class="text-center justify-center">
                        <div  class="text-center pt-5">
                            <div class="ml-2 ">
                                <v-btn class="mr-n1 d-inline-block px-7 py-0" @click="showVeiw = true" :color="showVeiw?maincolor:''">likes</v-btn>
                                <v-btn class="ml-0  d-inline-block px-7 py-0" @click="showVeiw = false" :color="showVeiw == false?maincolor:''">veiw</v-btn>
                            </div>
                            <div v-if="showVeiw" class="pt-5 text-center">
                                <p>
                                    <v-icon size="15">
                                        far fa-heart
                                    </v-icon>
                                    800
                                    </p>
                                    <a href="#">New Likes This Week</a>
                                    <div class="pt-5 ml-3">
                                        <v-avatar v-for="i in 6" :key="i" class="ml-n4">
                                    <img
                                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                                        alt="John"
                                    >
                                    </v-avatar>
                                    </div>

                            </div>

                            <div v-else class="text-center pt-5">
                            <div >
                                <p>
                                    <v-icon size="15">
                                        far fa-eye
                                    </v-icon>
                                    800
                                    </p>
                                    <a href="#">New view This Week</a>
                                    <div class="pt-5 ml-3">
                                        <v-avatar v-for="i in 6" :key="i" class="ml-n4">
                                    <img
                                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                                        alt="John"
                                    >
                                    </v-avatar>
                                    </div>

                            </div>
                        </div>
                        </div>

                    </v-list-item>
              
                    </v-list>
                    </v-list>
                </v-card>
            </v-col>
        </v-row>
        <v-row class="scorllRight" :class="$vuetify.breakpoint.smAndDown?'overfix':''">
            <v-col>
                <v-card class="pa-2">
                    <p :class="colortext" class="headline">frinds</p>
                    <v-text-field
                        @input="fil()"
                        v-model="searchName"
                        label="search frinds"
                        outlined
                    ></v-text-field>
                  
                    <div >
                        <v-list-item
                        class="  color-icon pl-1 ml-0 rounded mt-4 item-nav"
                        style=""
                        v-for="(item, index) in frindSearch" :key="index"
                        
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
                        <div class="ml-4 pt-3">
                                <p class="mb-0">
                                    {{item.name}}
                                </p>
                                <p class="caption grey--text" >
                                    {{item.email}}
                                </p>
                        </div>
                        </v-list-item>
                        

                    </div>

                </v-card>
            </v-col>
        </v-row>

    </div>
    
</template>

<script>
import {mapGetters,mapMutations} from "vuex"
export default {
    mounted(){



let fixbar = document.querySelector(".scorllRight");
let sticky = fixbar.offsetTop;
    window.addEventListener("scroll",()=>{myFunction()}) 


function myFunction() {
  if (window.scrollY > sticky) {

    fixbar.classList.add("fixtop2");
    if(fixbar.classList.contains('overfix')){
        fixbar.classList.remove("fixtop2");
    }
  } else {
    fixbar.classList.remove("fixtop2");
  }
}
    },
    
    
    data(){
        return{
            showVeiw:true,
        }
    },
    computed:{
        ...mapGetters(['colortext','maincolor','frindSearch',"numb"]),

        searchName:{

            get(){
                return this.$store.getters["searchName"]
            },
            set(val){

                return this.$store.commit("fill",val)

            }

        }

        
        },
    methods:{
        ...mapMutations(["fil"])
    }
    
}
</script>

<style>
.mousecur{
    cursor: pointer;
}
.fixtop2{
    position: fixed;
    width: 22%;
    top: 45px;
}
    
</style>