var numberArray = [1, -2, 3, -4 , 5, 6]
console.log("these are negative numbers")
numberArray = numberArray.filter(function(x){
    return x < 0
})
console.log(numberArray);