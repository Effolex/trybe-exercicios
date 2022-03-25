;
// recreated the Array.filter
Array.prototype.filterTS = function (predicate) {
    var newArray = [];
    for (var index = 0; index < this.length; index += 1) {
        var value = this[index];
        if (predicate(value, index, this)) {
            newArray.push(value);
        }
    }
    return newArray;
};
Array.prototype.mapTS = function (callbackfn) {
    var newArray = [];
    for (var index = 0; index < this.length; index += 1) {
        var value = this[index];
        newArray.push(callbackfn(value, index, this));
    }
    return newArray;
};
Array.prototype.someTS = function (callbackfn) {
    for (var index = 0; index < this.length; index += 1) {
        var value = this[index];
        if (callbackfn(value, index, this)) {
            return true;
        }
    }
    return false;
};
Array.prototype.everyTS = function (callbackfn) {
    for (var index = 0; index < this.length; index += 1) {
        var value = this[index];
        if (!callbackfn(value, index, this)) {
            return false;
        }
    }
    return true;
};
var arr = [1, 2, 3, 4, 5, 6];
arr.filter(function (n) { return n % 2; });
arr.map;
console.log(arr.mapTS(function (element) { return element + 'a'; }));
console.log(arr.filterTS(function (n) { return n % 2; }));
console.log(arr.someTS(function (n) { return n === 3; }));
