function actualMath( num0, num1 ){
  console.log( 'in actualMath:', num0, num1 ); // "we are inside the function" then it assigns the two arguments (no variables)
  let answer = num0 * num1; // assigning variable answer to the two arguments times each other
  return answer; //print the answer - return the answer - based on the number selected later in the script
} // end actualMath function

function logger(){
  console.log( 'in logger' ); // nothing to this one - just logging
} // end logger function

function mathExample(){
  console.log( 'in mathExample' );
  let answer = 3 * 9;
  return answer;
} // end mathExample function

function returner(){
  console.log( 'in returner' ); // print in returner
  return true; // returns a boolean value of TRUE when run (after saying 'in returner')
} // done with returner function

logger();
returner();
console.log( 'running returner', returner() ); // this one just prints 'running returner' for our reference, then the ACTUAL function which returns 'in returner' and the value of TRUE in this case - as above
console.log( 'running mathExample', mathExample() ); // returns "running mathExample" printed vollowed by the value of simple math'
console.log( 'running actualMath with 4 & 6', actualMath(4, 6) ); // prints what is in quotes followe by the whoel function, including assigning THESE numbers to num0 and num1
console.log( 'running actualMath with 0.123 & 654', actualMath(0.123, 654) );
console.log( 'running actualMath with 1 & 2', actualMath(1, 2) );
console.log( 'running actualMath with 327 & 81.3', actualMath(327, 81.3) );
//now lets return something more interesting
