import React from 'react';

const SeatReservationPanel = () => {
  const selectedSeats = [
    { row: 1, col: 2 },
    { row: 2, col: 3 },
    { row: 3, col: 3 },
    { row: 4, col: 5 },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between mx-8 p-5 gap-4">
      <div className="flex flex-col gap-2 items-baseline">
        <p className="text-4xl">Selected seats</p>
        <div className="grid grid-cols-2 gap-2">
          {selectedSeats.map((seat) => (
            <div className="border-2 p-2 rounded-2xl text-center">
              row: {seat.row} seat: {seat.col}
            </div>
          ))}
        </div>
        <p className="text-4xl">
          Total: <span className="text-red-500">80$</span>
        </p>
      </div>

      <div className="flex flex-col gap-2 items-start basis-1/3">
        <input
          className="border-2 p-3 w-full"
          type="email"
          placeholder="Enter your email"
        />
        <div className="flex flex-row gap-2">
          <input
            className="cursor-pointer"
            type="checkbox"
            name="agreement"
            id="agreement"
          />
          <label
            htmlFor="agreement"
            className="flex items-center cursor-pointer"
          >
            Do you agree with GDPR?
          </label>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-red-500 duration-500">
          Pay
        </button>
      </div>
    </div>
  );
};

export default SeatReservationPanel;
