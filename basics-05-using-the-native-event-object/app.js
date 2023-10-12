const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  watch: {
    name() {
      console.log("name");
    },
  },
  computed: {
    outputFullname() {
      console.log("fullname");
      return this.name + " " + "Teotia";
    },
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      console.log("add");
      this.counter = this.counter + num;
    },
    reduce(num) {
      console.log("reduce");
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      console.log("reset");
      this.name = "";
    },
  },
});

app.mount("#events");
