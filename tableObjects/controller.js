 // Controller
 var taskDescriptionInput = document.getElementById('taskDescription');
 var personInput = document.getElementById('personAddingTask');
 var addingDate = new Date();
 var deadline = document.getElementById('addingDeadline');


 function addTask() {
     tasks.push({
         description: taskDescriptionInput.value,
         person: personInput.value,
         added: addingDate.toISOString().substr(0,10),
         frist: deadline.value,
         isDone: false,
         gjortDato: "",
     });
     taskDescriptionInput.value = '';
     personInput.value = '';
     addedDate = '';
     deadline = '';

     show();
 }
