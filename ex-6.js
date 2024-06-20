let height = undefined;
let result;

function checkDefined (parameter) {
    
    return parameter ?? `Height is not defined`
    
}

result = checkDefined(height)
console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
