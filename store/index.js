import nav from "./navbar/nav";
import drawer from "./navbar/drawer";
import mycolor from "./theme/getmaincolor";


const storee ={
    state: () => ({
      frinds :[],
      frindSearch :[],
      searchName:"",
      posts:[],
      mycommint:{
        img:"",
        name:"alderaze",
        title:""
      }
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
  },

  myCommintTitle(state){
    return state.mycommint.title
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
    enterCommintTit(state,val){
      return state.mycommint.title = val
    }


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