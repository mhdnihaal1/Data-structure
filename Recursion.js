//======================flattern a jagged array recursion =============================
function flattenArray(arr) {
    function flattenHelper(input) {
        let result = [];
        for (let i = 0; i < input.length; i++) {
            if (Array.isArray(input[i])) {
                result = result.concat(flattenHelper(input[i]));
            } else {
                result.push(input[i]);
            }
        }
        return result;
    }
    
    return flattenHelper(arr);
}

let jaggedArray = [[1], [2, 3], [4, 5, 6], [7, 8, 9, 10]];

let flattenedArray = flattenArray(jaggedArray);

console.log(flattenedArray);
