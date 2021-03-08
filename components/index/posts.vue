<template>
    <div>
        <v-card class="mb-5 pa-4 pt-1" flat >
            <v-btn @click="dialog2 = true,openn()" 
            width="40" 
            height="40" 
            icon 
            class="editpost">
                <v-icon size="15">
                    far fa-edit
                </v-icon>
            </v-btn>
            <edit :dialog2="dialog2">
                
                
                <v-card flat class="pa-3 mb-0 pb-0">
                    <v-textarea
                        v-model="editPostData"
                        auto-grow
                        filled
                        placeholder="enter your commint"
                        rows="1"
                ></v-textarea>

                <v-card-actions class="pa-0 pb-2 ma-0">
                <v-spacer></v-spacer>
                <v-btn
                    color="error darken-1"
                    text
                    @click="dialog2 = false"
                >
                    Close
                </v-btn>
                <v-btn
                    color="green darken-1"
                    text
                    @click="dialog2 = false,restt(parseInt(id)+1,editPostData)"
                >
                    Save
                </v-btn>
                </v-card-actions>
                </v-card>
                
            </edit>
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
                    {{name}}
                    </p>
                    <p class="caption grey--text" >
                    1 week
                    </p>
                </div>
            </v-list-item>
            <v-card-text>
                {{editPostData2}}
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
                    :color="maincolor"
                    fab
                    class="pa-0"
                    max-height="30px"
                    max-width="30px"
                    >
                    <v-icon  size="18">
                        fa-share-alt
                    </v-icon>
                    </v-btn>
                    <v-btn 
                    :color="maincolor"
                    fab
                    class="pa-0 posicon"
                    max-height="30px"
                    max-width="30px"  
                    :class="hover?'posicon1' :''" >
                    <v-icon size="15">fab fa-html5</v-icon>
                    </v-btn>
                    <v-btn 
                    :color="maincolor"
                    fab
                    class="pa-0 posicon"
                    max-height="30px"
                    max-width="30px"  
                    :class="hover?'posicon2':''" >
                    <v-icon size="15">fab fa-instagram</v-icon>
                    </v-btn>
                    <v-btn 
                    :color="maincolor"
                    fab
                    class="pa-0 posicon"
                    max-height="30px"
                    max-width="30px"  
                    :class="hover?'posicon3':''">
                    <v-icon size="15">fab fa-twitter </v-icon>
                    </v-btn>
                    <v-btn 
                    :color="maincolor"
                    fab
                    class="pa-0 posicon"
                    max-height="30px"
                    max-width="30px"  
                    :class="hover?'posicon4':''">
                    <v-icon size="15">fab fa-google-plus </v-icon>
                    </v-btn>
                    <v-btn
                    :color="maincolor"
                    fab
                    class="pa-0 posicon"
                    max-height="30px"
                    max-width="30px"  
                    :class="hover?'posicon5':''" 
                    ><v-icon size="15">fab fa-facebook-f </v-icon>
                    </v-btn>
                </div>
                </div>
                <v-divider class="my-5"></v-divider>



                

                <commint :commints3="commints2" :id="id"/>
                
        </v-card>
    </div>
</template>
<script>

import commint from "./commint"
import edit from "./edit"
import {mapGetters,mapMutations} from "vuex"
export default {
    props:["body","name","commints2","id"],
    data(){
        return{
            dialog2: false,
            hover:false,
            iconpsot:["far fa-eye","far fa-heart","far fa-comment-dots"],
            editPostData:'',
            editPostData2 :this.body

        }
    
    },
    computed:{
        ...mapGetters(["colortext","maincolor"]),
    },
    methods:{

        openn(){
            this.editPostData = this.editPostData2
        },
        restt(id,val){
            return this.$axios.$patch(`http://localhost:5000/posts/${id}`,{
                body:val
            })
            .then(res => {
                console.log(res)
                this.editPostData2 = this.editPostData
            }).
            catch(reg => console.log(reg))
            ;
        },
        
 
        

    },
    components:{commint,edit}
}

</script>

<style >
.editpost{
    position: absolute;
    right: 9px;
    top: 12px;
    cursor: pointer!important;
    z-index: 2;
}
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
    transform: translate(-3px,-43px) rotate(0deg) !important;
    opacity: 1;

    
}
.posicon1{
    z-index: 1;
    transform: translate(-44px,-8px) rotate(0deg) !important;
    opacity: 1

}
</style>


