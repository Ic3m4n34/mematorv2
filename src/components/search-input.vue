<template>
  <div class="search-input">
    <input
      v-model="searchTerm"
      class="search-input__input"
    />
    <button
      @click="searchImages"
      class="search-input__button"
    />
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  data() {
    return {
      searchTerm: '',
    };
  },
  methods: {
    searchImages() {
      return true;
    },
  },
};
</script>

<style lang="scss" scoped>

.search-input {}

</style>
