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
const $list = document.querySelector('.no-bullets');
const $entryForm = document.querySelector('.entry-form');
const $entries = document.querySelector('.entries');

$handleForm.addEventListener('submit', function (event) {
  event.preventDefault();
  data.entries.unshift({
    title: $titleInput.value,
    url: $photoInput.value,
    notes: $notesInput.value,
    entryId: data.nextEntryId,
  });
  for (let i = 0; i < data.entries.length; i++) {
    const $newEntry = renderEntry(data.entries[i]);
    $list.prepend($newEntry);
    viewSwap('entries');
    // if ($list.children.length > 1) {
    //   toggleNoEntries()
    // };
    data.nextEntryId = data.nextEntryId + 1;
    $handlePhoto.src = 'images/placeholder-image-square.jpg';
    $handleForm.reset();
  }
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
  $image.setAttribute('src', entry.url);
  $image.setAttribute('alt', 'Fix your link!');
  $textDiv.setAttribute('class', 'column-half');

  $h3.textContent = entry.title;
  $p.textContent = entry.notes;

  $li.appendChild($imageDiv);
  $li.appendChild($textDiv);
  $imageDiv.appendChild($image);
  $textDiv.appendChild($h3);
  $textDiv.appendChild($p);

  return $li;
}

document.addEventListener('DOMContentLoaded', function (event) {});

// function toggleNoEntries () {
const $noEntries = document.querySelector('.noEntries');
if ($noEntries.classList.contains('hidden')) {
  $noEntries.className.remove('hidden');
} else {
  $noEntries.className.add('hidden');
}
// }

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
