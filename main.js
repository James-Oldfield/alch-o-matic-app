(function() {
  'use strict';

  var ipc   = require('ipc');

  var el    = document.getElementById('submit');
  var input = document.getElementById('input');

  var submit = function() {
    ipc.send('alch-number', input.value);
  };

  el.addEventListener('click', submit);

  
})();