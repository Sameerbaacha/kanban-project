function addTask() {
    var taskContent = prompt("Enter Task Name ...");
    if (taskContent) {
      var task = document.createElement("div");
      task.className = "task";
      task.id = "task" + Date.now();
      task.setAttribute("draggable", "true");
      task.setAttribute("ondragstart", "drag(event)");
      task.textContent = taskContent;
      document.getElementById("todo").appendChild(task);
    }
  }
  
  function allowDrop(event) {
    event.preventDefault();
  }
  
  function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
  }
  
  function drop(event, targetId) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var task = document.getElementById(data);
    var target = document.getElementById(targetId);
    target.appendChild(task);
  }
  