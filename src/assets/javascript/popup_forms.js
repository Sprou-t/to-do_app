import { todoObj } from "./object";

function popup_todo(body){
    let formDiv = document.createElement('div')
    formDiv.classList.add('formDiv')
    let popupForm = document.createElement('form');
    popupForm.classList.add('popupForm');
    popupForm.method='dialog';

    let formTop = document.createElement('div');
    formTop.classList.add('formTop');

    //create title and X in header
    let headerWords = document.createElement('p');
    headerWords.textContent='CREATE NEW TODO...';
    let closeBtn = document.createElement('button');
    closeBtn.textContent = 'X';
    closeBtn.classList.add('closeBtn');  
    formTop.append(headerWords,closeBtn);

    let formLeft = document.createElement('div');
    formLeft.classList.add('formLeft');
    let tagPara = document.createElement('input');
    tagPara.placeholder = 'Tag? (optional)'
    tagPara.classList.add('tagPara');
    formLeft.append(tagPara);


    //create general and edit in form left

    let formRight = document.createElement('div');
    formRight.classList.add('formRight');
    //create title,details,date,priority and add button in form right
    let titleDiv = document.createElement('textarea');
    titleDiv.placeholder = 'Title: eg. Pay bills'
    titleDiv.classList.add('titleDiv');

    let detailDiv = document.createElement('textarea');
    detailDiv.placeholder='Details: eg. internet, phone, rent (optional)'
    detailDiv.classList.add('detailDiv')
    
    let dateDiv = document.createElement('div');
    dateDiv.classList.add('dateDiv');
    
    let dateLabel = document.createElement('p');
    dateLabel.textContent = 'Due Date:'
    let dateBtn = document.createElement('input');
    dateBtn.type = 'date';
    dateBtn.classList.add('dateBtn');
    dateBtn.setAttribute('id','todoDateFromDateBtn');
    dateBtn.setAttribute('name','todoDateFromDateBtn');
    dateDiv.append(dateLabel,dateBtn);

    let priorityDiv = document.createElement('div');
    priorityDiv.classList.add('priorityDiv');
    let priorityLabel = document.createElement('p');
    priorityLabel.textContent = 'Priority:'
    let lowPriorityBtn = document.createElement('button');
    lowPriorityBtn.textContent = 'Low'
    lowPriorityBtn.classList.add('lowPriorityBtn')
    let mediumPriorityBtn = document.createElement('button');
    mediumPriorityBtn.textContent = 'Medium'
    mediumPriorityBtn.classList.add('mediumPriorityBtn')
    let highPriorityBtn = document.createElement('button');
    highPriorityBtn.textContent = 'High';
    highPriorityBtn.classList.add('highPriorityBtn')
    let addNewTodoBtn = document.createElement('button');
    addNewTodoBtn.textContent= 'Create';
    addNewTodoBtn.classList.add('addNewTodo');
    priorityDiv.append(priorityLabel,lowPriorityBtn,mediumPriorityBtn,highPriorityBtn,addNewTodoBtn);
    formRight.append(titleDiv,detailDiv,dateDiv,priorityDiv);


    popupForm.append(formTop,formLeft,formRight);
    formDiv.append(popupForm);
    body.append(formDiv);
}

function createFormAndTodoObj(wrapper,body){
    let addBtn = document.createElement('button');
    addBtn.textContent = '+';
    addBtn.classList.add('addBtn');
    body.append(addBtn);
    addBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        popup_todo(body); //create pop up form
        wrapper.style.display = 'block';
        let closeBtn = document.querySelector('.closeBtn');
        let formDiv = document.querySelector('.formDiv');
        closeForm(closeBtn, formDiv, wrapper);

        //create obj from form inputs if user clicks 'create'
        //collect elements
        let addNewTodoBtn = document.querySelector('.addNewTodo');
        let title = document.querySelector('.titleDiv').value;
        let detail = document.querySelector('.detailDiv').value;
        let date = document.querySelector('.dateBtn').value;
        let lowPriorityBtn = document.querySelector('.lowPriorityBtn');
        let mediumPriorityBtn = document.querySelector('.mediumPriorityBtn');
        let highPriorityBtn = document.querySelector('.highPriorityBtn');
        

        let priorityDiv = document.querySelector('.priorityDiv');
        let previousButton;//variable to remove previous priority button's styling
        priorityDiv.addEventListener('click', (e) => {
            let target = e.target;
            // Check if the clicked target is a button with a priority class
            if (target.classList.contains('lowPriorityBtn') || 
                target.classList.contains('mediumPriorityBtn') || 
                target.classList.contains('highPriorityBtn')) {
        
                // If there was a previously clicked button, reset its styles
                if (previousButton) {
                    previousButton.style.backgroundColor = ''; // Reset background color
                    previousButton.style.color = ''; // Reset text color
                }
        
                // Apply new styles to the clicked button
                if (target.classList.contains('lowPriorityBtn')) {
                    target.style.backgroundColor = '#16a34a';
                    target.style.color = 'white';
                } else if (target.classList.contains('mediumPriorityBtn')) {
                    target.style.backgroundColor = 'orange';
                    target.style.color = 'white';
                } else if (target.classList.contains('highPriorityBtn')) {
                    target.style.backgroundColor = 'red';
                    target.style.color = 'white';
                }
        
                // Update the previously clicked button reference
                previousButton = target;
            }
        });
        addNewTodoBtn.addEventListener('click',()=>{

        })
        turnInputIntoObj()

    })
}

function closeForm(closeBtn, formDiv, wrapper){
    closeBtn.addEventListener('click',(e)=>{
        e.preventDefault(); 
        formDiv.remove();
        wrapper.style.display = 'none';
    })
}

function turnInputIntoObj(){
    //submit user input and create a todo Obj

}
export {popup_todo,createFormAndTodoObj};