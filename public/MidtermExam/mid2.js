let arr = [];
for(let i=0; i<100; i++) {
    let num = Math.round((Math.random() * 10) * (Math.random() * 10));
    arr[i] = num;
}
arr.sort((p1,p2) => p2 - p1);

console.log(arr);