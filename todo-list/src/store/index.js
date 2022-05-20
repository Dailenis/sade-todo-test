import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
      todoList: JSON.parse(localStorage.getItem('todoList') || "[]")
      
    },
    mutations: {
      setTodoList(state, todoList) {
        state.todoList = todoList;
        localStorage.setItem("todoList",JSON.stringify(state.todoList))
      },
    },
    getters:{
      allChecked(state){
        if(state.todoList.every(ele => ele.state === 'completed')){
            return true;
        }
        return false
      },
      allUnchecked(state){
        if(state.todoList.every(ele => ele.state === 'active')){
            return true;
        }
        return false
      }
    },
    actions:{
        addTodoItem({state, commit}, item){
            const list = [...state.todoList]
            list.push( {name: item, state: 'active'},)
            commit('setTodoList', list)
        },

        updateTodoItem({state, commit}, {index, value}){
            const list = [...state.todoList]
            list[index].name = value
            commit('setTodoList', list)
        },

        removeTodoItem({state, commit}, index){
            const list = state.todoList.filter(ele => ele != state.todoList[index] )
            commit('setTodoList', list)
        },

        clearCompleted({state, commit}){
            let list = state.todoList.filter(ele => ele.state !== 'completed'  )
            commit('setTodoList', list)
        }
       
    },
  });

  export default store