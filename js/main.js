var taskList = document.getElementById('todo');
var doneList = document.getElementById('done');
var form =  document.getElementById('form1');
var num = document.getElementById('num');

//Add tasks
form.addEventListener('submit', addTask);

function addTask(e){
    e.preventDefault();
   
   var newTask = document.getElementById('task').value;

   if (newTask != ""){
   	//create new li element
   var li  = document.createElement('li');
   li.className = 'list-group-item';
   li.appendChild(document.createTextNode(newTask));

   //create delete button
   var del = document.createElement('button');
   del.className = 'btn btn-danger btn-sm float-right delete';
   del.appendChild(document.createTextNode('X'));

   //create done button
   var done = document.createElement('button');
   done.className = 'btn btn-success float-right mr-5 pr-5 pl-5 done';
   done.appendChild(document.createTextNode('Done'));

   //add delete and done buttons to li
   li.appendChild(del);
   li.appendChild(done);

   //add the new li to the list
   taskList.appendChild(li);
   }
   else {
   	alert('You did not write a task');
   }

   var addLn = taskList.getElementsByTagName("li").length;
   num.innerHTML = addLn;  
}

//Delete or finish task task
taskList.addEventListener('click',editTask);

function editTask(e){
	if (e.target.classList.contains('delete')){
		var li = e.target.parentElement;
		taskList.removeChild(li);
	}
	else if (e.target.classList.contains('done')){
		var li = e.target.parentElement;
		taskList.removeChild(li);

		txt = li.firstChild;
		var newli = document.createElement('li');
		newli.className = 'list-group-item';
		newli.appendChild(txt);
		doneList.appendChild(newli);
	}
	//edit number of tasks
	var addLn = taskList.getElementsByTagName("li").length;
	num.innerHTML = addLn;
}









