function  addition(num1, num2){
  return(num1 + ' + ' + num2 + ' =');
}
function  subtraction(num1, num2){
  return(num1 + ' - ' + num2 + ' =');
}
function  multiplication(num1, num2){
  return(num1 + ' x ' + num2 + ' =');
}
function  division(num1, num2){
  return(num1 + ' ÷ ' + num2 + ' =');
}
function fraction(num1, num2){
  return(num1 + '/' + num2)
}
function divide(num1, num2){
  return(num1/num2);
}
let operator = localStorage.getItem("operator");
let numType = localStorage.getItem("numType");
let difficulty = localStorage.getItem("difficulty");

let whl1 = Math.floor(Math.random()*9)+1
let whl2 = Math.floor(Math.random()*9)+1
let whl3 = Math.floor(Math.random()*90)+10
let whl4 = Math.floor(Math.random()*90)+10
let whl5 = Math.floor(Math.random()*900)+100
let whl6 = Math.floor(Math.random()*900)+100

let dec1 = Math.floor(Math.random() * (100 - 10) + 10) / 10;
let dec2 = Math.floor(Math.random() * (100 - 10) + 10) / 10;
let dec3 = Math.floor(Math.random() * (1000 - 10) + 10) / 100;
let dec4 = Math.floor(Math.random() * (1000 - 10) + 10) / 100;
let dec5 = Math.floor(Math.random() * (10000 - 10) + 10) / 1000;
let dec6 = Math.floor(Math.random() * (10000 - 10) + 10) / 1000;

let numer1 = Math.floor(Math.random()*9)+1
let numer2 = Math.floor(Math.random()*9)+1
let numer3 = Math.floor(Math.random()*90)+10;
let numer4 = Math.floor(Math.random()*90)+10;
let numer5 = Math.floor(Math.random()*900)+100;
let numer6 = Math.floor(Math.random()*900)+100;

let denom1 = Math.floor(Math.random()*9)+1
let denom2 = Math.floor(Math.random()*9)+1
let denom3 = Math.floor(Math.random()*90)+10;
let denom4 = Math.floor(Math.random()*90)+10;
let denom5 = Math.floor(Math.random()*900)+100;
let denom6 = Math.floor(Math.random()*900)+100;

let frac1 = fraction((numer1),((denom1)));
let frac2 = fraction((numer2),((denom2)));
let frac3 = fraction((numer3),((denom3)));
let frac4 = fraction((numer4),((denom4)));
let frac5 = fraction((numer5),((denom5)));
let frac6 = fraction((numer6),((denom6)));


