/* global data */

// Issue #1
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

// Issue #2
function renderEntry(entry) {
  const $li = document.createElement('li');
  const $imageDiv = document.createElement('div');
  const $image = document.createElement('img');
  const $textDiv = document.createElement('div');
  const $h3 = document.createElement('h3');
  const $p = document.createElement('p');

  $li.setAttribute('class', 'row');
  $imageDiv.setAttribute('class', 'column-half');
  $image.setAttribute('src', $photoInput.value);
  $image.setAttribute('alt', 'Fix your link!');
  $textDiv.setAttribute('class', 'column-half');

  $h3.textContent = $titleInput.value;
  $p.textContent = $notesInput.value;

  $li.appendChild($imageDiv);
  $li.appendChild($textDiv);
  $imageDiv.appendChild($image);
  $textDiv.appendChild($h3);
  $textDiv.appendChild($p);

  return $li;
}

const $list = document.querySelector('.no-bullets');

document.addEventListener('DOMContentLoaded', function (event) {
  for (let i = 0; i < data.entries.length; i++) {
    const $newEntry = renderEntry(data.entries[i]);
    $list.appendChild($newEntry);
  }
});
