<template>
  <section id="interest" class="interest-wrapper">
    <pageTitle title="Interest"/>
    <div class="box-wrapper">
      <table>
        <tbody>
        <th v-for="contact in contacts" :key="contact">
          <tr><img :src="contact.img" width="150"/></tr>
          <tr>{{ contact.value }}</tr>
        </th>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import pageTitle from '@/components/pageTitle'

export default {
  name: 'interest',
  components: {
    pageTitle
  },
  data () {
    return {
      contacts: [
        {value: 'Machine Learning', img: require('@/assets/interest/deep-learning.png')},
        {value: 'Game Theory', img: require('@/assets/interest//baby.png')},
        {value: 'Blockchain', img: require('@/assets/interest//blockchain.png')}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_color.scss';
@import '@/assets/styles/_mixin.scss';

.interest-wrapper {
  @include section;
}
.box-wrapper {
  @include box-wrapper;
  color: $text-color;

  tr {
    text-align: center;
    font-size: 20px;
    font-weight: normal;
    color: $sub-text-color;
  }
  td {
    font-size: 20px;
    padding: 5px 8px 5px 0;
  }
  th {
    border-spacing: 20px 0px;
  }
}
/*スマートフォン*/
@media (max-width: 670px) {
  .box-wrapper {
    table {
      display: block;
      font-size: 16px;
      width: 100%;
      padding: 5px 0;
      border-bottom: none;
    }
    tr {
      font-size: 15px;
    }
    img {
      max-width: 100%;
      max-height: 100%;
      height: auto;
    }
  }
}
</style>
