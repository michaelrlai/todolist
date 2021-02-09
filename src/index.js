import * as display from "./display";
import { getProjects, getTasks, newTask, changePriority } from "./tasks";

newTask("run", "Inbox", "medium", "25", "descrip");
newTask("do run", "Inbox", "medium", "25", "descrip");
newTask("walk", "zufaOjECT", "high", "23", "DESCRIPT");
newTask("jog", "ardfasfuject2", "high", "23", "DESCRIPT");
newTask("eat food", "sfdasruject2", "low", "23", "DESCRIPT");
newTask("drive car", "sfdasruject2", "low", "23", "DESCRIPT");

document.addEventListener("click", function (e) {
    if (e.target.matches(".button-projects")) {
        display.toggleProjectsList();
    }
    if (
        e.target.matches(".project") &&
        e.target.id !== "Projects" &&
        e.target.id !== "add-project"
    ) {
        currentProject = e.target.id;
        display.showProject(currentProject, tasks);
    }
    if (e.target.matches(".todo-title")) {
        if (e.target.matches(".showing")) {
            document.getElementById(e.target.id).classList.remove("showing");
            display.hideExpanded(e.target.id);
        } else {
            document.getElementById(e.target.id).classList.add("showing");
            display.showExpanded(e.target.id);
        }
    }
    if (e.target.matches(".todo-priority")) {
        const priority = changePriority(e.target.id);
        display.changePriorityIcon(e.target.id, priority);
    }
});

const tasks = getTasks();
const projects = getProjects(tasks);

let currentProject = "Inbox";

display.createProjectsList(projects);

display.showProject(currentProject, tasks);

console.table(tasks);

//console.log(tasks);
