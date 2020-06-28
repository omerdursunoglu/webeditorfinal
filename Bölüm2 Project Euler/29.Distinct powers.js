var big = require('big.js');
	var array = [];
	

	for (var i = 2; i <= 100; i++) {
	  for (var j = 2; j <= 100; j++) {
	    var tmp = big(i).pow(j);
	    var result = array.find(function(element) {
	      if (element.eq(tmp)) {
	        return true;
	      }
	      return false;
	    });
	    if (!result) {
	      array.push(tmp);
	    }
	  }
	}
	

	console.log(array.length);
