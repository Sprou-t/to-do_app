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
//this object has event listener that listens for detail button, edit,checkbox and remove
function createIndividualTodoItem(todoObj){
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

    // Add event listener for the detail button
    detailButton.addEventListener('click', () => {
        showTodoDetails(todoObj.title, todoObj.detail, todoObj.priority, todoObj.dueDate, todoObj.tag);
    });

    // Call todoChecked to add the event listener for the checkbox
    todoChecked(checkbox, titlePara, todoDiv);

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

//opens up a form to show the details inside
function showTodoDetails(title,detail,priority,dueDate,tag){
    let body = document.querySelector('body');

    function createDetailsForm(title,detail,priority,dueDate,tag){
        //create form
        let detailForm = document.createElement('div');
        detailForm.classList.add('detailForm');
        let firstRow = document.createElement('div');
        let titlePara = document.createElement('h3');
        titlePara.textContent = title;
        let closeBtn = document.createElement('button');
        closeBtn.textContent = 'x';
        firstRow.append(titlePara,closeBtn);
        let secondRow = document.createElement('p');
        secondRow.textContent = `Project: ${detail}`;
        let thirdRow = document.createElement('p');
        thirdRow.textContent = `Priority: ${priority}`;
        let fourthRow = document.createElement('p');
        fourthRow.textContent = `Due Date: ${dueDate}`;
        let tagRow = document.createElement('p');
        tagRow.textContent = `Tag: ${tag}`;
        detailForm.append(firstRow,secondRow,thirdRow,firstRow,tagRow);
        body.append(detailForm);
    
        //add styling to detailForm
        detailForm.style.position = 'absolute';
        detailForm.style.top = '40%';
        detailForm.style.left = '40%';
    }
//when details button clicked, a form opens up to which the values from the form inputs are injected here
    //add eventListener to detail button
    document.querySelector('.detailButton').addEventListener('click',() =>{
        createDetailsForm(title,detail,priority,dueDate,tag);//create detail form

    })
}
//edits the object using the form

//remove the object
export {todoObj,createIndividualTodoItem,colorCodingForPriority,todoChecked,showTodoDetails};