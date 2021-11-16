//write your code here
const months = ['Jan', 'February', 'March', 'April', 'May', 'June'];

function replaceWithYerr(array, startIndex, deleteCount) {
    let newArray = [...array]
    // making a copy
    if (startIndex === undefined && deleteCount === undefined) {
        for (let i = 0; i < array.length; i++) {
          newArray[i] = "yerr";
        }
    } else if (deleteCount === undefined) {
        for (let i = startIndex; startIndex < array.length; startIndex++) {
          newArray[startIndex] = "yerr";
    }     
    return newArray;
}

console.log(replaceWithYerr(months, 1)) //['Jan', 'yerr', 'yerr, 'yerr', 'May', 'June']