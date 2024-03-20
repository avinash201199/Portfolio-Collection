<script>
export default {
	props:{
		projects: null,
		color: '',
	},
}
</script>

<template>
	<div class="projects" v-for="(project, i) in projects" :key="i">
		<div class="project" :class="{'order1': project.addClass}">
			<div class="info" :class="{'text-right': project.addClass, 'padding-right': !project.addClass}">
				<h5 class="title">{{project.title}}</h5>
				<p class="description">{{project.description}}</p>
				<div class="technologies-used">{{project.used}}</div>
				<div class="screenshots">
					<a :href="`/screenshots/${i}`" target="_blank">
						Screenshots
					</a>
				</div>
				<div class="links">
					<a :href="`${project.link}`" target="_blank" style="margin-right: 18px" v-if="project.link">
						<svg
							class="icon-link"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width="24"
							height="24">
							<path d="M7.253,24A7.251,7.251,0,0,1,2.124,11.62L6.191,7.55,8.313,9.67,4.246,13.741a4.253,4.253,0,1,0,6.016,6.014l4.068-4.068,2.121,2.121-4.068,4.068A7.229,7.229,0,0,1,7.253,24Z"/><path d="M17.808,16.452l-2.121-2.121,4.068-4.068A4.254,4.254,0,0,0,13.74,4.246L9.669,8.314,7.548,6.192l4.071-4.068a7.254,7.254,0,0,1,10.257,10.26Z"/><rect x="7.204" y="10.501" width="9.591" height="3" transform="translate(-4.971 12) rotate(-45)"/>
						</svg>
					</a>
					<a :href="`${project.githubLink}`" target="_blank">
						<svg
							class="icon-link"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24">
							<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
						</svg>
					</a>
				</div>
			</div>
			<div class="overlay">
				<img :src="`${project.thumbnail}`" alt="thumbnail">
			</div>
		</div>
	</div>
</template>

<style scoped>
.right-items{

}

.screenshots{
	margin-top: 1rem;
	font-size: 1rem;
}
.screenshots a{
	border-bottom: 1px solid v-bind(color);
}
.screenshots a:hover{
	color: var(--accentColor);
	border-bottom: 1px solid var(--accentColor);
}

.links{
	margin-top: 10px;
}
.icon-link{
	fill: v-bind(color);
}

.project{
	display: flex;
	justify-content: space-between;
}
.projects{
	margin-top: 7rem;
}

.order1 :nth-child(1){
	order: 1;
}

.info{
	margin-top: 20px;
}

.text-right{
	text-align: right;
	padding-left: .8rem;
}

.padding-right{
	padding-right: .8rem;
}

.description{
	font-size: 1rem;
	margin-top: .8rem;
}

.technologies-used{
	margin-top: 20px;
	font-size: .9rem;
	color: var(--accentColor);
}

img{
	width: 579px;
	height: 362px;
	object-fit: cover;
	border-radius: 5px;
}

.project .title{
	font-size: 1.5rem;
	font-weight: 600;
}
@media screen and (max-width: 410px) {
	.info{
		margin: 5px;
	}
	.technologies-used{
		margin-top: 5px;
	}
	.screenshots{
		margin-top: 5px;
	}
	.links{
		margin-top: 2px;
	}
}
@media screen and (max-width: 768px) {
	h2 {
		font-size: 2rem;
	}
	.description{
		display: none;
	}
}
@media only screen and (max-width: 992px) {
	.project{
		position: relative;
	}
	img{
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 5px;
	}
	.overlay:before{
		content:"";
		position: absolute;
		top:0;
		left:0;
		height: 100%;
		width:100%;
		background: rgba(0,0,0,0.5);
		border-radius: 5px;
	}
	.info{
		position: absolute;
		z-index: 1;
		padding: 0 1rem !important;
	}
	.text-right{
		text-align: left;
		padding: 0;
	}
	.padding-right{
		padding: 0;
	}
	.project .title{
		font-size: 1.3rem;
	}
	.title, .description{
		color: var(--bgLight);
	}
	.icon-link{
		fill: var(--bgLight);
	}
	.projects{
		margin-top: 5rem;
	}
}
</style>
