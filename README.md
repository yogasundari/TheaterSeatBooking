
Theater Seat Booking System
Overview
This JavaScript program allows users to book seats in a theater. It provides functions to book specific seats and randomly book available seats. The seat status is updated dynamically in the DOM, reflecting whether a seat is booked or available.

Functions
bookSeat(row, col)
Books a specific seat if it is available.

Parameters:
row: The row number of the seat (0-indexed).
col: The column number of the seat (0-indexed).
Behavior:
Checks if the seat at the given row and column is available ('0').
If available, marks it as booked ('X'), updates the seat status in the DOM, and displays an alert indicating the seat has been booked.
If the seat is already booked, displays an alert indicating the seat is already taken.
updateSeatStatus(row, col, status)
Updates the status of a seat in the DOM.

Parameters:
row: The row number of the seat (0-indexed).
col: The column number of the seat (0-indexed).
status: The new status of the seat (e.g., 'booked').
Behavior:
Updates the class of the seat element in the DOM to reflect its new status (either 'available' or 'booked').
bookRandomSeat()
Randomly books an available seat.

Behavior:
Collects all available seats in the theater.
If there are available seats, randomly selects one and books it.
If all seats are booked, displays an alert indicating no seats are available
