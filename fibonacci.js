function fibo(n){
    let arr = [0, 1];

    if(n == 0){
        return 0;
    }else if(n == 1){
        return 1;
    }else{
        for(let i = 2; i <= n; i++){
            arr[i] = arr[i-1] + arr[i-2];
        }
    }
    return arr[n];
}

console.log(fibo(8));