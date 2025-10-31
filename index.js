var a=100;

{
    var a=10;
    let b=20;
    const c=30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);

//avar a=10 changed value of var a=100, value got changed  both in block scope and global scope 
// and now both refers to same value .