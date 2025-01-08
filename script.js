let num1 = 0
let finalNum = ''
let userInput = ''
let userOperator = " "

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
        default:
            display.innerHTML = "ERROR"
    }
}

//resets the equation to have an empty operator and both numbers be 0
function cl()
{
    display.innerHTML = 0;
    userInput = ''
    num1 = 0;
    num2 =0 
}


