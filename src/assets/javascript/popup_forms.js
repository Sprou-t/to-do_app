import { todoObj ,colorCodingForPriority, createIndividualTodoItem} from "./object";
import { parse,format } from "date-fns";

function createPopupFormForTodoItemCreation(body){
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

    //create the priority section
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

//creates form when + button clicked, allows user to close form when X clicked  
//and allows users to submit their input and create todo Objects
//also add tag buttons to the sidebar
function createFormAndTodoObj(wrapper,body,createDiv){
    let addBtn = document.createElement('button');
    addBtn.textContent = '+';
    addBtn.classList.add('addBtn');
    body.append(addBtn);
    addBtn.addEventListener('click',(e)=>{ //creates a form to let user give i/ps
        e.preventDefault();
        createPopupFormForTodoItemCreation(body); //create pop up form
        wrapper.style.display = 'block'; //blur out background
        let closeBtn = document.querySelector('.closeBtn');
        let formDiv = document.querySelector('.formDiv');
        closeForm(closeBtn, formDiv, wrapper); //close background

        //create obj from form inputs if user clicks 'create'
        let priorityDiv = document.querySelector('.priorityDiv');
        let previousButton;//variable to remove previous priority button's styling
        let previousButtonValue;
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
                    previousButtonValue = 'Low';
                } else if (target.classList.contains('mediumPriorityBtn')) {
                    target.style.backgroundColor = 'orange';
                    target.style.color = 'white';
                    previousButtonValue = 'Medium';
                } else if (target.classList.contains('highPriorityBtn')) {
                    target.style.backgroundColor = 'red';
                    target.style.color = 'white';
                    previousButtonValue = 'High';
                }

                else{
                    target.style.backgroundColor = 'white';
                }
        
                // Update the previously clicked button reference
                previousButton = target;
            }
        });
        //collect elements
        
//add the values obtained from the pop up form to the todo obj when create button clicked
        document.querySelector('.addNewTodo').addEventListener('click', (e) => {
            e.preventDefault();
            let titleValue = document.querySelector('.titleDiv').value;
            let detailValue = document.querySelector('.detailDiv').value;
            let dateValue = document.querySelector('.dateBtn').value;
            let convertedDateValue;
            if (dateValue){
                convertedDateValue = formatDate(dateValue);
            }
            else{
                convertedDateValue = '';
            }
            
            let tagValue = document.querySelector('.tagPara').value;//refers to the tag data input in the form
            if(!tagValue){
                tagValue = 'General'
            }
            let todoObject = todoObj(titleValue,detailValue,convertedDateValue,previousButtonValue,tagValue);
//line below executes 2 functions to create the object div as well as to color code it
            colorCodingForPriority(previousButtonValue,createIndividualTodoItem(todoObject));
            handleTagSubmission(tagCounts,tagValue);
            formDiv.remove();
            wrapper.style.display = 'none';

        })
    })
}

// Declare tagCounts outside the function to persist between calls
let tagCounts = {};
//create a function that when user submits the input form, searches the currently available tags
//if no current tag is found, then a new tag will be appended to sidebar
//tagValue is the value that user keys in for tag i/p
//tagCount is the object that stores the tag key and their occurence numbers
function handleTagSubmission(tagCounts,tagValue){
    let sidebar = document.querySelector('.sidebar')
    let tagList = document.querySelectorAll('.todoTag');//selects all the available tag in sidebar
    let newTag;
    let previousClickedTag;

    let adjustedTagValue = tagValue.trim()//remove all whitespaces
    if (adjustedTagValue ===''){
        adjustedTagValue = 'General';
    }

   // Initialize the count for the tag if it does not exist in tagCounts
   if (!tagCounts[adjustedTagValue]) {
    tagCounts[adjustedTagValue] = 0;
}

// Check if the tag already exists
    let tagExists = false;
    tagList.forEach(tag => {
        if (tag.textContent.split(' (')[0] === adjustedTagValue) {
            // If the tag exists, update the counter
            tagCounts[adjustedTagValue]++;
            tag.textContent = `${adjustedTagValue} (${tagCounts[adjustedTagValue]})`;
            tagExists = true;
        }
    });

    // If the tag does not exist, create and append a new tag
    if (!tagExists) {
        newTag = document.createElement('button');
        newTag.classList.add('todoTag');
        tagCounts[adjustedTagValue] = 1; // Initialize count for new tag
        newTag.textContent = `${adjustedTagValue} (${tagCounts[adjustedTagValue]})`;
        sidebar.append(newTag);
    }
    //add a upscaling styling effect when user clicks
    document.querySelector('.sidebar').addEventListener('click', (e) => {
        if (e.target.classList.contains('todoTag')) {
            if (previousClickedTag) {//rempve previously clcked tag's styling effect
                previousClickedTag.classList.remove('scaled');
            }
            e.target.classList.add('scaled');
            previousClickedTag = e.target;
        }
    });
}

function closeForm(closeBtn, formDiv, wrapper){
    closeBtn.addEventListener('click',(e)=>{
        e.preventDefault(); 
        formDiv.remove();
        wrapper.style.display = 'none';
    })
}

const formatDate = (dateString) => {
    // Parse the date string into a Date object
    //the pattern (found in the docs) basically tells parse what pattern dateString has to which parse will process and turn into an obj
    const parsedDate = parse(dateString, 'yyyy-MM-dd', new Date());
  
    // Format the date into "DD MMMM, Month in alphabets "
    const formattedDate = format(parsedDate, 'dd MMMM, eee');
  
    return formattedDate;
  }

  
export {createPopupFormForTodoItemCreation,createFormAndTodoObj,formatDate};