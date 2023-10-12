const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      confirmInput: "",
    };
  },
  methods: {
    showAlert() {
      alert("Hey Welcome back again");
    },
    saveInput(event) {
      this.userInput = event.target.value;
    },
    saveInput2(event) {
      this.confirmInput = event.target.value;
    },
  },
});

app.mount("#assignment");
