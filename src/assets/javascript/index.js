import '../index.css';
import '../reset.css';
import { createIndividualTodoItem, todoObj,colorCodingForPriority,todoChecked, showTodoDetails} from './object';
import {createFormAndTodoObj,filterTodosByTag} from './popup_forms';

function createWebpage(body){
    const header = document.createElement('header');
    header.classList.add('header');
    header.textContent = '#TO-DO'

    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    let tagHeading = document.createElement('p');
    tagHeading.textContent = 'Tags';
    sidebar.append(tagHeading);


    const mainContent = document.createElement('div');
    mainContent.classList.add('mainContent');

    const wrapper = document.createElement('div');//WRAPPER is a blur out filter
    wrapper.classList.add('wrapper');

    body.append(header,sidebar,mainContent,wrapper);
    filterTodosByTag();
}

    
let main = (()=>{
    const body = document.querySelector('body');
    createWebpage(body);

    let mainContent = document.querySelector('.mainContent');

    let wrapper = document.querySelector('.wrapper');
    createFormAndTodoObj(wrapper,body); 
    //creates a form once user submits inputs AND also has color coding effect
    
    
})();


