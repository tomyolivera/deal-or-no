export const searchInArray = (toSearch, arr) => {
    let i = 0, found = false;

    while(i < arr.length && !found){
        found = toSearch === arr[i]
        i++
    }

    return found;
}

export const getRandom = (max, min=0) => Math.floor(Math.random() * (max - min)) + min;