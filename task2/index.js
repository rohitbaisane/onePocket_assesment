const sumOfList = (arr) => {
    let n = arr.length, sum = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(`The total sum is ` + sumOfList([1, 2, 3, 4, 5, 6]));