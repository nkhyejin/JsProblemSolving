class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    // 배열의 맨 마지막에 새로운 값을 추가한다.
    this.values.push(element);

    //Bubble up
    let cur_idx = this.values.length - 1;

    while (true) {
      let par_idx = Math.floor((cur_idx - 1) / 2);

      //종료조건 (추가하려는 값이 부모보다 작거나, 부모의 인덱스가 0보다 작으면)
      if (par_idx < 0 || this.values[cur_idx] < this.values[par_idx]) break;

      //swap
      [this.values[cur_idx], this.values[par_idx]] = [
        this.values[par_idx],
        this.values[cur_idx],
      ];

      cur_idx = par_idx;
    }
    return this.values;
  }
}

let max_heap = new MaxBinaryHeap();

max_heap.insert(1);
max_heap.insert(2);
max_heap.insert(3);
max_heap.insert(4);
max_heap.insert(200);
console.log(max_heap.values);
