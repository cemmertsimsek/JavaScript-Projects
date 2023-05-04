const ulDOM = document.querySelector("#list");
const inputDOM = document.querySelector("#task");
const inputAddDOM = document.querySelector("#liveToastBtn");

inputAddDOM.addEventListener("click", function () {
  if (inputDOM.value.trim()) {
    ulDOM.innerHTML += `<li class="d-flex justify-content-between align-items-center">
    <div>${inputDOM.value}</div>
    <div><i class="bi bi-x-lg"></i></div>
    </li>`;
    inputDOM.value = "";
  } else {
    alert("Lütfen bir görev giriniz");
  }

  const delBtn = document.querySelectorAll(".bi");
  delBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      this.parentElement.parentElement.remove();
    });
  });

  const liDOM = document.querySelectorAll("li");
  liDOM.forEach((li) => {
    li.addEventListener("click", function () {
      if (this.classList.contains("bg-success")) {
        this.classList.remove("bg-success");
      } else {
        this.classList.add("bg-success");
      }
    });
  });
});