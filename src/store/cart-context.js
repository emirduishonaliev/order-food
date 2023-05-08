import { createContext, useReducer } from "react";

export const cartContext = createContext({
  items: [],
  totalAmount: 0,
});

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.length) {
        return [action.payload];
      }

      const isExist = state.find((item) => item.title === action.payload.title);
      if (!isExist) {
        return [...state, action.payload];
      }

      const updatedItem = state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            amount: item.amount + action.payload.amount,
          };
        }
        return item;
      });

      return updatedItem;

    case "INCREMENT":
      const updatedIncrement = state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            amount: item.amount + 1,
          };
        }
        return item;
      });
      return updatedIncrement;
    case "DECREMENT":
      const updatedDecrement = state.map((item) => {
        if (item.id === action.payload && item.amount !== 0) {
          return {
            ...item,
            amount: item.amount - 1,
          };
        }
        return item;
      });
      return updatedDecrement;
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cartStateReducer, dispatch] = useReducer(cartReducer, []);
  const totalPrice = cartStateReducer.reduce(
    (prev, current) => prev + current.price * current.amount,
    0
  );

  const amount = cartStateReducer.reduce(
    (prev, current) => prev + current.amount,
    0
  );

  const addItem = (data) => {
    dispatch({ type: "ADD_ITEM", payload: data });
  };

  const increment = (id) => {
    dispatch({ type: "INCREMENT", payload: id });
  };

  const decrement = (id) => {
    dispatch({ type: "DECREMENT", payload: id });
  };

  const cartValue = {
    items: cartStateReducer,
    addItem,
    totalAmount: totalPrice,
    totalPrice: amount,
    increment,
    decrement,
  };
  return (
    <cartContext.Provider value={cartValue}>{children}</cartContext.Provider>
  );
};
