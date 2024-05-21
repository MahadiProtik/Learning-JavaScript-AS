import { Todo } from "./Todo.js"



let container = document.querySelector('.container')
let todoForm = document.querySelector('.todo-form')
let todoInput = document.querySelector('#todoInput')
let addButton = document.querySelector('#addButton')
let todoLists = document.getElementById('lists')
let messageElement = document.getElementById('message')

let showMessage = (text, status)=>{
    messageElement.textContent = text;
    messageElement.classList.add(`bg-${status}`);
    setTimeout(()=>{
        messageElement.textContent = '';
        messageElement.classList.remove(`bg-${status}`);
    },1000)
}

let createTodo = (newTodo)=>{
    let todoElement = document.createElement('li');
    todoElement.id = newTodo.todoId;
    todoElement.classList.add('li-style')
    todoElement.innerHTML = `
        <span>${newTodo.todoValue}</span>
        <span> <button class='btn' id='deleteButton'> <i class='fa fa-trash'></i> </button> </span>
    `
    todoLists.appendChild(todoElement)

    let deleteButton = document.getElementById('deleteButton');
    deleteButton.addEventListener('click', deleteTodo)
}

let deleteTodo = (event)=>{
    let selectedTodo = event.target.parentElement.parentElement.parentElement
    todoLists.removeChild(selectedTodo)
    showMessage('Todo is deleted', 'danger');
    // let todoId = selectedTodo.id;
    let todos = getTodosFromLocalStorage()
    todos = todos.filter((todo)=> todo.todoId !== selectedTodo.id);
    localStorage.setItem('myTodos', JSON.stringify(todos));
}

let getTodosFromLocalStorage = ()=>{
    return localStorage.getItem('myTodos') ? JSON.parse(localStorage.getItem('myTodos')) : [];
}

let addTodo = (event)=>{
    event.preventDefault()
    let todoValue =todoInput.value;
    
    let todoId = Date.now().toString()

    let newTodo = new Todo(todoId, todoValue)

    createTodo(newTodo);
    showMessage('Todo is successed', 'success')

    let todos = getTodosFromLocalStorage()
    todos.push({newTodo});
    localStorage.setItem('myTodos', JSON.stringify(todos));
    todoInput.value = '';
}

let loadTodos = ()=>{
    let todos =getTodosFromLocalStorage();
    todos.map((todo)=>createTodo(todo))
}

todoForm.addEventListener('submit', addTodo)
window.addEventListener('DOMContentLoaded', loadTodos)