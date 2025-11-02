function z(){

    var b =900;
    function x() {
    var a=8;
    function y(){
        console.log(a,b);
        }

       y();
}
x();
}
z();


// > Uses of Closures:
// — Module Design Pattern
// — Currying
// — Functions like once
// — memoize
// — maintaining state in async world
// — setTimeouts
// — Iterators
// — and many more...