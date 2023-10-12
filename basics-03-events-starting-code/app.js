const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    add() {
      this.counter = this.counter + 1;
    },
    remove() {
      this.counter = this.counter - 1;
    },
    setName(event) {
      this.name = event.target.value;
    },
  },
});

app.mount("#events");
