function Test() {
    this.name = 'test';
}

Test.prototype.getName = function() {
    return this.name;
};

const test = new Test();
console.log(test.getName()); // test