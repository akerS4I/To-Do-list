const body = document.querySelector("body"),
  container = document.querySelector(".container"),
  goal = document.querySelectorAll(".goal"),
  btn = document.querySelector(".btn"),
  closeBtn = document.querySelector(".close-btn"),
  modal = document.querySelector(".modal"),
  createBtn = document.querySelector(".modal-btn"),
  input = document.querySelector("input"),
  deleteBtn = document.querySelectorAll(".delete"),
  check = document.querySelectorAll(".check");  

// goal.forEach((item) => {
//   item.addEventListener("click", () => {
//     item.classList.toggle("checked");
//   });
// });

// btn.addEventListener("click", () => {
//   btn.classList.toggle("checked");
// });

deleteBtn.forEach(item => {
  item.addEventListener("click", () => {
    let parent = item.parentElement
    parent.remove()
  })
});

check.forEach((item) => {
  item.addEventListener("click", () => {
    item.parentElement.classList.toggle("checked");
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  input.value = "";
});

btn.addEventListener("click", () => {
  modal.style.display = "flex";
});

createBtn.addEventListener("click", () => {
  modal.style.display = "none";
  createElement();
  input.value = "";
});

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
    input.value = "";
  }
};

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    modal.style.display = "none";
    createElement();
    input.value = "";
  }
});

const createElement = () => {
  const newGoal = document.createElement("div");
  newGoal.className = "goal";
  container.append(newGoal);
  const newGoalText = document.createElement("p");
  newGoalText.className = "text";
  newGoalText.innerText = input.value;
  newGoal.append(newGoalText);
  const newGoalCheck = document.createElement("div");
  newGoalCheck.className = "check";
  newGoal.append(newGoalCheck);
  const newGoalCheckImg = document.createElement("img");
  newGoalCheckImg.className = "checked__img";
  newGoalCheckImg.setAttribute("src", "./img/checked.png");
  newGoalCheck.append(newGoalCheckImg);
  const newDeleteBtn = document.createElement("img");
  newDeleteBtn.className = "delete";
  newDeleteBtn.setAttribute("src", "img/remove.png");
  newGoal.append(newDeleteBtn);
  newGoalCheck.addEventListener("click", () => {
    newGoalCheck.parentElement.classList.toggle("checked");
  });
  newDeleteBtn.addEventListener("click", () => {
    let parent = newDeleteBtn.parentElement
    parent.remove()
  })
};

