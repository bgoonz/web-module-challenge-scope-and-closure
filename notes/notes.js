
function counter( initValue ) {

  let currentValue = initValue;

  let increment = function ( step ) {

    currentValue += step;
    console.log( 'currentValue = ' + currentValue );
  };

  return increment;
}

// let  incrementCounter = counter(0);

// incrementCounter(1);
// incrementCounter(2);
// incrementCounter(3);
counter( 0 );
console.log( 'counter( 0 ): ', counter( 0 ) );


//------------------------------------------------------------------






function counter ( initValue ) {

  let  currentValue = initValue;

  let  increment = function ( step ) {

    currentValue += step;
    console.log( 'currentValue = ' + currentValue );
  };

  let  decrement = function ( step ) {

    currentValue -= step;
    console.log( 'currentValue = ' + currentValue );
  }

  return {
    increment: increment,
    decrement: decrement
  };
}
