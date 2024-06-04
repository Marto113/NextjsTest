import styled from 'styled-components';
import { SectionHeading, SectionParagraph } from '~/components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 25%;
  height: 10%;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const CardImage = styled.div`
  position: relative;
  width: 30%;
  background-color: #f0f0f0;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%; /* Takes 70% of the container's width */
  padding: 16px;
`;

export const CardTitle = styled((props) => <SectionHeading {...props} />)`
  margin: 0;
  color: black;
`;

export const CardDescription = styled((props) => <SectionParagraph {...props} />)`
  margin: 1.563rem 0 0;
`;
