import Vue from 'vue'
import Vuex from 'vuex'
import ChildrensBooks from "../assets/ChildrensBooks.json";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ChildrensBooks:[...ChildrensBooks],
    ReadingList:[]
  },
  mutations: {
    updateReadingList(state, book){
      if(!state.ReadingList.find(item => (item == book))){
        state.ReadingList.push(book)
      }
    },
    removeFromList(state,item){
      let remove = state.ReadingList.find(listItem => (listItem == item))
      if(remove){
        state.ReadingList.splice(state.ReadingList.indexOf(remove),1)
      }
    }
  }
})
