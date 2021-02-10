import { formatDistanceStrictWithOptions } from "date-fns/fp";

const displayHeader = (function () {
    // Create and display header
    const header = document.createElement("div");
    header.classList.add("header");
    document.querySelector(".page").appendChild(header);

    const appTitle = document.createElement("div");
    appTitle.id = "app-title";
    appTitle.textContent = "To-do List";
    header.appendChild(appTitle);

    const headerButtonContainer = document.createElement("div");
    headerButtonContainer.classList.add("header-button-container");
    header.appendChild(headerButtonContainer);

    const buttons = ["+"];
    buttons.forEach((element) => {
        const button = document.createElement("div");
        button.classList.add("button");
        button.classList.add("header-button");
        button.textContent = element;
        headerButtonContainer.appendChild(button);
    });
})();

const createMain = (function () {
    const main = document.createElement("div");
    main.classList.add("main");
    document.querySelector(".page").appendChild(main);
})();

const displayProjects = (function () {
    const projects = document.createElement("div"); // Create and display projects pane container
    projects.classList.add("projects");
    document.querySelector(".main").appendChild(projects);

    const projectsContainer = document.createElement("div"); // Create container for list of projects
    projectsContainer.classList.add("projects-container");
    projects.appendChild(projectsContainer);

    const projectsButtons = (function () {
        // Create and display list of projects
        const buttons = ["Inbox", "Projects"];
        buttons.forEach((element) => {
            const buttonContainer = document.createElement("div");
            buttonContainer.id = `${element.toLowerCase()}-button-container`;
            buttonContainer.classList.add("button-container");

            const button = document.createElement("div");
            button.id = element;
            button.classList.add("button");
            button.classList.add("project");
            button.classList.add("projects-button");
            button.classList.add(`button-${element.toLowerCase()}`);
            button.textContent = element;
            buttonContainer.appendChild(button);
            projectsContainer.appendChild(buttonContainer);
        });

        const inboxIcon = document.createElement("img");
        inboxIcon.id = "inbox-icon";
        inboxIcon.src = "images/mail-line.svg";
        document.getElementById("inbox-button-container").prepend(inboxIcon);

        const projectsIcon = document.createElement("img");
        projectsIcon.id = "projects-icon";
        projectsIcon.src = "images/folder-line.svg";
        document
            .getElementById("projects-button-container")
            .prepend(projectsIcon);
    })();

    const projectsList = (function () {
        const projectsList = document.createElement("div");
        projectsList.classList.add("projects-list");
        projectsList.classList.add("hide");
        projectsContainer.appendChild(projectsList);
    })();
})();

export const createProjectsList = function (projects) {
    const oldProjectsList = document.querySelector(".projects-list");
    while (oldProjectsList.firstChild)
        oldProjectsList.removeChild(oldProjectsList.firstChild);

    projects.forEach((element) => {
        const project = document.createElement("div");
        project.id = element;
        project.classList.add("button");
        project.classList.add("project");
        project.classList.add(element);
        project.textContent = element;
        document.querySelector(".projects-list").appendChild(project);
    });
    const project = document.createElement("div");
    project.id = "add-project";
    project.classList.add("button");
    project.classList.add("project");
    project.classList.add("add-project");
    project.textContent = "+ Add project";
    document.querySelector(".projects-list").appendChild(project);
};

export const toggleProjectsList = function () {
    // Toggle projects list to show or hide
    const projectsList = document.querySelector(".projects-list");
    if (projectsList.matches(".hide")) {
        projectsList.classList.remove("hide");
        projectsList.classList.add("show");
    } else {
        projectsList.classList.remove("show");
        projectsList.classList.add("hide");
    }
};

const createTodos = (function () {
    const todos = document.createElement("div");
    todos.classList.add("todos");
    document.querySelector(".main").appendChild(todos);

    const title = document.createElement("div");
    title.classList.add("todos-title");
    todos.appendChild(title);

    const container = document.createElement("div");
    container.classList.add("todos-container");
    todos.appendChild(container);

    const list = document.createElement("div");
    list.classList.add("todos-list");
    list.textContent = "todos list";
    container.appendChild(list);
})();

