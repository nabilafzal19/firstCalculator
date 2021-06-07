


function calculate(receiver){
   
  const content=document.getElementById("content");
  const totalContent = document.getElementById("total-content");
  
   
  switch(receiver)
  {
      case 'C': content.innerHTML= content.innerHTML.substr(0,content.innerHTML.length-1);
      break;

      case 'AC': content.innerHTML ="";
                 totalContent.innerHTML="";
            break;

     case '=':
          totalContent.innerHTML = math.evaluate(content.innerHTML);
          break;

      default: 
            content.innerHTML +=receiver;

  }
  
}