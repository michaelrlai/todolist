import * as display from "./display";
import { getProjects, getTasks, newTask } from "./tasks";

newTask("run", "Inbox", "medium", "25", "descrip");
newTask("do run", "Inbox", "medium", "25", "descrip");
newTask("walk", "zufaOjECT", "HIGh", "23", "DESCRIPT");
newTask("jog", "ardfasfuject2", "HIGh", "23", "DESCRIPT");
newTask("eat food", "sfdasruject2", "HIGh", "23", "DESCRIPT");
newTask("drive car", "sfdasruject2", "HIGh", "23", "DESCRIPT");

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
});

const tasks = getTasks();
const projects = getProjects(tasks);

let currentProject = "Inbox";

display.createProjectsList(projects);

display.showProject(currentProject, tasks);

//console.log(tasks);
