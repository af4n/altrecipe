<template>
	<div class="home">
		<h1>Todo list</h1>
		<todo-form />
		<list />
	</div>
</template>

<script>
  import TodoForm from "@/components/TodoForm.vue";
  import List from "@/components/List.vue";

  export default {
    name: "Home",
    components: {
      TodoForm, List
    },
  };
</script>

<style lang="scss">
	.home {
		display: block;
		max-width: 600px;
		margin: 100px auto;
	}
</style>
