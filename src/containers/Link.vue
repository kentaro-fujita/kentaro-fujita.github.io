<template>
  <section id="link" class="link-wrapper">
    <pageTitle title="Link" />
    <div class="box-wrapper">
      <table>
          <tbody>
          <th v-for="(contact, index) in contacts" :key="index">
            <tr>
              <a :href="contact.url" target="_blank" rel="noopener noreferrer">
                <img :src="contact.img" width="150"/>
              </a>
            </tr>
          </th>
          </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import pageTitle from '@/components/pageTitle'

export default {
  name: 'Link',
  components: {
    pageTitle
  },
  data () {
    return {
      contacts: [
        {
          key: 'GitHub',
          url: 'https://github.com/kentaro-fujita',
          img: require('@/assets/link/GitHub.png')
        },
        {
          key: 'AtCoder',
          url: 'https://atcoder.jp/users/k_fujita',
          img: require('@/assets/link/atcoder.png')
        },
        {
          key: 'Kaggle',
          url: 'https://kaggle.com/kentarof',
          img: require('@/assets/link/Kaggle.png')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_color.scss';
@import '@/assets/styles/_mixin.scss';

.link-wrapper {
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
  }
}
</style>
