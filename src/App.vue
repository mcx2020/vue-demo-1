<template>
  <div id="app">
    <div>{{n}}</div>
    <button v-on:click="add()">+1</button>
    <div>{{filter()}}</div>
    <div>{{user}}</div>
    <div>{{address}}</div>
    <div v-greet>Hello</div>
    <div v-greet2>Hello2</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      n: 100,
      array: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      user: {
        name: "小白",
        cellphone: "1383838438",
        email: "xiaobai.qq.com"
      }
    };
  },
  methods: {
    add() {
      this.n += 1;
    },
    filter() {
      console.log("执行了一次 filter 函数");
      return this.array.filter(i => i % 2 === 0);
    }
  },
  computed: {
    address() {
      let { user } = this;
      return `姓名：${user.name}，电话：${user.cellphone}，邮箱：${user.email}`;
    }
  },
  watch: {
    n(newValue, oldValue) {
      console.log(`from ${oldValue} to ${newValue}`);
    }
  },
  directives: {
    greet2: {
      inserted(el) {
        el.addEventListener("click", () => console.log("Hello2"));
      }
    }
  }
};
</script>

<style lang="scss">
</style>
