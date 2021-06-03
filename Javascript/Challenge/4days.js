const body = document.querySelector("body");
const color = ["#55efc4", "#fab1a0", "#ffeaa7"];

body.style.backgroundColor = color[2];

const handleResize = (e) => {
    
    if (window.innerWidth <= 700) {
        body.style.backgroundColor = color[0]; // 초록
    } else if (window.innerWidth <= 1000) {
        body.style.backgroundColor = color[2]; // 베이지
    } else {
        body.style.backgroundColor = color[1]; // 분홍
    }
}


window.addEventListener("resize", handleResize);