// define elements

var localStorageNotesGet = localStorage.getItem('tasks');
var localStorageNotesList = JSON.parse(localStorageNotesGet);
var taskText = document.getElementById('taskText');
var taskDate = document.getElementById('taskDate');
var taskTime = document.getElementById('taskTime');
var stickyNoteId;

// if localstorage has saved data, it will add + to id
if (localStorageNotesList == 0 || localStorageNotesList == null) {
    var tasks = [];
    stickyNoteId = 0;
} else {
    var tasks = localStorageNotesList;

    for (var i = 0; i < tasks.length; i++) {
        tasks[i].stickyNoteId = i;
        createNewTaskFromLocalStorage();
    }
}


function inputErorr() {
    var text = "Please write a task and a date";
    document.getElementById("warningText").innerHTML = text;
    event.preventDefault();
    event.stopImmediatePropagation()
}
