let todoList = [];
displayItem();

function addTodo() {
    let inputElement = document.querySelector("#work");
    let dateElement = document.querySelector("#date");
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({ item: todoItem, dueDate: todoDate });
    inputElement.value = '';
    dateElement.value = '';

    displayItem();
}

function displayItem() {
    let containerElement = document.querySelector('.todo-container');

    let newHtml = '';

    for (let i = 0; i < todoList.length; i++) {
        let item = todoList[i].item;
        let date = todoList[i].dueDate;
        newHtml += `
        
        <span>${item}</span>
        <span>${date}</span>
        <button class="delete" onClick="todoList.splice(${i},1);displayItem();">Delete</button>
        
        `;
    }
    containerElement.innerHTML = newHtml;
}