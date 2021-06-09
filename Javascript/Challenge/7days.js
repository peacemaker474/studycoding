const form = document.querySelector(".toDoList"),
    input = form.querySelector("input");

const nowToDoList = document.querySelector(".nowToDoList"),
    finishedList = document.querySelector(".finishedList");

const USER_PD = "PENDING",
    USER_FN = "FINISHED";

let toDoList = [],
    finishList = [];

const handleReCheck = (event) => {
    const btn = event.target;
    const reCheck = btn.parentNode;
    finishedList.removeChild(reCheck);
    const sendList = finishList.filter(toDo => toDo.id === parseInt(reCheck.id));
    const sendText = sendList[0].text;
    showNowList(sendText);
    const updateList = finishList.filter(toDo => toDo.id !== parseInt(reCheck.id));
    finishList = updateList;
    saveLocalDate();
};

const handleCheck = (event) => {
    const btn = event.target;
    const nowCheck = btn.parentNode;
    nowToDoList.removeChild(nowCheck);
    const sendList = toDoList.filter(toDo => toDo.id === parseInt(nowCheck.id));
    const sendText = sendList[0].text;
    const id = sendList[0].id;
    showFinishList(sendText, id);
    const updateList = toDoList.filter(toDo => toDo.id !== parseInt(nowCheck.id));
    toDoList = updateList;
    saveLocalDate();
};

const handleFinishDelete = (event) => {
    const finishDelete = event.target.parentNode;
    finishedList.removeChild(finishDelete);
    const changeList = finishList.filter(toDo => toDo.id !== parseInt(finishDelete.id));
    finishList = changeList;
    saveLocalDate();
};

const handleNowDelete = (event) => {
    const nowDelete = event.target.parentNode;
    nowToDoList.removeChild(nowDelete);
    const changeList = toDoList.filter(toDo => toDo.id !== parseInt(nowDelete.id));
    toDoList = changeList;
    saveLocalDate();
};


function saveLocalDate () {
    localStorage.setItem(USER_PD, JSON.stringify(toDoList));
    localStorage.setItem(USER_FN, JSON.stringify(finishList));
}

const showFinishList = (text, id) => {
    const finishLi = document.createElement("li");
    const finishBtn = document.createElement("button");
    const finishCheckBtn = document.createElement("button");
    const finishLists = document.createElement("span");

    finishBtn.innerText = "❌";
    finishCheckBtn.innerText = "✅";

    finishBtn.addEventListener("click", handleFinishDelete);
    finishCheckBtn.addEventListener("click", handleReCheck);

    finishLists.innerText = text;
    finishLi.appendChild(finishBtn);
    finishLi.appendChild(finishCheckBtn);
    finishLi.prepend(finishLists);
    finishLi.id = id;
    finishedList.appendChild(finishLi);

    const finishObj = { text, id };

    finishList.push(finishObj);
    saveLocalDate();
}


const showNowList = (text, id = Date.now()) => {
    const nowLi = document.createElement("li");
    const nowDeleteBtn = document.createElement("button");
    const nowCheckBtn = document.createElement("button");
    const nowLists = document.createElement("span");

    nowDeleteBtn.innerText = "❌";
    nowCheckBtn.innerText = "✅";

    nowDeleteBtn.addEventListener("click", handleNowDelete);
    nowCheckBtn.addEventListener("click", handleCheck);

    nowLists.innerText = text;
    nowLi.appendChild(nowDeleteBtn);
    nowLi.appendChild(nowCheckBtn);
    nowLi.prepend(nowLists);
    nowLi.id = id
    nowToDoList.appendChild(nowLi);

    const nowObj = { text, id };

    toDoList.push(nowObj);
    saveLocalDate();
}

const handleSubmit = (event) => {
    event.preventDefault();
    const currentValue = input.value;
    showNowList(currentValue);
    input.value = "";
};

const loadToDos = () => {
    const loadNowList = localStorage.getItem(USER_PD);
    const loadFinishList = localStorage.getItem(USER_FN);
    if (loadNowList !== null) {
        const parsedNowList = JSON.parse(loadNowList);
        parsedNowList.forEach(toDo => showNowList(toDo.text, toDo.id));
    }
    if (loadFinishList !== null) {
        const parsedFinishList = JSON.parse(loadFinishList);
        parsedFinishList.forEach(toDo => showFinishList(toDo.text, toDo.id));
    }
};

function showToDoList () {
    loadToDos();
    form.addEventListener("submit", handleSubmit);
}

showToDoList();