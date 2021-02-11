import * as display from "./display";
import {
    getProjects,
    getTasks,
    newTask,
    changePriority,
    deleteTask,
} from "./tasks";

newTask("run", "Inbox", "medium", "25", "descrip");
newTask("do run", "Inbox", "medium", "25", "descrip");
newTask("walk", "zufaOjECT", "high", "23", "DESCRIPT");
newTask("jog", "ardfasfuject2", "high", "23", "DESCRIPT");
newTask("eat food", "sfdasruject2", "low", "23", "DESCRIPT");
newTask("drive car", "sfdasruject2", "low", "23", "DESCRIPT");

const tasks = getTasks();
const projects = getProjects(tasks);

let currentProject = "Inbox";

display.createProjectsList(projects);

display.showProject(currentProject, tasks);

display.addProject();

document.addEventListener("click", function (e) {
    console.log(e.target);
    if (e.target.matches("#inbox-button-container")) {
        currentProject = "Inbox";
        display.showProject(currentProject, tasks);
    }
    if (
        e.target.matches("#projects-button-container") ||
        e.target.matches("#Projects")
    ) {
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
    if (e.target.matches(".todo-delete")) {
        const deleteIndex = deleteTask(e.target.id);
        display.deleteProject(deleteIndex);
    }
    if (e.target.matches(".add-project")) {
        document.querySelector(".modal-container").classList.add("show-modal");
        document.querySelector(".modal-input").focus();
    } else if (!e.target.closest(".modal")) {
        document
            .querySelector(".modal-container")
            .classList.remove("show-modal");
        document.querySelector(".modal-input").value = "";
        document.querySelector(".modal-input").blur();
    }
    if (e.target.matches(".modal-submit")) {
        if (document.querySelector(".modal-input").value !== "") {
            const newProjectInput = document.querySelector(".modal-input")
                .value;
            projects.push(newProjectInput);
            projects.sort();
            display.createProjectsList(projects);
            document
                .querySelector(".modal-container")
                .classList.remove("show-modal");
            document.querySelector(".modal-input").value = "";
            document.querySelector(".modal-input").blur();
        }
    }
});

document
    .querySelector(".modal-input")
    .addEventListener("keydown", function (e) {
        if (e.keyCode === 27) {
            document
                .querySelector(".modal-container")
                .classList.remove("show-modal");
            document.querySelector(".modal-input").value = "";
            document.querySelector(".modal-input").blur();
        }
        if (
            e.keyCode === 13 &&
            document.querySelector(".modal-input").value !== ""
        ) {
            const newProjectInput = document.querySelector(".modal-input")
                .value;
            projects.push(newProjectInput);
            projects.sort();
            display.createProjectsList(projects);
            document
                .querySelector(".modal-container")
                .classList.remove("show-modal");
            document.querySelector(".modal-input").value = "";
            document.querySelector(".modal-input").blur();
        }
    });

//console.log(tasks);
