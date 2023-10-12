function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      message: null,
      logs: [],
    };
  },
  computed: {
    monsterBarStyles() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.message = "draw";
      } else if (value <= 0) {
        this.message = "You Lost!";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.message = "draw";
      } else if (value <= 0) {
        this.message = "You Win!";
      }
    },
  },
  methods: {
    startGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.message = null;
      this.logs = [];
    },
    attackMonster() {
      this.currentRound++;
      const damage = getRandom(5, 12);
      this.monsterHealth = this.monsterHealth - damage;
      this.addLogMessage("Player", "attack", damage);
      this.attackPlayer();
    },
    attackPlayer() {
      const damage = getRandom(8, 15);
      this.playerHealth = this.playerHealth - damage;
      this.addLogMessage("Monster", "attack", damage);
    },
    specialAttackMonster() {
      this.currentRound++;
      const damage = getRandom(10, 25);
      this.monsterHealth -= damage;
      this.addLogMessage("Player", "attack", damage);
      this.attackPlayer();
    },
    heal() {
      this.currentRound++;
      const healValue = getRandom(8, 20);
      this.playerHealth += healValue;
      this.playerHealth = Math.min(this.playerHealth, 100);
      this.addLogMessage("Player", "heal", healValue);
    },
    surrender() {
      this.message = "You Lost!";
    },
    addLogMessage(who, what, value) {
      this.logs.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
});
app.mount("#game");
