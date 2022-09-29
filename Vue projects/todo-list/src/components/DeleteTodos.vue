<template>
  <div class="container">
    <ul class="todos-list">
      <li class="todo-item" v-for="todo in todos" :key="todo.id">
        <span class="todo-content">{{ todo.text }}</span>
        <span class="del-todo" @click="deleteTodo(todo)">Delete</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DeleteTodos",
  data() {
    return {
      todos: this.$store.state.todos,
    };
  },
  methods: {
    deleteTodo(todo) {
      this.$store.commit("deleteTodo", todo.id);
    },
  },
};
</script>

<style scoped>
.container {
  width: 80%;
  margin: 0 auto;
}

.todos-list {
  list-style: none;
  text-align: left;
}

.todo-item {
  padding: 10px;
  cursor: pointer;
}

.todo-content {
  font-size: 20px;
  line-height: 1.5;
  transition: font-weight 0.5s ease-in-out;
}

.del-todo {
  color: #ed8060;
  font-size: 14px;
  float: right;

  font-weight: normal;
}

.todos-status {
  display: flex;
  justify-content: space-around;
}

.done {
  text-decoration: line-through;
  color: #dadadc;

  font-weight: normal;
}
</style>
