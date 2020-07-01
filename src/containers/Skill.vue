<template>
  <section id="skill" class="skill-wrapper">
    <pageTitle title="Skill" />
    <div class="skills">
      <ul>
        <li v-for="(skill, index) in skills" :key="index">
          {{ skill.name }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import pageTitle from '@/components/pageTitle'

export default {
  name: 'skill',
  components: {
    pageTitle
  },
  data () {
    return {
      skills: [
        {name: 'Python'},
        {name: 'Java'},
        {name: 'C++'},
        {name: 'Vue.js'},
        {name: 'Docker'},
        {name: 'GitHub'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_color.scss';
@import '@/assets/styles/_mixin.scss';

.skill-wrapper {
  @include section;
}

.skills {
  @include box-wrapper;
  width: 100%;
}
ul {
  display: grid;
  grid-template-columns: repeat(3, 200px);
  @media (max-width: 1410px) {
    grid-template-columns: repeat(2, 200px);
  }
  @media (max-width: 670px) {
    grid-template-columns: 200px;
  }
}
li {
  width: 100%;
  text-align: left;
  font-size: 20px;
  padding: 8px 0;
  color: $text-color;
}
</style>
