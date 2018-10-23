
// Create a new task function
// A new task will be created as incomplete
//Note the use of the word "this" which represents the parent object.
function newTask(title, description) {
  const task = {
    title      : title,
    description: description,
    complete   : false,
    logState: function () {
      console.log(this);//Logs the entire object to see it's full description.
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    markCompleted: function () {
      this.complete = true;
    }
  }
  return task;
}

// DRIVER CODE BELOW
//Declared 3 new tasks using OOP with newTask function above.
const task1 = newTask("Shopping", "Shopping at grocery store.");
const task2 = newTask("Exercising", "Running, Weight-lifting and Basketball.");
const task3 = newTask("Leisure", "Time to chillax and take a break.");

//Modify the properties of task1
task1.logState();//Check the status of the task
task1.markCompleted();
task1.logState();//Check the status of the task

//Modify the properties of task2
task2.logState();
task2.markCompleted();
task2.logState();


