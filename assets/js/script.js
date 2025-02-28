function toggleMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const body = document.body;

  mobileMenu.classList.toggle("active");

  if (mobileMenu.classList.contains("active")) {
    body.style.overflow = "hidden"; // Отключаем прокрутку страницы, когда меню открыто
  } else {
    body.style.overflow = ""; // Включаем прокрутку страницы, когда меню закрыто
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");
  const mobileMenu = document.getElementById("mobileMenu");
   mobileMenu.addEventListener("click", function (event) {
    if (event.target.tagName === "A") { // Если клик был по ссылке
      mobileMenu.classList.remove("active"); // Закрываем меню
    }
  });

  if (!faqItems.length) return;

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const toggle = item.querySelector(".faq-toggle");

    if (!question || !answer || !toggle) return;

    question.addEventListener("click", function () {
      item.classList.toggle("active");

      if (item.classList.contains("active")) {
        answer.style.maxHeight = answer.scrollHeight + "px";
        toggle.textContent = "-";
      } else {
        answer.style.maxHeight = "0px";
        toggle.textContent = "+";
      }
    });
  });
});
