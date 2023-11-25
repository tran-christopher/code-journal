/* global data */

// Issue #1
const $titleInput = document.querySelector('.title');
const $notesInput = document.querySelector('.notes');
const $photoInput = document.querySelector('.photo');
const $handlePhoto = document.querySelector('.image');

const $handleForm = document.querySelector('.form');
const $list = document.querySelector('.no-bullets');
const $entryForm = document.querySelector('.entry-form');
const $entries = document.querySelector('.entries');

const $entryTitle = document.querySelector('.entry-title');

const $noEntries = document.querySelector('.noEntries');

const $modal = document.querySelector('.modal-container');
const $deleteEntry = document.querySelector('.delete-button');
const $darken = document.querySelector('.darken');

const $cancelButton = document.querySelector('.cancel');
const $confirmButton = document.querySelector('.confirm');

$photoInput.addEventListener('input', function (event) {
  $handlePhoto.src = event.target.value;
});

$handleForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const newObject = {
    title: $titleInput.value,
    url: $photoInput.value,
    notes: $notesInput.value,
    entryId: data.nextEntryId,
  };
  if (data.editing === null) {
    data.entries.unshift(newObject);
    const $newObject = renderEntry(newObject);
    $list.prepend($newObject);
    data.nextEntryId++;
    $handlePhoto.src = 'images/placeholder-image-square.jpg';
    $handleForm.reset();
    viewSwap('entries');
    toggleNoEntries();
  } else {
    newObject.entryId = data.editing.entryId;
    for (let i = 0; i < data.entries.length; i++) {
      if (newObject.entryId === data.entries[i].entryId) {
        data.entries[i] = newObject;
      }
    }
    const $newObject = renderEntry(newObject);
    const $originalLi = document.querySelector(
      `[data-entry-id="${data.editing.entryId}"]`
    );
    $originalLi.replaceWith($newObject);
    $entryTitle.textContent = 'New Entry';
    data.editing = null;
    viewSwap('entries');
    toggleNoEntries();
  }
});

// Issue #2
function renderEntry(entry) {
  const $li = document.createElement('li');
  const $imageDiv = document.createElement('div');
  const $image = document.createElement('img');
  const $textDiv = document.createElement('div');
  const $titleDiv = document.createElement('div');
  const $h3 = document.createElement('h3');
  const $icon = document.createElement('i');
  const $p = document.createElement('p');

  $li.setAttribute('class', 'row');
  $li.setAttribute('data-entry-id', entry.entryId);
  $imageDiv.setAttribute('class', 'column-half');
  $image.setAttribute('src', entry.url);
  $image.setAttribute('alt', 'Fix your link!');
  $textDiv.setAttribute('class', 'column-half');
  $titleDiv.setAttribute('class', 'row-no-wrap');
  $icon.setAttribute('class', 'no-decor align-self-center fa-solid fa-pencil');

  $h3.textContent = entry.title;
  $p.textContent = entry.notes;

  $li.appendChild($imageDiv);
  $li.appendChild($textDiv);
  $imageDiv.appendChild($image);
  $textDiv.appendChild($titleDiv);
  $titleDiv.appendChild($h3);
  $titleDiv.appendChild($icon);
  $textDiv.appendChild($p);

  return $li;
}

document.addEventListener('DOMContentLoaded', function (event) {
  for (let i = 0; i < data.entries.length; i++) {
    const $newEntry = renderEntry(data.entries[i]);
    $list.prepend($newEntry);
  }
  viewSwap(data.view);
  toggleNoEntries();
});

function toggleNoEntries() {
  if (data.entries.length !== 0) {
    $noEntries.classList.add('hidden');
  } else {
    $noEntries.classList.remove('hidden');
  }
}

function viewSwap(view) {
  if (view === 'entries') {
    $entries.classList.remove('hidden');
    $entryForm.classList.add('hidden');
    data.view = view;
  } else if (view === 'entry-form') {
    $entries.classList.add('hidden');
    $entryForm.classList.remove('hidden');
    data.view = view;
  }
}

const $entriesAnchor = document.querySelector('.entries-anchor');
$entriesAnchor.addEventListener('click', function (event) {
  const string = 'entries';
  viewSwap(string);
});
const $entryFormAnchor = document.querySelector('.entry-form-anchor');
$entryFormAnchor.addEventListener('click', function (event) {
  const string = 'entry-form';
  viewSwap(string);
});

$list.addEventListener('click', function (event) {
  $deleteEntry.classList.remove('hidden');
  const firstParent = event.target.parentElement.parentElement.parentElement;
  for (let i = 0; i < data.entries.length; i++) {
    if (
      data.entries[i].entryId.toString() ===
      firstParent.getAttribute('data-entry-id')
    ) {
      data.editing = data.entries[i];
    }
    $titleInput.value = data.editing.title;
    $photoInput.value = data.editing.url;
    $notesInput.value = data.editing.notes;
    $handlePhoto.src = data.editing.url;
    $entryTitle.textContent = 'Edit Entry';
  }
  viewSwap('entry-form');
});

$confirmButton.addEventListener('click', function (event) {});

$deleteEntry.addEventListener('click', function (event) {
  $modal.classList.remove('hidden');
  $darken.classList.add('overlay');
});

$cancelButton.addEventListener('click', function (event) {
  $modal.classList.add('hidden');
  $darken.classList.remove('overlay');
});
