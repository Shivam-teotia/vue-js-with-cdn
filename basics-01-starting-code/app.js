const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish the course and learn vue",
      vueLinks:
        "https://vuejs.org/guide/essentials/template-syntax.html#using-javascript-expressions",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoal;
      } else {
        return "Master Vue!";
      }
    },
  },
});

app.mount("#user-goal");
