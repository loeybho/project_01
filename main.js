// toggle 메서드를 이용하여 navbar 메뉴 클릭시 없애기

const toggleBtn = document.querySelector(".navbar__toggleBtn");
const menu = document.querySelector(".navbar__menu");
const icons = document.querySelector(".navbar__icons");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});

// toggle을 활용하여 낮과 밤 효과 주기

const getTime = document.querySelector(".navbar__logo");
const getBg = document.querySelector(".navbar");

function changeTime() {
  getBg.classList.toggle("active");
}

getTime.addEventListener("click", changeTime);
