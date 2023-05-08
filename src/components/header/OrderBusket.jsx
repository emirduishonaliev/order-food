import React, { useContext } from "react";
import styled from "styled-components";
import { ReactComponent as BasketIcon } from "../../assets/icons/Group.svg";
import { cartContext } from "../../store/cart-context";

export const OrderBasket = ({ children, onToggle, className }) => {
  const context = useContext(cartContext);

  return (
    <Button onClick={onToggle} className={className}>
      <BasketIcon /> <OrderBasketTitile>{children}</OrderBasketTitile>{" "}
      <OrderBasketCount>{context.totalPrice}</OrderBasketCount>
    </Button>
  );
};

const Button = styled.button`
  width: 249px;
  height: 59px;
  background: #5a1f08;
  border-radius: 30px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: #4d1601;
  }

  border: none;
  cursor: pointer;
`;

const OrderBasketTitile = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin: 0 24px 0 13px;
`;

const OrderBasketCount = styled.span`
  background: #8a2b06;
  border-radius: 30px;
  padding: 4px 13px;
  color: white;
`;
