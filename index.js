const container = document.querySelector(".home");
const box = container.querySelector(".memo");

const { width: containerWidth, height: containerHeight } = container.getBoundingClientRect();
const { width: boxWidth, height: boxHeight } = box.getBoundingClientRect();
let isDragging = null;
let originLeft = null;
let originTop = null;
let originX = null;
let originY = null;

box.addEventListener("mousedown", (e) => {
    e.preventDefault();
    isDragging = true;
    originX = e.clientX;
    originY = e.clientY;
    originLeft = box.offsetLeft;
    originTop = box.offsetTop;
});

document.addEventListener("mouseup", (e) => {
    isDragging = false;
});

document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        const diffX = e.clientX - originX;
        const diffY = e.clientY - originY;
        const endOfXPoint = containerWidth - boxWidth;
        const endOfYPoint = containerHeight - boxHeight;
        box.style.left = `${Math.min(Math.max(0, originLeft + diffX), endOfXPoint)}px`;
        box.style.top = `${Math.min(Math.max(0, originTop + diffY), endOfYPoint)}px`;
    }
});

var Target = document.getElementById("clock");
function clock() {
    var time = new Date();

    var month = time.getMonth();
    var date = time.getDate();
    var day = time.getDay();
    var week = ["일", "월", "화", "수", "목", "금", "토"];

    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    Target.innerText =
        `${month + 1}월 ${date}일 (${week[day]}) ` +
        `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes
        }`;
}
clock();
setInterval(clock, 1000); // 1초마다 실행