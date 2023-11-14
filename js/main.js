// /* global data */

const $handlePhoto = document.querySelector('.image');
const $photoInput = document.querySelector('.photo');

$photoInput.addEventListener('input', function (event) {
  $handlePhoto.src = event.target.value;
  console.log('event.target:', event.target);
});
