import React from "react";
import styled from "styled-components";
import { DUMMY_MEALS } from "../../utils/constants";
import { MealItem } from "./meal-item/MealItem";

export const Meals = () => {
  return (
    <Container>
      {DUMMY_MEALS.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  background-color: #fff;
  width: 80%;
  margin: 0 auto;
  border-radius: 16px;
  padding: 40px;
`;
