export const state = () => ({
    chipSelected: [],
    activeSection: "about"
})

export const mutations = {
    changeActiveSection(state, activeSection) {
        state.activeSection = activeSection
    }
}