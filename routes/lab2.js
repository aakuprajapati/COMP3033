const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    var operation = req.query.method;
    var i = req.query.x;
    var j = req.query.y;
    var x = parseInt(i,10);
    var y = parseInt(j,10);
    var result;

    if(operation == 'add'){
        result = x+y;
    }
    else if(operation == 'multiply'){
        result = x*y;
    }
    else if(operation == 'subtract'){
        if(x>=y)
            result = x-y;
        if(x<y)
            result = y-x;
    }
    else if(operation == 'divide'){
        if(y==0)
            result = "Can not divide by zero";
        else
            result = x/y;
    }
    else {
        console.error("Please type method name again");
    }
    res.json({
        "x" : x, 
        "y" : y,
        "operation" : operation,
        "result" : result
    });
});

module.exports = router;
