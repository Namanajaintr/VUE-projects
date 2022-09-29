import { createStore } from "vuex";

let store = createStore({
  state: {
    todos: [
      { id: 1, text: "drink Coffee" },
      { id: 2, text: "Workout" },
      { id: 3, text: "cooking" },
      { id: 4, text: "dancing" },
    ],
  },
  mutations: {
    addTodo(state, todoText) {
      state.todos.push({
        id: state.todos.slice(-1)[0].id + 1,
        text: todoText,
      });
      console.log(state.todos);
    },
    deleteTodo(state, todoId) {
      console.log("todoId", todoId);
      let todoIndex = state.todos.indexOf(store.getters.thisTodo(todoId));
      state.todos.splice(todoIndex, 1);
      state.todos[todoIndex].text;
      console.log("todoIndex", todoIndex);
      //console.log("   state.todos[todoIndex].text   ",state.todos[todoIndex].text;);
      console.log(state.todos[todoIndex]);
    },
  },
  getters: {
    thisTodo: (state) => (todoId) => {
      return state.todos.find((todo) => todo.id === todoId);
    },
  },
});

export default store;
