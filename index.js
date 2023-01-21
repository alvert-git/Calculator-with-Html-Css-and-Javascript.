let buttons = document.querySelectorAll('.button');
let display = document.querySelector('.dis');
buttons.forEach(buttons => {
    buttons.addEventListener("click",()=>{
        if(buttons.innerHTML == '='){
            display.value=eval(display.value)
        }
        else if(buttons.innerHTML == 'AC'){
            display.value = ''
        }
       else if(buttons.innerHTML == 'DEL'){
            display.value = display.value.slice(0,-1)       }
        else{
        console.log(buttons.innerHTML)
        display.value += buttons.innerHTML;}
        
        
    })
});












