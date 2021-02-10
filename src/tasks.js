class Task {
    constructor(title, project, priority, dueDate, description) {
        this.title = title;
        this.project = project;
        this.priority = priority;
        this.dueDate = dueDate;
        this.description = description;
        this.index = title + allTasks.length;
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

export const changePriority = function (id) {
    let prio;
    const newId = id.slice(9);
    allTasks.forEach((element) => {
        if (element.index === newId) {
            if (element.priority === "low") {
                element.priority = "medium";
            } else if (element.priority === "medium") {
                element.priority = "high";
            } else if (element.priority === "high") {
                element.priority = "low";
            }
            prio = element.priority;
        }
    });
    return prio;
};

export const deleteTask = function (id) {
    id = id.slice(7);
    const tasksById = allTasks.map(function (task) {
        return task.index;
    });
    const indexToRemove = tasksById.indexOf(id);
    allTasks.splice(indexToRemove, 1);
    return id;
};
