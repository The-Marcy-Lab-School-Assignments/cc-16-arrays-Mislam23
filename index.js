//write your code here

const months = ['Jan', 'February', 'March', 'April', 'May', 'June'];

function replaceWithYerr(array, startIndex, deleteCount) {
    let newArray = [...array]
    // making a copy
    if (startIndex === undefined && deleteCount === undefined) {
        for (let i = 0; i < newArray.length; i++) {
          newArray[i] = "yerr";
        }
    } else if (deleteCount === undefined) {
        for (let j = startIndex; j < newArray.length; j++) {
          newArray[j] = "yerr";
    } 
    } else {
      //  for  (let k = startIndex; k < newArray[deleteCount]; k++) {
        for  (let k = startIndex; k < deleteCount + startIndex; k++) {
          newArray[k] = "yerr"
        } 
    }
    return newArray;
}


// const months = ['Jan', 'February', 'March', 'April', 'May', 'June'];

// function replaceWithYerr(array, startIndex = 0, deleteCount = array.length) {
//     let newArray = [...array]
//     // making a copy
   
//       //  for  (let k = startIndex; k < newArray[deleteCount]; k++)
//         for  (let k = startIndex; k < deleteCount + startIndex; k++) {
//           newArray[k] = "yerr"
//     }
//     return newArray;
// }

console.log(replaceWithYerr(months, 1, 3)) //['Jan', 'yerr', 'yerr, 'yerr', 'May', 'June']