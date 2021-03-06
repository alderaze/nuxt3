import nav from "./navbar/nav";
import drawer from "./navbar/drawer";
import mycolor from "./theme/getmaincolor";


const storee ={
    state: () => ({
      frinds :[],
      frindSearch :[],
      searchName:"",
      posts:[]
  }),
getters:{
  frindSearch(state){
    return state.frindSearch
  },
  searchName(state){
    return state.searchName
  },
  posts(state){
    return state.posts
  }
},
  mutations: {
    gitfind(stats,u){
      return stats.frinds = u
    },
   
    gitfind2(stats){
      return stats.frindSearch = stats.frinds
    },
    fil(state){
      return state.frindSearch = state.frinds.filter(e => e.name.match(state.searchName))
    },
    fill(state,val){
      return state.searchName = val      
    },



    getposts(stats,u){
      return stats.posts = u
    },


  },
    actions: {

    },
    modules: {
    naving: nav,
    mycolor: mycolor,
    drawer: drawer,
  
  },


  }


export default storee