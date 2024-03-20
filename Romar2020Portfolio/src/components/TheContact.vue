<script setup>
</script>

<template>
	<div class="container component" id="3">
		<div>
			<h2>Contact</h2>
			<div class="account-links">
				<a href="https://github.com/romar0001" target="_blank">
					Github
				</a>
			</div>
			<div style="font-size: 1.2rem">
				romardesabille@gmail.com
			</div>
			<div class="email-container">
				<a class="email-link" href="mailto:romardesabille@gmail.com?Subject=Hello" target="_blank">Say Hello</a>
			</div>
			<p>Thank you for visiting!</p>
		</div>
	</div>
</template>

<style scoped>
h2{
	font-size: 2.8rem;
	margin-bottom: 5rem;
	text-align: center;
}

p{
	font-size: 1.2rem;
	margin-bottom: 25px;
}

.email-container{
	display: flex;
	justify-content: center;
	margin: 4rem 0;
}


.account-links a{
	color: var(--accentColor);
	font-size: 1.3rem;
}

.email-link{
	border: 1px solid var(--accentColor);
	color: var(--accentColor);
	font-size: 1rem;
	padding: 10px 25px;
	border-radius: 7px;
	transition: background .3s linear;
}

.email-link:hover{
	background-color: var(--accentColor);
	color: #fff;
}

.container{
	padding-top: 5rem;
	padding-bottom: 25rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
}

@media screen and (min-width: 1200px) {
	.container {
		width: 1000px;
	}
}
@media only screen and (max-width: 768px) {
	.container h2{
		font-size: 2rem;
		margin-bottom: 2rem;
	}
	.container{
		padding-bottom: 30rem;
	}
}
</style>
