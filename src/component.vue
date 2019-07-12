<template>
  <section>
    <h3>{{namesObj.firstNames}} and {{namesObj.secondNames}}:</h3>
    <ul>
      <li v-for="(i, index) in namesObj.shipNames" v-bind:key="index.toString()">{{i}}</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'test',
  props: ['namesObj'],
  data() {
    return {};
  },
  mounted() {
    // console.log(this.namesObj.shipNames);
  },
  methods: {
    test(i) {
      // const index = this.namesObj.shipNames.indexOf(i);
      console.log(i);
      return i.toString();
    },
  },
};
</script>

<style scoped>
h3 {
  font-size: 1.5rem;
}

.post {
  border: solid 1px black;
  margin: 1em auto;
}

a {
  display: block;
}
</style>
