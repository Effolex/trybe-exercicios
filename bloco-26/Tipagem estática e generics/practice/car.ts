interface Array<T> {
  filterTS(predicate: (value: T, index: number, array: T[] ) => unknown): Array<T>;
  mapTS<U>(callbackfn: (value: U, index: number, array: U[] ) => U ): U[];
  someTS<T>(callbackfn: (value: T, index: number, array: T[]) => boolean): boolean;
  everyTS<T>(callbackfn: (value: T, index: number, array: T[]) => boolean): boolean;
};
// recreated the Array.filter
Array.prototype.filterTS = function <T>(predicate: (value: T, index: number, array: T[] ) => unknown): T[] {
  const newArray: T[] = [];
  for (let index: number = 0; index < this.length; index += 1) {
    const value: T = this[index];
    if(predicate(value, index, this)) {
      newArray.push(value)
    }
  } 
  return newArray;
};

Array.prototype.mapTS = function <U>(callbackfn: (element: U, index: number, array: U[] ) => U): U[] {
  const newArray: U[] = [];
  for (let index: number = 0; index < this.length; index += 1) {
    const value: U = this[index];
    newArray.push(callbackfn(value, index, this));
  } 
  return newArray;
}

Array.prototype.someTS = function <T>(callbackfn: (value: T, index: number, array: T[]) => boolean): boolean {
  for (let index: number = 0; index < this.length; index += 1) {
    const value: T = this[index];
    if(callbackfn(value, index, this)) {
      return true;
    }
  }
  return false;
}

Array.prototype.everyTS = function <T>(callbackfn: (value: T, index: number, array: T[]) => boolean): boolean {
  for (let index: number = 0; index < this.length; index += 1) {
    const value: T = this[index];
    if(!callbackfn(value, index, this)) {
      return false;
    }
  }
  return true;
}



const arr: number[] = [1,2,3,4,5,6];
arr.filter((n: number) => n%2)
arr.map
console.log(arr.mapTS((element) => element+'a'));
console.log(arr.filterTS((n: number) => n%2));
console.log(arr.someTS((n) => n===3));

