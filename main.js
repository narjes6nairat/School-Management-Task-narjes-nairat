var students = [];
document.getElementById('submit').addEventListener('click', (e) => {
    let x = 20;
    e.preventDefault();
	let nameInputEl = document.getElementById('name');
	let idInputEl = document.getElementById('idNumber');
	let gdpaInputEl = document.getElementById('gdpa');
    let result=document.getElementById('txt_area');
	// Validation for input
	inputValidation(nameInputEl.value, idInputEl.value, gdpaInputEl.value);
	// insert student
	insertStudent(nameInputEl.value, idInputEl.value, gdpaInputEl.value);
    
	// Show success message
	showMessage(students);
    //show list of added students
    printstu();
});
function inputValidation(name, id, gdpa) {
	// check for the value of each element
    let x = 30;

	if (name == '') {
		alert('Please insert the student name');
	}

	if (id == '') {
		alert('Please insert the student id number');
	}

	if (gdpa == '') {
		alert('Please insert the student gdpa');
	}
}

function insertStudent(name, id, gdpa) {
	let student = {
		name: name,
		id: id,
		gdpa: gdpa,
	};
	students.push(student);
    console.log('students array: ', students);
}

function showMessage(student){
    if (students) {
        alert('Studnet added!')
    }else{
        alert('Faild to add student')
    }
}
// function to show list of added students
function printstu(){

	var view = '';

    for (var i in students) {
        var student = [];

        for (var n in students[i]) {
            student.push(n + ': ' + students[i][n]);
        }
		view += "<li>" + student.join('<br>') + "</li> <br>";
    }
	document.getElementById("names").style.display = 'block';
	document.getElementById("names").innerHTML = "<ol>" + view + "</ol>";
}
//function  Delete student
function Delete() {

	let deleteStu = document.getElementById("idDelete").value;

	for(var i in students) {

		if(students[i]["id"] == deleteStu){
		 students.splice(i,1);
		 alert("student has deleted");
		 return;	
	    }   	
    } 
  alert("student not fiond");
}
function Update() {
	let name = document.getElementById('nameupdate').value;
	let id = document.getElementById('idupdate').value;
	let gdpa = document.getElementById('gpaupdate').value;
       
   console.log(name);
   console.log(id);
   console.log(gdpa);
   console.log(index);

   if(index != -1){

    if(name != '')
	students[index]["name"] = name;

	if(id != '')
	students[index]["id"] = id;

	if(gdpa != '')
	students[index]["gdpa"] = gdpa;
    alert("student Update");
   }
   alert("student is not Update");
}