if(operator==="add"){
  if(numType==="whl"){
    if(difficulty==="easy"){             
      document.getElementById("question").innerHTML = (addition(whl1, whl2));
    }else if(difficulty==="medium"){
      document.getElementById("question").innerHTML = (addition(whl3, whl4));
    }else if(difficulty==="hard"){
      document.getElementById("question").innerHTML = (addition(whl5, whl6));
    }
  }else if(numType==="dec"){
    if(difficulty==="easy"){
      document.getElementById("question").innerHTML = (addition(dec1, dec2));
    }else if(difficulty==="medium"){
      document.getElementById("question").innerHTML = (addition(dec3, dec4));
    }else if(difficulty==="hard"){
      document.getElementById("question").innerHTML = (addition(dec5, dec6));   } 
  }else if(numType==="frac"){
    if(difficulty==="easy"){
      document.getElementById("question").innerHTML = (addition(frac1, frac2));
    }else if(difficulty==="medium"){
      document.getElementById("question").innerHTML = (addition(frac3, frac4));
    }else if(difficulty==="hard"){
      document.getElementById("question").innerHTML = (addition(frac5, frac6));
    }
  }
}else if(operator==="sub"){
  if(numType==="whl"){
    if(difficulty==="easy"){              
      document.getElementById("question").innerHTML = (subtraction(whl1, whl2));
    }else if(difficulty==="medium"){
      document.getElementById("question").innerHTML = (subtraction(whl3, whl4));
    }else if(difficulty==="hard"){
      document.getElementById("question").innerHTML = (subtraction(whl5, whl6));
    }
  }else if(numType==="dec"){
    if(difficulty==="easy"){
      document.getElementById("question").innerHTML = (subtraction(dec1, dec2));
    }else if(difficulty==="medium"){
      document.getElementById("question").innerHTML = (subtraction(dec3, dec4));
    }else if(difficulty==="hard"){
      document.getElementById("question").innerHTML = (subtraction(dec5, dec6));   } 
  }else if(numType==="frac"){
    if(difficulty==="easy"){
      document.getElementById("question").innerHTML = (subtraction(frac1, frac2));
    }else if(difficulty==="medium"){
      document.getElementById("question").innerHTML = (subtraction(frac3, frac4));
    }else if(difficulty==="hard"){
      document.getElementById("question").innerHTML = (subtraction(frac5, frac6));
    }
  }
}else if(operator==="mul"){
  if(numType==="whl"){
    if(difficulty==="easy"){              
      document.getElementById("question").innerHTML = (multiplication(whl1, whl2));
    }else if(difficulty==="medium"){
      document.getElementById("question").innerHTML = (multiplication(whl3, whl4));
    }else if(difficulty==="hard"){
      document.getElementById("question").innerHTML = (multiplication(whl5, whl6));
    }
  }else if(numType==="dec"){
    if(difficulty==="easy"){
      document.getElementById("question").innerHTML = (multiplication(dec1, dec2));
    }else if(difficulty==="medium"){
      document.getElementById("question").innerHTML = (multiplication(dec3, dec4));
    }else if(difficulty==="hard"){
      document.getElementById("question").innerHTML = (multiplication(dec5, dec6));   } 
  }else if(numType==="frac"){
    if(difficulty==="easy"){
      document.getElementById("question").innerHTML = (multiplication(frac1, frac2));
    }else if(difficulty==="medium"){
      document.getElementById("question").innerHTML = (multiplication(frac3, frac4));
    }else if(difficulty==="hard"){
      document.getElementById("question").innerHTML = (multiplication(frac5, frac6));
    }
  }
}else if(operator="div"){
    if(numType==="whl"){
    if(difficulty==="easy"){              
      document.getElementById("question").innerHTML = (division(whl1, whl2));
    }else if(difficulty==="medium"){
      document.getElementById("question").innerHTML = (division(whl3, whl4));
    }else if(difficulty==="hard"){
      document.getElementById("question").innerHTML = (division(whl5, whl5));
    }
  }else if(numType==="dec"){
    if(difficulty==="easy"){
      document.getElementById("question").innerHTML = (division(dec1, dec2));
    }else if(difficulty==="medium"){
      document.getElementById("question").innerHTML = (division(dec3, dec4));
    }else if(difficulty==="hard"){
      document.getElementById("question").innerHTML = (division(dec5, dec6));   } 
  }else if(numType==="frac"){
    if(difficulty==="easy"){
      document.getElementById("question").innerHTML = (division(frac1, frac2));
    }else if(difficulty==="medium"){
      document.getElementById("question").innerHTML = (division(frac3, frac4));
    }else if(difficulty==="hard"){
      document.getElementById("question").innerHTML = (division(frac5, frac6));
    }
  }
}else{
  document.getElementById("question").innerHTML ="Error"
}

localStorage.setItem('adda1', whl1+whl2);
localStorage.setItem('suba1', whl1-whl2);
localStorage.setItem('mula1', whl1*whl2);
localStorage.setItem('diva1', whl1/whl2);
localStorage.setItem('adda2', whl3+whl4);
localStorage.setItem('suba2', whl3-whl4);
localStorage.setItem('mula2', whl3*whl4);
localStorage.setItem('diva2', whl3/whl4);
localStorage.setItem('adda3', whl5+whl6);
localStorage.setItem('suba3', whl5-whl6);
localStorage.setItem('mula3', whl5*whl6);
localStorage.setItem('diva3', whl5/whl6);

localStorage.setItem('adda4', dec1+dec1);
localStorage.setItem('suba4', dec1-dec2);
localStorage.setItem('mula4', dec1*dec2);
localStorage.setItem('diva4', dec1/dec2);
localStorage.setItem('adda5', dec3+dec4);
localStorage.setItem('suba5', dec3-dec4);
localStorage.setItem('mula5', dec3*dec4);
localStorage.setItem('diva5', dec3/dec4);
localStorage.setItem('adda6', dec5+dec6);
localStorage.setItem('suba6', dec5-dec6);
localStorage.setItem('mula6', dec5*dec6);
localStorage.setItem('diva6', dec5/dec5);

localStorage.setItem('adda7', divide(numer1,denom1)+divide(numer2,denom2));
localStorage.setItem('suba7', divide(numer1,denom1)-divide(numer2,denom2));
localStorage.setItem('mula7', divide(numer1,denom1)*divide(numer2,denom2));
localStorage.setItem('diva7', divide(numer1,denom1)/divide(numer2,denom2));
localStorage.setItem('adda8', divide(numer3,denom3)+divide(numer4,denom4));
localStorage.setItem('suba8', divide(numer3,denom3)-divide(numer4,denom4));
localStorage.setItem('mula8', divide(numer3,denom3)-divide(numer4,denom4));
localStorage.setItem('diva8', divide(numer3,denom3)/divide(numer3,denom3));
localStorage.setItem('adda9', divide(numer5,denom5)/divide(numer6,denom6));
localStorage.setItem('suba9', divide(numer5,denom5)/divide(numer6,denom6));
localStorage.setItem('mula9', divide(numer5,denom5)/divide(numer6,denom6));
localStorage.setItem('diva9', divide(numer5,denom5)/divide(numer6,denom6));