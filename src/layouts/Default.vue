<template>
	<v-app>
		<!-- 2:06:01 -->

		<!-- </v-card> -->
		<v-navigation-drawer id="theNavbar" app fixed v-if="this.$router.history.current['path'] == '/projects'" right>
			<h3>Projects and Experience</h3>

			<v-divider></v-divider>

			<v-chip-group column multiple>
				<v-chip active-class="deep-purple--text">
					Python
				</v-chip>
				<v-chip active-class="deep-purple--text">
					Javascript
				</v-chip>
				<v-chip active-class="deep-purple--text">
					Java
				</v-chip>
				<v-chip active-class="deep-purple--text">
					C++
				</v-chip>
				<v-chip active-class="deep-purple--text">
					SQL
				</v-chip>
				<v-chip active-class="deep-purple--text">
					Qiskit
				</v-chip>
			</v-chip-group>



		</v-navigation-drawer>
		<main>
			<v-main>
				<transition name="fade" appear>
					<slot />
				</transition>
			</v-main>
		</main>
		<v-bottom-navigation id="navBar" app active-class mandatory shift color="deep-purple">
			<!-- <v-footer class="justify-center" tile app> -->

			<!-- <v-btn text @click="prev">
        <v-icon>mdi-chevron-left</v-icon>
			</v-btn>-->

			<!-- <g-link to="/"> -->
			<v-btn class="d-none d-sm-block" to="/">
				<span>About</span>
				<v-icon>mdi-view-dashboard</v-icon>
			</v-btn>
			<!-- </g-link> -->

			<!-- <g-link to="/connect"> -->
			<v-btn class="d-none d-sm-block" to="/connect">
				<v-icon>mdi-human-greeting-proximity</v-icon>
				<span>Connect</span>
			</v-btn>
			<!-- </g-link> -->

			<!-- <g-link to="/projects"> -->
			<v-btn class="d-none d-sm-block" to="/projects">
				<v-icon>mdi-devices</v-icon>
				<span>Projects</span>
			</v-btn>
			<!-- </g-link> -->

			<!-- <g-link to="/arsenal"> -->
			<v-btn class="d-none d-sm-block" to="/arsenal">
				<v-icon>mdi-hammer-wrench</v-icon>
				<span>Tools</span>
			</v-btn>
			<!-- </g-link> -->

			<!-- <g-link to="/contact"> -->
			<v-btn class="d-none d-sm-block" to="/contact">
				<v-icon>mdi-card-account-mail</v-icon>
				<span>Contact</span>
			</v-btn>
			<!-- </g-link> -->

			<v-btn-toggle group class="text-center d-sm-none" mandatory color="deep-purple">
				<!-- <g-link to="/"> -->
				<v-btn to="/">
					<span>About</span>
					<v-icon>mdi-view-dashboard</v-icon>
				</v-btn>
				<!-- </g-link> -->

				<!-- <g-link to="/connect"> -->
				<v-btn to="/connect">
					<v-icon>mdi-human-greeting-proximity</v-icon>
					<span>Connect</span>
				</v-btn>
				<!-- </g-link> -->

				<!-- <g-link to="/projects"> -->
				<v-btn to="/projects">
					<v-icon>mdi-devices</v-icon>
					<span>Projects</span>
				</v-btn>
				<!-- </g-link> -->

				<!-- <g-link to="/arsenal"> -->
				<v-btn to="/arsenal">
					<v-icon>mdi-hammer-wrench</v-icon>
					<span>Tools</span>
				</v-btn>
				<!-- </g-link> -->

				<!-- <g-link to="/contact"> -->
				<v-btn to="/contact">
					<v-icon>mdi-card-account-mail</v-icon>
					<span>Contact</span>
				</v-btn>
				<!-- </g-link> -->
			</v-btn-toggle>

			<!-- <v-btn text @click="next">
		
		
        <v-icon>mdi-chevron-right</v-icon>
			</v-btn>-->
			<!-- </v-footer> -->
		</v-bottom-navigation>
	</v-app>
</template>

<script>

export default {
	mounted() {
		console.log(this.$router.history.current["path"])
	},

	data: () => ({
		onboarding: 0,

		items: [
			{ title: 'Home', icon: 'mdi-view-dashboard' },
			{ title: 'About', icon: 'mdi-forum' },
		],
	}),
	methods: {
		next() {
			this.onboarding = this.onboarding + 1 === this.length
				? 0
				: this.onboarding + 1
		},
		prev() {
			this.onboarding = this.onboarding - 1 < 0
				? this.length - 1
				: this.onboarding - 1
		},
	},
};

</script>

<style>
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

@keyframes textclip {
	to {
		background-position: 200% center;
	}
}

/* .contactAnimation {
  min-height: calc(100vh - 60px);
  background: lightblue url();
  background-image: url('../pebbleRotation.gif');
  margin: auto;
} */
</style>
