//retrieving the data from the page
//starts or controller function
function getValues(){
    //we need to get values from the page
        let startValue = document.getElementById("startValue").value;
        let endValue = document.getElementById("endValue").value;
        
        //we need to validate our input
        //parse into Integer
        startValue = parseInt(startValue);
        endValue = parseInt(endValue);

        

    //make sure that the start value is less than the end value
        if (startValue > endValue) {
        //add a specific error message to the empty string
        alert("The starting value must be lower than the ending value")
        
        }

    //Set an upper and lower bound for the loops
    //This is an optional addition that improves the user experience
        if (startValue > 100 || startValue < -100 || endValue > 100 || endValue < -100) {
        //display the error message
        
        alert("Please enter numbers that are within the range of -100 to 100")
        return;
        }
        
        if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
            //we need to call generateNumbers
            let numbers = generateNumbers(startValue, endValue);
             //we need to call displayNumbers
             displayNumbers(numbers);
         } else {
             alert("You must enter integers")
             
         }
    
}

//generate numbers from the startValue to the endValue
//logic function(s)
function generateNumbers(sValue, eValue){
    
    let numbers = [];

    //we want to get all numbers from start to end
    for (let index = sValue; index <= eValue; index++) { 
        //this will execute in a loop until index = eValue
        numbers.push(index);
    }

    return numbers;
}

//display the numbers and mark the even numbers bold
//view or display function(s)
function displayNumbers(numbers){
let templateRows = "";
    for (let index = 0; index < numbers.length; index++) {
        
        let className = "even";
        let number = numbers[index];

        if(number % 2 === 0) {
            className = "even";
        }
        else{
            className = "odd";    
        }

        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
        
    }

    document.getElementById("results").innerHTML = templateRows;
} 