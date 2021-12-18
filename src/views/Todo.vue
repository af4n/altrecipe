<template>
	<div class="todo-page">
		<h1>Title: {{ todo.title }}</h1>
		<div class="todo-page__description">Description: {{ todo.description }}</div>
		<div class="todo-page__completed">Completed: {{ todo.completed ? 'Yes' : 'No' }}</div>
		<router-link :to="{ name: 'Home' }" class="todo-page__back">Back to list</router-link>
	</div>
</template>

<script>
  export default {
    computed: {
      todo() {
        return this.$store.getters.todoById(+this.$route.params.id)
      }
		}
  }
</script>

<style lang="scss" scoped>
	.todo-page {
		margin-top: 100px;
		
		&__description {
			margin-bottom: 10px;
		}
		
		&__completed {
			margin-bottom: 50px;
		}
	}
</style>