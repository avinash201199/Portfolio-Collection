<script>
export default {
	props:{
		bgColor: '',
		color: '',
	},
	data() {
		return {
			mounted: false,
		};
	},
	mounted() {
		this.mounted = true
	},
};
</script>

<template>
	<div class="component" id="0">
		<Transition name="fade">
			<div v-if="mounted">
				<div class="container hero">
					<div>
						<div class="intro">Hello, I am</div>
						<h2 style="line-height: 1.2">Romar Desabille</h2>
						<div class="headline">Aspiring Web Developer.</div>
						<a class="resume-btn" href="/resume.pdf" target="_blank">
							Resume.pdf
						</a>
					</div>
					<div class="my-img-container">
						<img src="/images/my-image.png" alt="my image" class="my-img">
					</div>
				</div>
			</div>
		</Transition>
	</div>
</template>

<style scoped>
.container{
	margin-bottom: 10rem;
}

.my-img{
	width: 300px;
	height: 300px;
	border: 7px solid transparent;
	padding: .4rem;
	border-radius: 50%;
	background:
		linear-gradient(v-bind(bgColor), v-bind(bgColor)) padding-box,
		linear-gradient(to right, var(--accentColor), v-bind(color)) border-box;
}

h2{
	font-size: 4rem;
}

.headline{
	font-size: 2rem;
}

.hero{
	height: 80vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-top: 3rem;
}

.intro{
	font-size: 1.3rem;
}

.resume-btn{
	margin-top: 15px;
	font-size: .9rem;
	font-weight: 500;
	padding: 12px 30px;
	background-color: unset;
	color: var(--accentColor);
	border: 1px solid var(--accentColor);
	border-radius: 5px;
	transition: background .3s linear;
}
.resume-btn:hover{
	background-color: var(--accentColor);
	color: #fff;
}

@media only screen and (max-width: 768px) {
	.hero{
		height: unset;
		display: block;
	}
	h2{
		font-size: 2rem;
	}
	.headline{
		font-size: 1.3rem;
	}
	.my-img-container{
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 4rem;
	}
	.my-img{
		width: 14rem;
		height: 14rem;
	}
	.resume-btn{
		padding: 10px 25px;
	}
}
</style>
