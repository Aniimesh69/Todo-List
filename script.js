let todos = [];

function addTodo() {
  const input = document.querySelector("#todo-input");
  todos.push({
    title: input.value
  })
  render()
  input.value = "";
}

function deleteLastTodo() {
  todos.splice(todos.length - 1, 1) // remove the last element 
  render()
}
function deleteFirstTodo() {
  todos.splice(0, 1) // remove the first element 
  render()
}

function createTodoComponent(todo, index) {
  const div = document.createElement("div");
  div.className = "todo"; // add the .todo class
  const h1 = document.createElement("h1");
  const button = document.createElement("button");
  button.innerHTML = "Delete"
  button.onclick = function () {
    todos.splice(index, 1); 
    render(); // Re-render the todos
  }
  button.className = "next-line";
  h1.innerHTML = todo.title;
  div.append(h1)
  div.append(button)
  return div
}

// react 
function render() {
  document.querySelector("#todos").innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    const element = createTodoComponent(todos[i], i);
    document.querySelector("#todos").appendChild(element)
  }
}

