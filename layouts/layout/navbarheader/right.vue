<template>
    <div>
        <v-list class="trans">
            <v-list-item class="trans d-flex">

                <!-- start search -->
                

                <v-menu
                class="alderaze"
                :close-on-content-click="false"
                offset-y 
                nudge-left="190" 
                nudge-bottom="-17"
                min-width="240px"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon v-bind="attrs"  v-on="on" class="mr-2">
                        <v-icon size="20">
                            fa-search
                        </v-icon>
                    
                        </v-btn>
                    </template>
                    <v-list class="mt-5 ggg px-3 pb-0">
                        <v-text-field
                        label="search"
                        persistent-hint
                    ></v-text-field>
                    </v-list>
                    </v-menu>

                <!-- start search -->
                    <v-btn 
                    icon
                    router
                    to="/" 
                    >
                    <v-icon  size="20">
                        fa-home
                    </v-icon>
                </v-btn>
                

                <!-- start Notices -->
                <v-menu
                :allow-overflow="true" 
                offset-y 
                nudge-left="190" 
                nudge-bottom="-17"
                max-width="240px"
                max-height="400"
                v-for="(item, index) in info" :key="index"
                >
               
                    <template v-slot:activator="{ on, attrs }">

                        <v-badge
                        color="green"
                        :content="numbermess"
                        :offset-x="25"
                        :offset-y="20"
                        >
                        <v-btn icon v-bind="attrs"  v-on="on" class="mr-2">
                        <v-icon size="20">
                        {{item.icon}}
                        </v-icon>
                        </v-btn>

                        </v-badge>
                        
                    </template>
                    <v-list class="mt-5 ggg" >
                        <p class="pl-3">message {{numbermess}}</p>
                        <v-divider class="pb-7"></v-divider>
                        <v-list-item
                        v-for="(it,ind) in item.acount"
                        :key="ind"
                        :class="$vuetify.theme.dark?'hovNav':'hovNavlight'"
                        class="mb-5"
                        >
                        <v-badge
                        bordered
                        dot
                        bottom
                        :color="it.active == 'false'?'grey':'green'"
                        class="mr-4 mt-n10"
                        offset-x="10"
                        offset-y="10"
                    >
                        <v-avatar size="40">
                            <v-img :src="it.img"></v-img>

                        </v-avatar>
                    </v-badge>
                    <div class="d-block">
                        <v-list-item-title class="font-weight-medium mb-2  body-2">{{it.name}}</v-list-item-title>
                        <v-list-item-subtitle class="text-wrap rr">
                            {{it.message}}...
                        </v-list-item-subtitle>
                        <v-list-item-subtitle class="text-wrap pt-3">
                            {{it.active =='false'?'active 2 min ago' : 'active'}}
                        </v-list-item-subtitle>
                    </div>
                        
                        </v-list-item>
                    </v-list>
                    </v-menu>
                <!-- end Notices -->


                <!-- start message -->
                
                    <v-menu
                    class="alderaze"
                    open-on-hover 
                    :allow-overflow="true" 
                    offset-y 
                    nudge-left="10" 
                    nudge-bottom="0"
                    min-width="100px"
                    >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon v-bind="attrs"  v-on="on" class="mr-2">
                        <v-icon size="20">
                            fa fa-globe
                        </v-icon>
                        </v-btn>
                    </template>
                        <v-list class="mt-5 ggg">
                            <v-list-item
                            v-for="it in ['عربي','en']"
                            :key="it"
                            :class="$vuetify.theme.dark?'hovNav':'hovNavlight'"
                            >
                            <v-list-item-title class="font-weight-medium  body-2">{{it}}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>

                <!-- start message -->

                <v-menu
                    class="alderaze"
                    :allow-overflow="true" 
                    offset-y 
                    nudge-left="160" 
                    nudge-bottom="-12"
                    min-width="200px"
                    >
                    <template v-slot:activator="{ on, attrs }">

                        <v-badge
                        bordered
                        bottom
                        color="green accent-4"
                        dot
                        class="ml-8 mr-10"
                        offset-x="10"
                        offset-y="10"
                    >
                        <v-avatar size="40"  v-bind="attrs"  
                        v-on="on">
                        <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
                        </v-avatar>
                    </v-badge>
                    </template>
                        <v-list class="mt-5 ggg">
                            <v-list-item>
                                 
                                    <v-badge
                                    bordered
                                    color="green"
                                    :offset-x="-75"
                                    :offset-y="17"
                                    >
                                    online
                                    </v-badge>
                            </v-list-item>
                            <v-list-item
                            v-for="(i,n) in infoperson"
                            :key="n"
                            :class="$vuetify.theme.dark?'hovNav':'hovNavlight'"
                            >
                            <v-list-item-title>
                               
                            </v-list-item-title>
                            <v-list-item-title class="font-weight-medium  body-2">
                                <v-icon class="pr-1" size="15">
                                    {{i.icon}}
                                </v-icon>
                                {{i.title}}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                    
            </v-list-item>
        </v-list>
    </div>
</template>

<script>
export default {

    mounted(){

        this.$axios.$get('http://localhost:5000/counts').
        then(res => {
            this.numbermess = res.length
            for(let i in this.info){
                this.info[i].acount = res
            }

            
        })

    },

    data(){
        <i class=""></i>

        return{
        numbermess:0,
        info:[
            {icon:"far fa-bell",acount:[]},
            {icon:"far fa-comment-dots",acount:[]}
        ],
        infoperson:[
            {icon:"far fa-user",title:" view profile"},
            {icon:"fas fa-edit",title:" edit profile"},
            {icon:"fa-cog",title:" acount sitting"},
            {icon:"fas fa-sign-out-alt",title:"log out"}
        ]
        }
    }
    
}
</script>

<style >
.trans{
    background: transparent!important;
}
.rr{
     word-wrap:break-word !important
}
/* width */
.v-menu__content::-webkit-scrollbar {
  width: 10px;
}

/* Track */
.v-menu__content::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
.v-menu__content::-webkit-scrollbar-thumb {
  background: grey; 
  border-radius: 10px;
}

/* Handle on hover */
.v-menu__content::-webkit-scrollbar-thumb:hover {
  background: #696969; 
}
</style>