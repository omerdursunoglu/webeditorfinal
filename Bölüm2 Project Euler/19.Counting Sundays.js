var monthDays =[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	var sundays = 0;
	var days = 365 + 1;             // plus 1 means the first day of 1901
	

	var isLeapYear = function(year) {
	  if ((0 === year % 4 && 0 !== year % 100)
	      || 0 === year % 400) {
	    return true;
	  }
	  return false;
	};
	

	// 4
	for (var i = 1901; i <= 2000; i++) {
	  for (var j = 0; j < monthDays.length; j++) {
	    if (1 === j) {
	      if (isLeapYear(i)) {
	        days += 29;
	      } else {
	        days += 28;
	      }
	    } else {
	      days += monthDays[j];
	    }
	    if (days % 7 === 0) {
	      sundays += 1;
	    }
	  }
	}
	

	console.log(sundays);
