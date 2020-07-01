<template>
    <section id="contact" class="contact-wrapper">
        <pageTitle title="Contact" />
        <div class="box-wrapper">
        <table>
            <tbody>
            <tr v-for="(contact, index) in contacts" :key="index">
                <th>{{ contact.key }}</th>
                <td v-if="contact.url" class="last-td">
                <a :href="contact.url" target="_blank" rel="noopener noreferrer">
                    {{ contact.value }}
                </a>
                </td>
                <td v-else class="last-td">
                {{ contact.value }}
                </td>
            </tr>
            </tbody>
        </table>
        </div>
    </section>
</template>

<script>
import pageTitle from '@/components/pageTitle'
export default {
  name: 'contact',
  components: {
    pageTitle
  },
  data () {
    return {
      contacts: [
        {
          key: 'Twitter',
          value: '@k_fujita_22',
          url: 'https://twitter.com/k_fujita_22'
        },
        {
          key: 'Amazon WishList',
          value: 'Link',
          url: 'https://www.amazon.jp/hz/wishlist/ls/33KZC1ANBMGWO?ref_=wl_share'
        },
        {
          key: 'Contact',
          value: 'fujita.kentaro.fk0 [at] is.naist.jp',
          url: 'mailto:fujita.kentaro.fk0@is.naist.jp'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_color.scss';
@import '@/assets/styles/_mixin.scss';

.contact-wrapper {
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
