<template>
	<form class="form" @submit.prevent="addTodo">
		<input v-model="title" name="title" id="title" class="form__input" placeholder="Enter title" />
		<textarea v-model="description" name="description" id="description" rows="4" class="form__textarea" placeholder="Enter description" />
		<button class="form__button" type="submit">Create todo</button>
	</form>
</template>

<script>

  export default {
    name: "Form",
    data() {
      return {
        title: '',
        description: '',
      }
    },
    methods: {
      addTodo() {
        if (!this.title || !this.description) return
				
        const todo = {
          id: Date.now(),
          title: this.title,
          description: this.description,
          completed: false,
        };
        
        this.$store.dispatch('createTodo', todo)
        this.clearForm()
      },
      clearForm() {
        this.title = ''
        this.description = ''
      },
    }
  };
</script>

<style scoped lang="scss">
	.form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-bottom: 50px;
		
		&__input {
			height: 30px;
			padding-left: 10px;
			margin-bottom: 10px;
			font-family: monospace;
		}
		
		&__textarea {
			padding-left: 10px;
			padding-top: 10px;
			margin-bottom: 10px;
		}
		
		&__button {
			position: relative;
			font-family: monospace;
			height: 36px;
			overflow:hidden;
			cursor: pointer;
			
			&:before {
				content: '';
				position: absolute;
				width: 20px;
				height: 20px;
				background: url('../assets/icons/plus.svg') center center/contain no-repeat;
				top: 6px;
				left: -30px;
				transition: all 200ms ease;
			}
			
			&:hover:before {
				left: 6px;
			}
		}
	}
</style>
