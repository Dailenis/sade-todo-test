<template>
        <div class="main" @click="check()"> 
             <input
                :checked="$store.getters.allChecked"
                type="checkbox" 
                class="toggle-all"             
            />
        <label ></label>
        </div>
</template>

<script>
export default {
    name: 'ToggleAll',    
    methods: {
        check(){

            if(this.$store.getters.allChecked){
                this.$store.dispatch('setAllTodosState', 'active')
                // this.$store.state.todoList.forEach(element => element.state= 'active');
            }
            else{
                this.$store.dispatch('setAllTodosState', 'completed')
                // this.$store.state.todoList.forEach(element => element.state= 'completed');
            }
        }
    },
}
</script>

<style  >

.toggle-all {
	text-align: center;
	border: none; /* Mobile Safari */
	opacity: 0;
	position: absolute;
}

.toggle-all + label {
	width: 60px;
	height: 34px;
	font-size: 0;
	position: absolute;
	top: -52px;
	left: -13px;
	-webkit-transform: rotate(90deg);
	transform: rotate(90deg);
}

.toggle-all + label:before {
	content: '❯';
	font-size: 22px;
	color: #e6e6e6;
	padding: 10px 27px 10px 27px;
}

.toggle-all:checked + label:before {
	color: #737373;
}
</style>