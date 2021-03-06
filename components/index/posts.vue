<template>
    <div>
        <v-card class="mb-5 pa-4 pt-1" flat v-for="(item, index) in posts" :key="index">
            <v-list-item
            class="  color-icon pl-1 ml-0 rounded mt-4 item-nav"
            style=""
            
            >
            <v-badge
                bordered
                bottom
                color="green"
                dot
                offset-x="10"
                offset-y="10"
                >
                <v-avatar size="40">
                <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
                </v-avatar>
                            
                </v-badge>
                <div class="ml-4 pt-3">
                    <p class="mb-0">
                        alderaze
                    </p>
                    <p class="caption grey--text" >
                    data
                    </p>
                </div>
            </v-list-item>
            <v-card-text>
                {{item.body}}
            </v-card-text>
            <div >
                <v-badge
                v-for="(item, index) in iconpsot" :key="index"
                color="transparent"
                content="6"
                class="mr-8" 
                >
                <v-icon :color="maincolor" size="18">
                {{item}}
                </v-icon>
                </v-badge>

                <v-badge
                color="transparent"
                content="6"
                class="mr-8" 
                >
                <v-icon color="red" size="18">
                    far fa-angry
                </v-icon>
                </v-badge>

                <div class="d-inline-block mianicon ml-2 pa-0">
                    <v-btn
                    @click="hover = !hover"
                    color="black"
                    fab
                    class="pa-0"
                    max-height="30px"
                    max-width="30px"
                    >
                    <v-icon :color="maincolor" size="18">
                        fa-share-alt
                    </v-icon>
                    </v-btn>
                    <v-btn fab
                    class="pa-0 posicon"
                    max-height="30px"
                    max-width="30px"  
                    :class="hover?'posicon1' :''" >
                    <v-icon size="15">fa-share-alt </v-icon>
                    </v-btn>
                    <v-btn color="black"
                    fab
                    class="pa-0 posicon"
                    max-height="30px"
                    max-width="30px"  
                    :class="hover?'posicon2':''" >
                    <v-icon size="15">fa-share-alt </v-icon>
                    </v-btn>
                    <v-btn color="black"
                    fab
                    class="pa-0 posicon"
                    max-height="30px"
                    max-width="30px"  :class="hover?'posicon3':''"><v-icon size="15">fa-share-alt </v-icon></v-btn>
                    <v-btn color="black"
                    fab
                    class="pa-0 posicon"
                    max-height="30px"
                    max-width="30px"  
                    :class="hover?'posicon4':''">
                    <v-icon size="15">fa-share-alt </v-icon>
                    </v-btn>
                    <v-btn color="black"
                    fab
                    class="pa-0 posicon"
                    max-height="30px"
                    max-width="30px"  
                    :class="hover?'posicon5':''" 
                    ><v-icon size="15">fa-share-alt </v-icon>
                    </v-btn>
                </div>

                </div>

                
        </v-card>
    </div>
</template>
<script>
import {mapGetters,mapMutations} from "vuex"
export default {
    
    data(){
        return{
            hover:false,
            iconpsot:["far fa-eye","far fa-heart","far fa-comment-dots"]

        }
    
    },
    computed:{
        ...mapGetters(["colortext","maincolor","posts"])
    },
    methods:{

    }
}

</script>

<style >
.mianicon{
    position: relative!important;
}
.posicon{
    position: absolute !important;
    left: 0;
    transform: translate(0px,0px) rotate(-90deg);
    transition: all .8s  cubic-bezier(0,-1,.95,1.6);
    z-index: -1;
    opacity: 0;
}
.posicon2{

    z-index: 1;
    opacity: 1;
    transform: translate(36px,31px) rotate(0deg) !important
}
.posicon3{
    z-index: 1;
    opacity: 1;
    transform: translate(-17px,39px) rotate(0deg) !important;
}
.posicon4{
    z-index: 1;
    transform: translate(44px,-18px) rotate(0deg) !important;
    opacity: 1;

}
.posicon5{
    z-index: 1;
    transform: translate(-12px,-40px) rotate(0deg) !important;
    opacity: 1;

    
}
.posicon1{
    z-index: 1;
    transform: translate(-41px,-5px) rotate(0deg) !important;
    opacity: 1;

}
</style>


