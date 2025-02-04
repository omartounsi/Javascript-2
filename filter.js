function pos(arr){ //filters out the negative numbers
    let arr2 = [];

    for (let i = 0; i < arr.length; i++){
        if(arr[i] >= 0) {arr2.push(arr[i])};
    }
    return arr2;
}

console.log(pos([-3,-31,3,-15,5]));