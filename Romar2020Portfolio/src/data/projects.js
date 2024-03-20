const imgPath = '/images'

const featured = [
	{
		title: 'My Portfolio',
		description: 'My First Portfolio Site',
		used: 'VueJS • CSS',
		link: null,
		githubLink: 'https://github.com/romar0001/portfolio',
		thumbnail: `${imgPath}/portfolio/1.PNG`
	},
	{
		title: 'Capstone Project',
		description: 'Course Recommendation for K-12 Students Using Multiple-Regression Based on Online Entrance Exam',
		used: 'NextJS • MUI • Django Rest API',
		link: null,
		githubLink: 'https://github.com/romar0001/capstone',
		thumbnail: `${imgPath}/capstone/1.PNG`
	},
	{
		title: 'Anime Site',
		description: 'My 3rd year project.',
		used: 'PHP • MySQL • Javascript • Bootstrap • CSS',
		link: null,
		githubLink: 'https://github.com/romar0001/anime',
		thumbnail: `${imgPath}/anime/1.png`
	}
]

const projects = {
	featured: [...featured],
	all: [
		{
			...featured[0],
			screenshots: [
				`${imgPath}/portfolio/2.PNG`,
				`${imgPath}/portfolio/3.PNG`
			],
		},
		{
			...featured[1],
			screenshots: [
				`${imgPath}/capstone/2.PNG`,
				`${imgPath}/capstone/3.PNG`,
				`${imgPath}/capstone/4.PNG`,
				`${imgPath}/capstone/5.PNG`,
			],
		},
		{
			...featured[2],
			screenshots: [
				`${imgPath}/anime/5.PNG`,
				`${imgPath}/anime/2.PNG`,
				`${imgPath}/anime/3.PNG`,
				`${imgPath}/anime/4.PNG`,
			],
		}
	]
}

export default projects