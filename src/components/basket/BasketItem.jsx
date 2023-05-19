import React, { useContext } from "react";
import { Button } from "../UI/Button";
import styled from "styled-components";
import { cartContext } from "../../store/cart-context";
import { ReactComponent as PlusIcon } from "../../assets/icons/PlusIconBasket.svg";
import { ReactComponent as MinusIcon } from "../../assets/icons/MinusIcon.svg";

export const BasketItem = ({ title, price, amount, id }) => {
  const context = useContext(cartContext);

  return (
    <Container>
      <h4>{title}</h4>
      <Content>
        <InformationBlock>
          <p>${price}</p>
          <span>x {amount}</span>
        </InformationBlock>
        <ButtonBlock>
          <BoxButton>
            <Button
              borderRadius="squared"
              onClick={() => context.decrement(id, amount - 1)}
              variant="outlined"
              icon={<MinusIcon />}
            ></Button>
          </BoxButton>

          <BoxButton>
            <Button
              borderRadius="squared"
              onClick={() => context.increment(id, amount)}
              variant="outlined"
              icon={<PlusIcon />}
            ></Button>
          </BoxButton>
        </ButtonBlock>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 17px 0;
  border-bottom: 2px solid #d6d6d6;
  h4 {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 12px;
  }
`;

const Content = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonBlock = styled.aside`
  display: flex;
  gap: 15px;
`;

const InformationBlock = styled.article`
  display: flex;
  align-items: center;
  width: 155px;
  justify-content: space-between;
  p {
    font-weight: 600;
    font-size: 18px;
    color: #ad5502;
  }
  span {
    font-weight: 500;
    font-size: 16px;
    border: 1px solid #d6d6d6;
    border-radius: 6px;
    padding: 6px 14px;
  }
`;

const BoxButton = styled.div`
  &:hover svg {
    path {
      stroke: #fff;
    }
  }
`;
