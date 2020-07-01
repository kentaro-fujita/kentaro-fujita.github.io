<template>
  <section id="about" class="about-wrapper">
    <pageTitle title="About" />
    <div class="box-wrapper">
      <h3>I'm Kentaro Fujita.</h3>
      <h4>I'm a Master's student in computure science at Nara Institute of Science and Technology (NAIST). I belong to the <a href="http://www-lsm.naist.jp">kasahara Lab.</a></h4>
    </div>
  </section>
</template>

<script>
import pageTitle from '@/components/pageTitle'

export default {
  name: 'about',
  components: {
    pageTitle
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_color.scss';
@import '@/assets/styles/_mixin.scss';

.about-wrapper {
  @include section;
}
.box-wrapper {
  @include box-wrapper;
  color: $text-color;
  table {
    text-align: left;
  }
  th {
    padding-right: 20px;
    font-weight: normal;
    color: $sub-text-color;
  }
  td {
    font-size: 20px;
    padding: 5px 8px 5px 0;
  }
}
a {
  text-decoration: none;
}
/*スマートフォン*/
@media (max-width: 670px) {
  .box-wrapper {
    td {
      display: block;
      font-size: 16px;
      width: 100%;
      padding: 5px 0;
      border-bottom: none;
    }
  }
}
</style>
