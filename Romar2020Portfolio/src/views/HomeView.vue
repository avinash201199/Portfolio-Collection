<script setup>
import TheHeader from '../components/TheHeader.vue'
import TheHero from '../components/TheHero.vue'
import TheAbout from '../components/TheAbout.vue'
import TheProject from '../components/TheProject.vue';
import TheContact from '../components/TheContact.vue';
import { ref, onMounted } from "vue";
import { useThemeStore } from "../stores/theme";

const themeStore = useThemeStore()
const currentSection = ref('0')
const pageMounted = ref(false)

onMounted(() => {
	pageMounted.value = true
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if(entry.intersectionRatio > 0){
				currentSection.value = entry.target.getAttribute('id')
			}
		})
	}, {
		rootMargin: '0px 0px -85% 0px',
	})
	const elements = document.getElementsByClassName('component')
	for(let i = 0; i < elements.length; i++){
		observer.observe(elements[i])
	}
})
</script>

<template>
	<div :class="themeStore.currentTheme" class="app bg-transition">
		<div id="h"/>
		<TheHeader
			:current-section="currentSection"
			:switch-theme-f="themeStore.switchTheme"
			:bg-color="themeStore.bgColor"
			:color="themeStore.color"
			:theme="themeStore.currentTheme"
		/>
		<main>
			<TheHero
				:bg-color="themeStore.bgColor"
				:color="themeStore.color"
			/>
			<TheAbout
				:color="themeStore.color"
			/>
			<TheProject
				:color="themeStore.color"
			/>
			<TheContact/>
		</main>
	</div>
</template>

<style>
</style>
