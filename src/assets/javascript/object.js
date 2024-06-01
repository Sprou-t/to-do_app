import pencilIcon from '../images_n_fonts/pencil.svg';
import trashCan from '../images_n_fonts/trash.svg';

function todoObj(title,description,dueDate,priority){
    let toDOCard = {
        title: title,
        description: description,
        dueDate: dueDate,
        priority:priority
    }
    return toDOCard;
}

function createDiv(createTodo){
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todoDiv');

    const titlePara = document.createElement('p');
    titlePara.classList.add('titlePara');
    titlePara.textContent = createTodo.title;

    const dueDatePara = document.createElement('p');
    dueDatePara.textContent = createTodo.dueDate;

    const checkbox = document.createElement('input');
    checkbox.classList.add('checkbox');
    checkbox.type = 'checkbox';

    const detailButton = document.createElement('button');
    detailButton.classList.add('detailButton');
    detailButton.textContent = 'DETAILS';

    const editIcon = document.createElement('img');
    editIcon.classList.add('editIcon');
    editIcon.src = pencilIcon;

    const trashIcon = document.createElement('img');
    trashIcon.classList.add('trashIcon');
    trashIcon.src = trashCan;

    todoDiv.append(checkbox, titlePara, detailButton, dueDatePara, editIcon, trashIcon);
    return todoDiv;
}

function addTodo(){
    let addBtn = document.createElement('button').classList.add('addBtn');
    addBtn.textContent = '+';
}
//stylings
function colorCodingForPriority(colorCoding,todoDiv){
    
    if(colorCoding==='High'){
        todoDiv.style.borderLeft = '10px solid red'
    }
    else if (colorCoding==='Medium'){
        todoDiv.style.borderLeft = '10px solid yellow'
    }
    else{
        todoDiv.style.borderLeft = '10px solid green'
    }
}

function todoChecked(checkbox,titlePara,todoDiv){
    checkbox.addEventListener('click',()=>{
        if(checkbox.checked == true){
            titlePara.style.textDecoration = 'line-through';
            todoDiv.style.opacity = '0.7';
        }
        
        else{
            titlePara.style.textDecoration = 'none';
            todoDiv.style.opacity = '1';
        }
        
    })
}
export {todoObj,createDiv,colorCodingForPriority,todoChecked};