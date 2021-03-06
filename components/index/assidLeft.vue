<template>
    <div>
        <v-row>
            <v-col>
                <v-card class="px-2">
                    <v-list class="comain">
                        <p class="headline" :class="colortext">Shortcuts</p>
                        <v-list-item  
                        v-for="(i,n) in items"
                        @mouseover="myhover(n)"
                        @mouseleave="myleave()"
                        class="mousecur"
                        :key="n">
                            <v-list-item-title :class="i.hover?colortext:''">
                                <v-icon class="mr-2" size="15">
                                    {{i.icon}}
                                </v-icon>
                                {{i.title}}
                                
                            </v-list-item-title>

                        </v-list-item>
                    </v-list>
                </v-card>
            </v-col>
        </v-row>
        <v-row class="scorlleft" :class="$vuetify.breakpoint.smAndDown?'overfix':''">
            <v-col>
                <v-card class="pa-2">
                    <v-card-title  :class="colortext" class="headline">
                        Who's Follownig
                    </v-card-title>
                    <p class="pa-0">  </p>

                    <v-list class="comain">
                        <v-list-item class="px-2 mb-4 mousecur" v-for="(i,n) in follome" :key="n">  
                        <v-list-item-avatar>
                        <v-img :src="i.img"></v-img>
                        </v-list-item-avatar>
                        <div class="d-block pt-2">
                            <v-list-item-title>{{i.name}}</v-list-item-title>
                        <v-list-item-title class="body-2 mt-3">add frind</v-list-item-title>
                        </div>
                        
                    </v-list-item>
                    </v-list>

                </v-card>
            </v-col>
        </v-row>

    </div>
    
</template>

<script>
import {mapGetters} from "vuex"
export default {
    mounted(){



let fixbar = document.querySelector(".scorlleft");
let sticky = fixbar.offsetTop;
    window.addEventListener("scroll",()=>{myFunction()}) 


function myFunction() {
  if (window.scrollY > sticky) {
    

    fixbar.classList.add("fixtop");
        if(fixbar.classList.contains('overfix')){
        fixbar.classList.remove("fixtop");
    }

  } else {
    fixbar.classList.remove("fixtop");
  }
}
    
    },
    data(){
        return{
            items:[
                {hover:false,title:"News Feed",icon:"far fa-clipboard"},
                {hover:false,title:"Inbox",icon:"fa-mouse"},
                {hover:false,title:"My Pages",icon:"fa-file"},
                {hover:false,title:"Friends",icon:"fa-user"},
                {hover:false,title:"Friends",icon:"fa-images"},
                {hover:false,title:"Images",icon:"fa-camera-retro"},
                {hover:false,title:"Videos",icon:"far fa-smile-beam"},
                {hover:false,title:"Messages",icon:"far fa-bell"},
                {hover:false,title:"Notifications",icon:"far fa-share-square"},
                {hover:false,title:"People Nearby",icon:"fa-chart-bar"},
                {hover:false,title:"Insights",icon:"fa-power-off"},
            ],
            follome:[
                {img:"https://cdn.vuetifyjs.com/images/lists/2.jpg",name:"alderaze"},
                {img:"http://www.wpkixx.com/html/winku/images/resources/friend-avatar6.jpg",name:"mohamad"},
                {img:"http://www.wpkixx.com/html/winku/images/resources/side-friend1.jpg",name:"ziad"},
                {img:"http://www.wpkixx.com/html/winku/images/resources/side-friend7.jpg",name:"kaled"},
                {img:"https://cdn.vuetifyjs.com/images/lists/2.jpg",name:"hamzah"},

            ]
        }
    },
    computed:{...mapGetters(['colortext'])},
    methods:{
        myhover(ind){
            for(let i in this.items){
                this.items[i].hover = false
            }
            this.items[ind].hover = true
        },
        myleave(){
            for(let i in this.items){
                this.items[i].hover = false
            }
        }
    }
    
}
</script>

<style>
.mousecur{
    cursor: pointer;
}
.fixtop{
    position: fixed;
    width: 22%;
    top: 45px;
}
    
</style>