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

let operator = localStorage.getItem("operator");
let numType = localStorage.getItem("numType");
let difficulty = localStorage.getItem("difficulty");

whl1 = Math.floor(Math.random()*9)+1
whl2 = Math.floor(Math.random()*9)+1
whl3 = Math.floor(Math.random()*90)+10
whl4 = Math.floor(Math.random()*90)+10
whl5 = Math.floor(Math.random()*900)+100
whl6 = Math.floor(Math.random()*900)+100

dec1 = Math.floor(Math.random() * (100 - 10) + 10) / 10;
dec2 = Math.floor(Math.random() * (100 - 10) + 10) / 10;
dec3 = Math.floor(Math.random() * (1000 - 10) + 10) / 100;
dec4 = Math.floor(Math.random() * (1000 - 10) + 10) / 100;
dec5 = Math.floor(Math.random() * (10000 - 10) + 10) / 1000;
dec6 = Math.floor(Math.random() * (10000 - 10) + 10) / 1000;

frac1 = fraction((Math.floor(Math.random()*9)+1),((Math.floor(Math.random()*9)+1)));
frac2 = fraction((Math.floor(Math.random()*9)+1),((Math.floor(Math.random()*9)+1)));
frac3 = fraction((Math.floor(Math.random()*90)+10),((Math.floor(Math.random()*89)+11)));
frac4 = fraction((Math.floor(Math.random()*90)+10),((Math.floor(Math.random()*89)+11)));
frac5 = fraction((Math.floor(Math.random()*900)+100),((Math.floor(Math.random()*899)+101)));
frac6 = fraction((Math.floor(Math.random()*900)+100),((Math.floor(Math.random()*899)+101)));

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