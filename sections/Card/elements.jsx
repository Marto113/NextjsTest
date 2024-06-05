import styled from "styled-components";
import { SectionBigHeading, SectionSubheading } from "~/components";

export const BackgroundDiv = styled.div`
	background-image: url('/img/background.png');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	width: 100%;
	height: 100%;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1920px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export const StyledTitle = styled(SectionBigHeading)`
  margin: 0;
  color: black;
  text-align: center;
`;

export const StyledDescription = styled(SectionSubheading)`
  margin: 0.5rem 0 0;
  text-align: center;
`;

export const StyledTextContainer = styled.div`
  color: black;
  width: 100%;
  margin: 2rem 0;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledImageAndCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  height: 60%;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const StyledImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin-bottom: 2rem;
  overflow: 0;

  @media (min-width: 1024px) {
    margin-right: 2rem;
    margin-bottom: 0;
  }
`;

export const StyledImageContainer = styled.div`
  max-width: 30rem;
  width: 50%;
  object-fit: cover;
`;

export const StyledCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

`;
