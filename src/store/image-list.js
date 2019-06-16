import axios from 'axios';

export default {
  state: {
    images: [],
    imagesLoaded: false,
  },
  getters: {
    loadedImages(state) {
      return state.images;
    },
  },
  mutations: {
    SET_IMAGES(state, images) {
      state.images = images;
      state.imagesLoaded = true;
    },
  },
  actions: {
    async fetchImages(context, searchTerm) {
      const ACCESS_KEY = 'cce7f1d68f62bedea8115ee6616f5f1a932410e4b2695e80d57a24260e492ad9';

      const { data: { results } } = await axios.get(`https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${searchTerm}&client_id=${ACCESS_KEY}`);
      const images = results.map((image) => { // eslint-disable-line
        return {
          id: image.id,
          imageUrl: image.urls.full,
          imageThubUrl: image.urls.thumb,
          alt: image.alt_description,
        };
      });
      context.commit('SET_IMAGES', images);
    },
  },
};
