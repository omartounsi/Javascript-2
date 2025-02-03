function fact(number){
    let count = number; //counter
    let prod = number; //sum of products
    while(count > 1){
        prod *= count - 1;
        count--;
    }
    return prod;
}