<script setup>
import {useThemeStore} from "../stores/theme";
const themeStore = useThemeStore()
const color = themeStore.color
</script>
<template>
	<div :class="themeStore.currentTheme" class="app">
		<div class="container">
			<h1>404 Not Found</h1>
			<div class="info">
				This page does not exist
				<a href="/">go back to home</a>
			</div>
		</div>
	</div>
</template>
<style scoped>
.app{
	height: 100vh;
	display: flex;
	align-items: center;
}

h1{
	text-align: center;
	font-size: 2rem;
	font-weight: 600;
}
.info{
	text-align: center;
	margin-top: 1rem;
	font-size: 1.2rem;
}
.info a{
	color: var(--accentColor);
	border-bottom: 1px solid var(--accentColor);
}
</style>
