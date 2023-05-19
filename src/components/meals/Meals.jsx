import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MealItem } from "./meal-item/MealItem";
import { fetchRequest } from "../../lib/fetchAPI";

export const Meals = React.memo(() => {
  const [meals, setMeals] = useState();

  const getFoods = async () => {
    try {
      const response = await fetchRequest("/foods");
      setMeals(response);
    } catch (error) {
      new Error(error);
    }
  };

  useEffect(() => {
    getFoods();
  }, []);

  useEffect(() => {
    getFoods();
  }, []);

  return (
    <Container>
      {meals?.map((meal) => (
        <MealItem key={meal._id} meal={meal} />
      ))}
    </Container>
  );
});

const Container = styled.div`
  background-color: #fff;
  width: 80%;
  margin: 0 auto;
  border-radius: 16px;
  padding: 40px;
`;
