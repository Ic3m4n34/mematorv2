import Vue from 'vue';
import Vuex from 'vuex';

import ImageList from './image-list';

Vue.use(Vuex);

const modules = {
  ImageList,
};

export default () => new Vuex.Store({
  modules,
});
