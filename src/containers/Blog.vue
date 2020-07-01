<template>
    <section id="blog" class="blog-wrapper">
        <pageTitle title="Blog" />
        <div class="box-wrapper">
            <p>list of posts.</p>
        </div>
    </section>
</template>

<script>
import pageTitle from '@/components/pageTitle'
export default {
  name: 'blog',
  components: {
    pageTitle
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_color.scss';
@import '@/assets/styles/_mixin.scss';

.blog-wrapper {
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
</style>
