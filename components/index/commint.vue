<template>
    <div>

        <v-card   class="mt-5" flat v-for="(i, n) in commints" :key="n">

                    <v-list-item
                        class="align-start color-icon pl-1 ml-0 rounded mt-4 item-nav"
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
                            <v-img :src="i.img"></v-img>
                            </v-avatar>
                                        
                            </v-badge>
                        <v-card class="ml-4"  outlined flat>

                            <!-- edite commint -->
                            <v-btn @click="dialog3 = true" 
                            width="40" 
                            height="40" 
                            icon 
                            class="editcommint">
                                <v-icon size="15">
                                    far fa-edit
                                </v-icon>
                            </v-btn>



                            <edit :dialog3="dialog3">
                
                                <v-card>
                                <v-textarea
                                    v-model="i.title"
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
                                    @click="dialog3 = false"
                                >
                                    Close
                                </v-btn>
                                <v-btn
                                    color="green darken-1"
                                    text
                                    @click="dialog3 = false,restt()"
                                >
                                    Save
                                </v-btn>
                                </v-card-actions>
                                </v-card>
                                
                            </edit>
                            <!--end  edite commint -->




                            <v-card-title class="body-1 pb-0">
                                {{i.name}}
                            </v-card-title>
                            <p class="caption pl-5 grey--text">2 hour ago</p>
                            <v-card-text class="pt-0">
                                {{i.title}}
                            </v-card-text>

                        </v-card>


                        </v-list-item>
                </v-card>

        <v-card class="mt-5" flat >

                    <v-list-item
                        class="align-start color-icon pl-1 ml-0 rounded mt-4 item-nav"
                        style=""
                        
                        >
                        <v-badge
                            bordered
                            bottom
                            color="green"
                            dot
                            offset-x="10"
                            offset-y="10"
                            class="mr-4"
                            >
                            <v-avatar size="40">
                            <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
                            </v-avatar>
                                        
                            </v-badge>

                        <v-textarea
                        auto-grow
                        filled
                        color="deep-purple"
                        placeholder="enter your commint"
                        rows="1"
                        ></v-textarea>
                        
                        </v-list-item>

                </v-card>
        
    </div>
</template>

<script>
import edit from "./edit"

export default {
    props:["commints","id"],
    data(){
        return{
            dialog3:false,
            mycommint: this.commints,
            editcommint:''
        }
    },
    methods: {

        restt(){
            return this.$axios.$patch(`http://localhost:5000/posts/1/?title/="alderaze"`,{
            })
            .then(res => {
                console.log(res)
            }).
            catch(reg => console.log(reg))
            ;
        },
        


    },
    components:{edit}

    
   
    
    
}
</script>

<style >
.editcommint{
    position: absolute;
    right: 9px;
    top: 12px;
    cursor: pointer!important;
    z-index: 2;
}
    
</style>