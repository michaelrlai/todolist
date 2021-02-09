class Task {
    constructor(title, project, priority, dueDate, description) {
        this.title = title;
        this.project = project;
        this.priority = priority;
        this.dueDate = dueDate;
        this.description = description;
    }
}

let allTasks = [];

export const newTask = function (
    title,
    project,
    priority,
    dueDate,
    description
) {
    const task = new Task(title, project, priority, dueDate, description);
    allTasks.push(task);
};

export const getTasks = function () {
    return allTasks;
};

export const getProjects = function (tasks) {
    const projectsList = tasks // Display only projects, removes duplicates, sorts alpha
        .map((task) => task.project)
        .filter((task, index, self) => self.indexOf(task) === index)
        .sort();
    return projectsList;
};
