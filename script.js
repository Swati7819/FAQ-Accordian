document.addEventListener("DOMContentLoaded", (event) => {
  const accordions = document.querySelectorAll(".accordian-part");

  accordions.forEach((accordion) => {
    const btn = accordion.querySelector(".btn");
    const ans = accordion.querySelector(".answer");

    // Initially hide all answers
    ans.classList.add("hidden");

    btn.addEventListener("click", () => {
      if (ans.classList.contains("hidden")) {
        ans.classList.remove("hidden");
        ans.classList.add("visible");
        btn.src = "images/icon-minus.svg";
      } else {
        ans.classList.remove("visible");
        ans.classList.add("hidden");
        btn.src = "images/icon-plus.svg";
      }
    });
  });
});
