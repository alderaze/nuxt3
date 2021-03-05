<template>
    <div class="ml-md-16 pl-md-8">
        <v-list class="d-flex trans" >
            <v-list-item 
            class=" trans" 
            v-for="(i,n) in items" 
            :key="n">

                

     
                <v-menu
                class="alderaze"
                open-on-hover 
                :allow-overflow="true" 
                offset-y 
                nudge-left="10" 
                nudge-bottom="0"
                min-width="220px"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-list-item-subtitle
                        hide-on-leave
                        v-bind="attrs"
                        v-on="on"
                        class="body-2 lighten-4  pr-3 "
                        :class="$vuetify.theme.dark?'white--text':'black--text'"
                        >
                        {{i.name}}
                        <v-icon class="pl-2"   size="14">
                            fa-angle-down
                        </v-icon>
                        </v-list-item-subtitle>
                    </template>
                    <v-list class="mt-5 ggg">
                        <v-list-item
                        v-for="(it,nn) in i.item"
                        :key="nn"
                        :class="$vuetify.theme.dark?'hovNav':'hovNavlight'"
                        >
                        <v-list-item-title class="font-weight-medium  body-2">{{it}}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                    </v-menu>
            </v-list-item>
        </v-list>
    </div>
</template>
<script>
export default {
    data(){
        return{

            items:[
                {name:"home acial",
                    item:["home acial","home acial2","home campany","login","log out"]
                    },
                {name:"timeLine",
                item:["timeline frindle","timeline group","timeline pages" ,"timeline vedio" ,"timeline photo","favourit page"]
                },
                {name:"acount sittings",
                item:["creat fav page","eddit acount sittings","Edit-interst","edit-passowrd","edit-Portfile pasics","message box","inbox"]},
                {name:"mor page",
                item:["error","about page","contact page","faq's","widgets"]}
            ]
        }
    }
    
}
</script>


<style>


.trans{
    background-color: transparent!important;
}
.v-menu__content{
box-shadow: none;
}

.ggg{
    border-top: 3px solid #088dcd !important;
}
.hovNav{
    cursor: pointer!important;
    transition: all .3s;
    
}
.hovNav:hover{
    background: #353434;
    padding-left: 23px;
}

.hovNavlight{
    cursor: pointer!important;
    transition: all .3s;
    
}
.hovNavlight:hover{
    background: #eee;
    padding-left: 23px;
}
</style>