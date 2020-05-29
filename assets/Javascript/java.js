
function add(x, y) {
   return  x + y
}
console.log(add(10,35))

function multiply(a, b) {
    let sum = 0 
    for (let index = 0; index < b; index++) {
        sum += add(a,0)
    }
    return sum
}

function power(x,y) {
    if (y == 0) {
        return 1 
    }
    else {
        let sum =x 
        for (let index = 0; index < y-1; index++) {
            sum =multiply(sum,x)
        }
        return sum
    }
}

function factorial(a) {
    sum =a 
    while (a > 1) {
        a --  
        sum =multiply(sum,a)
    }
    return sum
}