

/* const task = [
    {
        title: "title",
        project: "inbox",
        description: "decription",
        dueDate: 30,
        priority: "high"
    },
    {
        title: "title",
        project: "inbox",
        description: "decription",
        dueDate: 30,
        priority: "medium"
    }
 
];

 */

export class Task {
    constructor(title, project, priority, dueDate, description) {
        this.title = title;
        this.project = project;
        this.priority = priority;
        this.dueDate = dueDate;
        this.description = description;
    }
}

