var largestNumber = function(nums) {
	    nums.sort(cmp);
	    var result = nums.join('');
	    
	    return parseInt(result) === 0 ? '0' : result;
	};
	

	var cmp = function(a,b){
	    return ('' + a + b) > ('' + b + a) ? -1 : 1;
	}




