<template>
    <div class="filters">
        <li > 
            <router-link :to="{ name: 'Home' }">All</router-link>
        </li>
        <li >
            <router-link :to="{ name: 'Active' }">Active</router-link>
        </li>
        <li >
            <router-link :to="{ name: 'Completed' }">Completed</router-link>
        </li>
    </div>
</template>

<script>
export default {
    name:'AppFilters',
	created() {
		console.log(this.$router.currentRoute.name)
	},
}
</script>

<style scoped>
    
.filters {
	margin: 0;
	padding: 0;
	list-style: none;
	position: absolute;
	right: 0;
	left: 0;
}

.filters li {
	display: inline;
}

.filters li a {
	color: inherit;
	margin: 3px;
	padding: 3px 7px;
	text-decoration: none;
	border: 1px solid transparent;
	border-radius: 3px;
}

.filters li a:hover {
	border-color: rgba(175, 47, 47, 0.1);
}

.filters li a.selected {
	border-color: rgba(175, 47, 47, 0.2);
}

@media (max-width: 430px) {
	
	.filters {
		bottom: 10px;
	}
}

</style>