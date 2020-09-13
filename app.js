new Vue({
  el: "#root",
  data: {
    title: "Punchbag Game",
    health: 100,
    ended: false,
  },
  methods: {
    hitBag() {
      this.health -= 10;
      if (this.health <= 0) {
        this.ended = true;
      }
    },
    restart() {
      this.health = 100;
      this.ended = false;
    },
  },
});
