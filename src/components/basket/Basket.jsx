import React, { useContext } from "react";
import { Modal } from "../UI/Modal";
import { BasketItem } from "./BasketItem";
import { TotalAmount } from "./TotalAmount";
import styled from "styled-components";
import { cartContext } from "../../store/cart-context";

export const Basket = ({ onToggle }) => {
  const { getTotalAmount, items } = useContext(cartContext);
  return (
    <Modal onClick={onToggle}>
      <Content>
        {items?.length ? (
          <FixedWithContainer>
            {items.map((item) => {
              return (
                <BasketItem
                  key={item._id}
                  title={item.title}
                  price={item.price}
                  amount={item.amount}
                  id={item._id}
                />
              );
            })}
          </FixedWithContainer>
        ) : null}

        <TotalAmount totalPrice={getTotalAmount()} onClose={onToggle} />
      </Content>
    </Modal>
  );
};

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem;
`;

const FixedWithContainer = styled.div`
  max-height: 240px;
  overflow-y: auto;
`;
