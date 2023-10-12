const app = Vue.createApp({
  data() {
    return {
      inputClass: "",
      paragraphVisible: false,
      bgColor: "",
    };
  },
  computed: {
    paraClasses() {
      return {
        visible: this.paragraphVisible,
        hidden: !this.paragraphVisible,
      };
    },
  },
  methods: {
    toggle() {
      this.paragraphVisible = !this.paragraphVisible;
    },
  },
});
app.mount("#assignment");
