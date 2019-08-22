<template>
  <div class="container">
    <h2>Start Typing Stuff In</h2>
    <form>
      <input
        v-focus
        v-on:keydown.enter="focus"
        v-bind:value="first"
        v-on:input="
          first = $event.target.value;
          ship();
        "
        ref="firstInput"
        placeholder="Enter a name!"
        type="text"
      />

      <input
        ref="secondInput"
        placeholder="Enter another name!"
        v-bind:value="second"
        v-on:input="
          second = $event.target.value;
          ship();
        "
        v-on:keydown.enter="focus"
        type="text"
      />
    </form>
    <div class="output" ref="output">
      <section>
        <ul v-if="this.first !== ''">
          <h3>
            {{ obj.firstName }}
            <span v-if="checkValue() === true"> and {{ obj.secondName }}:</span>
          </h3>
          <li v-for="(item, index) in obj.coupleNames" :key="index">{{ item }}</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line import/no-unresolved
import Ship from './ship/ship';

// Extremely hacky, but it works
export default {
  name: 'Shipper',

  data() {
    return {
      obj: {}, // Just an object with nothing to see here
      first: '' as string,
      second: '' as string,
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
    ship() {
      this.obj = Ship(this.first, this.second);
    },
    focus(ev: Event) {
      const target = ev.target as HTMLElement;

      const sibling = (target.previousElementSibling || target.nextElementSibling) as HTMLElement;
      sibling.focus();
    },
    checkValue() {
      // This function checks if the input values are not simply a bunch of empty whitespace
      return this.first.trim() !== '' && this.second.trim() !== '';
    },
  },
};
</script>

<style lang="scss">
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

ul {
  padding: 0;
  font-weight: 300;
}

li {
  font-weight: lighter;
}
</style>
