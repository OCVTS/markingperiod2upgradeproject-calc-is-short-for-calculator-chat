import * as script from "scrpt.js";


let calcedHistory = ['']
let calcingHistory = ['']

let data = document.getElementById('data')

/************* the history button array function *********/
// the calculated stuff being added to history
function addingToHistory ()
{
    calcedHistory.unshift(userInput)
}


//the equation history arrray
function addToHistory ()
{
    calcingHistory.unshift(calculate())
}

function showHistory()
{
    data.innerHTML = ""
    data.innerHTML = calcedHistory
}

function showingHistory()
{
    data.innerHTML = ""
    data.innerHTML = calcingHistory
}

//the histories function, so it can be displayed
function histories()
{
    switch(calcedHistory, calcingHistory)
    {
        case addToHistory:
            data.innerHTML = calcingHistory 
        break;

        case addingToHistory:
        data.innerHTML = calcedHistory
        break;

        default:
            data.innerHTML = ""
        break;
    }
}
