var app = new Vue({
    el: "#app",
    data: {
      arrayCard: [],
    },
    mounted() {
      axios.get("../Seconda Versione/api/index.php").then((res) => {
        console.log(res);
        this.arrayCard = res.data;
      });
    },
    beforeUpdate() {},
    methods: {},
  });