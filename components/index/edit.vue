<template>
  <v-row justify="center">
    <v-dialog
      :retain-focus="false"
      v-model="dialog"
      persistent
      max-width="500px"
    >
      <v-card>
        <slot />
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
  export default {
    props:{
      dialog2:{
            type:Boolean
    },
    dialog3:{
            type:Boolean
    },
    },
    data: () => ({
      
      ff:false
    }),
    computed:{
      dialog:{

        get(){

          return this.dialog = this.dialog2 || this.dialog3
        },
        set(){
          false
        }
      }
    }
  }
</script>