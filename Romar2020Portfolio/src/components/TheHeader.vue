<script>
export default {
	props:{
		currentSection: '',
		switchThemeF: null,
		theme: '',
		bgColor: '',
		color: ''
	},
	data(){
		return {
			links: ['Home', 'About', 'Project', 'Contact'],
			navMenu: '',
			hamburger: '',
			navOverlay: '',
		}
	},
	methods:{
		mobileMenu(){
			this.navMenu.classList.toggle('active')
			this.hamburger.classList.toggle('active')
			this.navOverlay.classList.toggle('active')
		}
	},
	mounted() {
		this.navMenu = this.$refs.navMenu
		this.hamburger = this.$refs.hamburger
		this.navOverlay = this.$refs.navOverlay
	}
}
</script>

<template>
	<header class="container bg-transition">
		<nav class="navbar">
			<a href="#" class="nav-logo">&#10094;/&#10095;</a>
			<div style="display: flex">
				<div class="nav-overlay" ref="navOverlay" @click="mobileMenu"/>
				<ul class="nav-menu" ref="navMenu">
					<li v-for="(link, index) in links" class="nav-item">
						<a :href="`#${link === 'Home' ? 'h' : index}`"
						   :key="link"
						   class="nav-link"
						   :class="{active: index == currentSection}">
							{{ link }}
						</a>
					</li>
				</ul>
				<div class="mobile-menu">
					<div @click="mobileMenu" class="hamburger" ref="hamburger">
						<span class="bar"></span>
						<span class="bar"></span>
						<span class="bar"></span>
					</div>
					<button
						@click="switchThemeF"
						class="change-theme-icon-btn">
						<span v-if="theme === 'light'">
							<svg
								class="theme-icon"
								:fill="`${color}`"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="30"
								height="30">
								<path d="M16.968,8.532,19.3,7.365l1.167-2.333,1.167,2.333,2.333,1.167L21.635,9.7l-1.167,2.333L19.3,9.7ZM23,17a1,1,0,0,0,0,2A1,1,0,0,0,23,17Zm-6-4a1,1,0,0,0,0,2A1,1,0,0,0,17,13Zm1.76,8.894,1.466-1.006-1.621-.731c-7.013-3.036-7.5-13.218-.8-16.906l1.542-.88-1.552-.862C10.032-2.985-.151,3.044,0,12A11.975,11.975,0,0,0,18.76,21.894Z"/>
							</svg>
						</span>
						<span v-else>
							<svg
								class="theme-icon"
								:fill="`${color}`"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="30"
								height="30">
								<path d="M23,11H18.92a6.924,6.924,0,0,0-.429-1.607l3.527-2.044a1,1,0,1,0-1-1.731l-3.53,2.047a7.062,7.062,0,0,0-1.149-1.15l2.046-3.531a1,1,0,0,0-1.731-1L14.607,5.509A6.9,6.9,0,0,0,13,5.08V1a1,1,0,0,0-2,0V5.08a6.9,6.9,0,0,0-1.607.429L7.349,1.982a1,1,0,0,0-1.731,1L7.664,6.515a7.062,7.062,0,0,0-1.149,1.15L2.985,5.618a1,1,0,1,0-1,1.731L5.509,9.393A6.924,6.924,0,0,0,5.08,11H1a1,1,0,0,0,0,2H5.08a6.924,6.924,0,0,0,.429,1.607L1.982,16.651a1,1,0,1,0,1,1.731l3.53-2.047a7.062,7.062,0,0,0,1.149,1.15L5.618,21.016a1,1,0,0,0,1.731,1l2.044-3.527A6.947,6.947,0,0,0,11,18.92V23a1,1,0,0,0,2,0V18.92a6.947,6.947,0,0,0,1.607-.429l2.044,3.527a1,1,0,0,0,1.731-1l-2.046-3.531a7.062,7.062,0,0,0,1.149-1.15l3.53,2.047a1,1,0,1,0,1-1.731l-3.527-2.044A6.924,6.924,0,0,0,18.92,13H23A1,1,0,0,0,23,11ZM12,17c-6.608-.21-6.606-9.791,0-10C18.608,7.21,18.606,16.791,12,17Z"/>
							</svg>
						</span>
					</button>
				</div>
			</div>
		</nav>
	</header>
</template>

<style scoped>
header{
	position: sticky;
	top: 0;
	background-color: v-bind(bgColor);
	z-index: 2;
}

.change-theme-icon-btn{
	padding: 0;
	background: none;
	display: flex;
	align-items: center;
	margin-left: .8rem;
}
.theme-icon{
	margin-top: .9rem;
}

.mobile-menu{
	display: flex;
}

.navbar{
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 10vh;
}

.hamburger {
    display: none;
}

.bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: v-bind(color);
}

.nav-menu {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.nav-link{
	font-size: 1rem;
	padding: 10px 19px;
	margin-left: 5px;
	border-radius: 5px;
	transition: background .3s ease-out;
}

.nav-link:hover, .nav-link.active{
	color: #181818;
	background: #D9D9D9;
}

.nav-logo {
	font-size: 2rem;
	font-weight: 800;
	margin-top: .9rem;
}

@media only screen and (max-width: 768px) {
	.navbar{
		padding: 0 30px;
	}

	.nav-menu, .nav-overlay {
		position: fixed;
		right: -100%;
		top: 4.7rem;
		background-color: v-bind(bgColor);
		display: inline;
		width: 60%;
		text-align: center;
		transition: 0.3s;
		box-shadow: -3px 0 2px 0 v-bind(color);
		height: 90vh;
	}

	.nav-overlay{
		width: 100%;
		opacity: 0;
		transition: 0s;
		box-shadow: 0 0 0 0;
	}
	.nav-overlay.active{
		right: 0;
		opacity: 0.4;
	}

	.nav-menu.active{
		right: 0;
	}

	.nav-link{
		font-size: 1rem;
	}
	.nav-item{
		margin-top: 1.2rem;
	}

	.nav-link:hover, .nav-link.active{
		color: var(--accentColor);
		background-color: unset;
	}

	.hamburger {
		display: block;
		cursor: pointer;
	}

	.hamburger.active .bar:nth-child(2) {
		opacity: 0;
	}

    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }

    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }

	.theme-icon{
		margin-top: 0;
		margin-right: 20px;
	}
	.mobile-menu :nth-child(1){
		order: 1;
	}

	.container{
		width: 100%;
		padding: 0;
	}
	.nav-logo {
		margin-top: 0;
	}
}
</style>
