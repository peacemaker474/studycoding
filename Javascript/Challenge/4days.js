const body = document.querySelector("body");
const color = ["#55efc4", "#fab1a0", "#ffeaa7"];

body.style.backgroundColor = color[2];

const handleResize = (e) => {
    const width = window.innerWidth;

    if (0 < width && width <= 700) {
        body.style.backgroundColor = color[0]; // 초록
    } else if (701 < width && width <= 1200) {
        body.style.backgroundColor = color[2]; // 베이지
    } else {
        body.style.backgroundColor = color[1]; // 분홍
    }
}


window.addEventListener("resize", handleResize);