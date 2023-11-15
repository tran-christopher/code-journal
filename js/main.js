/* global data */

const $titleInput = document.querySelector('.title');
const $notesInput = document.querySelector('.notes');
const $photoInput = document.querySelector('.photo');
const $handlePhoto = document.querySelector('.image');

$photoInput.addEventListener('input', function (event) {
  $handlePhoto.src = event.target.value;
});

const $handleForm = document.querySelector('.form');

$handleForm.addEventListener('submit', function (event) {
  event.preventDefault();
  data.entries.unshift({
    title: $titleInput.value,
    url: $photoInput.value,
    notes: $notesInput.value,
    entryId: data.nextEntryId,
  });
  data.nextEntryId = data.nextEntryId + 1;
  $handlePhoto.src = 'images/placeholder-image-square.jpg';
  $handleForm.reset();
});
