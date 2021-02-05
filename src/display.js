const displayHeader = (function () {
    // Create and display header
    const header = document.createElement("div");
    header.classList.add("header");
    document.querySelector(".page").appendChild(header);

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
            const button = document.createElement("div");
            button.classList.add("button");
            button.classList.add("projects-button");
            button.classList.add(`button-${element.toLowerCase()}`);
            button.textContent = element;
            projectsContainer.appendChild(button);
        });
    })();

    const projectsList = (function () {
        const projectsList = document.createElement("div");
        projectsList.classList.add("projects-list");
        projectsList.classList.add("hide");
        projectsContainer.appendChild(projectsList);
    })();
})();

export const createProjectsList = function (tasks) {
    const oldProjectsList = document.querySelector(".projects-list");
    while (oldProjectsList.firstChild)
        oldProjectsList.removeChild(oldProjectsList.firstChild);
    const projectsList = tasks // Display only projects, removes duplicates, sorts alpha
        .map((task) => task.project)
        .filter((task, index, self) => self.indexOf(task) === index)
        .sort();
    projectsList.forEach((element) => {
        const project = document.createElement("div");
        project.classList.add("button");
        project.classList.add("project");
        project.classList.add(element);
        project.textContent = element;
        document.querySelector(".projects-list").appendChild(project);
    });
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

const displayTodos = (function () {
    const todos = document.createElement("div");
    todos.classList.add("todos");
    document.querySelector(".main").appendChild(todos);

    const title = document.createElement("div");
    title.classList.add("todos-title");
    todos.appendChild(title);

    const container = document.createElement("div");
    container.classList.add("todos-container");
    container.textContent = "todos container";
    todos.appendChild(container);

    const list = document.createElement("div");
    list.classList.add("todos-list");
    list.textContent = "todos list";
    container.appendChild(list);
})();

export const showInbox = function () {
    console.log("showInbox");
    document.querySelector(".todos-title").textContent = "Inbox";
};
