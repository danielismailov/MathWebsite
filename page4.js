function  addition(num1, num2){
    return(num1 + ' + ' + num2 + ' =');
  }
  function  subtraction(num1, num2){
    return(num1 + ' - ' + num2 + ' =');
  }
  function  multiplication(num1, num2){
    return(num1 + ' × ' + num2 + ' =');
  }
  function  division(num1, num2){
    return(num1 + ' ÷ ' + num2 + ' =');
  }
  function fraction(num1, num2){
    return(num1 + '/' + num2)
  }
  
  // var operation = Math.floor(Math.random()*4);
  // var numType = Math.floor(Math.random()*3);
  // var difficulty = Math.floor(Math.random()*3);
  
  dec1 = Math.floor(Math.random() * (100 - 10) + 10) / 10;
  dec2 = Math.floor(Math.random() * (100 - 10) + 10) / 10;
  dec3 = Math.floor(Math.random() * (1000 - 10) + 10) / 100;
  dec4 = Math.floor(Math.random() * (1000 - 10) + 10) / 100;
  dec5 = Math.floor(Math.random() * (10000 - 10) + 10) / 1000;
  dec6 = Math.floor(Math.random() * (10000 - 10) + 10) / 1000;
  
  frac1 = fraction((Math.floor(Math.random()*10)),((Math.floor(Math.random()*9)+1)));
  frac2 = fraction((Math.floor(Math.random()*10)),((Math.floor(Math.random()*9)+1)));
  frac3 = fraction((Math.floor(Math.random()*100)),((Math.floor(Math.random()*99)+1)));
  frac4 = fraction((Math.floor(Math.random()*100)),((Math.floor(Math.random()*99)+1)));
  frac5 = fraction((Math.floor(Math.random()*1000)),((Math.floor(Math.random()*999)+1)));
  frac6 = fraction((Math.floor(Math.random()*1000)),((Math.floor(Math.random()*999)+1)));
  
  if(operation===add){
    if(numType===whl){
      if(difficulty===easy){              
        document.getElementById("question").innerHTML = (addition(Math.floor(Math.random()*10),Math.floor(Math.random()*10)));
      }else if(difficulty===medium){
        document.getElementById("question").innerHTML = (addition(Math.floor(Math.random()*100),Math.floor(Math.random()*100)));
      }else if(difficulty===hard){
        document.getElementById("question").innerHTML = (addition(Math.floor(Math.random()*1000),Math.floor(Math.random()*1000)));
      }
    }else if(numType===dec){
      if(difficulty===easy){
        document.getElementById("question").innerHTML = (addition(dec1, dec2));
      }else if(difficulty===meduim){
        document.getElementById("question").innerHTML = (addition(dec3, dec4));
      }else if(difficulty===hard){
        document.getElementById("question").innerHTML = (addition(dec5, dec6));   } 
    }else if(numType===frac){
      if(difficulty===easy){
        document.getElementById("question").innerHTML = (addition(frac1, frac2));
      }else if(difficulty===medium){
        document.getElementById("question").innerHTML = (addition(frac3, frac4));
      }else if(difficulty===hard){
        document.getElementById("question").innerHTML = (addition(frac5, frac6));
      }
    }
  }else if(operation===sub){
    if(numType===whl){
      if(difficulty===easy){              
        document.getElementById("question").innerHTML = (subtraction(Math.floor(Math.random()*10),Math.floor(Math.random()*10)));
      }else if(difficulty===medium){
        document.getElementById("question").innerHTML = (subtraction(Math.floor(Math.random()*100),Math.floor(Math.random()*100)));
      }else if(difficulty===hard){
        document.getElementById("question").innerHTML = (subtraction(Math.floor(Math.random()*1000),Math.floor(Math.random()*1000)));
      }
    }else if(numType===dec){
      if(difficulty===easy){
        document.getElementById("question").innerHTML = (subtraction(dec1, dec2));
      }else if(difficulty===medium){
        document.getElementById("question").innerHTML = (subtraction(dec3, dec4));
      }else if(difficulty===hard){
        document.getElementById("question").innerHTML = (subtraction(dec5, dec6));   } 
    }else if(numType===frac){
      if(difficulty===easy){
        document.getElementById("question").innerHTML = (subtraction(frac1, frac2));
      }else if(difficulty===medium){
        document.getElementById("question").innerHTML = (subtraction(frac3, frac4));
      }else if(difficulty===hard){
        document.getElementById("question").innerHTML = (subtraction(frac5, frac6));
      }
    }
  }else if(operation===mul){
    if(numType===whl){
      if(difficulty===easy){              
        document.getElementById("question").innerHTML = (multiplication(Math.floor(Math.random()*10),Math.floor(Math.random()*10)));
      }else if(difficulty===medium){
        document.getElementById("question").innerHTML = (multiplication(Math.floor(Math.random()*100),Math.floor(Math.random()*100)));
      }else if(difficulty===hard){
        document.getElementById("question").innerHTML = (multiplication(Math.floor(Math.random()*1000),Math.floor(Math.random()*1000)));
      }
    }else if(numType===dec){
      if(difficulty===easy){
        document.getElementById("question").innerHTML = (multiplication(dec1, dec2));
      }else if(difficulty===medium){
        document.getElementById("question").innerHTML = (multiplication(dec3, dec4));
      }else if(difficulty===hard){
        document.getElementById("question").innerHTML = (multiplication(dec5, dec6));   } 
    }else if(numType===frac){
      if(difficulty===easy){
        document.getElementById("question").innerHTML = (multiplication(frac1, frac2));
      }else if(difficulty===medium){
        document.getElementById("question").innerHTML = (multiplication(frac3, frac4));
      }else if(difficulty===hard){
        document.getElementById("question").innerHTML = (multiplication(frac5, frac6));
      }
    }
  }else{
      if(numType===whl){
      if(difficulty===easy){              
        document.getElementById("question").innerHTML = (division(Math.floor(Math.random()*10),Math.floor(Math.random()*10)));
      }else if(difficulty===medium){
        document.getElementById("question").innerHTML = (division(Math.floor(Math.random()*100),Math.floor(Math.random()*100)));
      }else if(difficulty===hard){
        document.getElementById("question").innerHTML = (division(Math.floor(Math.random()*1000),Math.floor(Math.random()*1000)));
      }
    }else if(numType===dec){
      if(difficulty===easy){
        document.getElementById("question").innerHTML = (division(dec1, dec2));
      }else if(difficulty===medium){
        document.getElementById("question").innerHTML = (division(dec3, dec4));
      }else if(difficulty===hard){
        document.getElementById("question").innerHTML = (division(dec5, dec6));   } 
    }else if(numType===frac){
      if(difficulty===easy){
        document.getElementById("question").innerHTML = (division(frac1, frac2));
      }else if(difficulty===medium){
        document.getElementById("question").innerHTML = (division(frac3, frac4));
      }else if(difficulty===hard){
        document.getElementById("question").innerHTML = (division(frac5, frac6));
      }
    }
  }
  
  