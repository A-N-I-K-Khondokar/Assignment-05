// heart-count-increase
const heartIcon=document.querySelectorAll(".heart-icon");
const heartCount=document.getElementById("heart-count");

heartIcon.forEach(function (btn) {
  btn.addEventListener("click", function () {
    let currentCount = parseInt(heartCount.textContent);
    heartCount.textContent = currentCount + 1;

    btn.classList.toggle("text-red-500");
  });
});
