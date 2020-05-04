function sum(arr) {
    let sumNum = 0;
    for(let i=0; i<arr.length; i++) {
        sumNum = sumNum + arr[i];
    }

    return sumNum
}

function test_sum(sum) {
    let arr = [];
    for(let i=0; i<5; i++){
        let num = Math.round((Math.random() * 10));
        arr[i] = num;
    }
    console.log(arr);

    console.log(sum(arr));
}

test_sum(sum);