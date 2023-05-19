import React from "react";
import styled from "styled-components";
import SummaryImage from "../../assets/images/summary-image.png";
import { MealSummaryCard } from "./MealSummaryCard";

export const MealSummary = React.memo(() => {
  return (
    <Container>
      <Image src={SummaryImage} alt="summary" />
      <MealSummaryCard />
    </Container>
  );
});

const Container = styled.div`
  width: 100%;
  margin-bottom: 135px;
`;

const Image = styled.img`
  width: 100%;
  height: 432px;
  margin-top: 101px;
`;
