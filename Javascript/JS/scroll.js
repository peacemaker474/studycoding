let btn = document.getElementById("btn"),
    // document의 높이값을 알기 위해 html 문서 자체를 가지고 옴
    docElem = document.documentElement,
    // document 와 body의 높이의 차이를 구하기 위해
    offset,
    // 올라간 scroll 양
    scrollPos,
    // 올라간 document의 높이 값
    docHeight;

// document의 높이 계산
// offsetHeight = 요소의 높이값을 구해 옴
// 브라우저마다 계산되는 높이값이 서로 상이
docHeight = Math.max(docElem.scrollHeight, docElem.offsetHeight);

// 문서마다 높이가 있을 수도 없을 수도 있기 때문에, 문서의 높이가 있을 경우를 조건문
if(docHeight !== 'undefined'){
    offset = docHeight / 4;
}

/* 
    실시간으로 scroll의 위치값을 반환
    특정 높이의 도달하면 btn이 활성화 할 수 있도록 class값을 부여 => 필수 X
*/
function handleScroll() {
    scrollPos = docElem.scrollTop;
    btn.className = (scrollPos > offset) ? 'visible' : '';
}

window.addEventListener('scroll', handleScroll)

// a 태그의 고유 기능을 제거 및 최상단으로 끌어올리기

function scrollToTop () {
    const scrollInterval = setInterval(function () {
        (scrollPos !== 0 ? window.scrollBy(0, -55) : clearInterval(scrollInterval));
    }, 15)
}

btn.addEventListener('click', (event) => {
    event.preventDefault();
    scrollToTop();
});