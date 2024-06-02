import '../index.css';
import '../reset.css';
import { createDiv, todoObj,colorCodingForPriority,todoChecked } from './object';
import { popup_todo } from './popup_forms';

function createWebpage(){
    const body = document.querySelector('body');

    const header = document.createElement('header');
    header.classList.add('header');
    header.textContent = '#TO-DO'

    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');


    const mainContent = document.createElement('div');
    mainContent.classList.add('mainContent');

    body.append(header,sidebar,mainContent);
}

    
let main = (()=>{
    createWebpage();

    let mainContent = document.querySelector('.mainContent');

    let firstTodo = todoObj('Gym','back workout','friday','High');
    let firstTodoDiv = createDiv(firstTodo);

    let colorCode = colorCodingForPriority(firstTodo.priority,firstTodoDiv);
    mainContent.appendChild(firstTodoDiv); //create a card
    

    let checkbox = document.querySelector('.checkbox');
    let titlePara = document.querySelector('.titlePara');
    let todoDiv = document.querySelector('.todoDiv')
    todoChecked(checkbox,titlePara,todoDiv);

    popup_todo(mainContent);

})();


