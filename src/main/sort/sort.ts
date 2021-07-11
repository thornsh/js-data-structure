class ArrayList {
  array: any[];
  constructor() {
    this.array = [];
  }
  insert(...item) {
    this.array.push(...item);
  }
  toString() {
    return this.array.join();
  }
  swap(value1, value2) {
    let aux = this.array[value1];
    this.array[value1] = this.array[value2];
    this.array[value2] = aux;
  }
  // 冒泡排序
  bubbleSort() {
    let length = this.array.length;
    for(let i = 0; i<length; i++) {
      for(let j = 0; j<length - 1 - i; j++) {
        if(this.array[j] > this.array[j+1]) {
          this.swap(j, j+1);
        }
      }
    }
  }
  // 选择排序
  selectionSort() {
    let length = this.array.length;
    let currentMinIndex;
    for(let i = 0;i<length - 1;i++) {
      currentMinIndex = i;
      for(let j = i; j<length;j++) {
        if(this.array[j] < this.array[i]) {
          currentMinIndex = j;
        }
      }
      if(i !== currentMinIndex) {
        this.swap(i, currentMinIndex);
      }
    }
  }
}

let arrayList = new ArrayList();
arrayList.insert(5,4,3,2,1);
// arrayList.bubbleSort()
arrayList.selectionSort()
console.log(arrayList.toString())