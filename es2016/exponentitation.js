//ES2015
var nums = [1,2,3,4];
var total = 2;

for(let i = 0; i < nums.length; i++){
    total = Math.pow(total, nums(i));
}

//ES2016
var nums = [1,2,3,4];
var total = 2;

for(let i = 0; i < nums.length; i++){
    total **= nums[i];
}