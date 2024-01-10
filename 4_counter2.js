let createCounter = function(init) {
    let counter = init

    return {
        increment:function(){
            return counter += 1;
        },

        decrement:function(){
            return counter -= 1;
        },

        reset:function(){
            return counter = init
        }
    }

};

/*
let createCounter = function(init) {
    let counter = init
    function increment(){
        return counter += 1;
    }
    function decrement(){
        return counter -= 1;
    }
    function reset(){
        return counter = init;
    }
    return {
        increment: increment,
        decrement: decrement,
        reset: reset
    }
};

*/