export const showProject = function (currentProject, tasks) {
    const todosTitle = document.querySelector(".todos-title");
    todosTitle.textContent = currentProject;

    const projectTodos = tasks.filter(function (task) {
        if (task.project === currentProject) return true;
    });

    const oldTodos = document.querySelector(".todos-list");
    while (oldTodos.firstChild) oldTodos.removeChild(oldTodos.firstChild);

    projectTodos.forEach((element) => {
        const todo = document.createElement("div");
        todo.id = `project-todo-${element.index}`;
        todo.classList.add("project-todo");

        const todoTitle = document.createElement("div");
        todoTitle.id = element.index;
        todoTitle.classList.add("todo-title");
        todoTitle.textContent = element.title;
        todo.appendChild(todoTitle);

        const todoButtons = document.createElement("div");
        todoButtons.classList.add("todo-buttons");
        todo.appendChild(todoButtons);

        const todoDue = document.createElement("div");
        todoDue.classList.add("todo-button");
        todoDue.classList.add("todo-due");
        todoDue.textContent = element.dueDate;
        todoButtons.appendChild(todoDue);

        const todoPriority = document.createElement("div");
        todoPriority.id = `priority-${element.index}`;
        todoPriority.classList.add("todo-button");
        todoPriority.classList.add("todo-priority");
        todoPriority.textContent = element.priority;
        if (element.priority === "low") {
            todoPriority.style.backgroundColor = "rgb(100, 200, 200)";
        } else if (element.priority === "medium") {
            todoPriority.style.backgroundColor = "rgb(255, 210, 180)";
        } else if (element.priority === "high") {
            todoPriority.style.backgroundColor = "rgb(240, 150, 150)";
        }
        todoButtons.appendChild(todoPriority);

        document.querySelector(".todos-list").appendChild(todo);

        const todoExpanded = document.createElement("div");
        todoExpanded.id = `expanded-${element.index}`;
        todoExpanded.classList.add("todo-expanded");
        todoExpanded.classList.add("project-todo");

        const todoDescription = document.createElement("div");
        todoDescription.classList.add("todo-description");
        todoDescription.textContent = element.description;
        todoExpanded.appendChild(todoDescription);

        const todoExpandedButtons = document.createElement("div");
        todoExpandedButtons.classList.add("todo-expanded-buttons");
        todoExpanded.appendChild(todoExpandedButtons);

        const todoEdit = document.createElement("img");
        todoEdit.classList.add("todo-button");
        todoEdit.src = "images/pencil-line.svg";
        todoEdit.classList.add("todo-edit");
        todoExpandedButtons.appendChild(todoEdit);

        const todoDelete = document.createElement("img");
        todoDelete.id = `delete-${element.index}`;
        todoDelete.classList.add("todo-button");
        todoDelete.src = "images/delete-line.svg";
        todoDelete.classList.add("todo-delete");
        todoExpandedButtons.appendChild(todoDelete);

        document.querySelector(".todos-list").appendChild(todoExpanded);

        /*         todo.textContent = `${element.title} Priority: ${element.priority} Due: ${element.dueDate}`;
        todo.classList.add("project-todo");
        document.querySelector(".todos-list").appendChild(todo); */
    });
};

export const showExpanded = function (id) {
    document.getElementById(`expanded-${id}`).classList.add("show");
};

export const hideExpanded = function (id) {
    document.getElementById(`expanded-${id}`).classList.remove("show");
};

export const changePriorityIcon = function (id, priority) {
    console.log(id);
    const priorityIcon = document.getElementById(id);
    if (priority === "low") {
        priorityIcon.style.backgroundColor = "rgb(100, 200, 200)";
        priorityIcon.textContent = "low";
    } else if (priority === "medium") {
        priorityIcon.style.backgroundColor = "rgb(255, 210, 180)";
        priorityIcon.textContent = "medium";
    } else if (priority === "high") {
        priorityIcon.style.backgroundColor = "rgb(240, 150, 150)";
        priorityIcon.textContent = "high";
    }
};

export const deleteProject = function (id) {
    document.getElementById(`project-todo-${id}`).remove();
    document.getElementById(`expanded-${id}`).remove();
};
