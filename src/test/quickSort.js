// 快速排序
function quickSort(array) {
  if(array.length <= 1) {
    return array;
  }
  let mid = Math.floor(array.length/2);
  // let midCount = array[mid]; 这样会出现无限递归，因为如果拆分出的数组都是大于midCount，那么将一直是这个数组
  let midCount = array.splice(mid, 1)[0];
  let left = [];
  let right = [];
  for(let i = 0; i<array.length; i++) {
    if(array[i] < midCount) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return quickSort(left).concat([midCount],quickSort(right));
}

let testArray = [2, 9, 6, 7, 4, 3, 1, 7];

console.log(quickSort(testArray));