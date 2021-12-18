<template>
	<div class="todo-list">
		<div v-if="todos.length">
			<todo
					v-for="(todo, index) in todos"
					:key="todo.id"
					:todo="todo"
					:index="index"
			/>
		</div>
		<div v-else>
			No todos ...
		</div>
	</div>
</template>

<script>
  import Todo from "@/components/Todo.vue";

  export default {
    name: "List",
    components: {
      Todo
    },
    computed: {
      todos() {
        return this.$store.getters.todos
      }
    }
  }
</script>

<style scoped>

</style>