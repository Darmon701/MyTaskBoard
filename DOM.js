// add notes from Local Storage 
function createNewTaskFromLocalStorage() {
    var newSecondDiv = document.createElement("div");
    newSecondDiv.className = 'newNote';
    newSecondDiv.id = tasks[i].stickyNoteId;
    var textInner = document.createElement("div");
    textInner.id = 'innerTextNote';
    var dateInner = document.createElement("span");
    dateInner.id = 'innerDateNote';
    var timeInner = document.createElement("span");
    timeInner.id = 'innerTimeNote';

    textInner.value = tasks[i].taskText;
    dateInner.value = tasks[i].taskDate;
    timeInner.value = tasks[i].taskTime;
    var txtvalueTransfer = document.createTextNode(textInner.value);
    var datvalueTransfer = document.createTextNode(dateInner.value);
    var timvalueTransfer = document.createTextNode(timeInner.value);
    textInner.appendChild(txtvalueTransfer);
    dateInner.appendChild(datvalueTransfer);
    timeInner.appendChild(timvalueTransfer);
    document.getElementById("savedNotes").appendChild(newSecondDiv);
    newSecondDiv.appendChild(textInner);
    newSecondDiv.appendChild(dateInner);
    newSecondDiv.appendChild(timeInner);

    var closeButton = document.createElement("SPAN");
    var txt = document.createTextNode("X");
    closeButton.id = "closeButton";
    closeButton.addEventListener('click', removeTaskFromPage);
    closeButton.appendChild(txt);
    newSecondDiv.appendChild(closeButton);
}

// on click button it will add a new div with a note and its content to the HTML page
function createNewStickyNote(event) {
    var stickyNoteId;
    var localStorageNotesGet = localStorage.getItem('tasks');
    var localStorageNotesList = JSON.parse(localStorageNotesGet);

    if (localStorageNotesList == 0 || localStorageNotesList == null) {
        var tasks = [];
        stickyNoteId = 0;
    } else {
        var tasks = localStorageNotesList;
        stickyNoteId = tasks.length;
    }

    var newSecondDiv = document.createElement("div");
    newSecondDiv.className = 'newNote';
    newSecondDiv.id = stickyNoteId;
    var textInner = document.createElement("div");
    textInner.id = 'innerTextNote';
    var dateInner = document.createElement("span");
    dateInner.id = 'innerDateNote';
    var timeInner = document.createElement("span");
    timeInner.id = 'innerTimeNote';

    var textValue = document.getElementById("taskText").value;
    var dateValue = document.getElementById("taskDate").value;
    var timeValue = document.getElementById("taskTime").value;
    var txtvalueTransfer = document.createTextNode(textValue);
    var datvalueTransfer = document.createTextNode(dateValue);
    var timvalueTransfer = document.createTextNode(timeValue);
    textInner.appendChild(txtvalueTransfer);
    dateInner.appendChild(datvalueTransfer);
    timeInner.appendChild(timvalueTransfer);
    if (textValue == '' || dateValue === '') {

        inputErorr();

    } else {

        document.getElementById("warningText").innerHTML = " ";

        document.getElementById("savedNotes").appendChild(newSecondDiv);
        newSecondDiv.appendChild(textInner);
        newSecondDiv.appendChild(dateInner);
        newSecondDiv.appendChild(timeInner);
        
        var task = new Task(taskText, taskDate, taskTime, stickyNoteId);
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        taskText.value = "";
        taskDate.value = "";
        taskTime.value = "";
    }



    var closeButton = document.createElement("SPAN");
    var txt = document.createTextNode("X");
    closeButton.id = "closeButton";
    closeButton.addEventListener('click', removeTaskFromPage)
    closeButton.appendChild(txt);
    newSecondDiv.appendChild(closeButton);
}


// delete Sticky Note by pressing X (Delete)
function removeTaskFromPage(event) {
    var stickyNoteElement = event.target.parentElement.id;
    var stickyNoteId = document.getElementById(stickyNoteElement);
    stickyNoteId.classList.add('deleteFadeOut');

    var localStorageNotesGet = localStorage.getItem('tasks');
    var localStorageNotesList = JSON.parse(localStorageNotesGet);
    tasks = localStorageNotesList;
    tasks.splice(stickyNoteElement, 1);

    for (var i = 0; i < tasks.length; i++) {
        tasks[i].stickyNoteId = i;
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));

    var refreshIds = document.getElementsByClassName("newNote");
    for (var i = 0; i < tasks.length; i++) {
        refreshIds[i].id = i;
    }
    setTimeout(function () {
        stickyNoteId.remove();
        var refreshIds = document.getElementsByClassName("newNote");
        for (var i = 0; i < tasks.length; i++) {
            refreshIds[i].id = i;
        }
    }, 1000);
}