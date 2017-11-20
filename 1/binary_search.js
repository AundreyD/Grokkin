function binarySearch(arr, item){
    let low = 0;
    let high = arr.length - 1

    while(low <= high){
        mid = low + high;
        guess = arr[mid]
        if(guess == item){
            return mid
        }
        if(guess > item){
            high = mid - 1;
        }else{
            low = mid + 1;
        }
    }
    return 'Nope'
}

const list = [1,2,4,6,7,8,9,10]
console.log(binarySearch(list, 6))
console.log(binarySearch(list,24))