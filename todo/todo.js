const fs = require('fs');
const filePath = "./tasks.json";

const loadTasks = () => {
  try {
    // NODE does not give the text directly
    // it gives a data buffer (somthing like a raw binary data)
    const dataBuffer = fs.readFileSync(filePath);
    // converts the byte data into text ('["hi"]')
    const dataJSON = dataBuffer.toString();
    // converts the text data to JS object (["hi"])
    return JSON.parse(dataJSON);
  }
  catch {
    return [];
  }
}

const saveTasks = (tasks) => {
  // change to string back to store to file.
  // but in the file (.json), it shows in the format of charachters.
  // this means that the file contains text that represents an array
  const dataJSON = JSON.stringify(tasks);
  fs.writeFileSync(filePath, dataJSON);
  console.log("Tasks Added");
}

const addTask = (task) => {
  // load the existing tasks
  const tasks = loadTasks();
  tasks.push(task);
  saveTasks(tasks);
}

const listTasks = () => {
  const tasks = loadTasks();
  tasks.forEach((task, index) => {
    console.log(`${index + 1}: ${task}`);
  });
}

const removeTask = (taskInt) => {
  const tasks = loadTasks();
  const newTasks = tasks.filter((task, index) => {
    return taskInt !== (index + 1);
  });
  saveTasks(newTasks);
}

// process.argv is used to get the arguments from the command line
// node is the argv[0] command
// file/path is the argv[1] command
const command = process.argv[2]; // this shares the command
const argument = process.argv[3]; // this shares the argument

if (command === "add") {
  addTask(argument);
}
else if (command === "list") {
  listTasks();
}
else if (command === "remove") {
  removeTask(parseInt(argument))
}
else {
  console.log("Command not found!");
}
