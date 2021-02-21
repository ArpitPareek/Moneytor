//to remove duplicate element from array

function getReal(arr) {
    let orignalArr = [];

    for (let i of arr) {
        if (orignalArr.indexOf(i) === -1) {
            orignalArr.push(i);
        }
    }
    console.log(orignalArr);
}

//example array
const array = [1, 2, 3, 4, 4, 2, 1, 5, 1, 4, 5];

getReal(array);