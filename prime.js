function isPrime(int){
    if ((int <= 1) || (int == 4)){ //excluding numbers that cause trouble
        return false;
    }else if (int == 2) {
        return true;
    }else{
        for (let i = 3; i < int; i++){ //if there's a remainder then its not prime 
            if (int % i == 0){
                return false;
            }
        }
    }
    return true;
}