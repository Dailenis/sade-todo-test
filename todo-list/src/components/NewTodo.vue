<template>
    <input 
		ref="newtodo"
		class="new-todo"
		v-model="value" 
		placeholder="What needs to be done?"
		v-on:keyup.esc.stop="escape()"
		v-on:keyup.enter="localIndex !==null ? editItem():  addItem()"
		@blur="localIndex !==null ? editItem() : ''"
		
	/>
</template>

<script>
export default {
    name: 'NewTodo',   
	props:{
		todoIndex: {type: Number, default: null}
	},
    data() {
        return {
			localIndex: this.todoIndex,
            value: this.todoIndex !== null ? this.$store.state.todoList[this.todoIndex].name : ''
        }
    },
	mounted() {
		//input focus
		this.$nextTick(() => {
			const newtodoRef = this.$refs.newtodo;
			newtodoRef.focus();
		});
	},
	methods: {
		addItem(){
			if(this.value){
				this.$store.dispatch('addTodoItem', this.value)
				this.value = ''
			}
		},
		editItem(){
			if(this.value){				
				this.$store.dispatch('updateTodoItem', {index: this.localIndex , value: this.value})
				this.localIndex = null;			 	
				return this.$emit('updateDone')
			}
			else{
				this.$store.dispatch('removeTodoItem', this.localIndex)
				this.localIndex = null
				return this.$emit('updateDone')
			}
		},
		escape(){
			this.value = this.$store.state.todoList[this.todoIndex].name
			return this.$emit('updateDone')
		}
	},
}
</script>

<style scoped>
   
.new-todo,
.edit {
	position: relative;
	margin: 0;
	width: 100%;
	font-size: 24px;
	font-family: inherit;
	font-weight: inherit;
	line-height: 1.4em;
	border: 0;
	color: inherit;
	padding: 6px;
	border: 1px solid #999;
	box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
	box-sizing: border-box;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.new-todo {
	padding: 16px 16px 16px 60px;
	border: none;
	background: rgba(0, 0, 0, 0.003);
	box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
}
 
</style>