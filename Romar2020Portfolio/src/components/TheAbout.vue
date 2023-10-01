<script>
export default {
	props:{
		color: '',
	},
};
</script>

<template>
	<div class="container component" id="1">
		<h2>About <span class="line"/></h2>
		<div class="about">
			<div class="info">
				<h3>Background</h3>
				<p>
					I am a fresh graduate student in Holy Cross of Davao College in the field
					of Bachelor of Science in Information Technology.
				</p>
			</div>
			<div class="technologies">
				<div>
					<div style="color: transparent">Background</div>
				</div>
				<div class="main">
					<h3>Some Technologies I have experience using:</h3>
					<div class="list">
						<ul>
							<li>HTML</li>
							<li>CSS</li>
							<li>Bootstrap</li>
							<li>Javascript</li>
							<li>PHP</li>
						</ul>
						<ul>
							<li>CodeIgniter</li>
							<li>ReactJS</li>
							<li>NextJS</li>
							<li>Django Rest Api</li>
							<li>VueJS</li>
							<li>MySQL</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="info" style="margin-top: 5rem">
				<h3>Experience</h3>
				<ul>
					<li>
						<div>
							Intern at VirtualDesk (Aug. 16, 2021 - Oct. 19, 2021) - Wordpress Developer
						</div>
						<div>
							112 Lapu-lapu St. Agdao Davao City, Philippines 8000
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style scoped>
h2{
	font-size: 2.8rem;
	margin-bottom: 5rem;
	position: relative;
}
.line{
	width: 30px;
	height: 10px;
	background-color: v-bind(color);
	position: absolute;
	top: 55px;
	left: 0;
}

.about .info, .technologies{
	display: flex;
	align-items: start;
}
.about .info h3, .technologies h3{
	font-weight: 500;
	font-size: 1.1rem;
}

.about .info p, .about .info ul, .technologies .main{
	font-size: 1rem;
	margin-left: 50px;
}

.technologies{
	margin-top: 2rem;
	font-size: 1rem;
	margin-left: 1rem;
}

.technologies .list{
	margin-top: 1rem;
	display: flex;
	margin-left: 1.5rem;
}
.technologies .list ul{
	list-style-type: circle;
	margin-right: 2.9rem;
}
.technologies .list ul li{
	list-style-type: circle;
	margin-top: .3rem;
}

img{
	width: 100px;
	height: 100px;
	margin-left: 10px;
}

.container{
	padding-top: 5rem;
	margin-bottom: 15rem;
}


@media screen and (min-width: 1200px) {
	.container {
		width: 1000px;
	}
}

@media only screen and (max-width: 768px) {
	h2{
		font-size: 2rem;
	}
	h2 .line{
		top: 44px;
		left: 0;
	}
	.about .info, .technologies{
		display: flex;
		flex-direction: column;
	}
	.about .info p, .about .info ul, .technologies .main{
		font-size: 1rem;
		margin: 1rem 0 0 1.5rem;
	}
	.about .info h3{
		font-size: 1.2rem;
	}
	.technologies h3{
		font-size: 1rem;
	}
	.technologies{
		margin-top: .3rem;
		margin-left: 0;
	}
}
</style>
