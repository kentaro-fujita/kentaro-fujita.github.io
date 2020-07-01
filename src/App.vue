<template>
  <main>
    <Header/>
    <div class="link">
      <router-link to="/">About</router-link>
      <router-link to="/interest">Interest</router-link>
      <router-link to="/skill">Skill</router-link>
      <router-link to="blog">Blog</router-link>
      <router-link to="/link">Link</router-link>
      <router-link to="/contact">Contanct</router-link>
      <router-view></router-view>
    </div>
    <div class="clear" />
  </main>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'Top',
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css');
@import '@/assets/styles/_color.scss';
@import '@/assets/styles/_size.scss';
main {
  background-color: white;
}
.link {
  width: 100%;
  text-align: center;
  background-color: white;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  // position: fixed;
  z-index: 10;
}
a {
  height: $header-height_pc;
  line-height: $header-height_pc;
  transition: all 0.3s;
  cursor: pointer;
  font-size: 20px;
  // font-weight: bold;
  color: $text-color;
  text-decoration: none;
  width: 150px;
  display: inline-block;
  &:hover {
    background-color: darken(white, 5%);
  }
  &:link {
    color: $text-color;
  }
}
.clear {
  clear: left;
}
/* タブレット */
@media (max-width: 1250px) {
  a {
    width: 30%;
    height: $header-height_tablet;
    line-height: $header-height_tablet;
  }
}
/* スマートフォン */
@media (max-width: 670px) {
  a {
    width: 40%;
    height: $header-height_sp;
    line-height: $header-height_sp;
  }
}
</style>
