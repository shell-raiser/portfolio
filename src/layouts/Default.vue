<template>
	<v-app>
		<main>
			<v-main>
				<slot />
			</v-main>
		</main>
		<v-navigation-drawer class="d-none d-sm-block" id="navBar" app :mini-variant="!$vuetify.breakpoint.xlOnly"
			:expand-on-hover="!$vuetify.breakpoint.xlOnly" touchless color="primary lighten-4">
			<v-list nav dense>
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
			</v-list>
		</v-navigation-drawer>

		<v-bottom-navigation class="d-sm-none" app active-class mandatory shift color="primary darken-3"
			background-color="primary lighten-4">
			<v-btn to="/">
				<span>About</span>
				<v-icon>mdi-view-dashboard</v-icon>
			</v-btn>
			<v-btn to="/connect">
				<v-icon>mdi-human-greeting-proximity</v-icon>
				<span>Connect</span>
			</v-btn>
			<v-btn to="/projects">
				<v-icon>mdi-devices</v-icon>
				<span>Projects</span>
			</v-btn>
			<v-btn to="/arsenal">
				<v-icon>mdi-hammer-wrench</v-icon>
				<span>Tools</span>
			</v-btn>
		</v-bottom-navigation>
	</v-app>
</template>

<script>
export default {
	mounted() {
		window.addEventListener(
			"scroll", () => {
				var allSections = [...document.querySelectorAll('section')]
				allSections.forEach((thisSec) => {
					if (thisSec.offsetTop <= window.scrollY && (thisSec.offsetTop + thisSec.offsetHeight) > window.scrollY) {
						this.$store.state.activeSection = thisSec.id
					}
					// console.log(window.scrollY)
					// console.log(this.$store.state.activeSection)

				});
			});
	},
	data: () => ({

	}),
	methods: {
		scrollToElement(refName) {
			const position = document.getElementById(refName).offsetTop;
			window.scrollTo({ top: position, behavior: "smooth" });
		}
	},
};

</script>

<style>
/* @font-face {
	font-family: nunito;
	src: url('../assets/nunito.otf') format('truetype');
	font-weight: normal;
}

@font-face {
	font-family: nunito;
	src: url('../assets/nunito_bold.otf') format('truetype');
	font-weight: bold
} */

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
