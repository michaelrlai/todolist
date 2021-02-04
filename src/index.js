import * as display from "./display";
import { Task } from "./createtask";


/* const person = [
    {
        name: "bob",
        age: 25,
        todo: [
            "walk",
            "eat",
            "talk"
        ]
    },
    {
        name: "tom",
        age: 25,
        todo: [
            "walk",
            "eat",
            "talk"
        ]
    }
];

console.log(person);

console.log(JSON.stringify(person));
 */

//     constructor(title, project, priority, dueDate, description)


let testTask = new Task("TITLE", "zufaOjECT", "HIGh", "23", "DESCRIPT");
let testTask2 = new Task("TITLE", "ardfasfuject2", "HIGh", "23", "DESCRIPT");
let testTask3 = new Task("TITLE", "sfdasruject2", "HIGh", "23", "DESCRIPT");


let testArray = [];

testArray.push(testTask);
testArray.push(testTask2);
testArray.push(testTask3);

console.table(testArray);


display.createProjectsList(testArray);




document.addEventListener("click", function(e) {
    console.log(e.target);
    if (e.target.matches(".button-inbox")) {
        display.showInbox();
    }
    if (e.target.matches(".button-projects")) {
        display.toggleProjectsList();
    }
});