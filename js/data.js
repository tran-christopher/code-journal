/* exported data */

const data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
};

let dataJSON = JSON.stringify(data);

window.addEventListener('beforeunload', function (event) {
  this.localStorage.setItem('data-model', dataJSON);
});

const getJSON = localStorage.getItem('data-model');

if (getJSON === dataJSON) {
  dataJSON = JSON.parse(getJSON);
}
