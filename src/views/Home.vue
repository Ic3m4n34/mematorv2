<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <SearchInput />
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    SearchInput: () => import('@/components/search-input'),
  },
};
</script>
