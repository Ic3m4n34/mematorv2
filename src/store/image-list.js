export default {
  state: {
    images: [],
    imagesLoaded: false,
  },
  mutations: {
    SET_IMAGES(state, images) {
      state.images = images;
      state.imagesLoaded = true;
    },
  },
  actions: {
    setImages(context, images) {
      context.commit('SET_IMAGES', images);
    },
  },
};
