let screen=""; //value of screen
let screen_value=''; //to store the whole string
let operands=document.querySelectorAll('#number');
let arr=[]; //array to store all the elements
console.log(operands);
for ( let num of operands ) {
    num.addEventListener('click', ()=> {
        document.getElementById( 'screen').value += num.innerHTML;
        screen += num.innerHTML;
        screen_value += num.innerHTML;
        console.log('screen');
    })
}
let operators = document.querySelectorAll('#operator');
for ( let oper of operators ) {
    oper.addEventListener( 'click' , () => {
        document.getElementById('screen').value += oper.innerHTML;
        arr.push(screen);
        arr.push(oper.innerHTML);

        screen = '';
        screen_value += oper.innerHTML;
        console.log(arr);
    })
    

}
let equals = document.querySelector('#equals');
equals.addEventListener( 'click',  () => {
    arr.push(screen);
    console.log(arr);
    console.log('Equals has been pressed');
    let result=calculate(arr);
    document.getElementById('screen').value = result;
}
)
let clear = document.querySelector('#clear');
clear.addEventListener('click' , () => {
    document.getElementById('screen').value = '';
    screen='';
    screen_value= '';
    arr=[];
})
let dele = document.querySelector('#back');
dele.addEventListener( 'click' , () => {
    let x= screen_value[screen_value.length-1];
    console.log(x);
    screen_value = screen_value.slice(0,-1);
    document.getElementById('screen').value = screen_value;
    if (x in operators ) {
        arr.pop();

    }
    


})
function calculate(expr) {
    let ans;
    const len = expr.length;
    for (let x=0; x< len ; x++) {
        let element = expr[x];
        switch (element) {
            case '+':
                ans= Number(expr[x-1]) + Number(expr[x+1]);
                console.log(ans);
                expr[x+1]=ans;
                break;
            case '-':
                ans= Number(expr[x-1]) - Number(expr[x+1]);
                console.log(ans);
                expr[x+1]=ans;
                break;
            case '*':
                ans= Number(expr[x-1]) * Number(expr[x+1]);
                
                console.log(ans);
                expr[x+1]=ans;
                break;
            case '/':
                ans= Number(expr[x-1]) + Number(expr[x+1]);

                console.log(ans);
                expr[x+1]=ans;
                break;

        }
        
    }
    console.log(expr[len-1]);
    return expr[len-1];

}