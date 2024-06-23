import SeatCell from './SeatCell';
import { useSeats } from '../../hooks/useSeats';

const SeatReservationTable = () => {
  const { data: seats } = useSeats();

  const rows = 5;
  const cols = 10;

  if (seats) {
    const seatRows = Array.from({ length: rows }, (_, row) => (
      <div className="flex flex-row justify-between my-2 items-center">
        <p className="text-2xl lg:text-5xl p-2 w-12 text-center">{row + 1}</p>
        {Array.from({ length: cols }, (_, col) => (
          <div className="flex text-rose-900">
            <SeatCell
              key={seats.items[row * 10 + col].id}
              seat={seats.items[row * 10 + col]}
            />
          </div>
        ))}
      </div>
    ));
    return <div className="mx-5 p-5">{seatRows}</div>;
  } else {
    <div>Loading...</div>;
  }
};

export default SeatReservationTable;
