let result=document.getElementById("result"); //value of screen
let result_val=''; //variable
buttons=document.querySelectorAll('button');
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonNum=e.target.innerText;
       /// console.log("button text is ",buttonNum);
       if (buttonNum =='X') {
           buttonNum = '*';
           result_val += buttonNum;
           result.value=result_val;
           
       }
       else if (buttonNum=='C') {
        result_val ="";
        result.value=result_val;
        
       }
       else if(buttonNum=="=") {
            result.value=eval(result_val);
       }
       else if(buttonNum=='Del')
       {   
           result_val= result_val.slice(0, -1);
           result.value=result_val;

       }
       else {
           result_val += buttonNum;
           result.value=result_val;
       }

    })
}