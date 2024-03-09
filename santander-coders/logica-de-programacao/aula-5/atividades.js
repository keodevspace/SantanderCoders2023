// const alunos = [
//   { nome: "Ana", notas: [7, 8, 9] },
//   { nome: "Pedro", notas: [5, 6, 7] },
//   { nome: "Maria", notas: [9, 8, 10] },
//   { nome: "João", notas: [6, 7, 8] },
//   { nome: "Lucas", notas: [8, 9, 7] },
//   { nome: "Julia", notas: [10, 8, 9] },
// ];

// const alunosComMedia = alunos.map(({ nome, notas }) => ({
//   nome,  
//   media: notas.reduce((a, b) => a + b) / notas.length,
// }));

// console.log(alunosComMedia);


// do a complet todo list with the following requirements:
// 1. add a new task
// 2. remove a task
// 3. mark a task as completed
// 4. list all tasks
// 5. list all completed tasks
// 6. list all uncompleted tasks
// 7. list all tasks with a specific priority
// 8. list all tasks with a specific tag
// 9. list all tasks that contain a specific word
// 10. create a new task with a specific priority
// 11. create a new task with a specific tag
// 12. create css to style the todo list
// 13. create html to display the todo list
// 14. create javascript to handle the todo list

let tasks = [];

function addTask(task) {
  tasks.push(task);
}

function removeTask(task) {
  tasks = tasks.filter((t) => t !== task);
}

function markAsCompleted(task) {
  tasks = tasks.map((t) => t === task ? { ...t, completed: true } : t);
}

function listAllTasks() {
  return tasks;
}

function listAllCompletedTasks() {
  return tasks.filter((t) => t.completed);
}

function listAllUncompletedTasks() {
  return tasks.filter((t) => !t.completed);
}

function listAllTasksWithPriority(priority) {
  return tasks.filter((t) => t.priority === priority);
}

function listAllTasksWithTag(tag) {
  return tasks.filter((t) => t.tags.includes(tag));
}

function listAllTasksThatContainWord(word) {
  return tasks.filter((t) => t.description.includes(word));
}

function createTask(description, priority, tags) {
  return {
    description,
    priority,
    tags,
    completed: false,
  };
}

function createTaskWithPriority(description, priority, tags) {
  return {
    description,
    priority,
    tags,
    completed: false,
  };
}

function createTaskWithTag(description, priority, tags) {
  return {
    description,
    priority,
    tags,
    completed: false,
  };
}







