var majorityElement = function(nums) {
    var mj = 0;
    var cnt = 1;
    
    for(var i = 1; i < nums.length; i++){
        if(nums[i] === nums[mj]){
            cnt++;
        } else {
            cnt--;
        }
        
        if(cnt === 0){
            mj = i;
            cnt = 1;
        }
    }
    
    return nums[mj];
};
