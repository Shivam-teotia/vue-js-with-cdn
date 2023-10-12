const app = Vue.createApp({
  data() {
    return {
      name: "Shivam",
      age: 21,
      imageUrl:
        "https://www.bing.com/images/search?view=detailV2&ccid=1YM53mG1&id=BC6470C60B7A8615DA7155B539C4A122275DF649&thid=OIP.1YM53mG10H_U25iPjop83QHaEo&mediaurl=https%3a%2f%2fwww.thewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-images..jpg&exph=1800&expw=2880&q=images&simid=608024970043212283&FORM=IRPRST&ck=D0378EAF346D6D862EE51853DCE82E23&selectedIndex=2&ajaxhist=0&ajaxserp=0",
    };
  },
  methods: {
    outputNumber() {
      const num = Math.random();
      return num;
    },
  },
});
app.mount("#assignment");
