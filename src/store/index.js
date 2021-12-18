import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: JSON.parse(localStorage.getItem('todos')) || [],
  },
  mutations: {
    createTodo(state, todo) {
      state.todos.push(todo)

      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    completeTodo(state, id) {
      const index = state.todos.findIndex(todo => todo.id === id)
      state.todos[index].completed = true

      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    deleteTodo(state, id) {
      const index = state.todos.findIndex(todo => todo.id === id)
      state.todos.splice(index, 1)

      localStorage.setItem('todos', JSON.stringify(state.todos))
    }
  },
  actions: {
    createTodo({ commit }, todo) {
      commit('createTodo', todo)
    },
    completeTodo({ commit }, id) {
      commit('completeTodo', id)
    },
    deleteTodo({ commit }, id) {
      commit('deleteTodo', id)
    }
  },
  getters: {
    todos(state) {
      return state.todos
    },
    todoById(state) {
      return function(id) {
        return state.todos.find(todo => todo.id === id)
      }
    }
  },
});
