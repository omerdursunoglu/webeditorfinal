function isRightAngle(a, b, c) {
	  return (Math.pow(a, 2) + Math.pow(b, 2)) === Math.pow(c, 2);
	}
	

	function howManyMatch(n) {
	  var a = 1,
	      b = 1;
	  var sum = 0;
	  for (a = 1;a < n - 2; a++) {
	    for (b = 1;b < n - 2; b++) {
	      if (isRightAngle(a, b, n - a - b)) {
	        sum++;
	      }
	    }
	  }
	  return sum;
	}
	

	function findMax() {
	  var i = 3;
	  var max = 0;
	  var maxI = 0;
	  var tmp;
	  for (;i < 1000; i++) {
	    tmp = howManyMatch(i);
	    if (tmp > max) {
	      max = tmp
	      maxI = i
	    }
	  }
	  return maxI;
	}
	

	console.log(findMax());
