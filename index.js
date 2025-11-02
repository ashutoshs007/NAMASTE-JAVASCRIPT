function x() {
    var a=8;
    function y(){
        console.log(a);
        }
        return y;
}
var z= x();
console.log(z);

//....thousand lines of code

z();  //prints 8 (even if all execution context vanished after writing 1000 liens of code ,it remebers the root where it came from)  (this is called closures)

