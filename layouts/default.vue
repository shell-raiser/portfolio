<template>
	<v-app>
		<v-main>
			<Nuxt />
		</v-main>
		<v-navigation-drawer class="d-none d-sm-block" id="navBar" app :mini-variant="!$vuetify.breakpoint.xlOnly"
			:expand-on-hover="!$vuetify.breakpoint.xlOnly" touchless color="deep-purple lighten-4">
			<v-list nav dense>
				<!-- <img src="/Shell.svg" alt="logo"> -->
				<v-img class="d-none d-xl-flex" src="/Shell.svg" width="100%" style="margin-bottom: 1em;"></v-img>

				<p v-if="$vuetify.breakpoint.xlOnly" class="text-center text-h6" style="margin-bottom: 0.2em;"> Shailesh's
					Portfolio </p>
				<p v-if="$vuetify.breakpoint.xlOnly" class="text-center text-subtitle-1">Shell Raiser</p>


				<v-list-item :class="[($store.state.activeSection == 'about') ? 'v-list-item--active' : null]"
					@click="scrollToElement('about')">
					<v-list-item-icon><v-icon>mdi-view-dashboard</v-icon></v-list-item-icon>
					<v-list-item-title>About</v-list-item-title>
				</v-list-item>
				<v-list-item :class="[($store.state.activeSection == 'connect') ? 'v-list-item--active' : null]"
					@click="scrollToElement('connect')">
					<v-list-item-icon><v-icon>mdi-human-greeting-proximity</v-icon></v-list-item-icon>
					<v-list-item-title>Connect</v-list-item-title>
				</v-list-item>
				<v-list-item :class="[($store.state.activeSection == 'projects') ? 'v-list-item--active' : null]"
					@click="scrollToElement('projects')">
					<v-list-item-icon><v-icon>mdi-devices</v-icon></v-list-item-icon>
					<v-list-item-title>Projects</v-list-item-title>
				</v-list-item>
				<v-list-item :class="[($store.state.activeSection == 'arsenal') ? 'v-list-item--active' : null]"
					@click="scrollToElement('arsenal')">
					<v-list-item-icon><v-icon>mdi-hammer-wrench</v-icon></v-list-item-icon>
					<v-list-item-title>Tools</v-list-item-title>
				</v-list-item>
				<v-list-item style="position: fixed; bottom: 1em;" @click="changeTheme()">
					<v-list-item-icon><v-icon>mdi-lightbulb</v-icon></v-list-item-icon>
					<v-list-item-title>Theme</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-bottom-navigation class="d-sm-none" app grow color="deep-purple darken-3" mandatory shift>
			<v-btn height="100%" to="/">
				<span>About</span>
				<v-icon>mdi-view-dashboard</v-icon>
			</v-btn>
			<v-btn height="100%" to="/connect">
				<span>Connect</span>
				<v-icon>mdi-human-greeting-proximity</v-icon>
			</v-btn>
			<v-btn height="100%" to="/projects">
				<span>Projects</span>
				<v-icon>mdi-devices</v-icon>
			</v-btn>
			<v-btn height="100%" to="/arsenal">
				<span>Tools</span>
				<v-icon>mdi-hammer-wrench</v-icon>
			</v-btn>
		</v-bottom-navigation>
	</v-app>
</template>

<script>

var DReader
var themeFixes = { css: '.v-navigation-drawer__content {background-color: #251542} #hackathons,#sideProjects,#volunteer{color: white} .projCard{color: #EDE7F6} .greet{color: white} #LinksHead{color: white}' }
var aboutSec

export default {
	mounted() {
		aboutSec = document.querySelector('#about')
		window.addEventListener(
			"scroll", () => {
				var allSections = [...document.querySelectorAll('section')]
				allSections.forEach((thisSec) => {
					if (thisSec.offsetTop <= window.scrollY && (thisSec.offsetTop + thisSec.offsetHeight) > window.scrollY) {
						// this.$store.state.activeSection = thisSec.id
						this.$store.commit('changeActiveSection', thisSec.id)
					}
				});
			});
		DReader = require('darkreader')
		DReader.auto({}, themeFixes)
		// async function smth() {
		// 	const CSS = await DReader.exportGeneratedCSS();
		// 	console.log(CSS)
		// }
		// smth()
		if (DReader.isEnabled()) {
			// aboutSec.style.background = '#635e78'
			aboutSec.style.background = 'linear-gradient(90deg, #9575CD, #003b6b)';

		} else {
			aboutSec.style.background = 'linear-gradient(190deg, #9575CD, #a6d7ff)';
		}
	},
	data: () => ({

	}),
	methods: {
		scrollToElement(refName) {
			const position = document.getElementById(refName).offsetTop;
			window.scrollTo({ top: position, behavior: "smooth" });
		},
		changeTheme() {
			if (DReader.isEnabled()) {
				DReader.disable();
				aboutSec.style.background = 'linear-gradient(190deg, #9575CD, #a6d7ff)';
			} else {
				DReader.enable({}, themeFixes);
				aboutSec.style.background = 'linear-gradient(90deg, #9575CD, #003b6b)';
			}
		}
	},
};

</script>

<style scoped>
@font-face {
	font-family: 'Roboto';
	src: url('~assets/fonts/Roboto/Roboto-Light.ttf') format('truetype');
	font-weight: normal;
	font-display: auto;
}


.slide-fade-enter-active {
	transition: all 0.5s;
}

.slide-fade-enter {
	transform: translateY(20px);
	opacity: 0;
}

.fade-enter-active {
	transition: all 1s;
}

.fade-enter {
	opacity: 0.3;
}

/* .fade-enter-from{
  opacity: 0;
}

.fade-enter-active {
  transition: opacity .5s ease-out;
} */
/* 
@keyframes textclip {
	to {
		background-position: 200% center;
	}
} */

/* .contactAnimation {
  min-height: calc(100vh - 60px);
  background: lightblue url();
  background-image: url('../pebbleRotation.gif');
  margin: auto;
} */
</style>
