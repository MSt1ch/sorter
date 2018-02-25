class Sorter {
  constructor() {
    // your implementation
    this.array = [];
    // this.compareNumber = (a, b) => a - b;
  }

  add(element) {
    // your implementation
   return this.array.push(element);
  }

  at(index) {
    // your implementation
    return this.array[index];
  }

  get length() {
    // your implementation
    return this.array.length;
  }

  toArray() {
    // your implementation
    return this.array
  }

  sort(indices) {
    // your implementation
    var mass_sort = [];
    for(var i=0; i < indices.length; i++){
      mass_sort.push(this.array[indices[i]])
    }

    mass_sort.sort(this.compareNumber);
    indices.sort();
    
    for(var i=0; i< indices.length; i++){
      this.array[indices[i]] = mass_sort[i]
    }

  }

  compareNumber(a, b){
    return a - b;
  }



  setComparator(compareFunction) {
    // your implementation
    this.compareNumber = compareFunction;
  }
}

module.exports = Sorter;