// https://medium.com/@paulrohan/parenthesis-matching-problem-in-javascript-the-hacking-school-hyd-7d7708278911


//  ATTN : The main concept about this problem is that in a stack, LIFO .

let string = `({})({}){}[]`;

var isValid = function(s) {
    let stack = [];

    let key = {
        "(": ")",
        "{": "}",
        "[": "]"
    };

    for(var i=0; i<s.length; i++){
        if(s[i] === '(' || s[i] === "[" || s[i] === "{"){ //    <----- push all openers into stack
            stack.push(s[i])
        }else{
            console.log(stack);
            let last = stack.pop();     //  <-----  if it's a closer, pop the last opener pushed to stack....
            if(s[i] !== key[last]){     //  <-----  ...and see if the current close matches with the popped opener according to the key.
                console.log('FAILED');
                return false
            }
        }
    }

    if(stack.length !==0){              //  <-----  last case/ edge case, if everything matched but the last has no partner ....
        console.log('failed at the end');
        return false
    }

    console.log('PASSED');
    return true                        //   <-----  return true if all pairs were found.

};

isValid(string);