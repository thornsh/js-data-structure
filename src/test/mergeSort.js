function mergeSort(array) {
  if(array.length <= 1) {
    return array;
  }
  let mid = Math.floor(array.length/2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  let mergeLeftArray = mergeSort(left);
  let mergeRightArray = mergeSort(right);

  return merge(mergeLeftArray, mergeRightArray);
}

function merge(leftArray, rightArray) {
  let result = [];

  while(leftArray.length && rightArray.length) {
    if (leftArray[0] < rightArray[0]) {
      result.push(leftArray.shift());
    } else {
      result.push(rightArray.shift());
    }
  }

  while(leftArray.length) {
    result.push(leftArray.shift());
  }

  while(rightArray.length) {
    result.push(rightArray.shift());
  }

  return result;
}


let arr = [2, 9, 6, 7, 4, 3, 1, 7, 0, -1, -2]
console.log(mergeSort(arr))
