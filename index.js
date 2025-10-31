const c=100;

function x(){
    const c=30;
    console.log(c);
}
x();
console.log(c);

//even in the function scope ,the shadowing behaves in a similar way.


//given  code below is example of illegal shadowing
let a=20;
{
    var a=20;
}

//but below one is correct

var a=20;
{
    let a=20;
}

//given belwo is not ileegal shadowing 
let a=20;
function x (){
    var a=20;
}
