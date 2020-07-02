export const state = () => ({
  Authenticated: false,
  Name: '',
})

export const getters = {
  getAuthenticated: (state) => {
    return state.Authenticated
  },
  getName: (state) => {
    return state.Name
  },
}

export const mutations = {
  setAuthenticated: (state, payload) => {
    state.Authenticated = payload
  },
  setName: (state, payload) => {
    state.Name = payload
  },
}
