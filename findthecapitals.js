// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript

var capitals = function (word) {
    arr = []
    for(i=0; i<=word.length-1; i++){
        if(word[i] == word[i].toUpperCase()){
            arr.push(i)
        }
    }
    console.log(`The indices where the upper case letters in ${word} are found are: [${arr}]`)
};
capitals('CodEWaRs')
console.log('=====')
capitals('FiNd tHe cApiTals')