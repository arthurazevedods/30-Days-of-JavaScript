/**
 * @param {string} val
 * @return {Object}
 */
let expect = function(val) {

    return {
        toBe: (value) => {
            if (val !== value){
                throw new Error("Not Equal");
            } 
            else{
                return true;
            } 
        },
        notToBe: (value) => {
            if (val === value){
                throw new Error("Equal");
            } 
            else{
                return true;
            } 
        }
    }
};