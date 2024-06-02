function popup_todo(mainContent){
    

    let popupDiv = document.createElement('dialog');
    popupDiv.classList.add('popupDiv');
    let innerForm = document.createElement('form');
    innerForm.classList.add('innerForm');

    let formTop = document.createElement('div');
    formTop.classList.add('formTop');

    //create title and X in header
    let headerWords = document.createElement('p');
    headerWords.textContent='Create TODO';
    formTop.append(headerWords);

    let formLeft = document.createElement('div');
    formLeft.classList.add('formLeft');


    //create general and edit in form left

    let formRight = document.createElement('div');
    formRight.classList.add('formRIght')

    //create title,details,date,priority and add button in form right
    
    innerForm.append(formTop,formLeft,formRight);
    popupDiv.append(innerForm);
    mainContent.append(popupDiv);
    popupDiv.showModal();
}


export {popup_todo};