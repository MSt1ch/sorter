class Sorter {
  constructor() {
    // your implementation
    this.array = new Array();
    this.compareNumber = (a, b) => a - b;
  }

  add(element) {
    // your implementation
   return this.array.push(element);
  }

  at(index) {
    // your implementation
    return this.array[index]
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
    indices.sort(this.compareNumber);
    
    for(var i=0; i< indices.length; i++){
      this.array[indices[i]] = mass_sort[i]
    }
  }

  setComparator(compareFunction) {
    // your implementation
    this.compareNumber = compareFunction;
  }
}

module.exports = Sorter;