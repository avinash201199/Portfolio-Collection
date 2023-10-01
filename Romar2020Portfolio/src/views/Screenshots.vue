<script setup>
import {useRoute, useRouter} from "vue-router";
import {onMounted, reactive, ref} from "vue";
import projects from "../data/projects";
import {useThemeStore} from "../stores/theme";

const route = useRoute();
const router = useRouter();
const id = route.params.id
const projectInfo = ref({})
const activeSS = reactive({
	ss: '',
	index: 0,
})

onMounted(() => {
	let project = projects.all[id]
	if(project === undefined){
		/*
		router.push({
			name: 'notfound',
		})
		*/
	}else{
		project.screenshots = [project.thumbnail, ...project.screenshots]
		activeSS.ss = project.screenshots[0]
		projectInfo.value = project
	}
})

const themeStore = useThemeStore()
const color = themeStore.color

function onClickSS (ss, i){
	activeSS.ss = ss
	activeSS.index = i
}

</script>

<template>
	<div :class="themeStore.currentTheme" class="app">
		<div class="container">
			<h1>Screenshots <span class="line"/></h1>
			<h5>{{ projectInfo.title }}</h5>
			<p>{{ projectInfo.description }}</p>
			<p style="color: var(--accentColor)">{{ projectInfo.used }}</p>
			<div class="images">
				<div>
					<div class="text-info">Click image to view</div>
					<div class="list">
						<div v-for="(ss, i) in projectInfo.screenshots">
							<button @click="onClickSS(ss, i)"
							        :class="{active: activeSS.index === i, mg: i !== 1}">
								<img :src="ss" alt="">
							</button>
						</div>
					</div>
				</div>
				<div class="main">
					<img :src="activeSS.ss" alt="">
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
p{
	font-size: 1rem;
	margin-top: .5rem;
}

.app{
	min-height: 100vh;
}

h1{
	padding-top: 1rem;
	font-size: 2.5rem;
	margin-bottom: 1.2rem;
	position: relative;
}
.line{
	width: 30px;
	height: 10px;
	background-color: v-bind(color);
	position: absolute;
	top: 66px;
	left: 0;
}

.text-info{
	font-size: .8rem;
}

.images{
	margin-top: 1rem;
	display: flex;
}

.images .main img{
	margin-left: 2rem;
	max-width: 1000px;
	width: 100%;
	height: 500px;
	object-fit: contain;
}

.images .list button{
	border: unset;
	background-color: unset;
	padding: 5px;
	margin: .5rem 0 0 0;
	border: 3px solid v-bind(color);
}
.active{
	border: 3px solid var(--accentColor) !important;
}

.images .list img{
	width: 100px;
	height: 65px;
	object-fit: contain;
}
.mg{}

@media only screen and (max-width: 992px) {
	.app{
		height: unset;
	}

	.images{
		flex-direction: column;
	}
	.images :nth-child(1){
		order: 2;
	}
	.images .main img{
		margin-left: 0;
	}
	.images .list{
		display: flex !important;
		overflow-x: scroll;
		margin-bottom: 5rem;
		padding: 1rem 0;
	}
	.images .main img{
		height: 300px;
	}
	.mg{
		margin-left: 1rem !important;
	}
}
</style>