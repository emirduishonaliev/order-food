import { createContext, useEffect, useReducer } from "react";
import { fetchRequest } from "../lib/fetchAPI";

export const cartContext = createContext({
  items: [],
  totalAmount: 0,
});

const cartReducer = (state, { type, payload }) => {
  if (type === "ADD_ITEM") {
    return (state = payload);
  }
  if (type === "GET_ITEM") {
    return (state = payload);
  }
  if (type === "INCREMENT") {
    return (state = payload);
  }
  if (type === "DECREMENT") {
    return (state = payload);
  }

  return state;
};

export const CartProvider = ({ children }) => {
  const [cartStateReducer, dispatch] = useReducer(cartReducer, []);

  const getBasket = async () => {
    try {
      const response = await fetchRequest(`/basket`);
      dispatch({ type: "GET_ITEM", payload: response.items });
    } catch (error) {
      new Error(error);
    }
  };

  const addItem = async (id, amount) => {
    try {
      const response = await fetchRequest(`/foods/${id}/addToBasket`, {
        method: "POST",
        body: { amount },
      });
      dispatch({ type: "ADD_ITEM", payload: response.items });
      getBasket();
    } catch (error) {
      new Error(error);
    }
  };

  const increment = async (id, amount) => {
    const response = await fetchRequest(`/basketItem/${id}/update`, {
      method: "PUT",
      body: { amount: amount + 1 },
    });

    dispatch({ type: "INCREMENT", payload: response.items });
  };

  const decrement = async (id, amount) => {
    if (amount !== 0) {
      const response = await fetchRequest(`/basketItem/${id}/update`, {
        method: "PUT",
        body: { amount: amount },
      });
      dispatch({ type: "DECREMENT", payload: response.items });
    } else {
      try {
        const response = await fetchRequest(`/basketItem/${id}/delete`, {
          method: "DELETE",
        });
        dispatch({ type: "DECREMENT", payload: response.items });
      } catch (error) {
        new Error(error);
      }
    }
  };

  const orderAmount = cartStateReducer?.reduce(
    (prev, current) => prev + current.amount,
    0
  );

  const getTotalAmount = () => {
    return cartStateReducer?.reduce(
      (sum, { price, amount }) => sum + amount * price,
      0
    );
  };

  useEffect(() => {
    getBasket();
  }, []);

  const cartValue = {
    items: cartStateReducer,
    addItem,
    totalAmount: orderAmount,
    getTotalAmount,
    increment,
    decrement,
  };
  return (
    <cartContext.Provider value={cartValue}>{children}</cartContext.Provider>
  );
};
