const theaterSeats=[
    ['X','0','X'],
    ['0','X','0'],
    ['X','0','X']

];
function bookSeat(row, col) {
if (theaterSeats[row][col] === '0') {
theaterSeats[row][col] = 'X';
updateSeatStatus(row, col, 'booked');
alert(`Seat ${String.fromCharCode(65 + row)}${col + 1} is booked.`);
} else {
alert(`Seat ${String.fromCharCode(65 + row)}${col + 1} is already taken.`);
}
}

function updateSeatStatus(row, col, status) {
const seats = document.getElementsByClassName('seat');
const index = row * theaterSeats[0].length + col;
seats[index].classList.remove('available', 'booked');
seats[index].classList.add(status);
}

function bookRandomSeat() {
const availableSeats = [];

for (let row = 0; row < theaterSeats.length; row++) {
for (let col = 0; col < theaterSeats[row].length; col++) {
    if (theaterSeats[row][col] === '0') {
        availableSeats.push({ row, col });
    }
}
}

if (availableSeats.length > 0) {
const randomIndex = Math.floor(Math.random() * availableSeats.length);
const { row, col } = availableSeats[randomIndex];
bookSeat(row, col);
} else {
alert('All seats are already booked.');
}
}
