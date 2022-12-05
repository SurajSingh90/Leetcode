var backspaceCompare = function(s, t) {
    let s1 = []
    let s2 = []
    for(let S of s){
        (S === "#") ? s1.pop() : s1.push(S)
       
        
    }
    for(let T of t){
        (T === "#") ? s2.pop() : s2.push(T)
       
    }    
    return s1.join('') === s2.join('')
    return s2
};
console.log(backspaceCompare("ab#c","ad#c"))