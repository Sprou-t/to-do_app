function createTodo(title,description,dueDate,priority){
   //create obj
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
    const titlePara = document.createElement('p');
    const descriptionPara = document.createElement('p');
    const dueDatePara = document.createElement('p');
    const priorityPara = document.createElement('p');
    titlePara.textContent=`${createTodo.title}`;
    descriptionPara.textContent = `${createTodo.description}`;
    dueDatePara.textContent = `${createTodo.dueDate}`;
    priorityPara.textContent =`${createTodo.priority}`
    todoDiv.append(titlePara,descriptionPara,dueDatePara,priorityPara);
    return todoDiv;
}

export {createTodo,createDiv};