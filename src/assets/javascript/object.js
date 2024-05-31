import pencilIcon from '../images_n_fonts/pencil.svg';
import trashCan from '../images_n_fonts/trash.svg';

function createTodo(title,description,dueDate,priority){
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
    todoDiv.classList.add('todoDiv')
    
    const titlePara = document.createElement('p');
    titlePara.classList.add('titlePara');
    // const descriptionPara = document.createElement('p');
    const dueDatePara = document.createElement('p');
    // const priorityPara = document.createElement('p');
    titlePara.textContent=`${createTodo.title}`;
    // descriptionPara.textContent = `${createTodo.description}`;
    dueDatePara.textContent = `${createTodo.dueDate}`;
    // priorityPara.textContent =`${createTodo.priority}`


    const checkbox = document.createElement('input');
    checkbox.classList.add('checkbox');
    checkbox.type = 'checkbox';

    const detailButton = document.createElement('button');
    detailButton.classList.add('detailButton');
    detailButton.textContent = `DETAILS`;

    const editIcon = document.createElement('img');
    editIcon.classList.add('editIcon');
    editIcon.src = pencilIcon;

    const trashIcon = document.createElement('img');
    trashIcon.classList.add('trashIcon');
    trashIcon.src = trashCan;

    //add color coding based on priority
    if(createTodo.priority==='High'){
        todoDiv.style.borderLeft = '10px solid red'
    }
    else if (createTodo.priority==='Medium'){
        todoDiv.style.borderLeft = '10px solid yellow'
    }
    else{
        todoDiv.style.borderLeft = '10px solid green'
    }
    todoDiv.append(checkbox,titlePara,detailButton,dueDatePara,editIcon,trashIcon);
    return todoDiv;
}

export {createTodo,createDiv};