(function() {
  'use strict';

  var robot = require("robotjs"),
      sr    = require("seedrandom");

  module.exports = {
    counter: 0,
    times: 0,
    beginIn: 3,
    click: function() {
      robot.mouseClick();
      this.counter++;
    },
    calcXp: function(n) {
      return (n)*65;
    },
    recurs: function() {
      Math.seedrandom();
      var delay = 1200*Math.random()+300;

      setTimeout(function() {
        if(this.counter < this.times || this.times === 0) {
          this.click();
          this.recurs();
        } else {
          console.log('Finished. You\'ve just gained a delicious ' + this.calcXp(this.counter) + ' XP (at most).');
          process.exit(0);
          return;
        }
      }.bind(this), delay );
    },
    countDown: function() {
      if(this.beginIn !== 0) {
        setTimeout(function() {
          console.log('Starting in ' + this.beginIn);
          this.beginIn --;
          this.countDown();
        }.bind(this), 1000 );
      } else {
        this.recurs();
      }
    },
    start: function(n) {
      this.times = n;

      console.log('Oldfield\'s Alch-O-Matic-5000. Set to perform ' + (n || 'infinite') + ' alchs.');
      this.countDown();
    }
  };

})();