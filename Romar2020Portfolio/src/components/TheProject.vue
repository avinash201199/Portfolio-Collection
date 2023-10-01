<script>
import projects from '../data/projects'
import ProjectLists from "./ProjectLists.vue";
export default {
	components: {ProjectLists},
	props:{
		color: '',
	},
	computed:{
		featuredProjects(){
			return projects.featured.map((d, i) => {
				d['addClass'] = i%2 === 0
				return d
			})
		}
	}
}
</script>

<template>
	<div class="container component" id="2">
		<h2>Projects <span class="line"/></h2>
		<ProjectLists
			:projects="featuredProjects"
			:color="color"
		/>
		<div style="display: flex; justify-content: center">
			<a href="/projects" class="view-all-btn">View all</a>
		</div>
	</div>
</template>

<style scoped>
.view-all-btn{
	padding: 10px 25px;
	margin-top: 3rem;
	font-size: 1rem;
	border: 1px solid var(--accentColor);
	border-radius: 5px;
	transition: background .3s linear;
	display: flex;
	align-items: center;
	color: var(--accentColor);
}
.view-all-btn:hover{
	background-color: var(--accentColor);
	color: #fff;
}

h2{
	font-size: 2.8rem;
	position: relative;
}
h2 .line{
	width: 30px;
	height: 10px;
	background-color: v-bind(color);
	position: absolute;
	top: 55px;
	left: 0;
}

.container{
	padding-top: 5rem;
	margin-bottom: 10rem;
}

@media screen and (min-width: 1200px) {
	.container {
		width: 1000px;
	}
}
@media screen and (max-width: 768px) {
	h2 {
		font-size: 2rem;
	}
	h2 .line{
		top: 44px;
		left: 0;
	}
}
</style>
