//Problem 1: Let’s play a mind game

function mindGame(number){
    if (typeof number !== 'number') {
      return "please input a number";
    }
    
    const number1 = number*3;
    const number2 = number1+10;
    const number3 = number2/2;
    const number4 = number3-5; 
    return number4;
  }
  const total = mindGame(50);
  //console.log(total);


//Problem 2: Finding even or odd


  function evenOdd(str){
    if (typeof str !== 'string') {
      return "please input a string";
    }
    
    if((str.length) % 2 === 0){
      return 'even';
    } else {
      return 'odd';
    }
  }
  
  const check = evenOdd('phero');
  // console.log(check);


//Problem 3: Is Less or Greater than seven

  function isLGSeven(num){
    if (typeof num !== 'number') {
      return "please input a number";
    }
    
    if(num < 7){
      return num - 7;
    } else {
      return num * 2;
    }
  }
  
  const numbers = isLGSeven(15);
   console.log(numbers);



 //Problem 4: Finding Bad data

 function findingBadData(array){
    let badData = 0;
    for(let i = 0; i < array.length; i++){
      const newData = array[i];
        if(newData < 0){
           badData += 1
        }
    }
    return badData
  }
  const data = findingBadData([-4, -9, -5, -33, -55])
   //console.log(data)


  //Problem 5: Convert your gems into diamond

  function gemsToDiamond(gems1, gems2, gems3){
    if (typeof gems1 !== "number" || typeof gems2 !== "number" || typeof gems3 !== "number") {
      return "please input a number.";
    }
    let friend1 = gems1 * 21;
    let friend2 = gems2 * 32;
    let friend3 = gems3 * 43;
    let total = friend1 + friend2 + friend3;
    
    if(1000 * 2 < total){
      total -= 2000;
    }
    
    return total;
  }
  const totalGems = gemsToDiamond(20, 200, 50);
  //console.log(totalGems);
  