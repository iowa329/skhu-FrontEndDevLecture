let arr = [];

for(let i=0; i<100; i++) {
    let num = Math.round((Math.random() * 10) * (Math.random() * 10));
    arr[i] = num;
}

arr = arr.filter((e) => e % 2 == 0);

function callback(a, b) { 
    return a + b; 
}

let evenSum = arr.reduce(callback);

console.log(evenSum);