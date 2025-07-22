const maths = require('./maths');

add=maths.add(5, 3);      
console.log("Addition:", +add);

sub=maths.sub(5, 3);
console.log("Substraction:",+sub);

mul=maths.mul(5, 3);   
console.log("Multiplication:",+mul);

div=maths.div(10, 2);
console.log("Division:",+div);   

squ=maths.square(4); 
console.log("Square:",+squ);  

cube=maths.cube(2);   
console.log("Cube:",+cube);  

a = maths.oddeven(5.5);
if(a==0) 
    console.log("Even");
else
    console.log("Odd");

console.log(maths.numcheck(34));

