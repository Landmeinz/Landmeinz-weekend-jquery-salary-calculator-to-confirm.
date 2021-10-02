// console.log('js connected');
$(handleStart);

let employeeList = [];

let globalEmployeeList = [];



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

    } else {
        // lets push data into our employeeList array;
        employeeList.push(tableData)
        console.log(employeeList);
    }
    
    
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


// function to turn our large numbers into a sting that's something more readable; $24500 to $24,500;
function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


let runningTotal = 0;

// function to DISPLAY all of the persons info to the DOM; 
function renderDOM(){
    // console.log(employeeList);
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
            <td>${numberWithCommas(person.salary)}</td>
            <td> <button class="remove-button">REMOVE</button> </td>
        </tr>
        `);


        // we want a monthly expense so lets divide by 12 here;
        let salary = person.salary;
        salary = parseInt(salary / 12);

        // target the html <span> input value;
        let totalMonthlyDisplay = $('#totalMonthlyDisplay');
        // target the html <h3> text; 
        let totalMonthlyText = $(`#totalMonthlyText`);

        // function to calc our MONTHLY; update on the DOM; 
        function calcTotal(){
            // add the persons salary to the running total; 
            runningTotal += Number(salary);
            runningTotal = parseInt(runningTotal); 
            console.log('calculating total monthly:', runningTotal);

            // change the text color to red on the DOM; both <h3> text and the displayed <span> text;
            if(runningTotal > 20000){
                totalMonthlyText.css(`color`, `red`);
                totalMonthlyDisplay.css(`color`, `red`);
            }
            totalMonthlyDisplay.text(numberWithCommas(runningTotal));
        };

        // adding each person to another array so we can use later; fixes the need to dump employeeList; 
        globalEmployeeList.push(person);
        console.log(employeeList);
        // dump out the array before we loop again to grab more info; prevents the double display issue; 
        employeeList = [];

        // table row data displaying on the DOM in the <tbody> 
        $(`#displayEmployee`).append(tableRowData);

        calcTotal();
        
    } 

    console.log(globalEmployeeList);
    
    
}


// when removed button is pushed decrease total;
function removedTotal(){
    console.log(globalEmployeeList);
    console.log(runningTotal);
    
    // target the html <span> input value;
    let totalMonthlyDisplay = $('#totalMonthlyDisplay');
    
    // use for loop to 
    for(let person in globalEmployeeList){
        runningTotal += globalEmployeeList[person].salary;
        console.log(person.salary);
        
    }

    runningTotal = parseInt(runningTotal); 
    console.log('reducing total monthly:', runningTotal);

    return totalMonthlyDisplay.text(numberWithCommas(runningTotal));

}


// REMOVE the employee row of data from the DOM; log who was removed;
function removeEmployee(){
    console.log(`removed button clicked`);    

    // // // // // --- let's log who go removed; --- // // // // // 
    // let removedEmployee = $(this).val();
    // console.log(removeEmployee);

    // update total monthly display text; 
    // removedTotal();

    console.log($(this).closest(`tr`).index());
    // targeting the row adjacent to the button; 
    $(this).closest(`tr`).remove();
   
    
    console.log(globalEmployeeList);
    

}





// Create an application that records employee salaries and adds salaries up to report monthly costs. 
function handleStart(){
    // console.log('jq connected');

    // when the inputs are filled; push to table when the submitButton is clicked;
    $(`#submitButton`).on(`click`, addEmployee);

    // when we are done with this person remove them from the DOM when clicked; 
    $(`#displayEmployee`).on(`click`, `.remove-button`, removeEmployee);

}