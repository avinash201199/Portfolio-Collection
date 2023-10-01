<script setup>
import {useThemeStore} from "../stores/theme";
import ProjectLists from "../components/ProjectLists.vue";
import projects from "../data/projects";
import {computed} from 'vue';

const themeStore = useThemeStore()
const color = themeStore.color
const bgColor = themeStore.bgColor

const projectsAll = computed(() => {
	return projects.featured.map((d, i) => {
		d['addClass'] = i%2 === 0
		return d
	})
})
</script>
<template>
	<Transition name="fade">
		<div :class="themeStore.currentTheme" class="app">
			<div class="container">
				<header>
					<nav>
						<a href="/#2" class="btn-back">Back</a>
					</nav>
				</header>
				<h1>Projects <span class="line"/></h1>
				<ProjectLists
					:projects="projectsAll"
					:color="color"
				/>
			</div>
		</div>
	</Transition>
</template>
<style scoped>
.app{
	padding-bottom: 20rem;
}

header{
	padding-top: 2rem;
	position: sticky;
	top: -30px;
	background-color: v-bind(bgColor);
	padding-bottom: .5rem;
	z-index: 2;
}

h1{
	font-size: 2.8rem;
	margin-bottom: 5rem;
	position: relative;
}
h1 .line{
	width: 30px;
	height: 10px;
	background-color: v-bind(color);
	position: absolute;
	top: 55px;
	left: 0;
}

.btn-back{
	color: var(--accentColor);
	font-size: 1.5rem;
	border-bottom: 2px solid var(--accentColor);
}

@media only screen and (max-width: 992px) {
	h1{
		font-size: 2rem;
	}
	h1 .line{
		top: 44px;
		left: 0;
	}
	.btn-back{
		font-size: 1.3rem;
	}
}
</style>
