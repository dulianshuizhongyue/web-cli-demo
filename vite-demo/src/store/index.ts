import { InjectionKey } from 'vue'
import { createStore, Store, createLogger } from 'vuex'

const debug: boolean = import.meta.env.MODE === 'development'
const plugins = debug ? [createLogger({ collapsed: true })] : []

export interface State {
  count: number
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {},
  modules: {},
  strict: debug,
  plugins: plugins,
})
