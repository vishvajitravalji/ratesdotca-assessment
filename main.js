// Script to jump bottom of page
const btnScrollToBottom = document.querySelector("#btnScrollToBottom");
btnScrollToBottom.addEventListener("click", function () {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
});

// Script to top of the page
const btnScrollToTop = document.querySelector("#btnScrollToTop");
btnScrollToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
let usersSection = document.querySelector(".user-section");

// show list if user is logged in
function showMenuList() {
  if (usersSection.style.display === "none") {
    usersSection.style.display = "block";
  }
}

// reset list if user is clicked on close menu
function resetMenuList() {
  usersSection.style.display = "none";
  document.getElementById("mySidebar").style.display = "none";
}

// toggle list if user is clicked on login or close
function toggleMenuList() {
  if (usersSection.style.display === "block") {
    usersSection.style.display = "block";
  } else {
    usersSection.style.display = "none";
  }
  document.getElementById("mySidebar").style.display = "block";
}
