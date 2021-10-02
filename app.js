// console.log('js connected');
$(handleStart);

let employeeList = [];

// Create an application that records employee salaries and adds salaries up to report monthly costs. 
function handleStart(){
    // console.log('jq connected');

    // when the inputs are filled; push to table when the submitButton is clicked;
    $(`#submitButton`).on(`click`, addEmployee);

    // when we are done with this person remove them from the DOM when clicked; 
    $(`#displayEmployee`).on(`click`, `.remove-button`, removeEmployee);


}


// function to GET the persons INFO from our DOM inputs into our employeeList;
function addEmployee(){
    console.log('(1) submit button clicked');

    // created an object with keys to store our table data;
    const tableData = {
        firstName: $(`#inputFirstName`).val(),
        lastName: $(`#inputLastName`).val(),
        number: $(`#inputNumber`).val(),
        title: $(`#inputTitle`).val(),
        salary: $(`#inputSalary`).val(),
    }
    // console.log(tableData);

    // all fields must be completed; dont allow the user to add empty info; 
    if(tableData.firstName === '' || 
        tableData.lastName === '' ||
        tableData.number === '' ||
        tableData.title === '' ||
        tableData.salary === '' ){

        // log and alert user of their error; 
        console.log(`submit failed; provide inputs`)
        return alert(`Add all info to submit`);
    }
    
    // lets push data into our employeeList array;
    employeeList.push(tableData)
    // console.log(employeeList);


    // let totalSalary = 0;
    // // get salary data from our tableData; 
    // let inputSalary = tableData.salary;

    // // turn string input from DOM into a usable Number;
    // inputSalary = Number(inputSalary)
    // // console.log(typeof inputSalary);

    // totalSalary += inputSalary;
    // console.log(totalSalary);
    
    // // update the text on the DOM to display the totalSalary; 
    // $(`#totalMonthlyDisplay`).text(`${totalSalary}`)
    
    // the big reveal; 
    renderDOM();
}


// lets EMPTY all inputs with one function; called below just before we render;
function emptyInputs(){
    $(`#inputFirstName`).val('');
    $(`#inputLastName`).val('');
    $(`#inputNumber`).val('');
    $(`#inputTitle`).val('');
    $(`#inputSalary`).val('');
}


// function to DISPLAY all of the persons info to the DOM; 
function renderDOM(){
    console.log(employeeList);
    // dump any old inputs before we loop;
    emptyInputs();

    // accessing the people that make up the array of employees; 
    for(let person of employeeList){
        // actual data to be pushed into our html <tbody id="displayEmployee">;
        const tableRowData = $(`
        <tr>
            <td>${person.firstName}</td>
            <td>${person.lastName}</td>
            <td>${person.number}</td>
            <td>${person.title}</td>
            <td>${person.salary}</td>
            <td> <button class="remove-button">REMOVE</button> </td>
        </tr>
        `);


        
        // // get salary data from our tableData; 
        // let inputSalary = person.salary;
        // console.log(inputSalary);

        // // turn string input from DOM into a usable Number;
        // inputSalary = Number(inputSalary)
        // console.log(typeof inputSalary);

        // // function to turn our large numbers into a sting that's something more readable ie: $24500 to $24,500
        // function numberWithCommas(num) {
        //     return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        // };
        // numberWithCommas(inputSalary);

        // update the text on the DOM to display the totalSalary; 
        

        

        // dump out the array before we loop again to grab more info; prevents the double display issue; 
        employeeList = [];

        // table row data displaying on the DOM in the <tbody> 
        $(`#displayEmployee`).append(tableRowData);
    } 

        
    $(`#totalMonthlyDisplay`).text(calcTotal());
    
}


// function calcTotal(){
//     console.log('in calc total');
//     emptyInputs();

//     for(let person of employeeList){
        
        

//         // lets add up the total salary of our people;
//         let salary = person.salary;
//         console.log(salary);

//          // get salary data from our tableData; 
//          let inputSalary = person.salary;
//          console.log(inputSalary);
 
//          // turn string input from DOM into a usable Number;
//          inputSalary = Number(inputSalary)
//          console.log(typeof inputSalary);
        
//     };

//     // function to turn our large numbers into a sting that's something more readable ie: $24500 to $24,500
//     function numberWithCommas(num) {
//         return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//     }
//     numberWithCommas(inputSalary);
// }
// 



// function to turn our large numbers into a sting that's something more readable; $24500 to $24,500;
function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function calcTotal(){
    console.log('in calc total');
    
    // target the input value;
    let totalSalary = $('#totalMonthlyDisplay');
    totalSalary.empty();
    
    let runningTotal = 0;
    for(let person of employeeList){
      let salary = person.salary;
      console.log(salary);
      
      runningTotal += Number(salary);
      console.log(runningTotal);
      
    } return totalSalary.append(numberWithCommas(`hello`));
  };






// REMOVE the employee row of data from the DOM; log who was removed;
function removeEmployee(){
    console.log(`removed button clicked`);

    // // // // // --- let's log who go removed; --- // // // // // 
    // let removedEmployee = $(this).val();
    // console.log(removeEmployee);

    employeeList = [];

    // targeting the row adjacent to the button; 
    $(this).closest(`tr`).remove();
}





