<template>
  <div class="search-input">
    <input
      v-model="searchTerm"
      class="search-input__input"
    />
    <button
      @click="fetchImages"
      class="search-input__button"
    >
      Search Images
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import axios from 'axios';

const ACCESS_KEY = 'cce7f1d68f62bedea8115ee6616f5f1a932410e4b2695e80d57a24260e492ad9';

export default {
  name: 'SearchInput',
  data() {
    return {
      searchTerm: '',
      images: [],
    };
  },
  methods: {
    ...mapActions([
      'setImages',
    ]),
    async fetchImages() {
      const { data: { results } } = await axios.get(`https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${this.searchTerm}&client_id=${ACCESS_KEY}`);
      const images = results.map((image) => { // eslint-disable-line
        return {
          id: image.id,
          imageUrl: image.urls.full,
          imageThubUrl: image.urls.thumb,
          alt: image.alt_description,
        };
      });
      this.setImages(images);
      this.images = images;
    },
  },
};
</script>

<style lang="scss" scoped>

.search-input {}

</style>
