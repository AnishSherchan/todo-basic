// ? Global storage for todo
const usersTodo = [];

// ? Function for adding todo
const addTodoItem = () => {
  // ?Getting input field using id
  const inputField = document.getElementById("todo-input-field");
  // ? Getting input field value using .value
  const inputValue = inputField.value;
  // ? declaring an object for todo item
  const todoItem = {
    title: inputValue,
    completed: false,
    id: `${inputValue}-${Math.floor(Math.random() * 101)}-${Math.floor(
      Math.random() * 61
    )}`,
  };
  // ? Pushing todoItem to usersTodo Array
  usersTodo.push(todoItem);
  // ? CLearing the input field
  inputField.value = "";
  // ? Calling the refresh function for refreshing the ul with new appended todo items
  refreshTodoList();
};

// ? Function for revalidating and appending new todo items from usersTodo array
const refreshTodoList = () => {
  pendingTask();
  // ? Getting ul tag
  const todoUl = document.getElementById("todo-list");
  // ? setting the ul tag empty for appending data
  todoUl.innerHTML = "";
  // ? Looping through each items (todo) from usersTodo array
  for (const item of usersTodo) {
    // ? Creating new li tag for each item
    const li = document.createElement("li");
    // ? displaying title for the li
    li.textContent = item.title;
    const button = document.createElement("button");
    const i = document.createElement("i");
    i.classList.add("fa", "fa-trash-o", "trash");
    button.appendChild(i);
    button.classList.add("delete_btn");
    // ? Adding delete event listener
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      if (confirm(`Are you sure you want to delete ${item.title}`)) {
        const index = usersTodo.indexOf(item);
        usersTodo.splice(index, 1);
        refreshTodoList();
      }
    });
    li.appendChild(button);
    li.addEventListener("click", (e) => {
      e.stopPropagation();
      item.completed = !item.completed;
      refreshTodoList();
    });
    if (item.completed) {
      li.classList.add("completed");
    }
    // ? adding li tag to its parent element ul
    todoUl.appendChild(li);
  }
};

const pendingTask = () => {
  const pendingNumElement = document.getElementById("num-pending");
  const pendingDiv = document.getElementById("pending-button");
  pendingNumElement.textContent = usersTodo.length;
  pendingDiv.innerHTML = "";
  if (usersTodo.length > 0) {
    const button = document.createElement("button");
    const buttonText = "Clear All";
    button.textContent = buttonText;
    pendingDiv.appendChild(button);
  }
};
pendingTask();
