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
 
    // create and object with keys to store our table data;
    const tableData = {
        firstName: $(`#inputFirstName`).val(),
        lastName: $(`#inputLastName`).val(),
        number: $(`#inputNumber`).val(),
        title: $(`#inputTitle`).val(),
        salary: $(`#inputSalary`).val(),
    }
    console.log(tableData);

    // dont allow the user to add empty info; all fields must be completed;
    if(tableData.firstName === '' || 
        tableData.lastName === '' ||
        tableData.number === '' ||
        tableData.title === '' ||
        tableData.salary === '' ){
        alert(`Add all info to submit`);
    }
    
    // push data onto the DOM for each submit;
    

    // empty input fields;


}


