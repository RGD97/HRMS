document.getElementById("welcoming").innerHTML = "Welcome to HRMS!"
document.getElementsByClassName("brief").innerHTML = "Control What You Want..."

let show = document.getElementById("empList");
const file = ('data.json')
fetch (file).then(show => show.json())
.then(data => {
    let arrange=""
    data.forEach(element => {
        arrange += `<tr>
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.department}</td>
            <td>${element.position}</td>
            <td>${element.contact.email}</td>
            <td><button id="editBtn" type="button" class="btn btn-warning">Edit</button></td>
            <td><button type="delBtn" class="btn btn-danger">Delete</button></td>
            
        </tr>`
        // arrange += `<p>Employee name: ${element.name} </p>`
        // arrange += `<p>Employee ID: ${element.id} </p>`
        // arrange += `<p>Position: ${element.position} </p>`
        // arrange += `<p>==========================================</p>`
    });
    show.innerHTML=arrange
});

//Add Employee Data
// Function to add data to JSON file
function addEmployee() {
    // Get the input value
    const employeeName = document.getElementById("fName").value;
    const employeeID = document.getElementById("Id").value;
    const employeeDepartment = document.getElementById("dep").value;
    const employeePosition = document.getElementById("pos").value;
    const employeeEmailId = document.getElementById("mail").value;
    const employeePhNo = document.getElementById("phNo").value;

    // Read existing data from JSON file
    fetch('data.json',{
        method:""
    })
        .then(response => response.json())
        .then(data => {
            // Append new data to the array
            data.push(employeeName);
            data.push(employeeID);
            data.push(employeeDepartment);
            data.push(employeePosition);
            data.push(employeeEmailId);
            data.push(employeePhNo);

            // Write updated data back to JSON file
            const jsonData = JSON.stringify(data);
            fetch('data.json', {
                method: 'PUT', // Use PUT method for updating
                headers: {
                    'Content-Type': 'application/json'
                },
                body: jsonData
            })
            .then(response => response.json())
            .then(result => {
                alert('Data added successfully:', result);
                // console.log('Data added successfully:', result);
                // Optionally, update the UI or show a success message
            })
            .catch(error => alert('Error adding data:', error));
                // console.error('Error adding data:', error));
        })
        .catch(error => alert('Error fetching data:', error));

            // console.error('Error fetching data:', error));
}
// -----------------------------------------------------------------------------------------------------------
// function addEmp() {
    // const employeeName = document.getElementById("fName").value;
    // const employeeID = document.getElementById("Id").value;
    // const employeeDepartment = document.getElementById("dep").value;
    // const employeePosition = document.getElementById("pos").value;
    // const employeeEmailId = document.getElementById("mail").value;
    // const employeePhNo = document.getElementById("phNo").value;
    // const employeeSalary = ;

// }

// const newData = {
//     id : employeeID,
//     name : employeeName,
//     position : employeePosition,
//     department : employeeDepartment,
//     contact : {
//         email : employeeEmailId,
//         phone : employeePhNo,
//     }
// };