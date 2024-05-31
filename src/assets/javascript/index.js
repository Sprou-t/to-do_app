import '../index.css';
import '../reset.css';
import { createDiv, createTodo } from './object';

const body = document.querySelector('body');

const header = document.createElement('header');
header.classList.add('header');
header.textContent = '#TO-DO'
const sidebar = document.createElement('div');
sidebar.classList.add('sidebar');

const mainContent = document.createElement('div');
mainContent.classList.add('mainContent');
let firstTodo = createTodo('Gym','back workout','friday','high');
let firstTodoDiv = createDiv(firstTodo);
mainContent.appendChild(firstTodoDiv);
//create a card

body.append(header,sidebar,mainContent)


