import React from "react";
import styled from "styled-components";
import { HomeData } from "../data";
import HomeCards from "./HomeCards";

const HomesLayout = styled.section`
  grid-column: center-start / center-end;
  margin: 15rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 7rem;
`;

const Homes = () => {
  return (
    <HomesLayout>
      {HomeData.map((res) => {
        return (
          <HomeCards
            key={res.id}
            title={res.title}
            p1={res.p1}
            p2={res.p2}
            p3={res.p3}
            p4={res.p4}
            contact={res.contact}
            image={res.image}
          />
        );
      })}
    </HomesLayout>
  );
};

export default Homes;
