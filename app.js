// console.log('js connected');
$(handleStart);

let employeeList = [];

// Create an application that records employee salaries and adds salaries up to report monthly costs. 
function handleStart(){
    // console.log('jq connected');
    // when the inputs are filled; push to table when the submitButton is clicked;
    $(`#submitButton`).on(`click`, addEmployee);
}


function addEmployee(){
    console.log('submit button clicked');
 
    // create and object with keys to store our table data;
    const tableData = {
        firstName: $(`#inputFirstName`).val(),
        lastName: $(`#inputLastName`).val(),
        number: $(`#inputNumber`).val(),
        title: $(`#inputTitle`).val(),
        salary: $(`#inputSalary`).val(),
    }
    // console.log(tableData);

    // dont allow the user to add empty info; all fields must be completed;
    if(tableData.firstName === '' || 
        tableData.lastName === '' ||
        tableData.number === '' ||
        tableData.title === '' ||
        tableData.salary === '' ){
        alert(`Add all info to submit`);
    }
    
    // lets push data into our employeeList array;
    employeeList.push(tableData)
    // console.log(employeeList);
    
    renderDOM();
    
}


// lets empty all inputs with one function; call before we render;
function emptyInputs(){
    $(`#inputFirstName`).empty();
    $(`#inputLastName`).empty();
    $(`#inputNumber`).empty();
    $(`#inputTitle`).empty();
    $(`#inputSalary`).empty();
}


function renderDOM(){
    console.log(employeeList);
    emptyInputs();

     for(let person of employeeList){
        const tableRowData = $(`
        <tr>
            <td>${person.firstName}</td>
            <td>${person.lastName}</td>
            <td>${person.number}</td>
            <td>${person.title}</td>
            <td>${person.salary}</td>
        </tr>
        `);

        $(`#displayEmployee`).append(tableRowData);
    }
}






