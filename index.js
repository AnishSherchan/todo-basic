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
  // ? Getting ul tag
  const todoUl = document.getElementById("todo-list");
  // ? setting the ul tag empty for appending data
  todoUl.innerHTML = "";
  // ? Looping through each items (todo) from usersTodo array
  for (const item of usersTodo) {
    // ? Creating new li tag for each item
    const li = document.createElement("li");
    li.addEventListener("click", () => {
      console.log(item.title);
    });
    // ? displaying title for the li
    li.textContent = item.title;
    // ? adding li tag to its parent element ul
    todoUl.appendChild(li);
  }
};
