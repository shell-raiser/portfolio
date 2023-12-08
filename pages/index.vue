<template >
	<!-- <Layout> -->
	<div>
		<section id="about">
			<v-container>
				<v-row>
					<v-col align-self="center">
						<AboutGlowRotate />
						<br>
						<v-container class="rounded contentHolder blue-grey darken-1 white--text">
							Find this site's repo on <a href="https://github.com/shell-raiser/shell-raiser.github.io"
								target="_blank" rel="noopener noreferrer" class="white--text">
								Github </a>
							<br>
							To report bugs and ideas, please use the contact form or open a github issue. It would mean a
							lot 😁.
						</v-container>
					</v-col>

					<v-col align-self="center">
						<!-- <v-row > -->
						<v-container class="rounded contentHolder" style="font-weight: 600;">
							I'm a student who enjoys learning new things and solving problems.
							<br> I'm passionate about protecting people
							and systems from cyber threats, and enjoy putting my knowledge to use in real-world scenarios.
							<br> I enjoy tweaking and experimenting with code. I have built some web based projects in the
							past and FOSS piques my interest. <br>
							In my spare time, I create electronic music. Check out the
							links section for my work . <br>
						</v-container>
						<br>
						<v-container class="rounded contentHolder" style="font-weight: 600;">
							Feel free to browse through my projects and contact information, and let me know what you think.
							<br> No time to go through the site ? <a
								href="https://drive.google.com/file/d/1atMoLVFRdqCL0_1CJZyBF37lIj3zP6yW/view"
								target="_blank" rel="noopener noreferrer"> get my resume
								here </a>
						</v-container>
					</v-col>
				</v-row>
			</v-container>
		</section>

		<section id="connect"  style="background: #000;">
			<ConnectComponent />
		</section>



		<section id="projects" 
			style='background: url("../assets/projectsBg.gif");  background-size: cover;  background-attachment: fixed;'>
			<v-row>
				<v-col cols="3" class="d-none d-sm-block">
					<ProjectFilterNavigation style="position: sticky; top: 0;" />
				</v-col>
				<v-col>
					<Projects />
				</v-col>
			</v-row>
		</section>



		<section id="arsenal" 
			style='background: purple url("assets/toolsBg.webp"); background-size:contain;  background-attachment: fixed;'>
			<v-row>
				<v-col cols="3" class="d-none d-sm-block" >
					<ArsenalLanguageStats style="position: sticky; top: 0;" />
				</v-col>
				<v-col>
					<Arsenal />
				</v-col>
			</v-row>
		</section>


	</div>
	<!-- </Layout> -->
</template>

<script>
// import AboutContent from "../components/aboutContent.vue"
import AboutGlowRotate from '../components/aboutGlowRotate.vue';
import Arsenal from '../components/Arsenal.vue';
import ArsenalLanguageStats from '../components/arsenalLanguageStats.vue';
import ConnectComponent from '../components/Connect.vue'
import ProjectFilterNavigation from '../components/projectFilterNavigation.vue';
import Projects from '../components/Projects.vue';
export default {
	head: {
		title: "About me",
		meta: [
			{ content: "I'm Shailesh (Shell Raiser), and this is my portfolio" },
			{ hid: 'og-title', property: 'og:title', content: 'Shailesh K S - My Portfolio' },
			{ hid: 'og-desc', property: 'og:description', content: 'I\'m Shailesh (Shell Raiser), and this is my portfolio' },
			// {
			//   hid: 'og-image', property: 'og:image',
			//   content: 'https://domain.com/my-image.jpg'
			// },
			// { hid: 't-type', name: 'twitter:card', content: 'summary_large_image' },
			{ hid: 'og-url', property: 'og:url', content: 'https://shell-raiser.github.io/' },

		]
	},
	methods: {

	},
	data() {
		return {
			isActive: false,
		}
	},
	components: { ConnectComponent, Projects, Arsenal, ProjectFilterNavigation, ArsenalLanguageStats, AboutGlowRotate }
};
</script>

<style scoped>
section {
	padding-top: 30px;
	padding-bottom: 30px;
}


#about {
	background: linear-gradient(90deg, #9575CD, #a6d7ff);
	background-size: 150% 100%;
	animation: gradient 10s ease infinite;
}

.contentHolder {
	background-color: rgba(255, 255, 255, 0.4);
	backdrop-filter: blur(15px);
	box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.3);

}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}

	50% {
		background-position: 100% 50%;
	}

	100% {
		background-position: 0% 50%;
	}
}

h1 {
	font-size: xxx-large;
	color: #65499c;
	background-image: -webkit-linear-gradient(0deg, #3f51b5, #9c27b0);
	background-clip: text;
	-webkit-text-fill-color: transparent;
	animation: 6s linear 0s infinite normal none running hue;
}


@property --rotate {
	syntax: "<angle>";
	initial-value: 0deg;
	inherits: false;
}
</style>
