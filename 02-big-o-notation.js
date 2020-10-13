//remember: you're most likely not going to be asked a question like this in an interview. they won't ask you to add things and stuff. this is only so that you can understand how big O works better. to actually estimate the big O, use the 4 Rules

/** ···· 1. What is the Big O of the below function? (Hint, you may want to go line by line) ···· **/

//you can get the interpunct ···· with opt + shift + 9 btw lmao
function funChallenge(input) {
  let a = 10; //O(1) some people say assignment counts towards big O; some don't. you won't see this in an interview for this reason. Let's just say it counts here.
  a = 50 + 3; //0(1)

  for (let i = 0; i < input.length; i++) { //O(n) for this for loop
    anotherFunction(); //also O(n). we don't know what this function is, but how many times will this be called? depends on how big the input is, just like with the for loop. So the big O notation for this function will also be O(n)
    let stranger = true; //O(n) for the same reason as above
    a++; //O(n) for the same reason as above!
  }
  return a; //O(1) again, some people say returning counts and some don't. Let's just count it here. You return a just once in the function no matter the size of the input.
}
//my initial answer: O(n) for the for loop, and another for the outside function. So O(n^2)?

/* correct answer after watching the video: O(3 + 4n). And this will even get simplified to O(n)
don't think too hard about big O, but just be able to think through how a function runs.*/
//
//
//

/** ···· 2. What is the Big O of the below function? (Hint, you may want to go line by line) ···· **/
function anotherFunChallenge(input) {
  let a = 5; //O(1)
  let b = 10; //O(1)
  let c = 50; //O(1)
  for (let i = 0; i < input; i++) {
    let x = i + 1; //O(n)
    let y = i + 2; //O(n)
    let z = i + 3; //O(n)

  }
  for (let j = 0; j < input; j++) {
    let p = j * 2; //O(n)
    let q = j * 2; //O(n)
  }
  let whoAmI = "I don't know"; //O(1)
}

//my original answer was O(4 + 7n) because I counted O(n) on the for loops themselves, but you're supposed to only count them for the operations.

/*correct answer:
  4 + 5n
  O(4 + 5n)
*/

