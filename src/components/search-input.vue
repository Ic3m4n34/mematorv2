<template>
  <div
    @keyup.enter="searchImages"
    class="search-input"
  >
    <input
      v-model="searchTerm"
      class="search-input__input"
    />
    <button
      @click="searchImages"
      class="search-input__button"
    >
      Search Images
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'SearchInput',
  data() {
    return {
      searchTerm: '',
    };
  },
  methods: {
    ...mapActions([
      'fetchImages',
    ]),
    searchImages(searchTerm) {
      this.fetchImages(searchTerm);
    },
  },
  /* computed: {
    ...mapGetters([
      'loadedImages',
    ]),
  }, */
};
</script>

<style lang="scss" scoped>

.search-input {}

</style>
