
const selectPage = function() { // Selects page container
    const page = document.querySelector(".page");
    return page;
};

const displayHeader = function() { // Create and display header
    const header = document.createElement("div");
    header.classList.add("header");
    selectPage().appendChild(header);

    const headerButtonContainer = document.createElement("div");
    headerButtonContainer.classList.add("header-button-container");
    header.appendChild(headerButtonContainer);

    const buttons = ["+"];
    buttons.forEach(element => {
        const button = document.createElement("div");
        button.classList.add("button");
        button.classList.add("header-button");
        button.textContent = element;
        headerButtonContainer.appendChild(button);
    });


    console.log("hi");
};

const createMain = function() { // Create main area below header, includes projects and todo lists
    const main = document.createElement("div");
    main.classList.add("main");
    selectPage().appendChild(main);
    return main;
};

const displayProjects = function() {
    const projects = document.createElement("div"); // Create and display projects pane container
    projects.classList.add("projects");
    createMain().appendChild(projects);

    const projectsContainer =  document.createElement("div"); // Create container for list of projects
    projectsContainer.classList.add("projects-container");
    projects.appendChild(projectsContainer);

    function projectsButtons() { // Create and display list of projects
        const buttons = ["Inbox", "Projects"];
        buttons.forEach(element => {
            const button = document.createElement("div");
            button.classList.add("button");
            button.classList.add("projects-button");
            button.classList.add(`button-${element.toLowerCase()}`);
            button.textContent = element;
            projectsContainer.appendChild(button);
        });
    }
    projectsButtons();
};

const projectsList = function() {
    const projectsList = document.createElement("div");
    projectsList.classList.add("projects-list");
    projectsList.textContent = "projects list";
    createProjectsContainer().appendChild(projectsList);
};


export const displayApp = function() {
    displayHeader();
    displayProjects();
}
