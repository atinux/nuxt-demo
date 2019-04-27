export const state = () => ({
  authenticated: false
})

export const mutations = {
  login(state) {
    state.authenticated = true
  },
  logout(state) {
    state.authenticated = false
  }
}
