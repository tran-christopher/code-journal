/* exported data */

let data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
};

window.addEventListener('beforeunload', function (event) {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('data-model', dataJSON);
});

const getJSON = localStorage.getItem('data-model');
if (getJSON !== null) {
  data = JSON.parse(getJSON);
}
