
function leftRotate(arr, n, d) {
    d = d % n;
    let gcd = g_c_d(d, n);

    for (let i = 0; i < gcd; i++) {
        let temp = arr[i];
        let j = i;
        
        while (true) {
            let k = j + d;

            if (k >= n) k = k - n;
            if (k === i) break;

            arr[j] = arr[k];
            j = k;
        }
        arr[j] = temp;
    }

}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let n = arr.length;

leftRotate(arr, n, 3);
printArray(arr, n);

function printArray(arr, size) {
    for (let i = 0; i < size; i++) {
        console.log("Print every item " + arr[i])
    }
}
function g_c_d(d, n) {
    if (n === 0) return d;
    else return g_c_d(n, d % n);
}

