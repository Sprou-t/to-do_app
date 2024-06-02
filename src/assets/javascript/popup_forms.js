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
    headerWords.textContent='Create TODO';
    let closeBtn = document.createElement('button');
    closeBtn.textContent = 'X';
    closeBtn.classList.add('closeBtn');  
    formTop.append(headerWords,closeBtn);

    let formLeft = document.createElement('div');
    formLeft.classList.add('formLeft');
    formLeft.textContent = 'LEFT';


    //create general and edit in form left

    let formRight = document.createElement('div');
    formRight.classList.add('formRIght');
    formRight.textContent = 'RIGHT'

    //create title,details,date,priority and add button in form right
    
    popupForm.append(formTop,formLeft,formRight);
    formDiv.append(popupForm);
    body.append(formDiv);
}

function createFormBtn(wrapper,body){
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
        closeForm(closeBtn, formDiv, wrapper)
    })
}

function closeForm(closeBtn, formDiv, wrapper){
    closeBtn.addEventListener('click',(e)=>{
        e.preventDefault(); 
        formDiv.remove();
        wrapper.style.display = 'none';
    })
}
export {popup_todo,createFormBtn};