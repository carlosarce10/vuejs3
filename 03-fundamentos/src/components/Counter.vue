<template>
  <h2>{{ customTitle }}</h2>
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
  <p data-testid="counter">{{ counter }}</p>

  <div>
    <button @click="decrement()">-1</button>
    <button @click="increment()">+1</button>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    start: {
      type: Number,
      default: 100,
      //required: true,
      validator(value) {
        return value >= 0;
      },
    },
  },
  data() {
    return {
      counter: this.start,
      candyCount: 0,
      newtitle: '',
    };
  },
  methods: {
    getSquare() {
      return this.counter * this.counter;
    },
    decrement() {
      this.counter--;
    },
    increment() {
      this.counter++;
    },
  },
  computed: {
    squareCounter() {
      return this.counter * this.counter;
    },
    customTitle() {
      return this.title || 'Counter';
    },
  },
};
</script>

<style scoped>
button {
  background-color: rgb(15, 140, 223);
  color: white;
  border-radius: 5px;
  margin: 0, 5px;
  border: 1px solid white;
  cursor: pointer;
  padding: 5px, 15px;
  transition: 0.3s ease-in-out;
  width: 60px;
  height: 40px;
}
button:hover {
  background-color: rgb(15, 125, 199);
  transition: 0.3s ease-in-out;
}
</style>
