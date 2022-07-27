function add(num1, num2){
    return(num1 + num2);
}

if(operator==="add"){
    if(numType==="whl"){
      if(difficulty==="easy"){             
        document.getElementById("answer").innerHTML = (add(whl1, whl2));
      }else if(difficulty==="medium"){
        document.getElementById("answer").innerHTML = (add(whl3, whl4));
      }else if(difficulty==="hard"){
        document.getElementById("answer").innerHTML = (add(whl5, whl6));
      }
    }else if(numType==="dec"){
      if(difficulty==="easy"){
        document.getElementById("answer").innerHTML = (add(dec1, dec2));
      }else if(difficulty==="medium"){
        document.getElementById("answer").innerHTML = (add(dec3, dec4));
      }else if(difficulty==="hard"){
        document.getElementById("answer").innerHTML = (add(dec5, dec6));   } 
    }else if(numType==="frac"){
      if(difficulty==="easy"){
        document.getElementById("answer").innerHTML = (add(frac1, frac2));
      }else if(difficulty==="medium"){
        document.getElementById("answer").innerHTML = (add(frac3, frac4));
      }else if(difficulty==="hard"){
        document.getElementById("answer").innerHTML = (add(frac5, frac6));
      }
    }
  }else if(operator==="sub"){
    if(numType==="whl"){
      if(difficulty==="easy"){              
        document.getElementById("answer").innerHTML = (subtraction(whl1, whl2));
      }else if(difficulty==="medium"){
        document.getElementById("answer").innerHTML = (subtraction(whl3, whl4));
      }else if(difficulty==="hard"){
        document.getElementById("answer").innerHTML = (subtraction(whl5, whl6));
      }
    }else if(numType==="dec"){
      if(difficulty==="easy"){
        document.getElementById("answer").innerHTML = (subtraction(dec1, dec2));
      }else if(difficulty==="medium"){
        document.getElementById("answer").innerHTML = (subtraction(dec3, dec4));
      }else if(difficulty==="hard"){
        document.getElementById("answer").innerHTML = (subtraction(dec5, dec6));   } 
    }else if(numType==="frac"){
      if(difficulty==="easy"){
        document.getElementById("answer").innerHTML = (subtraction(frac1, frac2));
      }else if(difficulty==="medium"){
        document.getElementById("answer").innerHTML = (subtraction(frac3, frac4));
      }else if(difficulty==="hard"){
        document.getElementById("answer").innerHTML = (subtraction(frac5, frac6));
      }
    }
  }else if(operator==="mul"){
    if(numType==="whl"){
      if(difficulty==="easy"){              
        document.getElementById("answer").innerHTML = (multiplication(whl1, whl2));
      }else if(difficulty==="medium"){
        document.getElementById("answer").innerHTML = (multiplication(whl3, whl4));
      }else if(difficulty==="hard"){
        document.getElementById("answer").innerHTML = (multiplication(whl5, whl6));
      }
    }else if(numType==="dec"){
      if(difficulty==="easy"){
        document.getElementById("answer").innerHTML = (multiplication(dec1, dec2));
      }else if(difficulty==="medium"){
        document.getElementById("answer").innerHTML = (multiplication(dec3, dec4));
      }else if(difficulty==="hard"){
        document.getElementById("answer").innerHTML = (multiplication(dec5, dec6));   } 
    }else if(numType==="frac"){
      if(difficulty==="easy"){
        document.getElementById("answer").innerHTML = (multiplication(frac1, frac2));
      }else if(difficulty==="medium"){
        document.getElementById("answer").innerHTML = (multiplication(frac3, frac4));
      }else if(difficulty==="hard"){
        document.getElementById("answer").innerHTML = (multiplication(frac5, frac6));
      }
    }
  }else if(operator="div"){
      if(numType==="whl"){
      if(difficulty==="easy"){              
        document.getElementById("answer").innerHTML = (division(whl1, whl2));
      }else if(difficulty==="medium"){
        document.getElementById("answer").innerHTML = (division(whl3, whl4));
      }else if(difficulty==="hard"){
        document.getElementById("answer").innerHTML = (division(whl5, whl5));
      }
    }else if(numType==="dec"){
      if(difficulty==="easy"){
        document.getElementById("answer").innerHTML = (division(dec1, dec2));
      }else if(difficulty==="medium"){
        document.getElementById("answer").innerHTML = (division(dec3, dec4));
      }else if(difficulty==="hard"){
        document.getElementById("answer").innerHTML = (division(dec5, dec6));   } 
    }else if(numType==="frac"){
      if(difficulty==="easy"){
        document.getElementById("answer").innerHTML = (division(frac1, frac2));
      }else if(difficulty==="medium"){
        document.getElementById("answer").innerHTML = (division(frac3, frac4));
      }else if(difficulty==="hard"){
        document.getElementById("answer").innerHTML = (division(frac5, frac6));
      }
    }
  }else{
    document.getElementById("question").innerHTML ="Error"
  }