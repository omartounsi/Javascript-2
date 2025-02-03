function first(str){
    return str.replace(str[0], str[0].toUpperCase()); //capitalizes the first letter of a word;
}

function cap(str){
    let container = str.split(" "); //turns sentence into array
    for (let i = 0; i < container.length; i++){
        container[i] = first(container[i]); //calling first() on every word of the array
    }str.split()
    return container.join(" "); //joining the array elements with a " "
}
