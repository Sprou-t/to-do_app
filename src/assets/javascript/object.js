import pencilIcon from '../images_n_fonts/pencil.svg';
import trashCan from '../images_n_fonts/trash.svg';
//creates the obj
function todoObj(title,detail,dueDate,priority,tag){
    let toDOCard = {
        title: title,
        detail: detail,
        dueDate: dueDate,
        priority:priority,
        tag:tag
    }
    return toDOCard;
}

//appends the details of the object to the webpage
function createDiv(todoObj){
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todoDiv');

    const titlePara = document.createElement('p');
    titlePara.classList.add('titlePara');
    titlePara.textContent = todoObj.title;

    const dueDatePara = document.createElement('p');
    dueDatePara.textContent = todoObj.dueDate;
    dueDatePara.classList.add('dueDatePara');

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
    
    // Append the new todoDiv to the main content
    document.querySelector('.mainContent').appendChild(todoDiv);
    return todoDiv;
}


//styles the object based on priority values
function colorCodingForPriority(colorCoding,todoDiv){
    
    if(colorCoding==='High'){
        todoDiv.style.borderLeft = '10px solid red'
    }
    else if (colorCoding==='Medium'){
        todoDiv.style.borderLeft = '10px solid orange'
    }
    else{
        todoDiv.style.borderLeft = '10px solid green'
    }
}

//adds the checkbox to each todo object
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