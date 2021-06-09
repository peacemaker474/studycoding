const form = document.querySelector(".toDoList"),
    input = form.querySelector("input"),
    pendingUl = document.querySelector(".pendingList");

const finishUl = document.querySelector(".finishedList");

const USER_PD = "PENDING",
    USER_FN = "FINISHED";

let toDoList = [],
    finishList = [];

    
    const handleReSendDate = (event) => {
    const reSendList = event.target.parentNode;
    const addFinishList = finishList.filter(finish => finish.id === parseInt(reSendList.id));
    const newChange = finishList.filter(toDo => toDo.id !== parseInt(reSendList.id));
    toDoList.push(...addFinishList);
    finishList = newChange;
    pendingUl.appendChild(reSendList);
    
}

const handleSendList = (event) => {
    const sendList = event.target.parentNode;
    const newControl = event.target;
    const addFinishList = toDoList.filter(finish => finish.id === parseInt(sendList.id));
    const newChange = toDoList.filter(toDo => toDo.id !== parseInt(sendList.id));
    finishList.push(...addFinishList);
    toDoList = newChange;
    finishUl.appendChild(sendList);
    newControl.addEventListener("click", handleReSendDate);
    saveLocalStorage();
}

const handleDeleteList = (event) => {
    const deleteList =  event.target.parentNode;
    pendingUl.removeChild(deleteList);
    const changeList = toDoList.filter(toDo => toDo.id !== parseInt(deleteList.id));
    toDoList = changeList;
    saveLocalStorage();
}

const saveLocalStorage = () => {
    localStorage.setItem(USER_PD, JSON.stringify(toDoList));
    localStorage.setItem(USER_FN, JSON.stringify(finishList));
};

const writeList = (text, newtext) => {
    const padingli = document.createElement("li");
    const deleteBtn = document.createElement("button");
    const sendBtn = document.createElement("button");
    const lists = document.createElement("span");
    const newId = Date.now();

    deleteBtn.innerText = "❌";
    sendBtn.innerText = "✅";
    
    deleteBtn.addEventListener("click", handleDeleteList);
    sendBtn.addEventListener("click", handleSendList);
    
    lists.innerText = text;
    padingli.appendChild(deleteBtn);
    padingli.appendChild(sendBtn);
    padingli.appendChild(lists);
    padingli.prepend(lists);
    padingli.id = newId;
    pendingUl.appendChild(padingli);
    
    const localObj = { 
        id : newId,
        text
    };

    toDoList.push(localObj);
    saveLocalStorage();
}

const handleAddDate = (event) => {
    event.preventDefault();
    const currentValue = input.value;
    writeList(currentValue);
    input.value = "";
}


const loadLocalStorage = () => {
    const newList = localStorage.getItem(USER_PD);
    const futureList = localStorage.getItem(USER_FN);
    if (newList !== null) {
        const parsedList = JSON.parse(newList);
        parsedList.forEach((list) => {writeList(list.text)});
    }
    if (futureList !== null) {
        const finishParseList = JSON.parse(futureList);
        finishParseList.forEach((future) => {writeList(future.text)});
    }
}

function showToDoList () {
    loadLocalStorage();
    form.addEventListener("submit", handleAddDate);
}

showToDoList();