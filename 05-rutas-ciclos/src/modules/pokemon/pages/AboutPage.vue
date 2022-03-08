<template>
  <h1>About page</h1>
  <hr />
  <h2>{{ name }}</h2>
  <button @click="onChangeName">cambiar nombre</button>
</template>

<script>
export default {
  data() {
    return {
      name: 'Carlos',
    };
  },
  methods: {
    onChangeName() {
      this.name = 'Eduardo';
    },
  },
  beforeCreate() {
    console.log('se lanzó beforeCreate');
  },
  created() {
    console.log('se lanzó created');
  },
  beforeMount() {
    console.log('se lanzó beforeMount');
  },
  mounted() {
    console.log('se lanzó mounted');
  },
  beforeUpdate() {
    console.log('se lanzó beforeUpdate');
  },
  updated() {
    console.log('se lanzó updated');
  },
  activated() {
    console.log('se lanzó activated');
  },
  deactivated() {
    console.log('se lanzó deactivated');
  },
  beforeUnmount() {
    console.log('se lanzó beforeUnmount');
  },
  unmounted() {
    console.log('se lanzó unmounted');
  },
  errorCaptured() {
    console.log('se lanzó errorCaptured');
  },
  renderTracked() {
    console.log('se lanzó renderTracked');
  },
  renderTriggered() {
    console.log('se lanzó renderTriggered');
  },
};
</script>
