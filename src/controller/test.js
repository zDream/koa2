function* foo() {
    var x = yield 3;
    var y = x.toUpperCase();
    yield y;
}

var it = foo();

let a= it.next(); // { value:3, done:false }
console.log(a);
try {
    it.next();
} catch (err) {
    console.log(err);
}