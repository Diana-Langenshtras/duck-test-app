import "../styles/style.css";

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();

  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  hamb.classList.toggle("hamb__field-active");
  if ([...hamb.classList].includes("active"))
    document.getElementById("menu-icon").src =
      "/src/img/icons/menu-close-icon.svg";
  else
    document.getElementById("menu-icon").src = "/src/img/icons/menu-icon.svg";
  body.classList.toggle("noscroll");
}

const modal = document.querySelector("dialog");
const modalBox = document.getElementById("modal-box");
const showModalBtn = document.getElementById("show-modal-btn");
const closeModalBtn = document.getElementById("close-modal-btn");

let isModalOpen = false;

showModalBtn.addEventListener("click", (e) => {
  modal.showModal();
  isModalOpen = true;
  e.stopPropagation();
});

closeModalBtn.addEventListener("click", () => {
  modal.close();
  isModalOpen = false;
});

document.addEventListener("click", (e) => {
  if (isModalOpen && !modalBox.contains(e.target)) {
    modal.close();
  }
});
