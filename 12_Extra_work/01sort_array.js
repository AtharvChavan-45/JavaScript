const arr = [1,2,3,4,5,6];

function maxProduct(arr){
    const sortedArr = arr.sort((a,b)=>b-a);
    return sortedArr[0]*sortedArr[1];
}
const answer =  maxProduct(arr);
console.log(answer);