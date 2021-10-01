// console.log('js connected');
$(handleStart);

// Create an application that records employee salaries and adds salaries up to report monthly costs. 
function handleStart(){
    // console.log('jq connected');
    // when the inputs are filled; push to table when the submitButton is clicked;
    $(`#submitButton`).on(`click`, addEmployee)
}

function addEmployee(){
    console.log('employee added');
    
}


