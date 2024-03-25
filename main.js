'use strict';
/*---------- Common elements---------- */

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

/*---------- Open modal function ---------- */

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

/*---------- Close modal function ---------- */

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

/*---------- Close modal element---------- */

btnCloseModal.addEventListener('click', closeModal);

/*---------- Overlay modal element---------- */

overlay.addEventListener('click', closeModal);

/*---------- Close modal window the "Escape button" using ---------- */

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
