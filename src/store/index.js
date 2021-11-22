import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/api';
import getPayments from '@/mocks/getPayments';
import * as CacheManager from '@/helpers/CacheManager';

Vue.use(Vuex);

export default new Vuex.Store({

  state: () => ({
    data: [],
    isLoading: false,
    isCached: false,
  }),

  mutations: {
    setState(state, value) {
      Object.entries(value).forEach(([key, data]) => {
        if (!Array.isArray(state[key]) && state[key] && typeof state[key] === 'object') {
          state[key] = {
            ...state[key],
            ...data,
          };
        } else {
          state[key] = data;
        }
      });
    },
  },

  actions: {
    async load({ commit }, params = {}) {
      commit('setState', { isLoading: true });

      try {
        const cachedData = CacheManager.get();
        if (cachedData) {
          commit('setState', { isCached: true });
        }
        const { data } = cachedData || (process.env.VUE_APP_DATA_SOURCE === 'mock' ? await getPayments(params) : await api.getPayments(params));

        if (Array.isArray(data)) {
          if (!cachedData) {
            const isCached = CacheManager.set({ data });
            commit('setState', { isCached });
          }

          commit('setState', { data });
        }
      } catch (e) {
        // eslint-disable-next-line no-alert
        alert(e?.message);
      } finally {
        commit('setState', { isLoading: false });
      }
    },
    async clearCache({ dispatch, commit }) {
      CacheManager.clear();
      commit('setState', { isCached: false });
      dispatch('load');
    },
  },
});
