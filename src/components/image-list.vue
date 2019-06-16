<template>
  <div class="image-list">

  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ImageList',
  computed: {
    ...mapGetters([
      'loadedImages',
    ]),
  },
};
</script>

<style lang="scss" scoped>

.image-list {}

</style>
