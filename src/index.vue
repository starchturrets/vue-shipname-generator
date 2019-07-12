<template>
  <div class="container">
    <h2 @click="remove">Start Typing</h2>
    <input ref="firstInput" @keydown="checkForEnter" placeholder="Enter a name!" type="text" />
    <input @keydown="checkForEnter" ref="secondInput" placeholder="Enter another name!" type="text" />
    <div class="output" ref="output">
      <test ref="list" v-for="(i, index) of shipNames" v-bind:key="index" v-bind:namesObj="i"></test>
    </div>
  </div>
</template>

<script>
import test from './component.vue';
// eslint-disable-next-line import/extensions
import ship from './ship.js'; // Extremely hacky, but it works

export default {
  name: 'Test',
  components: {
    test,
  },
  data() {
    return {
      shipNames: [],
      clearForms() {
        const { firstInput } = this.$refs;
        const { secondInput } = this.$refs;
        firstInput.value = '';
        secondInput.value = '';
      },
    };
  },
  methods: {
    remove() {
      this.clearForms();
      this.shipNames = [];
    },
    checkForEnter(ev) {
      const { firstInput } = this.$refs;
      const { secondInput } = this.$refs;
      const values = firstInput.value && secondInput.value;
      if (ev.keyCode === 13 && ev.target === firstInput && ev.target.value) {
        this.$refs.secondInput.focus();
      } else if (ev.keyCode === 13 && ev.target === secondInput && values) {
        firstInput.focus();
        this.shipNames.push(ship(firstInput.value, secondInput.value));
        this.clearForms();
      }
    },
  },
};
</script>

<style>
*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
}

h2 {
  cursor: pointer;
}

input[type='text'] {
  display: block;
  outline: none;
  background-color: inherit;
  color: inherit;
  border-style: none;
  font: inherit;
  padding: 0.5em;
  width: 100%;
  height: 2.5em;
  margin-top: 1em;
  border-radius: 2px;
  border: solid 1px #e2e0e0;
}

input[type='text']:focus,
input[type='text']:active {
  box-shadow: inset 0 0 6px #e2e0e0;
}

.container {
  border-radius: 2px;
  border-top: solid 1px #000;
  box-shadow: 0 5px 5px #e2e0e0, 0 15px 30px #e2e0e0;
  font-size: 1.5rem;
  height: 450px;
  margin: 5% auto 0 auto;
  overflow: scroll;
  padding: 3rem;
  position: relative;
  scrollbar-width: none;
  width: 350px;
}
</style>
