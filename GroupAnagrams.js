/**TC: O(nklogk)
SC: O(n)
**/

var groupAnagrams = function (strs) {
    let obj = {}
    for(let str of strs){
        let letter = str.split("").sort().join("")
        // return letter
        obj[letter] ? obj[letter].push(str) : (obj[letter] = [str]);
        // console.log(obj)
    } 
    return Object.values(obj)
    
};
// groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
let ans = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
console.log(ans);
