<template>
    <li 
        @dblclick="edit=true"
        @click="todo.state==='completed'? todo.state = 'active': todo.state = 'completed'"
    >
        <NewTodo 
            v-if="edit" 
            class="editing" 
            :class="edit? 'edit': 'view'"
            :todoIndex="todoIndex" 
            @updateDone="edit=false"
        />
        <div v-else>
            <input 
                type="checkbox" 
                class="toggle"             
                :checked="todo.state==='completed'? true : false"
            />           
            <label >               
                {{todo.name}}
            </label>
            <button 
                class="destroy" 
                @click.stop="removeItem()"
            /> 
        </div>        
    </li>
</template>

<script>
import NewTodo from './TodoNew.vue'
export default {
    name: 'TodoItem',
    props:{
        todo: { type: Object, default: () =>{}},
        todoIndex: { type: Number, default: -1}
    },
    components:{
        NewTodo,
    },
    data() {
        return {
            edit: false,
        }
    },
    methods: {
        removeItem(){
            if(this.todoIndex !== -1){
                this.$store.dispatch('removeTodoItem', this.todoIndex)
            }
        },
        
       
    },
}
</script>

<style >
    .todo-list li.editing {
        border-bottom: none;
        padding: 0;
    }

    .todo-list li.editing .edit {
        display: block;
        width: 506px;
        padding: 12px 16px;
        margin: 0 0 0 43px;
    }

    .todo-list li.editing .view {
        display: none;
    }
</style>