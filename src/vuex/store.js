
import Vue from 'vue';
import Vuex from 'vuex';


import actions from './actions/actions';
import mutations from './mutations/mutations';

Vue.use(Vuex);

let store = new Vuex.Store ( {
    state: {
        products: [],
        cart: []
    },
    mutations,
    actions,
    getters: {
        PRODUCTS(state) {
            return state.products;
        },
        CART(state) {
            return state.cart;
        }
    }
});

export default store;