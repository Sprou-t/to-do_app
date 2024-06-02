import '../index.css';
import '../reset.css';
import { createDiv, todoObj,colorCodingForPriority,todoChecked } from './object';
import {createFormBtn} from './popup_forms';

function createWebpage(body){
    const header = document.createElement('header');
    header.classList.add('header');
    header.textContent = '#TO-DO'

    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');


    const mainContent = document.createElement('div');
    mainContent.classList.add('mainContent');

    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    body.append(header,sidebar,mainContent,wrapper);
}

    
let main = (()=>{
    const body = document.querySelector('body');
    createWebpage(body);

    let mainContent = document.querySelector('.mainContent');

    let firstTodo = todoObj('Gym','back workout','friday','High');
    let firstTodoDiv = createDiv(firstTodo);

    let colorCode = colorCodingForPriority(firstTodo.priority,firstTodoDiv);
    mainContent.appendChild(firstTodoDiv); //create a card
    

    let checkbox = document.querySelector('.checkbox');
    let titlePara = document.querySelector('.titlePara');
    let todoDiv = document.querySelector('.todoDiv')
    todoChecked(checkbox,titlePara,todoDiv);

    let wrapper = document.querySelector('.wrapper');
    createFormBtn(wrapper,body);
})();


