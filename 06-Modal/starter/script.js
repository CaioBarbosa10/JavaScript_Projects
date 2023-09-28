'use strict';

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const bntCloseModal = document.querySelector(".close-modal");
const btnShowModal = document.querySelectorAll(".show-modal");
const closeModal = function () {
    overlay.classList.add("hidden");
    modal.classList.add("hidden");
}

const showModal = function () {

    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}
for (let i = 0; i < btnShowModal.length; i++) {
    btnShowModal[i].addEventListener('click', showModal);
}




bntCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener('keydown', function (e) {
    console.log(e.key);

    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }

});