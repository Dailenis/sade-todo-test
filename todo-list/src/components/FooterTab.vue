<template>
    <div class="footer">

        <div class="todo-count">
            <strong>{{ count }} {{getTitle()}}</strong>
        </div>

        <AppFilters/>

        <button v-if="!$store.getters.allUnchecked"
			class="clear-completed" 
			@click="$store.dispatch('clearCompleted')">
			Clear completed
		</button>
        
    </div>
</template>

<script>
import AppFilters from './AppFilters.vue'
export default {
    name: 'FooterTab',
    components:{
        AppFilters,
    },
    computed:{
        count(){
           return this.$store.state.todoList.length 
        }
    },
	methods: {
		getTitle(){
			return this.count === 1 ? 'item left' : 'items left'
		}
	},
}
</script>

<style >
    button {
	margin: 0;
	padding: 0;
	border: 0;
	background: none;
	font-size: 100%;
	vertical-align: baseline;
	font-family: inherit;
	font-weight: inherit;
	color: inherit;
	-webkit-appearance: none;
	appearance: none;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.footer {
	color: #777;
	padding: 10px 15px;
	height: 20px;
	text-align: center;
	border-top: 1px solid #e6e6e6;

    /**mine */
     display: flex;
    justify-content: space-between;
}


.footer:before {
	content: '';
	position: absolute;
	right: 0;
	bottom: 0;
	left: 0;
	height: 50px;
	overflow: hidden;
	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),0 8px 0 -3px #f6f6f6,0 9px 1px -3px rgba(0, 0, 0, 0.2),0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
}

.todo-count {
	float: left;
	text-align: left;
}

.todo-count strong {
	font-weight: 300;
}

.clear-completed,
html .clear-completed:active {
	float: right;
	position: relative;
	line-height: 20px;
	text-decoration: none;
	cursor: pointer;
}

.clear-completed:hover {
	text-decoration: underline;
}

@media (max-width: 430px) {
	.footer {
		height: 50px;
	}
	
}


/** I couldn't find a match */
.info {
	margin: 65px auto 0;
	color: #bfbfbf;
	font-size: 10px;
	text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
	text-align: center;
}

.info p {
	line-height: 1;
}

.info a {
	color: inherit;
	text-decoration: none;
	font-weight: 400;
}

.info a:hover {
	text-decoration: underline;
}





</style>