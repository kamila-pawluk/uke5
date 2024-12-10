 // View
 var tasksTable = document.getElementById('tasksTable');
 show();

 function show() {
     let html = `
                     <tr>
                         <th>Oppgave</th>
                         <th>Person</th>
                         <th>Added</th>
                         <th>Frist</th>
                          <th>Gjort</th>
                         <th>Actions</th>
                         <th>Gjort dato</th>
                     </tr>`;
     for (let i = 0; i < tasks.length; i++) {
         html += createHtmlRow(i);
     }
     tasksTable.innerHTML = html;
 }

 function createHtmlRow(i) {
     const task = tasks[i];
     const checkedHtml = task.isDone ? 'checked="checked"' : '';
     if (!task.editMode)
         return `<tr>
                         <td>${task.description}</td>
                         <td>${task.person}</td>
                         <td>${task.added}</td>
                         <td>${task.frist}</td>
                         <td><input onchange="changeIsDone(this, ${i})" type="checkbox" ${checkedHtml} /></td>
                        
                         <td>
                             <button onclick="deleteTask(${i})">Slett</button>
                             <button onclick="editTask(${i})">Rediger</button>
                         </td>
                          <td>${task.gjortDato}</td>
                     </tr>
                     `;
     return `<tr>
                         <td><input id="editDescription${i}" type="text" value="${task.description}"/></td>
                         <td><input id="editPerson${i}" type="text" value="${task.person}"/></td>
                         <td>${task.added}</td>                         
                         <td><input id="editDeadline${i}" type="date" value="${task.fristDato}"/></td>
                         <td><input onchange="changeIsDone(this, ${i})" type="checkbox" ${checkedHtml} /></td>
                         <td>
                             <button onclick="updateTask(${i})">Lagre</button>
                         </td>
                     </tr>
                     `;
 }

 function changeIsDone(checkbox, index) {
    let taskToChange = tasks[index];
     taskToChange.isDone = checkbox.checked;
     if(taskToChange.isDone){
     taskToChange.gjortDato = new Date().toISOString().substr(0,10);
     } else {
        taskToChange.gjortDato = "";
     }
     show();
 }

 function deleteTask(index) {
     tasks.splice(index, 1);
     show();
 }

 function editTask(index) {
     tasks[index].editMode = true;
     show();
 }

 function updateTask(index) {
     const id = `editDescription${index}`;
     const idPerson = `editPerson${index}`;
     const idDeadline = `editDealine${index}`;
     const inputTag = document.getElementById(id);
     const inputPersonTag = document.getElementById(idPerson);
     const inputDeadlineTag = document.getElementById(idDeadline);
     const task = tasks[index];
     task.description = inputTag.value;
     task.person = inputPersonTag.value;
     task.frist = inputDeadlineTag;
     task.editMode = false;
     show();
 }