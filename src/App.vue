<template>
  <div class="container">
    <h2>Start Typing</h2>
    <input
      v-focus
      v-on:keyup="ship"
      v-on:keyup.enter="$event.target.nextElementSibling.focus()"
      ref="firstInput"
      placeholder="Enter a name!"
      type="text"
    />
    <input
      ref="secondInput"
      placeholder="Enter another name!"
      v-on:keyup="ship"
      v-on:keyup.enter="$event.target.previousElementSibling.focus()"
      type="text"
    />

    <div class="output" ref="output">
      <section>
        <ul>
          <h3>
            {{ obj.firstName }} <span v-if="obj.secondName"> and {{ obj.secondName }}:</span>
          </h3>
          <li v-for="(item, index) in obj.shipNames" :key="index">{{ item }}</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
// import test from './component.vue';
// eslint-disable-next-line import/no-unresolved
import Ship from './ship';
// Extremely hacky, but it works
export default {
  name: 'Test',
  components: {
    // test,
  },

  data() {
    return {
      obj: {}, // Just an object with nothing to see here
      firstFocused: true as boolean,
      secondFocused: false as boolean,
    };
  },
  directives: {
    focus: {
      // directive definition
      inserted(el: HTMLElement) {
        el.focus();
      },
    },
  },
  methods: {
    // Multipurpose function: if the inputed e
    enterHandler(str: string, el: HTMLInputElement) {
      if (str !== '' && el === null) {
        console.log('Shipping');
      } else if (str !== '' && el) {
        el.focus();
      }
    },
    ship() {
      const { firstInput, secondInput } = this.$refs;
      if (firstInput instanceof HTMLInputElement && secondInput instanceof HTMLInputElement) {
        console.log(firstInput.value);
        console.log(secondInput.value);
        this.obj = new Ship([firstInput.value, secondInput.value]);
        console.log(this.obj);
      } else {
        console.error('The arguments are NOT HTMLInputElements');
      }
    },
    // remove() {
    //   this.clearForms();
    //   this.shipNames = [];
    // },
    // checkForEnter(ev: Event) {
    //   if (ev.target instanceof Element) {
    //     // const {target}= ev as HTMLElement| unknown;
    //     const { firstInput } = this.$refs;
    //     const { secondInput } = this.$refs;
    //     const values = firstInput.value && secondInput.value;
    //     if (ev.keyCode === 13 && ev.target === firstInput && ev.target.value) {
    //       this.$refs.secondInput.focus();
    //     } else if (ev.keyCode === 13 && ev.target === secondInput && values) {
    //       this.clearForms();
    //       firstInput.focus();
    //       this.shipNames.push(ship(firstInput.value, secondInput.value));
    //     }
    //   }
    // },
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

section {
  margin: 0;
  padding: 0;
}

div {
  margin: 0;
  padding: 0;
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
