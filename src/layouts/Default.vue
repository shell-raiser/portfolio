<template>
	<v-app>
		<!-- 2:06:01 -->

		<!-- </v-card> -->
		<main>
			<!-- <v-main> -->
			<transition name="fade" appear>
				<slot />
			</transition>
			<!-- </v-main> -->
		</main>
		<v-bottom-navigation app active-class mandatory shift color="deep-purple">
			<!-- <v-footer class="justify-center" tile app> -->

			<!-- <v-btn text @click="prev">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn> -->


			<!-- <v-btn-toggle v-model="onboarding" class="text-center" rounded mandatory color="deep-purple"> -->

			<!-- <g-link to="/"> -->
			<v-btn to="/">
				<span>About</span>
				<v-icon>mdi-view-dashboard</v-icon>
			</v-btn>
			<!-- </g-link> -->

			<!-- <g-link to="/connect"> -->
			<v-btn to="/connect">
				<v-icon>mdi-human-greeting-proximity</v-icon>
				<span>
					Connect</span>
			</v-btn>
			<!-- </g-link> -->

			<!-- <g-link to="/projects"> -->
			<v-btn to="/projects">
				<v-icon>mdi-devices</v-icon>
				<span> Projects</span>
			</v-btn>
			<!-- </g-link> -->

			<!-- <g-link to="/arsenal"> -->
			<v-btn to="/arsenal">
				<v-icon>mdi-hammer-wrench</v-icon>
				<span>
					Tools</span>
			</v-btn>
			<!-- </g-link> -->


			<!-- <g-link to="/contact"> -->
			<v-btn to="/contact">
				<v-icon>mdi-card-account-mail </v-icon>
				<span>Contact</span>
			</v-btn>
			<!-- </g-link> 

			 </v-btn-toggle> -->


			<!-- <v-btn text @click="next">
		
		
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn> -->
			<!-- </v-footer> -->
		</v-bottom-navigation>


	</v-app>
</template>

<script>

export default {
	data: () => ({
		// rules: [
		//   value => !!value || 'Required.',
		//   value => (value && value.length >= 3) || 'Min 3 characters',
		// ],
		// valid: true,
		// name: '',
		// nameRules: [
		//   v => !!v || 'Name is required',
		//   v => (v && v.length <= 10) || 'Name must be less than 10 characters',
		// ],
		// email: '',
		// emailRules: [
		//   v => !!v || 'E-mail is required',
		//   v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
		// ],
		// length: 3,
		onboarding: 0,
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
	transition: all .5s;
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
