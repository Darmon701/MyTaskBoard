//function constructor
function Task(taskText, taskDate, taskTime, stickyNoteId) {
    this.taskText = taskText.value;
    this.taskDate = taskDate.value;
    this.taskTime = taskTime.value;
    this.stickyNoteId = stickyNoteId;
}
