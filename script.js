let num1 = 0
let finalNum = ''
let userInput = ''
let userOperator = " "
let calcedHistory = ['']
let calcingHistory = ['']




//declares display so it can display on display
let display = document.getElementById('display') 


//adds user's input to num so it can be meddled with
function addToNum (item)
{
    userInput += item;
    display.innerHTML = userInput;
}

//puts  in what operator the user is using
function operator(oper)
{
    userOperator = oper;
    num1 = parseInt(userInput);
    userInput = ' ';
}


/********************** addition function  *********************/
//it adds? and returns the value to be used and displayed
function add(num1, num2)
{
   return num1 += num2;
}

/********************** subtraction function  *********************/
//it subtratcs? and returns the value to be used and displayed
function subtract(num1, num2) 
{
    return num1 -= num2;
}

/********************** multiplication function  *********************/
//it multiplies? and returns the value to be used and displayed
function multiply(num1, num2) 
{
    return num1 * num2;
}

/********************** division function  *********************/
//it divides? and returns the value to be used and displayed
function divide(num1, num2) 
{
    return num1 / num2;
}


/******************* square root function  **********************/
// iget how to user, i just dont know how they got to that 
function squareRoot(num1)
{
    return Math.sqrt(num1)
}

/******************* sin function  **********************/
//its pronounced sine actually, also in radians
function sin(num1)
{
    return Math.sin(num1)
}

/******************* tan function  **********************/
//tangent calculated in radians
function tan(num1)
{
    return Math.tan(num1)
}

/******************* cosine function  **********************/
//cos these are all in radian
function cos(num1)
{
    return Math.cos(num1)
}



/******************** exponent function****************/
//it's for exponents
function exponent (num1, num2)
{
    return Math.pow(num1,num2)
}

/******************* percentage function **************/
// i rememeber how to calculate them, probably
function percent (num1, num2)
{
    return (num1/num2) * 100 + "%";
}

/*****************off function******************************* */
// it clsoes the curremt chrome tab
function off ()
{
    close();
}

/************* putting the pi in the onven funciton *******/
// how we can add pi to the proper equation
function pi()
{
    addToNum(Math.PI)
}


/********************** calculate function  *********************/

//process which operation it should do and calls the corresponding function
function calculate() 
{
    let num2 = parseInt(userInput);

    switch(userOperator)
    {
        case '+':
       display.innerHTML = add(num1,num2)
        break;

        case '-':
       display.innerHTML = subtract(num1,num2)
        break;
        
        case '*':
       display.innerHTML = multiply(num1,num2)
        break;
        
        case '/':
       display.innerHTML = divide(num1,num2)
        break;

        case '√':
       display.innerHTML = squareRoot(num1,num2)
        break;

        case '^':
       display.innerHTML = exponent(num1,num2)
        break;
        
        case 'sin':
       display.innerHTML = sin(num1,num2)
        break;
        
        case 'cos':
       display.innerHTML = cos(num1,num2)
        break;
                
        case 'tan':
       display.innerHTML = tan(num1,num2)
        break;
        
        case '%':
       display.innerHTML = percent(num1,num2)
        break;

        default:
            display.innerHTML = "ERROR"
    }
    
}

//resets the equation to have an empty operator and both numbers be 0
function cl()
{
    display.innerHTML = "";
    userInput = ''
    num1 = 0;
    num2 = 0 
}








//5 buttons dont have a purpose because i didnt know what to do with them, thye have become 
function inquire1()
{
    alert("clear the display after every calculation")
}
function inquire2(){
    alert("the trigenometry functions will be calculated in radians instead of degrees")
}
function inquire3(){
    alert('the suqare root button would not like it if you put in a second number after ')
}
    function inquire4(){
    alert('the history buttons are for the history of the mathmatical expression you are making or for the result')
}
