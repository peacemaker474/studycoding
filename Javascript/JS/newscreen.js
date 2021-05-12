// 변수를 지정
const sliderWrapper = document.getElementsByClassName("container"),
    sliderContainer = document.getElementsByClassName("slider-container"),
    slides = document.getElementsByClassName("slide"),
    slideCount = Array.from(slides).length,
    navPrev = document.getElementById("prev"),
    navNext = document.getElementById("next");

let currentIndex = 0, // 시작과 끝에 화살표 버튼을 없애기 위해 변수로 지정
    topHeight = 0; // 슬라이드의 높이를 저장하기 위해 변수 선언

// 슬라이드의 높이 확인하여 부모의 높이로 지정하기
// 기본적으로 CSS에서 높이값을 지정할 수 있으나, 지정하지 않았음.

function calculateSlide(){

    // 부모의 height 값이 없기 때문에, 자식 내 contents 요소의 높이를
    // 자연스럽게 가지고 옴.
    // slides에 저장된 값이 배열형태로 들어오기 때문에 [] 사용
    // 반복문으로 돌려서 이 중에서 큰 값을 topHeight의 저장

    for (let i = 0; i < slideCount; i++){
        if(slides[i].offsetHeight > topHeight){
            topHeight = slides[i].offsetHeight;
        }
    }

    sliderContainer[0].style.height = `${topHeight}px`;
    sliderWrapper[0].style.height = `${topHeight}px`;
}

calculateSlide();

// 슬라이드가 있으면 가로로 배열하기;
// 각 slides의 left 값이 CSS에서 있을 경우는 필요가 없음.

for (let j = 0; j < slideCount; j++){
    slides[j].style.left = `${j * 100}%`
}

// 슬라이드 이동 함수
// idx는 slides의 배열의 index, 즉 번호를 가지고 옴.

function moveToSlide(idx) {

    sliderContainer[0].style.left = `${idx * -100}%`;    
    currentIndex = idx;

    // updateNav();
}

// 처음일 때는 Prev 버튼, 마지막일 때 Next 버튼이 사라지게 하는 함수

function updateNav () {
    (currentIndex === 0) ? navPrev.classList.add('disabled') : navPrev.classList.remove('disabled');
    (currentIndex === slideCount - 1) ? navNext.classList.add('disabled') : navNext.classList.remove('disabled');
}

// 처음에서 Prev 버튼을 눌렀을 시, 마지막일 때 Next 버튼을 누를 시 각각 처음과 끝으로 이동 (loop 개념)
// 기존 Prev, Next는 a 태그이며, 링크 속성이 있음. 이것을 없애기 위해
// preventDefault를 줘서 없애버림.

navNext.addEventListener('click', (event) => {
    event.preventDefault();
    // moveToSlide(currentIndex + 1);
    (currentIndex < slideCount - 1) ? moveToSlide(currentIndex + 1) : moveToSlide(0);
});
navPrev.addEventListener('click', (event) => {
    event.preventDefault();
    // moveToSlide(currentIndex - 1);
    (currentIndex !== 0) ? moveToSlide(currentIndex - 1) : moveToSlide(slideCount - 1);
});

// 열자마자 첫 번째 슬라이드 먼저 보이도록 하기

moveToSlide(0);