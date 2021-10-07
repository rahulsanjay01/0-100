//Retrieving the data from the page
//Starts or controller function
function getValues(){
//Getting the values from the inputs by accessing the page
        let startValue = document.getElementById("startValue").value;
        let endValue = document.getElementById("endValue").value;
        
//Validating our input, the inputs are strings by default and we are converting the input to integers 
        startValue = parseInt(startValue);
        endValue = parseInt(endValue);

        

//Ensuring that the start value is less than the end value
        if (startValue > endValue) {
 
//Notifying the user if the condtion is not met
            alert("The starting value must be lower than the ending value")
        }

//Setting the range of numbers (-100 to 100) that may be entered for the loop
        if (startValue > 100 || startValue < -100 || endValue > 100 || endValue < -100) {
        
//Display the error message if the entered numbers are not within the range of -100 to 100
            alert("Please enter numbers that are within the range of -100 to 100")
// Stopping the executoion of the function if the conditions are not met
            return;
        }
        
//Esnsuring that the users enters a start and an end value
        if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
//Calling generateNumbers, a for loop will utilize the start and end value as bounds
            let numbers = generateNumbers(startValue, endValue);
//displayNumbers will display
             displayNumbers(numbers);
        } else {
             alert("You must enter integers")     
        }
    
}

//Generate numbers from the startValue to the endValue
function generateNumbers(sValue, eValue){
//the numbers will go in an array
    let numbers = [];

//We want to get all numbers from start to end
    for (let index = sValue; index <= eValue; index++) { 
//This will execute in a loop and keep incrementing by 1 until index = eValue
        numbers.push(index);
    }

    return numbers;
}

//Display the numbers and mark the even numbers bold
function displayNumbers(numbers){
//This string will contain the output
    let templateRows = "";

//Identifying even and odd numbers 
    for (let index = 0; index < numbers.length; index++) {
        
        let className = "even";
        let number = numbers[index];

        if(number % 2 === 0) {
            className = "even";
        }
        else{
            className = "odd";    
        }

//This string will display the numbers
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
        
    }

    document.getElementById("results").innerHTML = templateRows;
} 