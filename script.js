let num1 = 0
let finalNum = ''
let userInput = ''
let userOperator = " "
//let radians = degrees * Math.PI/180;
let calcingHistory = ''
let calcedHistory = ''


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
// □
function squareRoot(num1)
{
    return Math.sqrt(num1)
}

/******************* triangle geometry functions  **********************/
// NOO! THAT DOES NOT SAY SIN!
function sin(num1,radians)
{
    return Math.sin(num1/radians)
}

//cosine the other method
function cos(num1,radians)
{
    return Math.cos(num1/radians)
}

//
function tan(num1,radians)
{
    return Math.tan(num1/radians)
}

/******************** exponent function****************/
//it's for exponents
function exponent (num1, num2)
{
    return num1^num2;
}


/************************ percent button **************/
// percents
function percent (num1,num2, cent)
{
    let cent = num2;

    return (num1/cent) * 100; 
}




/*****************off function******************************* */
// it clsoes the curremt chrome tab
function off ()
{
    close();
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

        case '^':
        display.innerHTML = exponent(num1,num2)
        break;

        case '□':
        display.innerHTML = squareRoot(num1)
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

        default:
            display.innerHTML = "ERROR"
    }
}

//resets the equation to have an empty operator and both numbers be 0
function cl()
{
    display.innerHTML = '';
    userInput = ''
    num1 = 0;
    num2 = 0 
}








//5 buttons dont have a purpose because i didnt know what to do with them
function inquire()
{
    alert("yeah uhm this button is just for decoration")
}
