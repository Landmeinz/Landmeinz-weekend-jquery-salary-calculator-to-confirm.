// console.log('js connected');
$(handleStart);

let employeeList = [];
let runningTotal = 0;


// records employee salaries and adds salaries up to report monthly costs; 
function handleStart(){
    // console.log('jq connected');
    // when the inputs are filled; push to table when the submitButton is clicked;
    $(`#submitButton`).on(`click`, addEmployee);
    // when we are done with this person remove them from the DOM when clicked; 
    $(`#displayEmployee`).on(`click`, `.remove-button`, removeEmployee);
}



// RENDER all of the persons info on the DOM; 
function render(){

    // accessing the people that make up the array of employees; 
    for(let person of employeeList){
        // actual data to be pushed into our html <tbody id="displayEmployee">;
        const tableRowData = $(`
        <tr class="table-body-row">
            <td>${person.firstName}</td>
            <td>${person.lastName}</td>
            <td>${person.number}</td>
            <td>${person.title}</td>
            <td>${numberWithCommas(person.salary)}</td>
            <td> <button class="remove-button">REMOVE</button> </td>
        </tr>
        `);

        // table row data displaying on the DOM in the <tbody> 
        $(`#displayEmployee`).append(tableRowData);
    } 
    calcTotal();
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


// GET info from the DOM inputs and push them to our employeeList;
function addEmployee(){
    console.log('--- submit button clicked');

    // created an object with keys; this gets the inputs off the dom to store in our table data;
    const tableData = {
        firstName: capitalizeFirstLetter($(`#inputFirstName`).val()),
        lastName: capitalizeFirstLetter($(`#inputLastName`).val()),
        number: $(`#inputNumber`).val(),
        title: capitalizeFirstLetter($(`#inputTitle`).val()),
        salary: $(`#inputSalary`).val(),
    }
    // console.log(tableData);

    // all fields must be completed; dont allow the user to add empty info; 
    if(tableData.firstName === ''   || 
        tableData.lastName === ''   ||
        tableData.number === ''     ||
        tableData.title === ''      ||
        tableData.salary === ''     ){

        // log and alert user of their error; 
        console.log(`submit failed; provide inputs`)
        return alert(`Add all info to submit`);

    } else { // lets push data into our employeeList array;
        employeeList.push(tableData);
    }
    
    // the big reveal; 
    render();
    emptyInputs();
    
    console.log(employeeList);
    // dump out the array before we loop again to grab more info; prevents the double display issue; 
    employeeList = [];

}



// lets EMPTY all inputs with one function; called below just before we render;
function emptyInputs(){
    $(`#inputFirstName`).val('');
    $(`#inputLastName`).val('');
    $(`#inputNumber`).val('');
    $(`#inputTitle`).val('');
    $(`#inputSalary`).val('');
}



// function to calc our MONTHLY; this should pull from the employeeList; avoid using the input form directly; 
function calcTotal(){
    console.log(employeeList);
    for(let person of employeeList){
        salary = person.salary;
    }
    // get the employee annual salary; we want a monthly expense so lets divide by 12;
    console.log(salary);
    salary = parseInt(salary / 12);

    // target the html <span> input value;
    let totalMonthlyDisplay = $('#totalMonthlyDisplay');
    // target the html <h3> text; 

    let totalMonthlyText = $(`#totalMonthlyText`);
    // add the persons salary to the running total; 
    runningTotal += Number(salary);
    runningTotal = parseInt(runningTotal); 
    // console.log('calculating total monthly:', runningTotal);

    // change the text color to red on the DOM; both <h3> text and the displayed <span> text;
    if(runningTotal > 20000){
        totalMonthlyText.css(`color`, `red`);
        totalMonthlyDisplay.css(`color`, `red`);
    }
    totalMonthlyDisplay.text(numberWithCommas(runningTotal));
};



// function to turn our large numbers into a sting that's something more readable; $24500 to $24,500;
function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


// // when removed button is pushed decrease total;
// function removedTotal(){
//     console.log(employeeList);
//     console.log(runningTotal);
    
//     // target the html <span> input value;
//     let totalMonthlyDisplay = $('#totalMonthlyDisplay');
    
//     // use for loop to do some shit; 
//     for(let person in employeeList){
//         runningTotal += employeeList[person].salary;
//         console.log(person.salary);
//     }

//     runningTotal = parseInt(runningTotal); 
//     console.log('reducing total monthly:', runningTotal);

//     return totalMonthlyDisplay.text(numberWithCommas(runningTotal));

// }



// REMOVE the employee row of data from the DOM; log who was removed to a new array?
function removeEmployee(){
    console.log(`--- removed button clicked`);    
    console.log(employeeList);

    let index = $(this).closest(`tr`).index();
    console.log('index to be removed:', index);

    // idk if this is working;
    employeeList.splice(index, 1)
    console.log(employeeList);

    // targeting the row adjacent to the button; 
    $(this).closest(`tr`).remove();
}