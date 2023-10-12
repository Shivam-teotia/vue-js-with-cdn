const app = Vue.createApp({
  data() {
    return {
      inputTask: "",
      tasks: [],
      visible: true,
    };
  },
  computed: {
    content() {
      if (this.visible) {
        return "Hide";
      } else {
        return "Show";
      }
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.inputTask);
      this.inputTask = "";
    },
    toogle() {
      this.visible = !this.visible;
    },
  },
});
app.mount("#assignment");
