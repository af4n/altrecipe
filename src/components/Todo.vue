<template>
	<div class="todo" :class="{ 'todo_completed': todo.completed }">
		<div class="todo__info">
			<span class="todo__number">{{ index + 1 }}</span>
			<span class="todo__title">{{ todo.title }}</span>
			<span class="todo__description">{{ todo.description }}</span>
		</div>
		<div class="todo__actions">
			<span class="todo__check-icon" @click="completeTodo"></span>
			<router-link :to="{ name: 'Todo', params: { id: todo.id }}" class="todo__open-link-icon"></router-link>
			<span class="todo__delete-icon" @click="deleteTodo"></span>
		</div>
	</div>
</template>

<script>
  export default {
    name: "Todo",
    props: {
      todo: {
        type: Object,
        required: true,
      },
      index: {
        type: Number,
        required: true,
      }
    },
		computed: {
      completed() {
        return this.todo.completed
			}
		},
    methods: {
      completeTodo() {
        this.$store.dispatch('completeTodo', this.todo.id)
      },
			deleteTodo() {
        this.$store.dispatch('deleteTodo', this.todo.id)
			}
    }
  }
</script>

<style lang="scss" scoped>
	.todo {
		display: flex;
		justify-content: space-between;
		width: 100%;
		margin-bottom: 5px;
		
		&__info {
			display: flex;
			align-items: center;
			width: 80%;
		}
		
		&__number {
			width: 5%;
		}
		
		&__title {
			width: 25%;
			padding: 0 5px;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}
		
		&__description {
			width: 70%;
			padding: 0 5px;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}
		
		&__actions {
			display: flex;
			justify-content: flex-end;
			width: 20%;
		}
		
		&__check-icon {
			position: relative;
			display: inline-block;
			width: 20px;
			height: 20px;
			background: url('../assets/icons/ok.svg') center center/contain no-repeat;
			margin-right: 10px;
			cursor: pointer;
		}
		
		&__open-link-icon {
			position: relative;
			display: inline-block;
			width: 20px;
			height: 20px;
			background: url('../assets/icons/open.svg') center center/contain no-repeat;
			margin-right: 10px;
			cursor: pointer;
		}
		
		&__delete-icon {
			position: relative;
			display: inline-block;
			width: 20px;
			height: 20px;
			background: url('../assets/icons/delete.svg') center center/contain no-repeat;
			cursor: pointer;
		}
		
		&_completed {
			background-color: #EFEFEF;
			
			.todo {
				&__check-icon {
					background-image: none;
				}
			}
		}
	}
</style>