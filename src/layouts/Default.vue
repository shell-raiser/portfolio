<template>
	<v-app>
		<!-- 2:06:01 -->

		<!-- </v-card> -->
		<main>
			<v-main>
					<slot />
			</v-main>
		</main>
		<v-navigation-drawer id="navBar" app mini-variant expand-on-hover color="primary lighten-4">
			<!-- <v-footer class="justify-center" tile app> -->

			<!-- <v-list-item text @click="prev">
        <v-list-item-icon><v-icon>mdi-chevron-left</v-icon></v-list-item-icon>
			</v-list-item>-->

			<!-- <g-link to="/"> -->
			<v-list nav dense>
				<!-- <v-list-item link> -->
				<v-list-item to="/">
					<v-list-item-icon><v-icon>mdi-view-dashboard</v-icon></v-list-item-icon>
					<v-list-item-title>About</v-list-item-title>
				</v-list-item>
				<!-- </g-link> -->

				<!-- <g-link to="/connect"> -->
				<v-list-item to="/connect">
					<v-list-item-icon><v-icon>mdi-human-greeting-proximity</v-icon></v-list-item-icon>
					<v-list-item-title>Connect</v-list-item-title>
				</v-list-item>
				<!-- </g-link> -->

				<!-- <g-link to="/projects"> -->
				<v-list-item to="/projects">
					<v-list-item-icon><v-icon>mdi-devices</v-icon></v-list-item-icon>
					<v-list-item-title>Projects</v-list-item-title>
				</v-list-item>
				<!-- </g-link> -->

				<!-- <g-link to="/arsenal"> -->
				<v-list-item to="/arsenal">
					<v-list-item-icon><v-icon>mdi-hammer-wrench</v-icon></v-list-item-icon>
					<v-list-item-title>Tools</v-list-item-title>
				</v-list-item>
				<!-- </g-link> -->

				<!-- <g-link to="/contact"> -->
				<!-- <v-list-item to="/contact">
				<v-list-item-icon><v-icon>mdi-card-account-mail</v-icon></v-list-item-icon>
				<v-list-item-title>Contact</v-list-item-title>
			</v-list-item> -->
				<!-- </g-link> -->
			</v-list>


		</v-navigation-drawer>
	</v-app>
</template>

<script>

export default {
	// mounted() {
	// 	console.log(this.$router.history.current["path"]);
	// },
	data: () => ({
	}),
	methods: {
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
