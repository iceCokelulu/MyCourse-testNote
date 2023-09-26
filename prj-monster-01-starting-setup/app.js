// 获取随机伤害
function getRandomValue(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      battleLogs: [],
    };
  },

  computed: {
    monsterBarStyle() {
      if (this.monsterHealth < 0) {
        return { width: '0%' };
      }
      return { width: this.monsterHealth + '%' };
    },
    playerBarStyle() {
      if (this.playerHealth < 0) {
        return { width: '0%' };
      }
      return { width: this.playerHealth + '%' };
    },
    spacialAttackTime() {
      return this.currentRound % 3 !== 0;
    },
  },
  methods: {
    // 开始游戏
    startGame() {
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.battleLogs = [];
    },

    // 攻击怪兽造成伤害
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(15, 5);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
      this.setLogMessage('player', 'attack', attackValue);
    },

    // 攻击玩家造成伤害
    attackPlayer() {
      const attackValue = getRandomValue(18, 8);
      this.playerHealth -= attackValue;
      this.setLogMessage('monster', 'attack', attackValue);
    },

    // 特殊攻击
    specialAttack() {
      this.currentRound++;
      const attackValue = getRandomValue(21, 9);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
      this.setLogMessage('player', 'specialAttack', attackValue);
    },

    //治疗技能
    healPlayer() {
      this.currentRound++;
      const healValue = getRandomValue(20, 10);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.attackPlayer();
      this.setLogMessage('player', 'heal', healValue);
    },

    // 玩家投降
    surrender() {
      this.winner = 'surrender';
      this.battleLogs.push(
        new Date().toLocaleString() + ' ' + '' + this.winner
      );
    },

    // 攻击日志
    setLogMessage(who, what, attackValue) {
      this.battleLogs.unshift({
        actionBy: who,
        actionType: what,
        actionValue: attackValue,
      });
    },
  },
  watch: {
    // 玩家输掉游戏
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = 'draw';
        this.battleLogs.push(this.winner);
      } else if (value < 0) {
        this.winner = 'monster';
        this.battleLogs.push(this.winner);
      }
    },

    // 玩家赢得游戏
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = 'draw';
        this.battleLogs.push(this.winner);
      } else if (value < 0) {
        this.winner = 'player';
        this.battleLogs.push(this.winner);
      }
    },
  },
});

app.mount('#game');
