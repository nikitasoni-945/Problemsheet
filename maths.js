var maths = {
    add: function(a, b) {
        return(a+b);
    },
    sub: function(a, b) {
        return(a - b);
    },
    mul: function(a, b) {
        return(a * b);
    },
    div: function(a, b) {
        if(b !== 0){
            return(a / b);
        } else {
            console.log("Division by zero is not allowed");
        }
    },
    square: function(a) {
        return(a * a);
    },
    cube: function(a) {
        return(a * a * a);
    },
    
    oddeven: function(a){
        if(a%2==0)
            return 0;
        else
            return 1;
    },
    numcheck: function(a){
        if(a==0)
            return "Zero";
        else if(a<0)
            return "Negative";
        else
            return "Positive";

    }
};

module.exports = maths;
