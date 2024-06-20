import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from 'react';

type SeatAmountState = {
  rows: number;
  cols: number;
};

type SeatAmountAction =
  | { type: 'SET_ROWS'; payload: number }
  | { type: 'SET_COLS'; payload: number };

const SeatAmountContext = createContext<
  | {
      seatAmountState: SeatAmountState;
      seatAmountDispatch: React.Dispatch<SeatAmountAction>;
    }
  | undefined
>(undefined);

const seatAmountReducer = (
  state: SeatAmountState,
  action: SeatAmountAction
): SeatAmountState => {
  switch (action.type) {
    case 'SET_ROWS':
      return { rows: action.payload, cols: state.cols };
    case 'SET_COLS':
      return { rows: state.rows, cols: action.payload };
  }
};

export const SeatAmountProvider: FC<PropsWithChildren> = ({ children }) => {
  const [seatAmountState, seatAmountDispatch] = useReducer(seatAmountReducer, {
    rows: 10,
    cols: 15,
  });

  return (
    <SeatAmountContext.Provider value={{ seatAmountState, seatAmountDispatch }}>
      {children}
    </SeatAmountContext.Provider>
  );
};

export const useSeatAmount = () => {
  const context = useContext(SeatAmountContext);
  if (!context) {
    throw new Error('useSeatAmount must be used within SeatAmountProvider!');
  }
  return context;
};
