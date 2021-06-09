const select = document.querySelector("select"),
    option = document.querySelectorAll("option");
const USER_LS = "country";

const handleSaveDate = (event) => {
    const userValue = select.value;
    if(userValue !== "") {
        localStorage.setItem(USER_LS, userValue);
    }
}

select.addEventListener("change", handleSaveDate);

function init(){
    const currentValue = localStorage.getItem(USER_LS);
    select.value = currentValue;

    // for (let i = 0; i < option.length; i++) {
    //   if (option[i].value === currentValue) {
    //     option[i].setAttribute("selected", "");
    //   }
    // }
    // setAttribute를 이용하여, option의 selected로 설정 가능

}

init();