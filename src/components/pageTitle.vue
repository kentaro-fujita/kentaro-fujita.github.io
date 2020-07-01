<template>
  <h2 class="title">
    {{ title }}
  </h2>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_color.scss';
.title {
  font-weight: normal;
  color: $text-color;
  font-size: 40px;
  margin: 10px 5%;
  top: 50px;
}
.title:after {
  display: block;
  height: 2px;
  content: '';
  background: black;
}
@media (max-width: 670px) {
  .title {
    margin: 10px 10vw;
    font-size: 32px;
  }
}
</style>
