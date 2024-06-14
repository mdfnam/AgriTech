const latInput = document.querySelector('#lat');
const lonInput = document.querySelector('#lon');
const startDateInput = document.querySelector('#startDate');
const endDateInput = document.querySelector('#endDate');
const form = document.querySelector('form');
let lat, lon, startDate, endDate;

latInput.addEventListener('input', (e) => {
  lat = e.target.value;
});

lonInput.addEventListener('input', (e) => {
  lon = e.target.value;
})

startDateInput.addEventListener('input', (e) => {
  startDate = e.target.value;
})

endDateInput.addEventListener('input', (e) => {
  endDate = e.target.value;
})

form.addEventListener('submit', (e) => {
  e.preventDefault();
});