import '../index.css';
import '../reset.css';
import { createIndividualTodoItem, todoObj,colorCodingForPriority,todoChecked, showTodoDetails} from './object';
import {createFormAndTodoObj} from './popup_forms';

function createWebpage(body){
    const header = document.createElement('header');
    header.classList.add('header');
    header.textContent = '#TO-DO'

    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');


    const mainContent = document.createElement('div');
    mainContent.classList.add('mainContent');

    const wrapper = document.createElement('div');//actually a blur out filter
    wrapper.classList.add('wrapper');

    body.append(header,sidebar,mainContent,wrapper);
}

    
let main = (()=>{
    const body = document.querySelector('body');
    createWebpage(body);

    let mainContent = document.querySelector('.mainContent');

    let wrapper = document.querySelector('.wrapper');
    createFormAndTodoObj(wrapper,body,createIndividualTodoItem); 
    //creates a form once user submits inputs AND also has color coding effect
    
    
})();


