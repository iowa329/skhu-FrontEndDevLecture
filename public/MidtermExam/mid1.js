let arr = [];
let sum = 0;
for(let i=0; i<100; i++) {
    let num = Math.round((Math.random() * 10) * (Math.random() * 10));
    arr[i] = num;
    sum = sum + arr[i];
}
let avg = sum / 100;
avg = avg.toFixed(1);

console.log(avg);