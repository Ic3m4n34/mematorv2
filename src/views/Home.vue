<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <SearchInput />
    <ImageList v-if="loadedImages.length > 0" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
    SearchInput: () => import('@/components/search-input'),
    ImageList: () => import('@/components/image-list'),
  },
  computed: {
    ...mapGetters([
      'loadedImages',
    ]),
  },
};
</script>
