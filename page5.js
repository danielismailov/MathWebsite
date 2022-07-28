let operator = localStorage.getItem("operator");
let numType = localStorage.getItem("numType");
let difficulty = localStorage.getItem("difficulty");

if(operator==="add"){
    if(numType==="whl"){
      if(difficulty==="easy"){             
        document.getElementById("answer").innerHTML = localStorage.getItem('adda1');
      }else if(difficulty==="medium"){
        document.getElementById("answer").innerHTML = localStorage.getItem('adda2');
      }else if(difficulty==="hard"){
        document.getElementById("answer").innerHTML = localStorage.getItem('adda3');
      }
    }else if(numType==="dec"){
      if(difficulty==="easy"){
        document.getElementById("answer").innerHTML = localStorage.getItem('adda4');
      }else if(difficulty==="medium"){
        document.getElementById("answer").innerHTML = localStorage.getItem('adda5');
      }else if(difficulty==="hard"){
        document.getElementById("answer").innerHTML = localStorage.getItem('adda6'); 
    } 
    }else if(numType==="frac"){
      if(difficulty==="easy"){
        document.getElementById("answer").innerHTML = localStorage.getItem('adda7');
      }else if(difficulty==="medium"){
        document.getElementById("answer").innerHTML = localStorage.getItem('adda8');
      }else if(difficulty==="hard"){
        document.getElementById("answer").innerHTML = localStorage.getItem('adda9');
      }
    }
  }else if(operator==="sub"){
    if(numType==="whl"){
      if(difficulty==="easy"){              
        document.getElementById("answer").innerHTML = localStorage.getItem('suba1');
      }else if(difficulty==="medium"){
        document.getElementById("answer").innerHTML = localStorage.getItem('suba2');
      }else if(difficulty==="hard"){
        document.getElementById("answer").innerHTML = localStorage.getItem('suba3');
      }
    }else if(numType==="dec"){
      if(difficulty==="easy"){
        document.getElementById("answer").innerHTML = localStorage.getItem('suba4');
      }else if(difficulty==="medium"){
        document.getElementById("answer").innerHTML = localStorage.getItem('suba5');
      }else if(difficulty==="hard"){
        document.getElementById("answer").innerHTML = localStorage.getItem('suba6');
    } 
    }else if(numType==="frac"){
      if(difficulty==="easy"){
        document.getElementById("answer").innerHTML = localStorage.getItem('suba7');
      }else if(difficulty==="medium"){
        document.getElementById("answer").innerHTML = localStorage.getItem('suba8');
      }else if(difficulty==="hard"){
        document.getElementById("answer").innerHTML = localStorage.getItem('suba9');
      }
    }
  }else if(operator==="mul"){
    if(numType==="whl"){
      if(difficulty==="easy"){              
        document.getElementById("answer").innerHTML = localStorage.getItem('mula1');
      }else if(difficulty==="medium"){
        document.getElementById("answer").innerHTML = localStorage.getItem('mula2');
      }else if(difficulty==="hard"){
        document.getElementById("answer").innerHTML = localStorage.getItem('mula3');
      }
    }else if(numType==="dec"){
      if(difficulty==="easy"){
        document.getElementById("answer").innerHTML = localStorage.getItem('mula4');
      }else if(difficulty==="medium"){
        document.getElementById("answer").innerHTML = localStorage.getItem('mula5');
      }else if(difficulty==="hard"){
        document.getElementById("answer").innerHTML = localStorage.getItem('mula6');   
    } 
    }else if(numType==="frac"){
      if(difficulty==="easy"){
        document.getElementById("answer").innerHTML = localStorage.getItem('mula7');
      }else if(difficulty==="medium"){
        document.getElementById("answer").innerHTML = localStorage.getItem('mula8');
      }else if(difficulty==="hard"){
        document.getElementById("answer").innerHTML = localStorage.getItem('mula9');
      }
    }
  }else if(operator="div"){
      if(numType==="whl"){
      if(difficulty==="easy"){              
        document.getElementById("answer").innerHTML = localStorage.getItem('diva1');
      }else if(difficulty==="medium"){
        document.getElementById("answer").innerHTML = localStorage.getItem('diva2');
      }else if(difficulty==="hard"){
        document.getElementById("answer").innerHTML = localStorage.getItem('diva3');
      }
    }else if(numType==="dec"){
      if(difficulty==="easy"){
        document.getElementById("answer").innerHTML = localStorage.getItem('diva4');
      }else if(difficulty==="medium"){
        document.getElementById("answer").innerHTML = localStorage.getItem('diva5');
      }else if(difficulty==="hard"){
        document.getElementById("answer").innerHTML = localStorage.getItem('diva6'); 
    } 
    }else if(numType==="frac"){
      if(difficulty==="easy"){
        document.getElementById("answer").innerHTML = localStorage.getItem('diva7');
      }else if(difficulty==="medium"){
        document.getElementById("answer").innerHTML = localStorage.getItem('diva8');
      }else if(difficulty==="hard"){
        document.getElementById("answer").innerHTML = localStorage.getItem('diva9');
      }
    }
  }else{
    document.getElementById("answer").innerHTML = "Error"
  }